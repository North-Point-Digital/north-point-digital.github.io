import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import SimpleContactForm from './SimpleContactForm';
import HubSpotForm from './HubSpotForm';
import { HUBSPOT_CONFIG } from '../config/hubspot';

const Section = styled.section`
  padding: 5rem 2rem;
  background: #f3f4f6;
  position: relative;
`;

const Container = styled.div`
  max-width: 900px;
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

// Styled wrapper for HubSpot form
const FormWrapper = styled(motion.div)`
  max-width: 600px;
  margin: 0 auto;
  
  // Style HubSpot form elements
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
      border-color: #333;
      outline: none;
    }
  }
  
  .hs-button {
    padding: 0.75rem 2rem;
    background: #667eea;
    color: white;
    border: none;
    border-radius: 4px;
    font-weight: 600;
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

const ContactSection: React.FC = () => {
  // Check if HubSpot is configured
  const isHubSpotConfigured = HUBSPOT_CONFIG.portalId !== 'YOUR_PORTAL_ID' && 
                              !HUBSPOT_CONFIG.forms.contact.includes('YOUR_');

  return (
    <Section id="contact">
      <Container>
        <SectionHeader>
          <Title
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Contact Us
          </Title>
          <Subtitle
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            We'd love to hear from you. Fill out the form below to get started!
          </Subtitle>
        </SectionHeader>

        <FormWrapper
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {isHubSpotConfigured ? (
            <HubSpotForm 
              formType="contact"
              region={HUBSPOT_CONFIG.region}
              onFormSubmit={() => console.log('HubSpot contact form submitted!')}
            />
          ) : (
            <SimpleContactForm 
              onSubmit={(data) => {
                console.log('Contact form submitted:', data);
                // This data can be sent to your backend or email service
              }}
            />
          )}
        </FormWrapper>
      </Container>
    </Section>
  );
};

export default ContactSection;
