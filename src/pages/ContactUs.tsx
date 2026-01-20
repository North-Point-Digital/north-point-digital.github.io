import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import HubSpotForm from '../components/HubSpotForm';
import SimpleContactForm from '../components/SimpleContactForm';
import { HUBSPOT_CONFIG } from '../config/hubspot';
import SEO from '../components/SEO';

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
`;

const ContactList = styled.ul`
  list-style: none;
  padding: 0;

  li {
    padding: 1.5rem 0;
    display: flex;
    align-items: start;
    gap: 1.5rem;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);

    &:last-child {
      border-bottom: none;
    }

    svg {
      color: white;
      font-size: 1.8rem;
      flex-shrink: 0;
      margin-top: 0.25rem;
    }

    div {
      flex: 1;

      h3 {
        font-size: 1.3rem;
        margin-bottom: 0.5rem;
        color: white;
      }

      p {
        color: rgba(255, 255, 255, 0.8);
        line-height: 1.6;
        font-size: 1rem;
      }

      a {
        color: white;
        text-decoration: none;
        &:hover {
          text-decoration: underline;
        }
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

const ContactUs: React.FC = () => {
  const isHubSpotConfigured = HUBSPOT_CONFIG.portalId !== 'YOUR_PORTAL_ID' && 
                              !HUBSPOT_CONFIG.forms.contact.includes('YOUR_');

  const contactInfo = [
    {
      icon: <FaEnvelope />,
      title: 'Email Us',
      description: 'Get in touch via email for inquiries and support',
      detail: 'contact@northpointdigital.com'
    },
    {
      icon: <FaPhone />,
      title: 'Call Us',
      description: 'Speak directly with our team for immediate assistance',
      detail: 'Available during business hours'
    },
    {
      icon: <FaMapMarkerAlt />,
      title: 'Visit Us',
      description: 'Our team is ready to help with your cloud transformation',
      detail: 'Remote-first consultancy serving clients globally'
    }
  ];

  return (
    <PageWrapper>
      <PageContainer>
        <SEO
          title="Contact North Point Digital | AWS Cloud Consultancy"
          description="Get in touch with North Point Digital to discuss AWS cost optimisation, security, and cloud or AI projects."
          canonical="https://northpointdigital.com/contact"
        />
        <HeroSection>
          <Title
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Get In Touch
          </Title>
          <Subtitle
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Ready to transform your AWS infrastructure? Let's discuss how we can help 
            reduce costs, improve security, and accelerate your AI journey.
          </Subtitle>
        </HeroSection>

        <ContentGrid>
          <InfoSection
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <SectionTitle>Contact Information</SectionTitle>
            <ContactList>
              {contactInfo.map((contact, index) => (
                <li key={index}>
                  {contact.icon}
                  <div>
                    <h3>{contact.title}</h3>
                    <p>{contact.description}</p>
                    {contact.title === 'Email Us' ? (
                      <a href={`mailto:${contact.detail}`}>{contact.detail}</a>
                    ) : (
                      <p style={{ fontWeight: 500, marginTop: '0.5rem' }}>{contact.detail}</p>
                    )}
                  </div>
                </li>
              ))}
            </ContactList>
          </InfoSection>

          <FormSection
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <FormTitle>Send Us a Message</FormTitle>
            <FormSubtitle>
              Fill out the form below and our team will get back to you within 24 hours
            </FormSubtitle>
            
            {isHubSpotConfigured ? (
              <HubSpotFormWrapper>
                <HubSpotForm 
                  formType="contact"
                  region={HUBSPOT_CONFIG.region}
                  onFormSubmit={() => console.log('Contact form submitted!')}
                />
              </HubSpotFormWrapper>
            ) : (
              <SimpleContactForm 
                onSubmit={(data) => {
                  console.log('Contact form submitted:', data);
                }}
              />
            )}
          </FormSection>
        </ContentGrid>
      </PageContainer>
    </PageWrapper>
  );
};

export default ContactUs;
