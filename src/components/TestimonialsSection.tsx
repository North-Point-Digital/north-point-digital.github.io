import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';

const Section = styled.section`
  padding: 5rem 2rem;
  position: relative;
  overflow: hidden;
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
  color: white;
  margin-bottom: 1rem;
`;

const Subtitle = styled(motion.p)`
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.8);
  max-width: 600px;
  margin: 0 auto;
`;

const TestimonialsGrid = styled.div`
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

const TestimonialCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 20px;
  padding: 2rem;
  position: relative;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    background: rgba(255, 255, 255, 0.15);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  }
`;

const QuoteIcon = styled(FaQuoteLeft)`
  position: absolute;
  top: 1rem;
  right: 1rem;
  font-size: 2rem;
  color: rgba(255, 255, 255, 0.2);
`;

const TestimonialText = styled.p`
  color: rgba(255, 255, 255, 0.9);
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  font-style: italic;
`;

const AuthorInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const AuthorAvatar = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  color: white;
  font-size: 1.2rem;
`;

const AuthorDetails = styled.div`
  flex: 1;
  
  h4 {
    color: white;
    font-size: 1.1rem;
    margin-bottom: 0.25rem;
  }
  
  p {
    color: rgba(255, 255, 255, 0.7);
    font-size: 0.9rem;
  }
`;

const Rating = styled.div`
  display: flex;
  gap: 0.25rem;
  margin-bottom: 1rem;
  
  svg {
    color: #ffd700;
    font-size: 1.2rem;
  }
`;

const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      text: "North Point Digital transformed our business operations. Their cloud migration strategy saved us 40% in infrastructure costs while improving performance.",
      author: "Sarah Johnson",
      position: "CTO, TechStart Inc.",
      rating: 5,
      avatar: "SJ",
    },
    {
      text: "The cybersecurity audit they performed was thorough and eye-opening. We now have robust security measures that give us peace of mind.",
      author: "Michael Chen",
      position: "CEO, SecureFlow",
      rating: 5,
      avatar: "MC",
    },
    {
      text: "Their web development team delivered beyond expectations. Our new platform is fast, beautiful, and our customers love it!",
      author: "Emily Rodriguez",
      position: "Marketing Director, GrowthCo",
      rating: 5,
      avatar: "ER",
    },
    {
      text: "Working with North Point Digital on our mobile app was a game-changer. They understood our vision and made it reality.",
      author: "David Kim",
      position: "Founder, AppVentures",
      rating: 5,
      avatar: "DK",
    },
    {
      text: "Their IT consulting services helped us navigate digital transformation smoothly. Highly recommend their expertise!",
      author: "Lisa Anderson",
      position: "VP Operations, GlobalTech",
      rating: 5,
      avatar: "LA",
    },
    {
      text: "The database optimisation they performed improved our query times by 300%. Incredible technical knowledge!",
      author: "James Wilson",
      position: "Tech Lead, DataDrive",
      rating: 5,
      avatar: "JW",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <Section id="testimonials">
      <Container>
        <SectionHeader>
          <Title
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            What Our Clients Say
          </Title>
          <Subtitle
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Success stories from businesses we've helped transform
          </Subtitle>
        </SectionHeader>
        
        <TestimonialsGrid
          as={motion.div}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <QuoteIcon />
              <Rating>
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </Rating>
              <TestimonialText>"{testimonial.text}"</TestimonialText>
              <AuthorInfo>
                <AuthorAvatar>{testimonial.avatar}</AuthorAvatar>
                <AuthorDetails>
                  <h4>{testimonial.author}</h4>
                  <p>{testimonial.position}</p>
                </AuthorDetails>
              </AuthorInfo>
            </TestimonialCard>
          ))}
        </TestimonialsGrid>
      </Container>
    </Section>
  );
};

export default TestimonialsSection;

