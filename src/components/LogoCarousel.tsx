import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Section = styled.section`
  padding: 4rem 2rem;
  background: #fff;
  position: relative;
  overflow: hidden;
`;

const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
`;

const Title = styled.h3`
  text-align: center;
  font-size: clamp(1.5rem, 3vw, 2rem);
  color: #333;
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
  height: 120px;
  width: 200px;
  padding: 1.5rem;
  border-radius: 8px;
  background: ${props => props.$hasBackground ? '#d0d0d0' : 'transparent'};
  opacity: 0.6;
  transition: all 0.3s ease;
  filter: grayscale(100%);
  
  &:hover {
    opacity: 1;
    filter: grayscale(0%);
    ${props => props.$hasBackground && 'background: #b8b8b8;'}
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
    max-width: 200px;
    max-height: 120px;
    width: auto;
    height: auto;
    object-fit: contain;
  }
  
  img[src$=".webp"] {
    max-width: 200px;
    max-height: 120px;
    width: auto;
    height: auto;
    object-fit: contain;
  }
`;

interface LogoCarouselProps {
  logos?: string[];
  title?: string;
  speed?: number;
  logosWithBackground?: string[];
}

const LogoCarousel: React.FC<LogoCarouselProps> = ({ 
  logos = [],
  title = "Trusted By",
  speed = 50,
  logosWithBackground = []
}) => {
  const duplicatedLogos = [...logos, ...logos, ...logos];

  return (
    <Section>
      <Container>
        {title && <Title>{title}</Title>}
        <CarouselWrapper>
          <CarouselTrack
            animate={{
              x: [0, -((logos.length * 200) + (logos.length * 64))],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: speed,
                ease: "linear",
              },
            }}
          >
            {duplicatedLogos.map((logo, index) => (
              <LogoItem 
                key={`${logo}-${index}`}
                $hasBackground={logosWithBackground.includes(logo)}
              >
                <img src={logo} alt={`Logo ${index + 1}`} loading="lazy" />
              </LogoItem>
            ))}
          </CarouselTrack>
        </CarouselWrapper>
      </Container>
    </Section>
  );
};

export default LogoCarousel;

