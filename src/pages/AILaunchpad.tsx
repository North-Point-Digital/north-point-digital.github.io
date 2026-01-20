import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { FaChartPie, FaRoad, FaFlask, FaDownload } from 'react-icons/fa';
import FAQSection from '../components/FAQSection';
import SEO from '../components/SEO';

const PageWrapper = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #56ccf2 0%, #2f80ed 100%);
  padding-top: 80px;
`;

const PageContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 2rem;
`;

const HeroSection = styled.section`
  text-align: center;
  margin-bottom: 5rem;
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
  color: #2f80ed;
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

const FormWrapper = styled.div`
  .hs-form {
    width: 100%;
  }

  .hs-form-field {
    margin-bottom: 1.5rem;
  }

  .hs-label {
    display: block;
    color: rgba(255, 255, 255, 0.9);
    margin-bottom: 0.5rem;
    font-weight: 500;
  }

  .hs-input {
    width: 100%;
    padding: 0.75rem 1rem;
    border: 1px solid rgba(255, 255, 255, 0.3);
    border-radius: 4px;
    background: rgba(255, 255, 255, 0.1);
    color: white;
    transition: all 0.3s ease;

    &:hover, &:focus {
      border-color: white;
      background: rgba(255, 255, 255, 0.15);
      outline: none;
    }

    &::placeholder {
      color: rgba(255, 255, 255, 0.5);
    }
  }

  .hs-button {
    padding: 1rem 2rem;
    background: white;
    color: #2f80ed;
    border: none;
    border-radius: 50px;
    font-weight: 600;
    font-size: 1.1rem;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
    }
  }

  .hs-error-msgs {
    color: #ffcccc;
    font-size: 0.875rem;
    margin-top: 0.25rem;
  }
`;

const AILaunchpad: React.FC = () => {
  const navigate = useNavigate();
  const CTA_LINK = 'https://calendly.com/david-northpointdigital/30min';

  const features = [
    {
      icon: <FaFlask />,
      title: "Working Prototype",
      description: "AWS-powered AI PoC built with your data in 6 weeks"
    },
    {
      icon: <FaChartPie />,
      title: "Full Cost Analysis",
      description: "Complete business case with production cost projections"
    },
    {
      icon: <FaRoad />,
      title: "Production Roadmap",
      description: "Clear path to scalable, enterprise-grade AI solution"
    },
  ];

  return (
    <PageWrapper>
      <PageContainer>
        <SEO
          title="AI Launchpad: Validate Your AI Strategy in 6 Weeks | North Point Digital"
          description="Fixed-fee AWS AI proof of concept that validates your AI strategy in six weeks with a working prototype, cost analysis, and production roadmap."
          canonical="https://northpointdigital.com/ai-launchpad"
          jsonLd={{
            "@context": "https://schema.org",
            "@type": "Service",
            name: "AI Launchpad",
            description:
              "Fixed-fee AWS AI proof of concept that validates your AI strategy in six weeks with a working prototype, cost analysis, and production roadmap.",
            url: "https://northpointdigital.com/ai-launchpad",
            provider: {
              "@type": "Organization",
              name: "North Point Digital",
              url: "https://northpointdigital.com/"
            },
            areaServed: {
              "@type": "Country",
              name: "United Kingdom"
            },
            serviceType: "AI Proof of Concept and Strategy Validation"
          }}
        />
        <HeroSection>
          <Title
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Validate Your AI Strategy in 6 Weeks
          </Title>
          <Subtitle
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            From idea to working AI prototype in 14 days. Fixed-fee engagement with complete
            production costings and implementation roadmap.
          </Subtitle>
          <CTAButtonRow>
            <CTAButton
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
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
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/ai-adoption-playbook')}
            >
              <FaDownload style={{ marginRight: '0.5rem' }} /> Download Free Playbook
            </SecondaryCTAButton>
          </CTAButtonRow>
        </HeroSection>

        <ContentSection>
          <Card
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <CardTitle>The North Point AI Launchpad Program</CardTitle>
            <CardContent>
              <p>
                The North Point AI Launchpad is your definitive first step in leveraging AI to gain a
                competitive edge. This fixed-fee, two-week program transforms your business challenges
                into a concrete, executable AI solution with clear production economics.
              </p>
              <p>
                <strong>We don't build generic chatbots; we build business value.</strong>
              </p>
              <p>
                Using your company's proprietary data and market-leading AWS AI services (including Amazon
                Bedrock, SageMaker, and others), we build a tangible, working prototype of a customised AI
                solution. This is not a theoretical exercise—it's a functioning proof of concept that validates
                your specific use case and provides a clear path to production deployment.
              </p>
            </CardContent>
          </Card>

          <Card
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <CardTitle>What You'll Walk Away With</CardTitle>
            <CardContent>
              <ul>
                <li>
                  <FaFlask />
                  A working AI Proof of Concept built with your data and validated on AWS infrastructure
                </li>
                <li>
                  <FaChartPie />
                  Complete production economics: executive summary with detailed cost projections and ROI analysis
                </li>
                <li>
                  <FaRoad />
                  Step-by-step implementation roadmap outlining exactly how to scale the prototype into an enterprise-grade solution
                </li>
              </ul>
              <CTAButtonRow style={{ marginTop: '2rem' }}>
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
                  onClick={() => navigate('/ai-adoption-playbook')}
                >
                  <FaDownload style={{ marginRight: '0.5rem' }} /> Download Free Playbook
                </SecondaryCTAButton>
              </CTAButtonRow>
            </CardContent>
          </Card>
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

        <CTAHighlight
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          style={{ marginTop: '3rem' }}
        >
          <CTAHeading>Ready to validate your AI strategy?</CTAHeading>
          <CTAText>Book a free strategy call or download the playbook to get started.</CTAText>
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
              onClick={() => navigate('/ai-adoption-playbook')}
            >
              <FaDownload style={{ marginRight: '0.5rem' }} /> Download Free Playbook
            </SecondaryCTAButton>
          </CTAButtonRow>
        </CTAHighlight>

        <div style={{ marginTop: '5rem' }}>
          <FAQSection framed />
        </div>
      </PageContainer>
    </PageWrapper>
  );
};

export default AILaunchpad;

