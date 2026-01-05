import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Section = styled.section`
  padding: 5rem 2rem;
  background: #f9f9f9;
  position: relative;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const ContentWrapper = styled(motion.div)`
  display: flex;
  gap: 3rem;
  align-items: flex-start;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 2rem;
  }
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 3rem;
`;

const Title = styled(motion.h2)`
  font-size: clamp(2rem, 4vw, 3rem);
  color: #333;
  margin-bottom: 1rem;
`;

const Subtitle = styled(motion.p)`
  font-size: 1.2rem;
  color: #666;
  max-width: 600px;
  margin: 0 auto;
`;

const Content = styled(motion.div)`
  font-size: 1rem;
  color: #555;
  line-height: 1.8;
  flex: 1;

  p {
    margin-bottom: 1.5rem;
  }
`;

const FloatingShape = styled(motion.div)`
  position: absolute;
  width: 200px;
  height: 200px;
  background: radial-gradient(circle, rgba(0, 0, 0, 0.1) 0%, transparent 70%);
  border-radius: 50%;
  filter: blur(40px);
  z-index: -1;
`;

const VideoContainer = styled(motion.div)`
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
  background: #f9f9f9;
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  min-width: 0;
  max-width: 100%;
`;

const Video = styled.video`
  width: 100%;
  height: auto;
  max-width: 100%;
  display: block;
`;

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

const AboutSection: React.FC = () => {
  return (
    <Section id="about">
      <FloatingShape
        animate={{
          x: [0, -50, 0],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'linear',
        }}
        style={{ bottom: '10%', left: '-10%' }}
      />

      <Container>
        <SectionHeader>
          <Title
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            About Us
          </Title>
          <Subtitle
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Your trusted AWS Partner for cloud transformation
          </Subtitle>
        </SectionHeader>

        <ContentWrapper
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Content
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <p>
              As specialist AWS consultants, we deliver measurable outcomes: clients typically
              see 35% reductions in cloud spend while improving security posture and operational
              resilience. Our AWS-certified team brings deep expertise in cloud architecture,
              migration, and optimization.
            </p>
            <p>
              We leverage proven AWS frameworks and methodologies—including Well-Architected Reviews
              and the Migration Acceleration Program (MAP)—to accelerate your cloud journey. Our
              approach combines technical excellence with strategic guidance to identify quick wins
              and long-term optimizations.
            </p>
            <p>
              Partner with us to transform your AWS infrastructure. We offer risk-free engagement
              models that align our success with yours, delivering lower costs, stronger security,
              and faster innovation without the typical consulting overhead.
            </p>
          </Content>

          <VideoContainer
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Video
              controls
              playsInline
              preload="auto"
            >
              <source src="/about-video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </Video>
          </VideoContainer>
        </ContentWrapper>

        <CTAContainer
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
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
      </Container>
    </Section>
  );
};

export default AboutSection;

