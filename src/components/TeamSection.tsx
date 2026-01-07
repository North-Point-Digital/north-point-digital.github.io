import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaUser } from 'react-icons/fa';
import CalendlyCTA from './CTAButton';

const Section = styled.section`
  padding: 5rem 2rem;
  background: #fff;
  position: relative;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 4rem;
`;

const Title = styled(motion.h2)`
  font-size: clamp(2rem, 4vw, 3rem);
  color: #333;
  margin-bottom: 1rem;
`;

const Subtitle = styled(motion.p)`
  font-size: 1.2rem;
  color: #666;
  max-width: 600px;
  margin: 0 auto;
`;

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 3rem;
  margin-top: 3rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }
`;

const TeamMember = styled(motion.div)`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MemberImage = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  overflow: hidden;
  margin-bottom: 1.5rem;
  border: 4px solid #f0f0f0;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:hover {
    transform: scale(1.05);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
  }
  
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    object-position: center;
    display: block;
  }
  
  @media (max-width: 768px) {
    width: 180px;
    height: 180px;
  }
`;

const PlaceholderIcon = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(255, 255, 255, 0.7);
  
  svg {
    font-size: 5rem;
    
    @media (max-width: 768px) {
      font-size: 4rem;
    }
  }
`;

const MemberName = styled.h3`
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 0.5rem;
  font-weight: 600;
`;

const MemberRole = styled.p`
  font-size: 1rem;
  color: #667eea;
  margin-bottom: 1rem;
  font-weight: 500;
`;

const MemberBio = styled.p`
  font-size: 0.95rem;
  color: #666;
  line-height: 1.6;
  max-width: 300px;
  margin: 0 auto;
`;

interface TeamMemberData {
  name: string;
  role: string;
  bio: string;
  image: string;
}

interface TeamSectionProps {
  teamMembers?: TeamMemberData[];
}

const TeamSection: React.FC<TeamSectionProps> = ({ 
  teamMembers = []
}) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <Section id="team">
      <Container>
        <SectionHeader>
          <Title
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Our Team
          </Title>
          <Subtitle
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Meet the experts behind North Point Digital
          </Subtitle>
        </SectionHeader>

        {teamMembers.length > 0 && (
          <TeamGrid
            as={motion.div}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {teamMembers.map((member, index) => {
              const hasImage = member.image && member.image.trim() !== '';

              return (
                <TeamMember key={index} variants={itemVariants}>
                  <MemberImage>
                    {hasImage ? (
                      <img 
                        src={member.image} 
                        alt={member.name}
                        loading="lazy"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          const placeholder = target.parentElement?.querySelector('.placeholder-icon') as HTMLElement;
                          if (placeholder) placeholder.style.display = 'flex';
                        }} 
                      />
                    ) : null}
                    <PlaceholderIcon className="placeholder-icon" style={{ display: hasImage ? 'none' : 'flex' }}>
                      <FaUser />
                    </PlaceholderIcon>
                  </MemberImage>
                  <MemberName>{member.name}</MemberName>
                  <MemberRole>{member.role}</MemberRole>
                  <MemberBio>{member.bio}</MemberBio>
                </TeamMember>
              );
            })}
          </TeamGrid>
        )}

        <CalendlyCTA delay={0.6} />
      </Container>
    </Section>
  );
};

export default TeamSection;

