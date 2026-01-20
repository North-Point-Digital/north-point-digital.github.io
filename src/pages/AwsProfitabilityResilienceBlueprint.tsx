import React, { useLayoutEffect, useRef } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaClipboardCheck, FaShieldAlt, FaDollarSign, FaAward } from 'react-icons/fa';
import CounterSection from '../components/CounterSection';
import ProcessTimelineSection from '../components/ProcessTimelineSection';
import FAQSection from '../components/FAQSection';
import SEO from '../components/SEO';

const PageWrapper = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding-top: 80px;
  position: relative;
  overflow: hidden;
  background-image: url('/product_offer_hero_bg.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(102, 126, 234, 0.7) 0%, rgba(118, 75, 162, 0.7) 100%);
    z-index: 1;
  }
`;

const HeroSection = styled.section`
  text-align: center;
  margin-bottom: 3rem;
  min-height: calc(100vh - 140px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 3rem 0;
`;

const PageContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 2rem;
  position: relative;
  z-index: 2;
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
  margin-bottom: 3rem;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`;

const CTAButton = styled(motion.button)`
  padding: 1rem 2.5rem;
  background: white;
  color: #667eea;
  border: none;
  border-radius: 50px;
  font-weight: 600;
  font-size: 1.2rem;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  }
`;

const CTA_LINK = 'https://calendly.com/david-northpointdigital/30min';

const ContentSection = styled.section`
  display: grid;
  gap: 3rem;
  margin-bottom: 5rem;
`;

const Card = styled(motion.div)`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 20px;
  padding: 3rem;
  color: white;
`;

const CardTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 1.5rem;
  color: white;
`;

const CardContent = styled.div`
  font-size: 1.1rem;
  line-height: 1.8;
  color: rgba(255, 255, 255, 0.9);

  p {
    margin-bottom: 1.5rem;
  }

  ul {
    list-style: none;
    padding: 0;

    li {
      padding: 0.5rem 0;
      display: flex;
      align-items: center;
      gap: 1rem;
      
      svg {
        color: white;
        font-size: 1.2rem;
        flex-shrink: 0;
      }
    }
  }
`;

const FeatureGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`;

const FeatureCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 15px;
  padding: 2rem;
  text-align: center;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    background: rgba(255, 255, 255, 0.15);
  }
  
  svg {
    font-size: 3rem;
    color: white;
    margin-bottom: 1rem;
  }
  
  h3 {
    color: white;
    font-size: 1.3rem;
    margin-bottom: 0.5rem;
  }
  
  p {
    color: rgba(255, 255, 255, 0.8);
    font-size: 1rem;
  }
`;

const CTAHighlight = styled(motion.div)`
  background: rgba(255, 255, 255, 0.12);
  border: 1px solid rgba(255, 255, 255, 0.25);
  border-radius: 20px;
  padding: 3rem;
  text-align: center;
  color: white;
  backdrop-filter: blur(12px);
`;

const CTAHeading = styled.h3`
  font-size: clamp(1.8rem, 4vw, 2.5rem);
  margin-bottom: 1rem;
  color: white;
`;

const CTAText = styled.p`
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.85);
  margin-bottom: 2rem;
  max-width: 640px;
  margin-left: auto;
  margin-right: auto;
`;

const CTAButtonRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
`;

const SecondaryCTAButton = styled(CTAButton)`
  background: transparent;
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.6);
`;

const FinalCTASection = styled(motion.section)`
  margin-top: 6rem;
  text-align: center;
  color: white;
`;

const FinalCTATitle = styled.h2`
  font-size: clamp(2rem, 4vw, 3rem);
  margin-bottom: 1rem;
`;

const FinalCTAText = styled.p`
  font-size: 1.15rem;
  color: rgba(255, 255, 255, 0.85);
  margin-bottom: 2.5rem;
`;

