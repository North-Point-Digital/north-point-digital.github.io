import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Section = styled.section`
  padding: 5rem 2rem;
  background: #f9f9f9;
  position: relative;
`;

const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
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

        <Content
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <p>
            As a specialist AWS consultancy, we are committed to integrating the latest
            cloud technologies into your business with expert precision. Our team of
            AWS-certified professionals brings deep expertise in cloud architecture,
            migration, and optimization to help you achieve your digital transformation goals.
          </p>
          <p>
            We leverage AWS funding programs to deliver free Well-Architected Reviews and
            AI Proof of Concepts, ensuring you can explore cloud solutions without initial
            investment. Our proven methodologies, including the AWS Migration Acceleration
            Program (MAP), guarantee smooth transitions from on-premise to cloud infrastructure.
          </p>
          <p>
            Partner with us to unlock the full potential of AWS cloud services. We combine
            technical excellence with strategic guidance to accelerate your journey to the
            cloud, reduce costs, and drive innovation across your organization.
          </p>
        </Content>
      </Container>
    </Section>
  );
};

export default AboutSection;

