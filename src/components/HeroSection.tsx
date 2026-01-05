import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { FaArrowRight, FaCode, FaCloud, FaShieldAlt, FaDownload } from 'react-icons/fa';
import { trackButtonClick } from '../utils/analytics';

const HeroContainer = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
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

  @media (max-width: 768px) {
    gap: 2rem;
  }

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const TextContent = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 0;

  @media (min-width: 768px) {
    text-align: left;
  }
  
  @media (max-width: 768px) {
    > * {
      margin-bottom: 1rem;
    }
  }
`;

const Title = styled(motion.h1)`
  color: white;
  margin-bottom: 1.5rem;
  font-size: clamp(2.5rem, 5vw, 4rem);
  line-height: 1.1;
  
  @media (max-width: 768px) {
    margin-bottom: 1rem;
  }
`;

const Subtitle = styled(motion.p)`
  color: rgba(255, 255, 255, 0.9);
  font-size: clamp(1.1rem, 2vw, 1.3rem);
  margin-bottom: 2rem;
  line-height: 1.6;
  
  @media (max-width: 768px) {
    margin-bottom: 2.5rem;
    padding-bottom: 1.5rem;
    line-height: 1.8;
  }
`;

const AWSBadge = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 2rem;
  justify-content: center;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  padding: 0.75rem 1.5rem;
  border-radius: 50px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  width: fit-content;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 768px) {
    margin-top: 2.5rem;
    margin-bottom: 2rem;
    padding: 0.6rem 1.2rem;
    gap: 0.5rem;
    clear: both;
    position: relative;
    z-index: 10;
  }

  @media (min-width: 768px) {
    justify-content: flex-start;
    margin-left: 0;
    margin-right: 0;
  }
  
  img {
    height: 40px;
    width: auto;
    opacity: 1;
    transition: opacity 0.3s ease;
    
    @media (max-width: 768px) {
      height: 35px;
    }
  }
  
  span {
    color: rgba(255, 255, 255, 0.9);
    font-size: 0.95rem;
    font-weight: 500;
    
    @media (max-width: 768px) {
      font-size: 0.85rem;
    }
  }
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
  text-decoration: none;

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
  display: flex;
  align-items: center;
  gap: 0.5rem;
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

const HeroCarouselContainer = styled(motion.div)`
  width: 100%;
  max-width: 1400px;
  margin-top: 4rem;
  z-index: 2;
  position: relative;
`;

const CarouselTitle = styled.h3`
  text-align: center;
  font-size: clamp(1.2rem, 2.5vw, 1.5rem);
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 2rem;
  font-weight: 600;
`;

const CarouselWrapper = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
`;

const CarouselTrack = styled(motion.div)`
  display: flex;
  gap: 4rem;
  align-items: center;
  will-change: transform;
`;

const LogoItem = styled.div<{ $hasBackground?: boolean }>`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80px;
  width: 150px;
  padding: 1rem;
  border-radius: 8px;
  background: ${props => props.$hasBackground ? 'rgba(255, 255, 255, 0.95)' : 'rgba(255, 255, 255, 0.9)'};
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  opacity: 0.9;
  transition: all 0.3s ease;
  
  &:hover {
    opacity: 1;
    transform: translateY(-2px);
    background: rgba(255, 255, 255, 1);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  }
  
  img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
    display: block;
    width: auto;
    height: auto;
  }
  
  img[src$=".svg"] {
    max-width: 150px;
    max-height: 80px;
    width: auto;
    height: auto;
    object-fit: contain;
  }
  
  img[src$=".webp"] {
    max-width: 150px;
    max-height: 80px;
    width: auto;
    height: auto;
    object-fit: contain;
  }
`;

interface HeroSectionProps {
  logos?: string[];
  logosWithBackground?: string[];
}

const HeroSection: React.FC<HeroSectionProps> = ({ 
  logos = [],
  logosWithBackground = []
}) => {
  const navigate = useNavigate();
  
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
      title: 'Expert Reviews',
      description: 'Well-Architected Reviews & AI PoCs with immediate ROI',
    },
    {
      Icon: FaCloud,
      title: 'Cloud Migration',
      description: 'Seamless AWS migration with proven frameworks',
    },
    {
      Icon: FaShieldAlt,
      title: 'AWS Certified',
      description: 'Deep expertise in security and optimisation',
    },
  ];

  const duplicatedLogos = logos.length > 0 ? [...logos, ...logos, ...logos] : [];

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
            Reduce Your AWS Bill by 25%+
            <br />
            <span style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
              While Strengthening Security
            </span>
          </Title>
          <Subtitle variants={itemVariants}>
            Expert AWS consultancy delivering Well-Architected Reviews, AI Proof of Concepts,
            and seamless cloud migrations with proven results.
          </Subtitle>
          <AWSBadge variants={itemVariants}>
            <img src="/aws-logo.png" alt="AWS Partner" />
            <span>Official AWS Partner</span>
          </AWSBadge>
          <CTAContainer variants={itemVariants}>
            <PrimaryButton
              as="a"
              href="https://calendly.com/david-northpointdigital/north-point-digital-initial-call"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                trackButtonClick('Hero Schedule Consultation');
              }}
            >
              Schedule a Free Consultation <FaArrowRight />
            </PrimaryButton>
            <SecondaryButton
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                trackButtonClick('Hero Download Playbook');
                navigate('/ai-adoption-playbook');
              }}
            >
              <FaDownload /> Free AI Playbook
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

      {logos.length > 0 && (
        <HeroCarouselContainer
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <CarouselTitle>Trusted Partners</CarouselTitle>
          <CarouselWrapper>
            <CarouselTrack
              animate={{
                x: [0, -((logos.length * 150) + (logos.length * 64))],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 50,
                  ease: "linear",
                },
              }}
            >
              {duplicatedLogos.map((logo, index) => (
                <LogoItem 
                  key={`${logo}-${index}`}
                  $hasBackground={logosWithBackground.includes(logo)}
                >
                  <img src={logo} alt={`Logo ${index + 1}`} />
                </LogoItem>
              ))}
            </CarouselTrack>
          </CarouselWrapper>
        </HeroCarouselContainer>
      )}
    </HeroContainer>
  );
};

export default HeroSection;

