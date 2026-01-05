import { useEffect, useRef } from 'react';
import { trackScrollDepth, trackSectionView } from '../utils/analytics';

// Track scroll depth at 25%, 50%, 75%, and 100%
const SCROLL_DEPTHS = [25, 50, 75, 100];
const TRACKED_DEPTHS = new Set<number>();

export const useScrollTracking = () => {

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const scrollPercentage = Math.round(
        (scrollTop / (documentHeight - windowHeight)) * 100
      );

      // Track scroll depth milestones
      SCROLL_DEPTHS.forEach((depth) => {
        if (scrollPercentage >= depth && !TRACKED_DEPTHS.has(depth)) {
          TRACKED_DEPTHS.add(depth);
          trackScrollDepth(depth);
        }
      });
    };

    // Throttle scroll events
    let ticking = false;
    const throttledHandleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', throttledHandleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', throttledHandleScroll);
    };
  }, []);
};

// Hook to track when a section comes into view
export const useSectionViewTracking = (sectionName: string, enabled: boolean = true) => {
  const hasTracked = useRef(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!enabled || hasTracked.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasTracked.current) {
            hasTracked.current = true;
            trackSectionView(sectionName);
          }
        });
      },
      {
        threshold: 0.3, // Trigger when 30% of section is visible
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [sectionName, enabled]);

  return sectionRef;
};

