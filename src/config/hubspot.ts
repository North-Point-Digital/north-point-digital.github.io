// HubSpot Configuration
// Replace these values with your actual HubSpot Portal ID and Form IDs

export const HUBSPOT_CONFIG = {
  portalId: '146637185',
  forms: {
    contact: '1b9d81cb-ba65-4307-bdad-642bfe0f6c3c',
    newsletter: 'YOUR_NEWSLETTER_FORM_ID',
    demo: 'YOUR_DEMO_FORM_ID',
    aiLaunchpad: 'YOUR_AI_LAUNCHPAD_FORM_ID',
    awsBlueprint: 'YOUR_AWS_BLUEPRINT_FORM_ID',
    aiPlaybook: '7af7a93c-1b12-4a8f-9bde-cd6d9b3f5ff4'
  },
  region: 'eu1'
};

// Form submission tracking - use the centralized analytics function
import { trackFormSubmission as trackForm } from '../utils/analytics';

export const trackFormSubmission = (formName: string, formType?: string) => {
  trackForm(formName, formType);
};
