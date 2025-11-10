import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaClipboardCheck, FaCloud, FaShieldAlt, FaRobot, FaDatabase, FaChartLine, FaExchangeAlt } from 'react-icons/fa';
import { trackServiceClick } from '../utils/analytics';

const Section = styled.section`
  padding: 5rem 2rem;
  position: relative;
  overflow: hidden;
`;

const Container = styled.div`
  max-width: 1400px;
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
  max-width: 600px;
  margin: 0 auto;
`;

const BentoGrid = styled.div`
  display: grid;
  gap: 1.5rem;
  grid-template-columns: 1fr;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(2, 250px);
  }
`;

const ServiceCard = styled(motion.div)<{ $large?: boolean; as?: any }>`
  background: rgba(255, 255, 255, 0.1);
  height: 100%;
  box-sizing: border-box;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 20px;
  padding: 2rem 2rem 3rem;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.3s ease;
  
  ${props => props.$large && `
    @media (min-width: 1024px) {
      grid-column: span 2;
    }
  `}
  
  &:hover {
    background: rgba(255, 255, 255, 0.15);
    transform: translateY(-5px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
    
    svg {
      transform: scale(1.1);
    }
  }
  
  svg {
    font-size: 1.5rem;
    color: white;
    margin-right: 0.5rem;
    transition: transform 0.3s ease;
    display: inline-block;
  }
  
  h3 {
    color: white;
    font-size: 1.5rem;
    margin-bottom: 1rem;
    display: inline-block;
    vertical-align: middle;
  }
  
  p {
    color: rgba(255, 255, 255, 0.8);
    line-height: 1.6;
  }
  
  ul {
    list-style: none;
    margin-top: 1rem;
    
    li {
      color: rgba(255, 255, 255, 0.7);
      padding: 0.25rem 0;
      
      &:before {
        content: "→";
        margin-right: 0.5rem;
        color: white;
      }
    }
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  display: block;
  height: 100%;
`;

const FloatingShape = styled(motion.div)`
  position: absolute;
  width: 200px;
  height: 200px;
  background: radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, transparent 70%);
  border-radius: 50%;
  filter: blur(40px);
  z-index: -1;
`;

const ServicesSection: React.FC = () => {
  const services = [
    {
      icon: <FaClipboardCheck />,
      title: 'Security & Cost Optimization Blueprint',
      description: 'Comprehensive Well-Architected Review to slash costs and strengthen security.',
      features: ['Target 25%+ Cost Reduction', 'Security Hardening', 'Performance Optimization', 'No Upfront Cost'],
      large: true,
      link: '/aws-profitability-resilience-blueprint',
    },
    {
      icon: <FaRobot />,
      title: 'North Point AI Launchpad',
      description: 'Working AI Proof of Concept with full costings and production roadmap in 2 weeks.',
      features: ['Custom PoC Development', 'Production Cost Analysis', 'Implementation Roadmap', 'Fixed-Fee Engagement'],
      large: true,
      link: '/ai-launchpad',
    },
    {
      icon: <FaExchangeAlt />,
      title: 'AWS Migrations',
      description: 'Seamless cloud migration using AWS MAP framework.',
      features: ['Assessment & Planning', 'Migration Execution', 'Infrastructure Modernization'],
    },
    {
      icon: <FaCloud />,
      title: 'Cloud Architecture',
      description: 'Build scalable, resilient AWS infrastructure.',
      features: ['DevOps', 'Solutions Architecture', 'SRE'],
    },
    {
      icon: <FaDatabase />,
      title: 'Data & Analytics',
      description: 'Leverage AWS for powerful data insights.',
      features: ['AI', 'Business Intelligence', 'Automation'],
    },
    {
      icon: <FaShieldAlt />,
      title: 'Security & Compliance',
      description: 'Ensure security with AWS best practices.',
      features: ['Audits', 'Compliance'],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <Section id="services">
      <FloatingShape
        animate={{
          x: [0, 50, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'linear',
        }}
        style={{ top: '20%', right: '-5%' }}
      />
      
      <Container>
        <SectionHeader>
          <Title
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Our Services
          </Title>
          <Subtitle
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Specialist AWS consultancy delivering measurable results
          </Subtitle>
        </SectionHeader>
        
        <BentoGrid
          as={motion.div}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service, index) => {
            const handleClick = () => {
              trackServiceClick(service.title);
            };

            const cardContent = (
              <>
                {service.icon}
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <ul>
                  {service.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
              </>
            );

            return service.link ? (
              <ServiceCard
                key={index}
                $large={service.large}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <StyledLink to={service.link} onClick={handleClick}>
                  {cardContent}
                </StyledLink>
              </ServiceCard>
            ) : (
              <ServiceCard
                key={index}
                $large={service.large}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                {cardContent}
              </ServiceCard>
            );
          })}
        </BentoGrid>
      </Container>
    </Section>
  );
};

export default ServicesSection;

