import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaChartPie, FaRoad, FaFlask } from 'react-icons/fa';
// import HubSpotFormWrapper from '../components/HubSpotFormWrapper';

const PageWrapper = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #56ccf2 0%, #2f80ed 100%);
  padding-top: 80px;
`;

const PageContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 2rem;
`;

const HeroSection = styled.section`
  text-align: center;
  margin-bottom: 5rem;
`;

const Title = styled(motion.h1)`
  font-size: clamp(2.5rem, 5vw, 4rem);
  color: white;
  margin-bottom: 1rem;
  font-weight: 700;
`;

const Subtitle = styled(motion.p)`
  font-size: clamp(1.2rem, 2vw, 1.5rem);
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 3rem;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`;

const CTAButton = styled(motion.button)`
  padding: 1rem 2.5rem;
  background: white;
  color: #2f80ed;
  border: none;
  border-radius: 50px;
  font-weight: 600;
  font-size: 1.2rem;
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  }
`;

const ContentSection = styled.section`
  display: grid;
  gap: 3rem;
  margin-bottom: 5rem;
`;

const Card = styled(motion.div)`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 20px;
  padding: 3rem;
  color: white;
`;

const CardTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 1.5rem;
  color: white;
`;

const CardContent = styled.div`
  font-size: 1.1rem;
  line-height: 1.8;
  color: rgba(255, 255, 255, 0.9);

  p {
    margin-bottom: 1.5rem;
  }

  ul {
    list-style: none;
    padding: 0;

    li {
      padding: 0.5rem 0;
      display: flex;
      align-items: center;
      gap: 1rem;
      svg {
        color: white;
        font-size: 1.2rem;
        flex-shrink: 0;
      }
    }
  }
`;

const FeatureGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`;

const FeatureCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 15px;
  padding: 2rem;
  text-align: center;
  transition: all 0.3s ease;
  &:hover {
    transform: translateY(-5px);
    background: rgba(255, 255, 255, 0.15);
  }
  svg {
    font-size: 3rem;
    color: white;
    margin-bottom: 1rem;
  }
  h3 {
    color: white;
    font-size: 1.3rem;
    margin-bottom: 0.5rem;
  }
  p {
    color: rgba(255, 255, 255, 0.8);
    font-size: 1rem;
  }
`;

const AILaunchpad: React.FC = () => {
  const features = [
    {
      icon: <FaFlask />,
      title: "Proof of Concept",
      description: "Rapid development of AI-driven PoC tailor-made for your business needs"
    },
    {
      icon: <FaChartPie />,
      title: "Full Costings & Summary",
      description: "Detailed business case with comprehensive cost analysis"
    },
    {
      icon: <FaRoad />,
      title: "Path to Production",
      description: "Clear roadmap to scalable and production-ready AI solutions"
    },
  ];

  return (
    <PageWrapper>
      <PageContainer>
        <HeroSection>
          <Title
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Unlock Your Next Phase of Growth. Without the Risk.
          </Title>
          <Subtitle
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Your Competitors Are Building AI. What's Your First Move?
          </Subtitle>
          <CTAButton
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              const formSection = document.getElementById('ai-launchpad-form');
              formSection?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
Schedule Your Strategy Call
          </CTAButton>
        </HeroSection>

        <ContentSection>
          <Card
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <CardTitle>The North Point AI Launchpad Program</CardTitle>
            <CardContent>
              <p>
              is your definitive first step in leverageing AI to gain a competitive edge. This fixed-fee, two week program is designed to transform your business problems into a concrete, executable AI solution.
              </p>
              <p>
                <b>We don't build generic chatbots; we build business value.</b>
              </p>
              <p>
              Using your company's proprietary data and the market-leading services from AWS, we will build a tangible, working prototype of a customised AI solution. This is not a theoretical exercise - it's a functioning proof of concept that validates your specific use case.
              </p>
            </CardContent>
          </Card>

          <Card
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <CardTitle>What You'll Walk Away With</CardTitle>
            <CardContent>
              <ul>
                <li>
                  <FaFlask />
                  A customised AI Proof of Concept built and validated on AWS.
                </li>
                <li>
                  <FaChartPie />
                  A stategic business plan with a clear executive summary and a full breakdown of the projected production costs.
                </li>
                <li>
                  <FaRoad />
                  A step-by-step path-to-production roadmap that outlines exactly how to tuen the prototype into a scalable, enterprise-grade solution.
                </li>
              </ul>
              <CTAButton
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              const formSection = document.getElementById('ai-launchpad-form');
              formSection?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
Schedule Your Strategy Call
          </CTAButton>
            </CardContent>
          </Card>
        </ContentSection>

        <FeatureGrid>
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
            >
              {feature.icon}
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </FeatureCard>
          ))}
        </FeatureGrid>

        <Card
          id="ai-launchpad-form"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.3 }}
          style={{ marginTop: '3rem' }}
        >
          <CardTitle style={{ textAlign: 'center' }}>Ready to Launch Your AI Journey?</CardTitle>
          {/* <HubSpotFormWrapper
            formType="aiLaunchpad"
            onFormSubmit={() => console.log('AI Launchpad form submitted!')}
          /> */}
          <div style={{ 
            padding: '2rem', 
            textAlign: 'center',
            color: 'rgba(255, 255, 255, 0.9)'
          }}>
            <p>Contact form coming soon!</p>
            <p style={{ fontSize: '0.9rem', marginTop: '1rem' }}>HubSpot integration will be enabled once configured.</p>
          </div>
        </Card>
      </PageContainer>
    </PageWrapper>
  );
};

export default AILaunchpad;