const AwsProfitabilityResilienceBlueprint: React.FC = () => {
  const features = [
    {
      icon: <FaDollarSign />,
      title: "Cost Optimisation",
      description: "Identify and eliminate waste in your AWS spending"
    },
    {
      icon: <FaShieldAlt />,
      title: "Enhanced Security",
      description: "Implement best practices for cloud security"
    },
    {
      icon: <FaAward />,
      title: "Best Practices",
      description: "Align with AWS Well-Architected Framework"
    },
  ];

  const heroRef = useRef<HTMLElement | null>(null);

  useLayoutEffect(() => {
    const previousRestoration = window.history.scrollRestoration;
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    heroRef.current?.scrollIntoView({ behavior: 'auto', block: 'start', inline: 'nearest' });

    return () => {
      if ('scrollRestoration' in window.history) {
        window.history.scrollRestoration = previousRestoration ?? 'auto';
      }
    };
  }, []);

  return (
    <PageWrapper>
      <PageContainer>
        <SEO
          title="Security & Cost Optimisation Blueprint | North Point Digital"
          description="Comprehensive AWS Well-Architected review focused on security and cost optimisation, targeting 25%+ savings while strengthening your cloud posture."
          canonical="https://northpointdigital.com/aws-profitability-resilience-blueprint"
          jsonLd={{
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Security & Cost Optimisation Blueprint",
            description:
              "Comprehensive AWS Well-Architected review focused on security and cost optimisation, targeting 25%+ savings while strengthening your cloud posture.",
            url: "https://northpointdigital.com/aws-profitability-resilience-blueprint",
            provider: {
              "@type": "Organization",
              name: "North Point Digital",
              url: "https://northpointdigital.com/"
            },
            areaServed: {
              "@type": "Country",
              name: "United Kingdom"
            },
            serviceType: "AWS Security and Cost Optimisation Consulting"
          }}
        />
        <HeroSection ref={heroRef}>
          <Title
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Security & Cost Optimisation Blueprint
          </Title>
          <Subtitle
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Comprehensive Well-Architected Review that targets 25%+ cost reduction while
            strengthening security. Risk-free engagement with no upfront cost.
          </Subtitle>
          <CTAButton
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            as={motion.a}
            href={CTA_LINK}
            target="_blank"
            rel="noopener noreferrer"
          >
            Book A Call Today
          </CTAButton>
          
          <CounterSection />
        </HeroSection>

        <ContentSection>
          <Card
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <CardTitle>Your Blueprint to Secure and Cost-Effective Infrastructure</CardTitle>
            <CardContent>
              <p>
                Our Security & Cost Optimisation Blueprint is a comprehensive Well-Architected Review
                focused on the two pillars that deliver immediate ROI: Cost Optimisation and Security.
                This isn't a theoretical audit—we identify actionable improvements and remediate critical
                issues during the engagement.
              </p>
              <p>
                We audit your AWS accounts and infrastructure, applying proven cost-saving strategies,
                implementing budget alerts, and targeting a minimum 25% reduction in your AWS spend. With
                infrastructure misconfigurations being a leading cause of data breaches, our experts identify
                and remediate high-risk security vulnerabilities during the review—delivering immediate value.
              </p>
              <p>
                <ul>
                  <li>
                    <FaClipboardCheck />
                    Complete infrastructure assessment by AWS-certified experts
                  </li>
                  <li>
                    <FaClipboardCheck />
                    Detailed cost optimisation roadmap with tagging strategies and budget alerts (targeting 25%+ reduction)
                  </li>
                  <li>
                    <FaClipboardCheck />
                    Security vulnerability remediation—we fix critical issues during the engagement
                  </li>
                  <li>
                    <FaClipboardCheck />
                    Risk-free engagement with no upfront cost and no long-term commitments
                  </li>
                </ul>
              </p>
              <CTAButton
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                as={motion.a}
                href={CTA_LINK}
                target="_blank"
                rel="noopener noreferrer"
              >
                Book A Call Today
              </CTAButton>
            </CardContent>
          </Card>

          <ProcessTimelineSection framed />
          <CTAHighlight
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <CTAHeading>Ready for rapid cost and security wins?</CTAHeading>
            <CTAText>
              Kick off your Security & Cost Optimisation Blueprint and get actionable changes in motion within two weeks.
            </CTAText>
            <CTAButtonRow>
              <CTAButton
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                as={motion.a}
                href={CTA_LINK}
                target="_blank"
                rel="noopener noreferrer"
              >
                Book A Call Today
              </CTAButton>
              <SecondaryCTAButton
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                as={motion.a}
                href={CTA_LINK}
                target="_blank"
                rel="noopener noreferrer"
              >
                See Available Times
              </SecondaryCTAButton>
            </CTAButtonRow>
          </CTAHighlight>
          <FAQSection framed />

        </ContentSection>
        
        <FeatureGrid>
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
            >
              {feature.icon}
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </FeatureCard>
          ))}
        </FeatureGrid>

        <FinalCTASection
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <FinalCTATitle>Let’s transform your AWS foundation</FinalCTATitle>
          <FinalCTAText>
            Book a discovery call and we'll deliver a tailored optimisation roadmap with measurable ROI.
          </FinalCTAText>
          <CTAButtonRow>
            <CTAButton
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              as={motion.a}
              href={CTA_LINK}
              target="_blank"
              rel="noopener noreferrer"
            >
              Schedule Your Call
            </CTAButton>
            <SecondaryCTAButton
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              as={motion.a}
              href={CTA_LINK}
              target="_blank"
              rel="noopener noreferrer"
            >
              Talk With An Expert
            </SecondaryCTAButton>
          </CTAButtonRow>
        </FinalCTASection>
      </PageContainer>
    </PageWrapper>
  );
};

export default AwsProfitabilityResilienceBlueprint;

