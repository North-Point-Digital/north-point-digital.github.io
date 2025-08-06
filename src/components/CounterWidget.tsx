import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const CounterContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 1.5rem;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 15px;
  color: white;
  min-height: 120px;
`;

const CounterNumber = styled.div`
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 700;
  color: white;
  margin-bottom: 0.3rem;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
`;

const CounterText = styled.div`
  font-size: clamp(0.9rem, 1.5vw, 1rem);
  color: rgba(255, 255, 255, 0.9);
  font-weight: 500;
`;

interface CounterWidgetProps {
  endValue: number;
  duration?: number; // Animation duration in seconds
  suffix?: string; // Text to append after the number (e.g., "+", "%")
  text: string; // The descriptive text below the counter
  delay?: number; // Delay before starting the animation
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
          // Reset counter and start animation
          setCount(0);
          isAnimatingRef.current = true;
          setTimeout(() => {
            animateCounter();
          }, delay * 1000);
        } else if (!entry.isIntersecting && isAnimatingRef.current) {
          // Reset when going out of view
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
      
      // Use easing function for smoother animation
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
    <CounterContainer
      ref={counterRef}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
    >
      <CounterNumber>
        {count}{suffix}
      </CounterNumber>
      <CounterText>{text}</CounterText>
    </CounterContainer>
  );
};

export default CounterWidget; 