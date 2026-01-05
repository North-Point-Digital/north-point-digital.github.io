import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const CTAContainer = styled(motion.div)`
  display: flex;
  justify-content: center;
  margin-top: 3rem;
`;

const CTAButton = styled.a`
  display: inline-block;
  padding: 1rem 2.5rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  text-decoration: none;
  border-radius: 50px;
  font-size: 1.1rem;
  font-weight: 600;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(102, 126, 234, 0.6);
    background: linear-gradient(135deg, #764ba2 0%, #667eea 100%);
  }
  
  &:active {
    transform: translateY(0);
  }
`;

interface CTAButtonProps {
  delay?: number;
}

const CalendlyCTA: React.FC<CTAButtonProps> = ({ delay = 0.5 }) => {
  return (
    <CTAContainer
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
    >
      <CTAButton
        href="https://calendly.com/david-northpointdigital/north-point-digital-initial-call"
        target="_blank"
        rel="noopener noreferrer"
      >
        Schedule a Free Consultation
      </CTAButton>
    </CTAContainer>
  );
};

export default CalendlyCTA;

