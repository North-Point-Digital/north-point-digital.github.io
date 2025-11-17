import React, { useEffect, useRef } from 'react';
import { HUBSPOT_CONFIG, trackFormSubmission } from '../config/hubspot';

declare global {
  interface Window {
    hbspt?: any;
  }
}

interface HubSpotFormProps {
  formType: keyof typeof HUBSPOT_CONFIG.forms;
  onFormSubmit?: () => void;
  region?: string;
  cssClass?: string;
}

const HubSpotForm: React.FC<HubSpotFormProps> = ({ 
  formType, 
  onFormSubmit,
  region = 'na1',
  cssClass
}) => {
  const formRef = useRef<HTMLDivElement>(null);
  const scriptLoaded = useRef(false);
  const formCreated = useRef(false);

  useEffect(() => {
    // Check if HubSpot is configured
    if (HUBSPOT_CONFIG.portalId === 'YOUR_PORTAL_ID' || 
        HUBSPOT_CONFIG.forms[formType].includes('YOUR_')) {
      return;
    }

    const loadHubSpotScript = () => {
      if (!scriptLoaded.current) {
        const script = document.createElement('script');
        script.src = '//js.hsforms.net/forms/v2.js';
        script.charset = 'utf-8';
        script.type = 'text/javascript';
        script.async = true;
        script.defer = true;
        
        script.onload = () => {
          scriptLoaded.current = true;
          createForm();
        };
        
        document.body.appendChild(script);
      } else if (window.hbspt) {
        createForm();
      }
    };

    const createForm = () => {
      if (window.hbspt && formRef.current && !formCreated.current) {
        const existingForm = formRef.current.querySelector('form');
        if (existingForm) {
          return;
        }
        
        formCreated.current = true;
        formRef.current.innerHTML = '';
        
        window.hbspt.forms.create({
          region: region,
          portalId: HUBSPOT_CONFIG.portalId,
          formId: HUBSPOT_CONFIG.forms[formType],
          target: `#hubspot-form-${formType}`,
          cssClass: cssClass,
          onFormSubmit: () => {
            trackFormSubmission(formType);
            if (onFormSubmit) {
              onFormSubmit();
            }
          },
          onFormReady: () => {
            console.log(`HubSpot form ${formType} is ready`);
          }
        });
      }
    };

    // Load script and create form
    loadHubSpotScript();

    return () => {
      if (formRef.current) {
        formRef.current.innerHTML = '';
      }
      formCreated.current = false;
    };
  }, [formType, onFormSubmit, region, cssClass]);

  // If HubSpot is not configured, return null (parent component should handle fallback)
  if (HUBSPOT_CONFIG.portalId === 'YOUR_PORTAL_ID' || 
      HUBSPOT_CONFIG.forms[formType].includes('YOUR_')) {
    return null;
  }

  return (
    <div 
      ref={formRef} 
      id={`hubspot-form-${formType}`}
      className={cssClass}
    />
  );
};

export default HubSpotForm;
