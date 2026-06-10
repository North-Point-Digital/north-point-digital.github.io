import React, { useEffect, useRef, useState } from 'react';
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

const FAIL_TIMEOUT_MS = 6000;

const HubSpotForm: React.FC<HubSpotFormProps> = ({
  formType,
  onFormSubmit,
  region = 'na1',
  cssClass
}) => {
  const formRef = useRef<HTMLDivElement>(null);
  const scriptLoaded = useRef(false);
  const formCreated = useRef(false);
  const [ready, setReady] = useState(false);
  const [failed, setFailed] = useState(false);
  const readyRef = useRef(false);

  useEffect(() => {
    if (HUBSPOT_CONFIG.portalId === 'YOUR_PORTAL_ID' ||
        HUBSPOT_CONFIG.forms[formType].includes('YOUR_')) {
      setFailed(true);
      return;
    }

    // If HubSpot can't produce a working form (bad form id, network, blocker),
    // show the email fallback rather than an empty box.
    const failTimer = setTimeout(() => {
      if (!readyRef.current) setFailed(true);
    }, FAIL_TIMEOUT_MS);

    const markReady = () => {
      readyRef.current = true;
      setReady(true);
      setFailed(false);
    };

    const createForm = () => {
      if (window.hbspt && formRef.current && !formCreated.current) {
        const existingForm = formRef.current.querySelector('form, iframe');
        if (existingForm) {
          markReady();
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
          onFormReady: markReady,
        });
      }
    };

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
        script.onerror = () => setFailed(true);

        document.body.appendChild(script);
      } else if (window.hbspt) {
        createForm();
      }
    };

    loadHubSpotScript();

    return () => {
      clearTimeout(failTimer);
      if (formRef.current) {
        formRef.current.innerHTML = '';
      }
      formCreated.current = false;
    };
  }, [formType, onFormSubmit, region, cssClass]);

  const fallbackSubject = formType === 'aiPlaybook' ? '?subject=AI%20Adoption%20Playbook' : '';
  const fallbackText = formType === 'aiPlaybook'
    ? 'and we’ll send the playbook straight over.'
    : 'and we’ll reply within one working day.';

  if (failed && !ready) {
    return (
      <p style={{
        borderRadius: '0.75rem',
        border: '1px solid #e2e8f0',
        background: '#f8fafc',
        padding: '1.5rem',
        textAlign: 'center',
        color: '#475569',
        lineHeight: 1.6,
      }}>
        The form isn't loading just now — email{' '}
        <a
          href={`mailto:contact@northpointdigital.com${fallbackSubject}`}
          style={{ color: '#2563eb', fontWeight: 500, textDecoration: 'none' }}
        >
          contact@northpointdigital.com
        </a>{' '}
        {fallbackText}
      </p>
    );
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
