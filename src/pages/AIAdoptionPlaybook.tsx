import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaRobot, FaChartLine, FaLightbulb, FaDownload } from 'react-icons/fa';
import PlaybookLeadCaptureForm from '../components/PlaybookLeadCaptureForm';
import HubSpotForm from '../components/HubSpotForm';
import { HUBSPOT_CONFIG } from '../config/hubspot';

const PageWrapper = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding-top: 80px;
`;

const PageContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 2rem;
`;

const HeroSection = styled.section`
  text-align: center;
  margin-bottom: 4rem;
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
  margin-bottom: 2rem;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`;

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  margin-bottom: 4rem;

  @media (min-width: 968px) {
    grid-template-columns: 1fr 1fr;
    align-items: start;
  }
`;

const InfoSection = styled(motion.div)`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 20px;
  padding: 3rem;
  color: white;
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 1.5rem;
  color: white;
  display: flex;
  align-items: center;
  gap: 1rem;

  svg {
    font-size: 2rem;
  }
`;

const ContentList = styled.ul`
  list-style: none;
  padding: 0;

  li {
    padding: 1rem 0;
    display: flex;
    align-items: start;
    gap: 1rem;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);

    &:last-child {
      border-bottom: none;
    }

    svg {
      color: white;
      font-size: 1.5rem;
      flex-shrink: 0;
      margin-top: 0.25rem;
    }

    div {
      flex: 1;

      h3 {
        font-size: 1.2rem;
        margin-bottom: 0.5rem;
        color: white;
      }

      p {
        color: rgba(255, 255, 255, 0.8);
        line-height: 1.6;
      }
    }
  }
`;

const FormSection = styled(motion.div)`
  background: white;
  border-radius: 20px;
  padding: 3rem;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
`;

const FormTitle = styled.h2`
  font-size: 1.8rem;
  color: #333;
  margin-bottom: 1rem;
  text-align: center;
`;

const FormSubtitle = styled.p`
  color: #666;
  text-align: center;
  margin-bottom: 2rem;
  line-height: 1.6;
`;

const HubSpotFormWrapper = styled.div`
  .hs-form {
    width: 100%;
  }

  .hs-form-field {
    margin-bottom: 1.5rem;
  }

  .hs-label {
    display: block;
    color: #555;
    margin-bottom: 0.5rem;
    font-weight: 500;
  }

  .hs-input {
    width: 100%;
    padding: 0.75rem 1rem;
    border: 1px solid #ddd;
    border-radius: 4px;
    transition: all 0.3s ease;

    &:hover, &:focus {
      border-color: #667eea;
      outline: none;
    }
  }

  .hs-button {
    padding: 1rem 2rem;
    background: #667eea;
    color: white;
    border: none;
    border-radius: 4px;
    font-weight: 600;
    font-size: 1.1rem;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
      background: #5661d5;
      transform: translateY(-2px);
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
    }
  }

  .hs-error-msgs {
    color: #dc3545;
    font-size: 0.875rem;
    margin-top: 0.25rem;
  }
`;

const AIAdoptionPlaybook: React.FC = () => {
  const isHubSpotConfigured = HUBSPOT_CONFIG.portalId !== 'YOUR_PORTAL_ID' && 
                              !HUBSPOT_CONFIG.forms.aiPlaybook.includes('YOUR_');

  const handleCustomFormSubmit = (data: any) => {
    console.log('Lead captured:', data);
    triggerDownload();
  };

  const handleHubSpotFormSubmit = () => {
    triggerDownload();
  };

  const triggerDownload = () => {
    const downloadUrl = 'https://drive.google.com/uc?export=download&id=1kYmIXpwALyr3Nab1uScEDkiHuNtI__SK';
    window.open(downloadUrl, '_blank');
  };

  const benefits = [
    {
      icon: <FaLightbulb />,
      title: 'Strategic Framework',
      description: 'Step-by-step guide to building your AI adoption strategy'
    },
    {
      icon: <FaChartLine />,
      title: 'Implementation Roadmap',
      description: 'Clear path from planning to production deployment'
    },
    {
      icon: <FaRobot />,
      title: 'Use Case Examples',
      description: 'Real-world AI applications tailored for SMBs'
    }
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
            AI Adoption Strategy Playbook
          </Title>
          <Subtitle
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Your comprehensive guide to successfully implementing AI in your organisation. 
            Learn proven strategies, avoid common pitfalls, and accelerate your AI journey.
          </Subtitle>
        </HeroSection>

        <ContentGrid>
          <InfoSection
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <SectionTitle>
              <FaDownload />
              What's Inside
            </SectionTitle>
            <ContentList>
              {benefits.map((benefit, index) => (
                <li key={index}>
                  {benefit.icon}
                  <div>
                    <h3>{benefit.title}</h3>
                    <p>{benefit.description}</p>
                  </div>
                </li>
              ))}
            </ContentList>
          </InfoSection>

          <FormSection
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <FormTitle>Download Your Free Playbook</FormTitle>
            <FormSubtitle>
              Fill out the form below to receive instant access to the AI Adoption Strategy Playbook
            </FormSubtitle>
            
            {isHubSpotConfigured ? (
              <HubSpotFormWrapper>
                <HubSpotForm 
                  formType="aiPlaybook"
                  region={HUBSPOT_CONFIG.region}
                  onFormSubmit={handleHubSpotFormSubmit}
                />
              </HubSpotFormWrapper>
            ) : (
              <PlaybookLeadCaptureForm onSubmit={handleCustomFormSubmit} />
            )}
          </FormSection>
        </ContentGrid>
      </PageContainer>
    </PageWrapper>
  );
};

export default AIAdoptionPlaybook;
