// HubSpot Configuration
// Replace these values with your actual HubSpot Portal ID and Form IDs

export const HUBSPOT_CONFIG = {
  portalId: 'YOUR_PORTAL_ID', // Replace with your HubSpot Portal ID
  forms: {
    contact: 'YOUR_CONTACT_FORM_ID', // Replace with your Contact Form ID
    newsletter: 'YOUR_NEWSLETTER_FORM_ID', // Replace with your Newsletter Form ID
    demo: 'YOUR_DEMO_FORM_ID', // Replace with your Demo Request Form ID
    aiLaunchpad: 'YOUR_AI_LAUNCHPAD_FORM_ID', // Replace with AI Launchpad Form ID
    awsBlueprint: 'YOUR_AWS_BLUEPRINT_FORM_ID' // Replace with AWS Blueprint Form ID
  }
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
