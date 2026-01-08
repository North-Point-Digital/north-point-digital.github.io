import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaArrowLeft, FaChartLine, FaShieldAlt, FaCheckCircle, FaDollarSign, FaClock, FaUsers } from 'react-icons/fa';
import CalendlyCTA from '../components/CTAButton';
import { getCaseStudyBySlug, IconType } from '../data/caseStudies';

const getIconComponent = (iconType?: IconType) => {
  switch (iconType) {
    case 'dollar':
      return <FaDollarSign />;
    case 'shield':
      return <FaShieldAlt />;
    case 'clock':
      return <FaClock />;
    case 'chart':
      return <FaChartLine />;
    default:
      return <FaChartLine />;
  }
};

const PageWrapper = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
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

const BackButton = styled(motion.button)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: white;
  border-radius: 50px;
  font-weight: 600;
  cursor: pointer;
  margin-bottom: 2rem;
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: translateX(-5px);
  }
`;

const HeroSection = styled.section`
  text-align: center;
  margin-bottom: 4rem;
`;

const ClientHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  margin-bottom: 2rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

const ClientLogo = styled.img`
  width: 120px;
  height: 120px;
  object-fit: contain;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.1);
  padding: 1rem;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
`;

const ClientInfo = styled.div`
  text-align: left;
  
  @media (max-width: 768px) {
    text-align: center;
  }
  
  h1 {
    color: white;
    font-size: clamp(2rem, 4vw, 3rem);
    margin-bottom: 0.5rem;
  }
  
  p {
    color: rgba(255, 255, 255, 0.8);
    font-size: 1.2rem;
  }
`;

const Title = styled(motion.h1)`
  font-size: clamp(2rem, 4vw, 3rem);
  color: white;
  margin-bottom: 1rem;
  font-weight: 700;
`;

const Subtitle = styled(motion.p)`
  font-size: clamp(1.1rem, 2vw, 1.3rem);
  color: rgba(255, 255, 255, 0.9);
  max-width: 800px;
  margin: 0 auto 3rem;
  line-height: 1.6;
`;

const ContentSection = styled.section`
  display: grid;
  gap: 3rem;
  margin-bottom: 4rem;
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

const MetricsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const MetricCard = styled(motion.div)`
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
    font-size: 2rem;
    color: white;
    margin-bottom: 0.5rem;
  }
  
  p {
    color: rgba(255, 255, 255, 0.8);
    font-size: 1rem;
  }
`;

const MetricHighlight = styled.span`
  color: #51cf66;
  font-weight: 600;
`;

const CaseStudyDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const caseStudy = slug ? getCaseStudyBySlug(slug) : undefined;

  if (!caseStudy) {
    return (
      <PageWrapper>
        <PageContainer>
          <BackButton
            onClick={() => navigate('/#case-studies')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaArrowLeft />
            Back to Case Studies
          </BackButton>
          <HeroSection>
            <Title>Case Study Not Found</Title>
            <Subtitle>The case study you're looking for doesn't exist.</Subtitle>
          </HeroSection>
        </PageContainer>
      </PageWrapper>
    );
  }

  return (
    <PageWrapper>
      <PageContainer>
        <BackButton
          onClick={() => navigate('/#case-studies')}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <FaArrowLeft />
          Back to Case Studies
        </BackButton>

        <HeroSection>
          <ClientHeader>
            {caseStudy.logo && (
              <ClientLogo 
                src={caseStudy.logo} 
                alt={`${caseStudy.clientName} logo`}
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none';
                }}
              />
            )}
            <ClientInfo>
              <Title>{caseStudy.pageTitle || caseStudy.clientName}</Title>
              {caseStudy.industry && <p>{caseStudy.industry}</p>}
            </ClientInfo>
          </ClientHeader>
          <Subtitle>
            {caseStudy.pageSubtitle || caseStudy.detailedChallenge || caseStudy.challenge}
          </Subtitle>
        </HeroSection>

        <ContentSection>
          {caseStudy.executiveSummary && (
            <Card
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <CardTitle>
                <FaUsers />
                Executive Summary
              </CardTitle>
              <CardContent>
                <p style={{ whiteSpace: 'pre-line' }}>{caseStudy.executiveSummary}</p>
              </CardContent>
            </Card>
          )}

          <Card
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: caseStudy.executiveSummary ? 0.1 : 0 }}
          >
            <CardTitle>
              <FaShieldAlt />
              The Challenge
            </CardTitle>
            <CardContent>
              <p style={{ whiteSpace: 'pre-line' }}>{caseStudy.detailedChallenge || caseStudy.challenge}</p>
            </CardContent>
          </Card>

          {caseStudy.whyChooseUs && (
            <Card
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: caseStudy.executiveSummary ? 0.2 : 0.1 }}
            >
              <CardTitle>
                <FaUsers />
                Why North Point Digital?
              </CardTitle>
              <CardContent>
                <p style={{ whiteSpace: 'pre-line' }}>{caseStudy.whyChooseUs}</p>
              </CardContent>
            </Card>
          )}

          <Card
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: caseStudy.executiveSummary || caseStudy.whyChooseUs ? 0.3 : 0.2 }}
          >
            <CardTitle>
              <FaCheckCircle />
              Our Solution
            </CardTitle>
            <CardContent>
              <p style={{ whiteSpace: 'pre-line' }}>{caseStudy.detailedSolution || caseStudy.solution}</p>
              {caseStudy.technologies && caseStudy.technologies.length > 0 && (
                <div>
                  <h3 style={{ marginTop: '2rem', marginBottom: '1rem' }}>Technologies Used:</h3>
                  <ul>
                    {caseStudy.technologies.map((tech, index) => (
                      <li key={index}>
                        <FaCheckCircle />
                        <span>{tech}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </CardContent>
          </Card>

          {caseStudy.metrics && caseStudy.metrics.length > 0 && (
            <Card
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <CardTitle>
                <FaChartLine />
                Key Metrics
              </CardTitle>
              <MetricsGrid>
                {caseStudy.metrics.map((metric, index) => (
                  <MetricCard
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  >
                    {getIconComponent(metric.icon)}
                    <h3>
                      {metric.value.split(/(\d+%)/).map((part, i) => 
                        /\d+%/.test(part) ? (
                          <MetricHighlight key={i}>{part}</MetricHighlight>
                        ) : (
                          part
                        )
                      )}
                    </h3>
                    <p>{metric.label}</p>
                  </MetricCard>
                ))}
              </MetricsGrid>
            </Card>
          )}

          <Card
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <CardTitle>
              <FaChartLine />
              Results
            </CardTitle>
            <CardContent>
              <ul>
                {caseStudy.results.map((result, index) => (
                  <li key={index}>
                    <FaCheckCircle />
                    <span>
                      {result.split(/(\d+%)/).map((part, i) => 
                        /\d+%/.test(part) ? (
                          <MetricHighlight key={i}>{part}</MetricHighlight>
                        ) : (
                          part
                        )
                      )}
                    </span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {caseStudy.testimonial && (
            <Card
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <CardTitle>
                <FaUsers />
                Client Testimonial
              </CardTitle>
              <CardContent>
                <blockquote style={{ 
                  fontStyle: 'italic', 
                  fontSize: '1.2rem', 
                  lineHeight: '1.8',
                  marginBottom: '1.5rem',
                  borderLeft: '4px solid rgba(255, 255, 255, 0.3)',
                  paddingLeft: '1.5rem'
                }}>
                  "{caseStudy.testimonial.quote}"
                </blockquote>
                <p style={{ marginBottom: 0 }}>
                  <strong>{caseStudy.testimonial.author}</strong>
                  {caseStudy.testimonial.role && `, ${caseStudy.testimonial.role}`}
                </p>
              </CardContent>
            </Card>
          )}

          {caseStudy.timeline && (
            <Card
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
            >
              <CardTitle>
                <FaClock />
                Timeline
              </CardTitle>
              <CardContent>
                <p>{caseStudy.timeline}</p>
              </CardContent>
            </Card>
          )}
        </ContentSection>

        <CalendlyCTA delay={1.2} />
      </PageContainer>
    </PageWrapper>
  );
};

export default CaseStudyDetail;

