import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaCloud, FaExchangeAlt, FaCogs, FaShieldAlt, FaRocket, FaCode } from 'react-icons/fa';
import FAQSection from '../components/FAQSection';
import CalendlyCTA from '../components/CTAButton';

const PageWrapper = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #2d8659 0%, #1e5f3f 100%);
  padding-top: 80px;
  position: relative;
  overflow: hidden;
`;

const PageContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 2rem;
  position: relative;
  z-index: 2;
`;

const HeroSection = styled.section`
  text-align: center;
  margin-bottom: 4rem;
  min-height: calc(100vh - 200px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 3rem 0;
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
  line-height: 1.6;
`;

const CTAButton = styled(motion.a)`
  padding: 1rem 2.5rem;
  background: white;
  color: #2d8659;
  border: none;
  border-radius: 50px;
  font-weight: 600;
  font-size: 1.2rem;
  cursor: pointer;
  text-decoration: none;
  display: inline-block;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  }
`;

const CTA_LINK = 'https://calendly.com/david-northpointdigital/north-point-digital-initial-call';

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
  display: flex;
  align-items: center;
  gap: 1rem;
  
  svg {
    font-size: 2rem;
  }
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
      padding: 0.75rem 0;
      display: flex;
      align-items: flex-start;
      gap: 1rem;
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);
      
      &:last-child {
        border-bottom: none;
      }

      svg {
        color: #51cf66;
        font-size: 1.2rem;
        flex-shrink: 0;
        margin-top: 0.3rem;
      }
    }
  }
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const FeatureCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 15px;
  padding: 2rem;
  text-align: center;
  
  svg {
    font-size: 2.5rem;
    color: #51cf66;
    margin-bottom: 1rem;
  }
  
  h3 {
    font-size: 1.3rem;
    color: white;
    margin-bottom: 0.5rem;
  }
  
  p {
    color: rgba(255, 255, 255, 0.8);
    font-size: 1rem;
    line-height: 1.6;
  }
`;

const BuildBetter: React.FC = () => {
  const features = [
    {
      icon: <FaCloud />,
      title: 'Scalable Infrastructure',
      description: 'Design and build AWS infrastructure that grows with your business'
    },
    {
      icon: <FaExchangeAlt />,
      title: 'Cloud Migrations',
      description: 'Seamless migration to AWS using proven frameworks and methodologies'
    },
    {
      icon: <FaCogs />,
      title: 'Landing Zones',
      description: 'Multi-account AWS architecture with security and governance built-in'
    },
    {
      icon: <FaCode />,
      title: 'DevOps & SRE',
      description: 'Automated CI/CD pipelines and reliable, scalable operations'
    },
    {
      icon: <FaShieldAlt />,
      title: 'Solutions Architecture',
      description: 'Enterprise-grade architecture designed for performance and security'
    },
    {
      icon: <FaRocket />,
      title: 'Modernisation',
      description: 'Transform legacy systems into cloud-native, modern applications'
    }
  ];

  return (
    <PageWrapper>
      <PageContainer>
        <HeroSection>
          <Title
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Build Better
          </Title>
          <Subtitle
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Architecture, migrations, and modernisation. Transform your AWS infrastructure with scalable, secure, and resilient solutions.
          </Subtitle>
          <CTAButton
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href={CTA_LINK}
            target="_blank"
            rel="noopener noreferrer"
          >
            Book A Call Today
          </CTAButton>
        </HeroSection>

        <ContentSection>
          <Card
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <CardTitle>
              <FaCloud />
              What We Build
            </CardTitle>
            <CardContent>
              <p>
                We design and implement AWS infrastructure that's built to last. From initial architecture 
                to full-scale migrations, we deliver solutions that are scalable, secure, and optimised for 
                performance.
              </p>
              <FeaturesGrid>
                {features.map((feature, index) => (
                  <FeatureCard
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                  >
                    {feature.icon}
                    <h3>{feature.title}</h3>
                    <p>{feature.description}</p>
                  </FeatureCard>
                ))}
              </FeaturesGrid>
            </CardContent>
          </Card>

          <Card
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <CardTitle>
              <FaExchangeAlt />
              Cloud Migrations
            </CardTitle>
            <CardContent>
              <p>
                Moving to AWS doesn't have to be complex. We use proven migration frameworks including 
                AWS Migration Acceleration Program (MAP) to ensure smooth, risk-free transitions.
              </p>
              <ul>
                <li>
                  <FaCode />
                  <span>Assessment and planning to identify migration strategy</span>
                </li>
                <li>
                  <FaCode />
                  <span>Phased migration execution with minimal downtime</span>
                </li>
                <li>
                  <FaCode />
                  <span>Infrastructure modernisation during migration</span>
                </li>
                <li>
                  <FaCode />
                  <span>Post-migration optimisation and support</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            <CardTitle>
              <FaCogs />
              Landing Zones & Multi-Account Architecture
            </CardTitle>
            <CardContent>
              <p>
                Enterprise-grade AWS Landing Zones provide a secure, scalable foundation for your cloud 
                operations. We design multi-account architectures with proper governance, security, and 
                cost management built in from day one.
              </p>
              <ul>
                <li>
                  <FaCode />
                  <span>Multi-account AWS Organisation structure</span>
                </li>
                <li>
                  <FaCode />
                  <span>Centralised security and compliance controls</span>
                </li>
                <li>
                  <FaCode />
                  <span>Automated account provisioning and governance</span>
                </li>
                <li>
                  <FaCode />
                  <span>Cost allocation and budget management</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
          >
            <CardTitle>
              <FaRocket />
              DevOps & Site Reliability Engineering
            </CardTitle>
            <CardContent>
              <p>
                Automate deployments, improve reliability, and scale operations with modern DevOps practices. 
                We build CI/CD pipelines, implement infrastructure as code, and establish SRE practices 
                that keep your systems running smoothly.
              </p>
              <ul>
                <li>
                  <FaCode />
                  <span>CI/CD pipeline design and implementation</span>
                </li>
                <li>
                  <FaCode />
                  <span>Infrastructure as Code (Terraform, CloudFormation, CDK)</span>
                </li>
                <li>
                  <FaCode />
                  <span>Monitoring, alerting, and observability</span>
                </li>
                <li>
                  <FaCode />
                  <span>Automated testing and deployment strategies</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.4 }}
          >
            <CardTitle>
              <FaShieldAlt />
              Solutions Architecture
            </CardTitle>
            <CardContent>
              <p>
                Every business is unique. We design custom AWS architectures tailored to your specific 
                requirements, ensuring optimal performance, security, and cost efficiency.
              </p>
              <ul>
                <li>
                  <FaCode />
                  <span>Requirements analysis and architecture design</span>
                </li>
                <li>
                  <FaCode />
                  <span>High-availability and disaster recovery planning</span>
                </li>
                <li>
                  <FaCode />
                  <span>Security-first design principles</span>
                </li>
                <li>
                  <FaCode />
                  <span>Performance optimisation and scaling strategies</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </ContentSection>

        <CalendlyCTA delay={1.6} />

        <div style={{ marginTop: '5rem' }}>
          <FAQSection framed />
        </div>
      </PageContainer>
    </PageWrapper>
  );
};

export default BuildBetter;

