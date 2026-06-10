import { useState, useEffect } from 'react';
import { trackButtonClick } from '../utils/analytics';

const ArrowUpIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor" width="1em" height="1em">
    <path d="M34.9 289.5l-22.2-22.2c-9.4-9.4-9.4-24.6 0-33.9L207 39c9.4-9.4 24.6-9.4 33.9 0l194.3 194.3c9.4 9.4 9.4 24.6 0 33.9L413 289.4c-9.5 9.5-25 9.3-34.3-.4L264 168.6V456c0 13.3-10.7 24-24 24h-32c-13.3 0-24-10.7-24-24V168.6L69.2 289.1c-9.3 9.8-24.8 10-34.3.4z" />
  </svg>
);

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.pageYOffset > 300);
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    trackButtonClick('Back to Top', 'unknown');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="Back to top"
      className={`fixed bottom-8 right-8 w-[50px] h-[50px] rounded-full bg-white/20 backdrop-blur-[10px] border border-white/30 text-white cursor-pointer flex items-center justify-center text-xl transition-all duration-300 z-[1000] shadow-lg max-md:bottom-6 max-md:right-6 max-md:w-[45px] max-md:h-[45px] max-md:text-lg hover:bg-white/30 hover:-translate-y-[5px] hover:shadow-xl ${
        isVisible ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible translate-y-5'
      }`}
    >
      <ArrowUpIcon />
    </button>
  );
}
