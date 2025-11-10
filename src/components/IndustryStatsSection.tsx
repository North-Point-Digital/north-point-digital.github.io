import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaChartLine, FaExclamationTriangle, FaAws } from 'react-icons/fa';

const Section = styled.section`
  padding: 5rem 2rem;
  background: rgba(255, 255, 255, 0.05);
  position: relative;
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

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`;

const StatCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 20px;
  padding: 2.5rem;
  text-align: center;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    background: rgba(255, 255, 255, 0.15);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  }
  
  svg {
    font-size: 3rem;
    color: white;
    margin-bottom: 1.5rem;
    opacity: 0.9;
  }
`;

const StatNumber = styled.div`
  font-size: 3.5rem;
  font-weight: 700;
  color: white;
  margin-bottom: 0.5rem;
  line-height: 1;
`;

const StatLabel = styled.div`
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 1rem;
  font-weight: 600;
`;

const StatDescription = styled.p`
  font-size: 0.95rem;
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.6;
`;

const Source = styled.div`
  text-align: center;
  margin-top: 3rem;
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.6);
  font-style: italic;
`;

const IndustryStatsSection: React.FC = () => {
  const stats = [
    {
      icon: <FaChartLine />,
      number: "78%",
      label: "of companies overspend on AWS",
      description: "Due to misconfiguration, over-provisioning, and lack of optimization strategies"
    },
    {
      icon: <FaExclamationTriangle />,
      number: "80%",
      label: "of data breaches",
      description: "Are caused by infrastructure misconfigurations—preventable with proper security reviews"
    },
    {
      icon: <FaAws />,
      number: "30-40%",
      label: "average cost savings identified",
      description: "Through AWS Well-Architected Reviews by certified experts"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <Section>
      <Container>
        <SectionHeader>
          <Title
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            The Cloud Cost Crisis
          </Title>
          <Subtitle
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Industry data reveals massive waste and security risks in AWS infrastructure
          </Subtitle>
        </SectionHeader>
        
        <StatsGrid
          as={motion.div}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {stats.map((stat, index) => (
            <StatCard
              key={index}
              variants={itemVariants}
            >
              {stat.icon}
              <StatNumber>{stat.number}</StatNumber>
              <StatLabel>{stat.label}</StatLabel>
              <StatDescription>{stat.description}</StatDescription>
            </StatCard>
          ))}
        </StatsGrid>
        
        <Source>
          Sources: AWS, Gartner, IBM Security Reports
        </Source>
      </Container>
    </Section>
  );
};

export default IndustryStatsSection;
