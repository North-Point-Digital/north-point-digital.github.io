import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaSearch, FaTools, FaFileAlt } from 'react-icons/fa';

const Section = styled.section<{ $framed?: boolean }>`
  padding: 5rem 2rem;
  position: relative;
  background: ${({ $framed }) => $framed ? 'rgba(255, 255, 255, 0.08)' : 'rgba(255, 255, 255, 0.05)'};
  border: ${({ $framed }) => $framed ? '1px solid rgba(255, 255, 255, 0.2)' : 'none'};
  border-radius: ${({ $framed }) => $framed ? '20px' : '0'};
  backdrop-filter: ${({ $framed }) => $framed ? 'blur(14px)' : 'none'};
  overflow: ${({ $framed }) => $framed ? 'hidden' : 'visible'};
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 4rem;
`;

const Title = styled(motion.h2)`
  font-size: clamp(2rem, 4vw, 3rem);
  color: white;
  margin-bottom: 1rem;
`;

const Subtitle = styled(motion.p)`
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.8);
  max-width: 700px;
  margin: 0 auto;
`;

const Timeline = styled.div`
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    left: 50%;
    top: 0;
    bottom: 0;
    width: 2px;
    background: linear-gradient(180deg, rgba(255, 255, 255, 0.65) 0%, rgba(255, 255, 255, 0.3) 100%);
    transform: translateX(-50%);
    
    @media (max-width: 768px) {
      left: 20px;
    }
  }
`;

const TimelineItem = styled(motion.div)<{ $align: 'left' | 'right' }>`
  display: flex;
  justify-content: ${props => props.$align === 'left' ? 'flex-start' : 'flex-end'};
  padding: 2rem 0;
  position: relative;
  
  @media (max-width: 768px) {
    justify-content: flex-start;
    padding-left: 60px;
  }
`;

const TimelineContent = styled.div<{ $align: 'left' | 'right' }>`
  background: rgba(255, 255, 255, 0.18);
  backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.35);
  box-shadow: 0 20px 40px rgba(12, 18, 46, 0.25);
  border-radius: 22px;
  padding: 2.25rem;
  width: 45%;
  position: relative;
  
  @media (max-width: 768px) {
    width: 100%;
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    ${props => props.$align === 'left' ? 'right: -12px' : 'left: -12px'};
    transform: translateY(-50%);
    width: 0;
    height: 0;
    border-style: solid;
    border-width: ${props => props.$align === 'left' ? '10px 0 10px 12px' : '10px 12px 10px 0'};
    border-color: ${props => props.$align === 'left' 
      ? 'transparent transparent transparent rgba(255, 255, 255, 0.1)' 
      : 'transparent rgba(255, 255, 255, 0.1) transparent transparent'};
    
    @media (max-width: 768px) {
      left: -12px;
      border-width: 10px 12px 10px 0;
      border-color: transparent rgba(255, 255, 255, 0.1) transparent transparent;
    }
  }
`;

const TimelineIcon = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 60px;
  height: 60px;
  background: rgba(255, 255, 255, 0.28);
  backdrop-filter: blur(16px);
  border: 2px solid rgba(255, 255, 255, 0.55);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
  
  svg {
    font-size: 1.5rem;
    color: white;
  }
  
  @media (max-width: 768px) {
    left: 20px;
  }
`;

const Week = styled.div`
  font-size: 0.9rem;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.8);
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 0.5rem;
`;

const StepTitle = styled.h3`
  font-size: 1.5rem;
  color: white;
  margin-bottom: 1rem;
`;

const StepList = styled.ul`
  list-style: none;
  padding: 0;
  
  li {
    color: rgba(255, 255, 255, 0.95);
    padding: 0.5rem 0;
    display: flex;
    align-items: flex-start;
    gap: 0.75rem;
    font-size: 1rem;
    line-height: 1.6;
    
    &:before {
      content: "✓";
      color: rgba(255, 255, 255, 0.9);
      font-weight: bold;
      flex-shrink: 0;
      margin-top: 0.1rem;
    }
  }
`;

interface ProcessTimelineSectionProps {
  framed?: boolean;
}

const ProcessTimelineSection: React.FC<ProcessTimelineSectionProps> = ({ framed }) => {
  const timelineSteps = [
    {
      icon: <FaSearch />,
      week: "Week 1",
      title: "Discovery & Analysis",
      items: [
        "Comprehensive account audit & cost analysis",
        "Security vulnerability assessment",
        "Architecture review",
        "Initial findings report with quick wins"
      ],
      align: 'left' as const
    },
    {
      icon: <FaTools />,
      week: "Week 2",
      title: "Implementation & Optimisation",
      items: [
        "Remediation of critical security issues",
        "Cost optimisation implementation",
        "Budget alerts & tagging setup",
        "Performance tuning"
      ],
      align: 'right' as const
    },
    {
      icon: <FaFileAlt />,
      week: "Delivery",
      title: "Final Report & Roadmap",
      items: [
        "Comprehensive Well-Architected report",
        "Long-term optimisation roadmap",
        "Knowledge transfer session",
        "30-day support included"
      ],
      align: 'left' as const
    }
  ];

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <Section $framed={framed}>
      <Container>
        <SectionHeader>
          <Title
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            How It Works
          </Title>
          <Subtitle
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Complete Well-Architected Review in just 2 weeks
          </Subtitle>
        </SectionHeader>

        <Timeline>
          {timelineSteps.map((step, index) => (
            <TimelineItem
              key={index}
              $align={step.align}
              as={motion.div}
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <TimelineIcon>
                {step.icon}
              </TimelineIcon>
              <TimelineContent $align={step.align}>
                <Week>{step.week}</Week>
                <StepTitle>{step.title}</StepTitle>
                <StepList>
                  {step.items.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </StepList>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </Container>
    </Section>
  );
};

export default ProcessTimelineSection;
