import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaClipboardCheck, FaChartLine, FaShieldAlt, FaDollarSign, FaRocket, FaAward } from 'react-icons/fa';

const PageWrapper = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
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

const AwsProfitabilityResilienceBlueprint: React.FC = () => {
  const features = [
    {
      icon: <FaDollarSign />,
      title: "Cost Optimization",
      description: "Identify and eliminate waste in your AWS spending"
    },
    {
      icon: <FaShieldAlt />,
      title: "Enhanced Security",
      description: "Implement best practices for cloud security"
    },
    {
      icon: <FaChartLine />,
      title: "Performance Boost",
      description: "Optimize for speed and reliability"
    },
    {
      icon: <FaRocket />,
      title: "Scalability",
      description: "Build systems that grow with your business"
    },
    {
      icon: <FaAward />,
      title: "Best Practices",
      description: "Align with AWS Well-Architected Framework"
    },
    {
      icon: <FaClipboardCheck />,
      title: "Free Assessment",
      description: "AWS-funded comprehensive review"
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
            AWS Profitability & Resilience Blueprint
          </Title>
          <Subtitle
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Transform your cloud infrastructure with a comprehensive Well-Architected Review
            that drives profitability and ensures business resilience
          </Subtitle>
          <CTAButton
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Your Free Assessment
          </CTAButton>
        </HeroSection>

        <ContentSection>
          <Card
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <CardTitle>What is the AWS Profitability & Resilience Blueprint?</CardTitle>
            <CardContent>
              <p>
                Our AWS Profitability & Resilience Blueprint is a comprehensive service built on 
                the foundation of AWS Well-Architected Reviews. We go beyond standard assessments 
                to deliver actionable insights that directly impact your bottom line.
              </p>
              <p>
                This FREE service, funded by AWS, provides you with a detailed analysis of your 
                cloud architecture across five critical pillars: Operational Excellence, Security, 
                Reliability, Performance Efficiency, and Cost Optimization.
              </p>
            </CardContent>
          </Card>

          <Card
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <CardTitle>What You'll Receive</CardTitle>
            <CardContent>
              <ul>
                <li>
                  <FaClipboardCheck />
                  Comprehensive 50+ point assessment of your AWS infrastructure
                </li>
                <li>
                  <FaChartLine />
                  Detailed cost analysis with savings opportunities identified
                </li>
                <li>
                  <FaShieldAlt />
                  Security vulnerability assessment and remediation roadmap
                </li>
                <li>
                  <FaRocket />
                  Performance optimization recommendations
                </li>
                <li>
                  <FaDollarSign />
                  ROI projections for recommended improvements
                </li>
                <li>
                  <FaAward />
                  Priority action plan aligned with your business goals
                </li>
              </ul>
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
      </PageContainer>
    </PageWrapper>
  );
};

export default AwsProfitabilityResilienceBlueprint;

