import React, { useState, useEffect, useRef } from 'react';

interface CounterWidgetProps {
  endValue: number;
  duration?: number;
  suffix?: string;
  text: string;
  delay?: number;
}

const CounterWidget: React.FC<CounterWidgetProps> = ({
  endValue,
  duration = 2,
  suffix = "",
  text,
  delay = 0
}) => {
  const [count, setCount] = useState(0);
  const counterRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);
  const isAnimatingRef = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isAnimatingRef.current) {
          setCount(0);
          isAnimatingRef.current = true;
          setTimeout(() => {
            animateCounter();
          }, delay * 1000);
        } else if (!entry.isIntersecting && isAnimatingRef.current) {
          setCount(0);
          isAnimatingRef.current = false;
          if (animationRef.current) {
            cancelAnimationFrame(animationRef.current);
            animationRef.current = null;
          }
        }
      },
      { threshold: 0.5 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      observer.disconnect();
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [delay]);

  const animateCounter = () => {
    const startTime = Date.now();

    const updateCounter = () => {
      const now = Date.now();
      const progress = Math.min((now - startTime) / (duration * 1000), 1);
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentCount = Math.floor(easeOutQuart * endValue);

      setCount(currentCount);

      if (progress < 1 && isAnimatingRef.current) {
        animationRef.current = requestAnimationFrame(updateCounter);
      } else {
        isAnimatingRef.current = false;
      }
    };

    animationRef.current = requestAnimationFrame(updateCounter);
  };

  return (
    <div
      ref={counterRef}
      className="flex flex-col items-center justify-center text-center p-6 bg-white/10 backdrop-blur-[10px] border border-white/20 rounded-[15px] text-white min-h-[120px]"
    >
      <div className="text-[clamp(2rem,4vw,3rem)] font-bold text-white mb-1 font-[Inter,-apple-system,BlinkMacSystemFont,sans-serif]">
        {count}{suffix}
      </div>
      <div className="text-[clamp(0.9rem,1.5vw,1rem)] text-white/90 font-medium">
        {text}
      </div>
    </div>
  );
};

export default CounterWidget;
