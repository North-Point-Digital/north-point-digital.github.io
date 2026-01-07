import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaChartLine, FaShieldAlt, FaCheckCircle, FaArrowRight } from 'react-icons/fa';
import CalendlyCTA from './CTAButton';
import { trackSectionView, trackButtonClick } from '../utils/analytics';
import { caseStudies, DetailedCaseStudy, CaseStudy } from '../data/caseStudies';

const Section = styled.section`
  padding: 5rem 2rem;
  position: relative;
  overflow: hidden;
`;

const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 4rem;
`;

const Title = styled(motion.h2)`
  font-size: clamp(2rem, 4vw, 3rem);
  color: white;
  margin-bottom: 1rem;
`;

const Subtitle = styled(motion.p)`
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.8);
  max-width: 600px;
  margin: 0 auto;
`;

const CaseStudiesGrid = styled.div`
  display: grid;
  gap: 2rem;
  grid-template-columns: 1fr;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const CaseStudyCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 20px;
  padding: 2.5rem;
  position: relative;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  
  &:hover {
    transform: translateY(-5px);
    background: rgba(255, 255, 255, 0.15);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
    
    .read-more {
      transform: translateX(5px);
    }
  }
`;

const CaseStudyLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const ReadMore = styled.div`
  margin-top: 1.5rem;
  padding-top: 1.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: rgba(255, 255, 255, 0.9);
  font-weight: 600;
  font-size: 0.95rem;
  transition: all 0.3s ease;
  
  svg {
    transition: transform 0.3s ease;
  }
`;

const ClientHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
`;

const ClientLogo = styled.img`
  width: 60px;
  height: 60px;
  object-fit: contain;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.1);
  padding: 0.5rem;
`;

const ClientInfo = styled.div`
  flex: 1;
  
  h3 {
    color: white;
    font-size: 1.5rem;
    margin-bottom: 0.25rem;
  }
  
  p {
    color: rgba(255, 255, 255, 0.7);
    font-size: 0.9rem;
  }
`;

const Challenge = styled.div`
  margin-bottom: 1.5rem;
  
  h4 {
    color: rgba(255, 255, 255, 0.9);
    font-size: 1rem;
    margin-bottom: 0.5rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    
    svg {
      color: #ff6b6b;
    }
  }
  
  p {
    color: rgba(255, 255, 255, 0.8);
    line-height: 1.6;
    font-size: 0.95rem;
  }
`;

const Solution = styled.div`
  margin-bottom: 1.5rem;
  
  h4 {
    color: rgba(255, 255, 255, 0.9);
    font-size: 1rem;
    margin-bottom: 0.5rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    
    svg {
      color: #4ecdc4;
    }
  }
  
  p {
    color: rgba(255, 255, 255, 0.8);
    line-height: 1.6;
    font-size: 0.95rem;
  }
`;

const Results = styled.div`
  margin-top: auto;
  padding-top: 1.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  
  h4 {
    color: rgba(255, 255, 255, 0.9);
    font-size: 1rem;
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    
    svg {
      color: #51cf66;
    }
  }
`;

const ResultsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  
  li {
    color: rgba(255, 255, 255, 0.9);
    padding: 0.5rem 0;
    display: flex;
    align-items: flex-start;
    gap: 0.75rem;
    font-size: 0.95rem;
    
    svg {
      color: #51cf66;
      margin-top: 0.2rem;
      flex-shrink: 0;
    }
  }
`;

const MetricHighlight = styled.span`
  color: #51cf66;
  font-weight: 600;
`;

const FloatingShape = styled(motion.div)`
  position: absolute;
  width: 300px;
  height: 300px;
  background: radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, transparent 70%);
  border-radius: 50%;
  filter: blur(40px);
  z-index: -1;
`;

interface CaseStudySectionProps {
  caseStudies?: DetailedCaseStudy[];
}

const CaseStudySection: React.FC<CaseStudySectionProps> = ({ 
  caseStudies: customCaseStudies 
}) => {
  const displayCaseStudies = customCaseStudies || caseStudies;
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            trackSectionView('Case Studies');
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <Section id="case-studies" ref={sectionRef}>
      <FloatingShape
        animate={{
          x: [0, 100, 0],
          y: [0, -100, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear',
        }}
        style={{ top: '10%', left: '-10%' }}
      />
      <FloatingShape
        animate={{
          x: [0, -100, 0],
          y: [0, 100, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'linear',
        }}
        style={{ bottom: '10%', right: '-10%' }}
      />
      
      <Container>
        <SectionHeader>
          <Title
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Case Studies
          </Title>
          <Subtitle
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Real results from real clients. See how we've helped businesses reduce costs, improve security, and accelerate innovation.
          </Subtitle>
        </SectionHeader>

        <CaseStudiesGrid
          as={motion.div}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {displayCaseStudies.map((caseStudy, index) => (
            <CaseStudyCard
              key={caseStudy.slug || index}
              variants={itemVariants}
            >
              <CaseStudyLink
                to={`/case-studies/${caseStudy.slug}`}
                onClick={() => trackButtonClick(`Case Study: ${caseStudy.clientName}`, 'case_study_card')}
              >
                <ClientHeader>
                  {caseStudy.logo && (
                    <ClientLogo 
                      src={caseStudy.logo} 
                      alt={`${caseStudy.clientName} logo`}
                      loading="lazy"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = 'none';
                      }}
                    />
                  )}
                  <ClientInfo>
                    <h3>{caseStudy.clientName}</h3>
                    {caseStudy.industry && <p>{caseStudy.industry}</p>}
                  </ClientInfo>
                </ClientHeader>

                <Challenge>
                  <h4>
                    <FaShieldAlt />
                    Challenge
                  </h4>
                  <p>{caseStudy.challenge}</p>
                </Challenge>

                <Solution>
                  <h4>
                    <FaCheckCircle />
                    Solution
                  </h4>
                  <p>{caseStudy.solution}</p>
                </Solution>

                <Results>
                  <h4>
                    <FaChartLine />
                    Results
                  </h4>
                  <ResultsList>
                    {caseStudy.results.map((result, resultIndex) => (
                      <li key={resultIndex}>
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
                  </ResultsList>
                </Results>

                <ReadMore className="read-more">
                  Read Full Case Study
                  <FaArrowRight />
                </ReadMore>
              </CaseStudyLink>
            </CaseStudyCard>
          ))}
        </CaseStudiesGrid>

        <CalendlyCTA delay={0.8} />
      </Container>
    </Section>
  );
};

export default CaseStudySection;

