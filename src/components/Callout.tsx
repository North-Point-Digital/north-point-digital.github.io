import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaInfoCircle, FaLightbulb, FaExclamationTriangle, FaCheckCircle } from 'react-icons/fa';

export type CalloutType = 'info' | 'tip' | 'warning' | 'success';

interface CalloutProps {
  type?: CalloutType;
  title?: string;
  children: React.ReactNode;
}

const getIcon = (type: CalloutType) => {
  switch (type) {
    case 'info':
      return <FaInfoCircle />;
    case 'tip':
      return <FaLightbulb />;
    case 'warning':
      return <FaExclamationTriangle />;
    case 'success':
      return <FaCheckCircle />;
    default:
      return <FaInfoCircle />;
  }
};

const getColors = (type: CalloutType) => {
  switch (type) {
    case 'info':
      return {
        bg: 'rgba(56, 189, 248, 0.15)',
        border: 'rgba(56, 189, 248, 0.4)',
        icon: '#3b82f6',
        text: 'rgba(255, 255, 255, 0.95)',
      };
    case 'tip':
      return {
        bg: 'rgba(251, 191, 36, 0.15)',
        border: 'rgba(251, 191, 36, 0.4)',
        icon: '#f59e0b',
        text: 'rgba(255, 255, 255, 0.95)',
      };
    case 'warning':
      return {
        bg: 'rgba(239, 68, 68, 0.15)',
        border: 'rgba(239, 68, 68, 0.4)',
        icon: '#ef4444',
        text: 'rgba(255, 255, 255, 0.95)',
      };
    case 'success':
      return {
        bg: 'rgba(34, 197, 94, 0.15)',
        border: 'rgba(34, 197, 94, 0.4)',
        icon: '#22c55e',
        text: 'rgba(255, 255, 255, 0.95)',
      };
    default:
      return {
        bg: 'rgba(56, 189, 248, 0.15)',
        border: 'rgba(56, 189, 248, 0.4)',
        icon: '#3b82f6',
        text: 'rgba(255, 255, 255, 0.95)',
      };
  }
};

const CalloutContainer = styled(motion.div)<{ colors: ReturnType<typeof getColors> }>`
  background: ${props => props.colors.bg};
  border-left: 4px solid ${props => props.colors.border};
  border-radius: 12px;
  padding: 1.5rem;
  margin: 2rem 0;
  display: flex;
  gap: 1rem;
  align-items: flex-start;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`;

const IconContainer = styled.div<{ iconColor: string }>`
  flex-shrink: 0;
  margin-top: 0.125rem;
  
  svg {
    color: ${props => props.iconColor};
    font-size: 1.5rem;
  }
`;

const ContentContainer = styled.div<{ textColor: string }>`
  flex: 1;
  color: ${props => props.textColor};
  
  h4 {
    font-size: 1.1rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
    color: ${props => props.textColor};
  }
  
  p {
    margin-bottom: 0.75rem;
    line-height: 1.7;
    
    &:last-child {
      margin-bottom: 0;
    }
  }
  
  ul, ol {
    margin-left: 1.25rem;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
  }
  
  li {
    margin-bottom: 0.4rem;
    line-height: 1.7;
  }
`;

const Callout: React.FC<CalloutProps> = ({ type = 'info', title, children }) => {
  const colors = getColors(type);
  const icon = getIcon(type);

  return (
    <CalloutContainer
      colors={colors}
      initial={{ opacity: 0, x: -10 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true }}
    >
      <IconContainer iconColor={colors.icon}>{icon}</IconContainer>
      <ContentContainer textColor={colors.text}>
        {title && <h4>{title}</h4>}
        {children}
      </ContentContainer>
    </CalloutContainer>
  );
};

export default Callout;
