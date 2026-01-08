import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FaArrowUp } from 'react-icons/fa';
import { trackButtonClick } from '../utils/analytics';

const BackToTopButton = styled.button<{ $isVisible: boolean }>`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  color: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.25rem;
  transition: all 0.3s ease;
  z-index: 1000;
  opacity: ${props => props.$isVisible ? 1 : 0};
  visibility: ${props => props.$isVisible ? 'visible' : 'hidden'};
  transform: ${props => props.$isVisible ? 'translateY(0)' : 'translateY(20px)'};
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);

  &:hover {
    background: rgba(255, 255, 255, 0.3);
    transform: translateY(-5px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
  }

  &:active {
    transform: translateY(-3px);
  }

  @media (max-width: 768px) {
    bottom: 1.5rem;
    right: 1.5rem;
    width: 45px;
    height: 45px;
    font-size: 1.1rem;
  }
`;

const BackToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button when user scrolls down 300px
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    trackButtonClick('Back to Top');
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <BackToTopButton
      $isVisible={isVisible}
      onClick={scrollToTop}
      aria-label="Back to top"
    >
      <FaArrowUp />
    </BackToTopButton>
  );
};

export default BackToTop;

