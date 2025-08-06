import ReactGA from 'react-ga4';

// Replace with your Google Analytics Measurement ID
const MEASUREMENT_ID = 'G-XXXXXXXXXX'; // Replace this with your actual GA4 Measurement ID

export const initGA = () => {
  ReactGA.initialize(MEASUREMENT_ID);
};

export const logPageView = () => {
  ReactGA.send({ hitType: 'pageview', page: window.location.pathname });
};

export const logEvent = (category: string, action: string, label?: string) => {
  ReactGA.event({
    category,
    action,
    label,
  });
};

// Custom events for tracking specific actions
export const trackButtonClick = (buttonName: string) => {
  logEvent('User Interaction', 'Button Click', buttonName);
};

export const trackServiceClick = (serviceName: string) => {
  logEvent('Services', 'Service Card Click', serviceName);
};

export const trackFormSubmission = (formName: string) => {
  logEvent('Form', 'Submit', formName);
};

export const trackContactClick = (contactMethod: string) => {
  logEvent('Contact', 'Contact Method Click', contactMethod);
};
