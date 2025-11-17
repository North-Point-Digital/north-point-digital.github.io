import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const PageWrapper = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding-top: 80px;
`;

const PageContainer = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 4rem 2rem;
`;

const ContentCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 3rem;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);
`;

const Title = styled.h1`
  font-size: clamp(2rem, 4vw, 3rem);
  color: #333;
  margin-bottom: 0.5rem;
  font-weight: 700;
`;

const LastUpdated = styled.p`
  color: #666;
  font-size: 0.9rem;
  margin-bottom: 2rem;
  font-style: italic;
`;

const Section = styled.section`
  margin-bottom: 2.5rem;
`;

const SectionTitle = styled.h2`
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 1rem;
  font-weight: 600;
`;

const Content = styled.div`
  font-size: 1rem;
  line-height: 1.8;
  color: #555;

  p {
    margin-bottom: 1rem;
  }

  ul {
    margin: 1rem 0;
    padding-left: 1.5rem;

    li {
      margin-bottom: 0.5rem;
    }
  }

  a {
    color: #667eea;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;

const PrivacyPolicy: React.FC = () => {
  return (
    <PageWrapper>
      <PageContainer>
        <ContentCard
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Title>Privacy Policy</Title>
          <LastUpdated>Last Updated: November 17, 2024</LastUpdated>

          <Section>
            <SectionTitle>1. Introduction</SectionTitle>
            <Content>
              <p>
                North Point Consulting ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.
              </p>
            </Content>
          </Section>

          <Section>
            <SectionTitle>2. Information We Collect</SectionTitle>
            <Content>
              <p>We collect information that you provide directly to us, including:</p>
              <ul>
                <li>Name and contact information (email address, phone number)</li>
                <li>Company name and job title</li>
                <li>Information you provide when filling out forms on our website</li>
                <li>Communications you send to us</li>
              </ul>
              <p>We also automatically collect certain information when you visit our website:</p>
              <ul>
                <li>IP address and browser type</li>
                <li>Device information and operating system</li>
                <li>Pages visited and time spent on pages</li>
                <li>Referring website addresses</li>
                <li>Cookie data and similar tracking technologies</li>
              </ul>
            </Content>
          </Section>

          <Section>
            <SectionTitle>3. How We Use Your Information</SectionTitle>
            <Content>
              <p>We use the information we collect to:</p>
              <ul>
                <li>Provide, maintain, and improve our services</li>
                <li>Respond to your inquiries and fulfill your requests</li>
                <li>Send you marketing communications about our services (with your consent)</li>
                <li>Analyze website usage and improve user experience</li>
                <li>Detect, prevent, and address technical issues and security threats</li>
                <li>Comply with legal obligations and enforce our policies</li>
              </ul>
            </Content>
          </Section>

          <Section>
            <SectionTitle>4. Cookies and Tracking Technologies</SectionTitle>
            <Content>
              <p>
                We use cookies and similar tracking technologies to collect information about your browsing activities. This includes:
              </p>
              <ul>
                <li><strong>Essential Cookies:</strong> Required for website functionality</li>
                <li><strong>Analytics Cookies:</strong> Help us understand how visitors use our website (Google Analytics)</li>
                <li><strong>Marketing Cookies:</strong> Used to deliver relevant advertisements (LinkedIn Insight Tag, Facebook Pixel)</li>
              </ul>
              <p>
                You can control cookies through your browser settings. However, disabling cookies may affect website functionality.
              </p>
            </Content>
          </Section>

          <Section>
            <SectionTitle>5. Third-Party Services</SectionTitle>
            <Content>
              <p>We use the following third-party services that may collect information:</p>
              <ul>
                <li><strong>Google Analytics:</strong> Website analytics and performance monitoring</li>
                <li><strong>LinkedIn Marketing Solutions:</strong> Advertising and analytics</li>
                <li><strong>HubSpot:</strong> Customer relationship management and email marketing</li>
                <li><strong>AWS (Amazon Web Services):</strong> Hosting and infrastructure services</li>
              </ul>
              <p>
                These third parties have their own privacy policies governing their use of information.
              </p>
            </Content>
          </Section>

          <Section>
            <SectionTitle>6. Data Sharing and Disclosure</SectionTitle>
            <Content>
              <p>We do not sell your personal information. We may share your information with:</p>
              <ul>
                <li>Service providers who assist in our business operations</li>
                <li>Professional advisors (lawyers, accountants, auditors)</li>
                <li>Law enforcement or government agencies when required by law</li>
                <li>Business partners with your explicit consent</li>
              </ul>
            </Content>
          </Section>

          <Section>
            <SectionTitle>7. Data Security</SectionTitle>
            <Content>
              <p>
                We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet is 100% secure.
              </p>
            </Content>
          </Section>

          <Section>
            <SectionTitle>8. Your Rights</SectionTitle>
            <Content>
              <p>Depending on your location, you may have the following rights:</p>
              <ul>
                <li><strong>Access:</strong> Request access to your personal information</li>
                <li><strong>Correction:</strong> Request correction of inaccurate information</li>
                <li><strong>Deletion:</strong> Request deletion of your personal information</li>
                <li><strong>Objection:</strong> Object to processing of your personal information</li>
                <li><strong>Data Portability:</strong> Request transfer of your data</li>
                <li><strong>Withdraw Consent:</strong> Withdraw consent for marketing communications</li>
              </ul>
              <p>
                To exercise these rights, please contact us using the information provided below.
              </p>
            </Content>
          </Section>

          <Section>
            <SectionTitle>9. International Data Transfers</SectionTitle>
            <Content>
              <p>
                Your information may be transferred to and processed in countries other than your country of residence. We ensure appropriate safeguards are in place to protect your information in accordance with this Privacy Policy.
              </p>
            </Content>
          </Section>

          <Section>
            <SectionTitle>10. Data Retention</SectionTitle>
            <Content>
              <p>
                We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law.
              </p>
            </Content>
          </Section>

          <Section>
            <SectionTitle>11. Children's Privacy</SectionTitle>
            <Content>
              <p>
                Our services are not intended for individuals under the age of 18. We do not knowingly collect personal information from children under 18.
              </p>
            </Content>
          </Section>

          <Section>
            <SectionTitle>12. Changes to This Privacy Policy</SectionTitle>
            <Content>
              <p>
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.
              </p>
            </Content>
          </Section>

          <Section>
            <SectionTitle>13. Contact Us</SectionTitle>
            <Content>
              <p>If you have questions or concerns about this Privacy Policy, please contact us:</p>
              <p>
                <strong>North Point Consulting</strong><br />
                Email: privacy@northpointconsulting.com<br />
                Website: www.northpointconsulting.com
              </p>
            </Content>
          </Section>
        </ContentCard>
      </PageContainer>
    </PageWrapper>
  );
};

export default PrivacyPolicy;
