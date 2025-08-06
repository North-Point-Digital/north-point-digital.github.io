import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaArrowRight, FaCode, FaCloud, FaShieldAlt } from 'react-icons/fa';
import { trackButtonClick } from '../utils/analytics';

const HeroContainer = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  position: relative;
  overflow: hidden;
  background-image: url('/hero-bg.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: 1;
  }
`;

const HeroContent = styled(motion.div)`
  max-width: 1200px;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  align-items: center;
  z-index: 2;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const TextContent = styled.div`
  text-align: center;

  @media (min-width: 768px) {
    text-align: left;
  }
`;

const Title = styled(motion.h1)`
  color: white;
  margin-bottom: 1.5rem;
  font-size: clamp(2.5rem, 5vw, 4rem);
  line-height: 1.1;
`;

const Subtitle = styled(motion.p)`
  color: rgba(255, 255, 255, 0.9);
  font-size: clamp(1.1rem, 2vw, 1.3rem);
  margin-bottom: 2rem;
  line-height: 1.6;
`;

const CTAContainer = styled(motion.div)`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: center;

  @media (min-width: 768px) {
    justify-content: flex-start;
  }
`;

const PrimaryButton = styled(motion.button)`
  padding: 1rem 2rem;
  background: white;
  color: #667eea;
  border: none;
  border-radius: 50px;
  font-weight: 600;
  font-size: 1.1rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  }
`;

const SecondaryButton = styled(motion.button)`
  padding: 1rem 2rem;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  color: white;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 50px;
  font-weight: 600;
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: translateY(-2px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  }
`;

const FeatureCards = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 1rem;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const FeatureCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 20px;
  padding: 2rem;
  text-align: center;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    background: rgba(255, 255, 255, 0.15);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  }

  svg {
    font-size: 2.5rem;
    color: white;
    margin-bottom: 1rem;
  }

  h3 {
    color: white;
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
  }

  p {
    color: rgba(255, 255, 255, 0.8);
    font-size: 0.9rem;
  }
`;

const FloatingElement = styled(motion.div)`
  position: absolute;
  width: 300px;
  height: 300px;
  background: radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, transparent 70%);
  border-radius: 50%;
  filter: blur(40px);
  z-index: 1;
`;

const HeroSection: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' as const },
    },
  };

  const features = [
    {
      Icon: FaCode,
      title: 'Free Assessments',
      description: 'AWS-funded Well-Architected Reviews & AI PoCs',
    },
    {
      Icon: FaCloud,
      title: 'AWS Migration',
      description: 'Seamless cloud migration with AWS MAP framework',
    },
    {
      Icon: FaShieldAlt,
      title: 'AWS Certified',
      description: 'Specialist AWS consultancy & best practices',
    },
  ];

  return (
    <HeroContainer id="home">
      <FloatingElement
        animate={{
          x: [0, 100, 0],
          y: [0, -100, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear',
        }}
        style={{ top: '10%', left: '-10%' }}
      />
      <FloatingElement
        animate={{
          x: [0, -100, 0],
          y: [0, 100, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'linear',
        }}
        style={{ bottom: '10%', right: '-10%' }}
      />

      <HeroContent
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <TextContent>
          <Title variants={itemVariants}>
            Transform Your Business with
            <br />
            <span style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
              AWS Cloud Excellence
            </span>
          </Title>
          <Subtitle variants={itemVariants}>
            Unlock the potential of your business with AWS-certified expertise
            and bespoke cloud strategies that drive growth, enhance security,
            and optimize your operations.
          </Subtitle>
          <CTAContainer variants={itemVariants}>
            <PrimaryButton
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => trackButtonClick('Hero Get Started')}
            >
              Get Started <FaArrowRight />
            </PrimaryButton>
            <SecondaryButton
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => trackButtonClick('Hero View Our Work')}
            >
              View Our Work
            </SecondaryButton>
          </CTAContainer>
        </TextContent>

        <FeatureCards variants={containerVariants}>
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <feature.Icon />
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </FeatureCard>
          ))}
        </FeatureCards>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;

