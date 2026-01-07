// Google Analytics 4 tracking using gtag (already loaded in index.html)
// Measurement ID: G-CX6XEZX2R0

const isGAAvailable = (): boolean => {
  if (typeof window === 'undefined') return false;
  if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
    return false;
  }
  return typeof window.gtag === 'function';
};

// Log page view
export const logPageView = (path?: string) => {
  if (!isGAAvailable() || !window.gtag) return;
  
  const pagePath = path || window.location.pathname + window.location.search;
  
  window.gtag('config', 'G-CX6XEZX2R0', {
    page_path: pagePath,
  });
  
  // Also send as event for better tracking
  window.gtag('event', 'page_view', {
    page_path: pagePath,
    page_title: document.title,
  });
};

// Generic event tracking
export const logEvent = (
  eventName: string,
  eventParams?: {
    event_category?: string;
    event_label?: string;
    value?: number;
    [key: string]: any;
  }
) => {
  if (!isGAAvailable() || !window.gtag) return;
  
  window.gtag('event', eventName, eventParams);
};

// Initialize analytics (gtag is already loaded in index.html)
export const initGA = () => {
  if (isGAAvailable()) {
    logPageView();
  }
};

// CTA Button clicks
export const trackButtonClick = (buttonName: string, location?: string) => {
  logEvent('cta_click', {
    event_category: 'engagement',
    event_label: buttonName,
    button_name: buttonName,
    button_location: location || 'unknown',
  });
};

// Service card clicks
export const trackServiceClick = (serviceName: string) => {
  logEvent('service_click', {
    event_category: 'services',
    event_label: serviceName,
    service_name: serviceName,
  });
};

// Form submissions
export const trackFormSubmission = (formName: string, formType?: string) => {
  logEvent('form_submit', {
    event_category: 'form',
    event_label: formName,
    form_name: formName,
    form_type: formType || 'contact',
  });
};

// Video interactions
export const trackVideoPlay = (videoName: string) => {
  logEvent('video_play', {
    event_category: 'media',
    event_label: videoName,
    video_name: videoName,
  });
};

export const trackVideoPause = (videoName: string) => {
  logEvent('video_pause', {
    event_category: 'media',
    event_label: videoName,
    video_name: videoName,
  });
};

export const trackVideoComplete = (videoName: string) => {
  logEvent('video_complete', {
    event_category: 'media',
    event_label: videoName,
    video_name: videoName,
  });
};

// FAQ interactions
export const trackFAQOpen = (question: string) => {
  logEvent('faq_open', {
    event_category: 'engagement',
    event_label: question,
    question: question,
  });
};

// Navigation clicks
export const trackNavigationClick = (linkName: string, destination: string) => {
  logEvent('navigation_click', {
    event_category: 'navigation',
    event_label: linkName,
    link_name: linkName,
    destination: destination,
  });
};

// External link clicks
export const trackExternalLink = (url: string, linkText?: string) => {
  logEvent('external_link_click', {
    event_category: 'outbound',
    event_label: linkText || url,
    link_url: url,
    link_text: linkText,
  });
};

// Scroll depth tracking
export const trackScrollDepth = (depth: number) => {
  logEvent('scroll_depth', {
    event_category: 'engagement',
    event_label: `${depth}%`,
    scroll_depth: depth,
  });
};

// Section views (when section comes into viewport)
export const trackSectionView = (sectionName: string) => {
  logEvent('section_view', {
    event_category: 'engagement',
    event_label: sectionName,
    section_name: sectionName,
  });
};

// Time on page tracking
export const trackTimeOnPage = (seconds: number) => {
  logEvent('time_on_page', {
    event_category: 'engagement',
    value: seconds,
    time_seconds: seconds,
  });
};

// Contact method clicks
export const trackContactClick = (contactMethod: string) => {
  logEvent('contact_click', {
    event_category: 'contact',
    event_label: contactMethod,
    contact_method: contactMethod,
  });
};

// Logo carousel interactions
export const trackLogoView = (logoName?: string) => {
  logEvent('logo_carousel_view', {
    event_category: 'engagement',
    event_label: logoName || 'logo_carousel',
  });
};
