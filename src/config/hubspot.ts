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

// Form submission tracking
export const trackFormSubmission = (formName: string) => {
  // Track form submission in Google Analytics if available
  if (window.gtag) {
    window.gtag('event', 'form_submit', {
      event_category: 'engagement',
      event_label: formName
    });
  }
  
  // You can add other tracking here (e.g., Facebook Pixel, etc.)
  console.log(`Form submitted: ${formName}`);
};
