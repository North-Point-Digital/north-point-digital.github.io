import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { blogPosts } from '../data/blogPosts';
import SEO from '../components/SEO';

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
  margin-bottom: 4rem;
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
  margin-bottom: 2.5rem;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`;

const BlogGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

const BlogCard = styled(motion.article)`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 20px;
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  height: 100%;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    background: rgba(255, 255, 255, 0.15);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
  }
`;

const BlogTitle = styled.h2`
  font-size: 1.6rem;
  margin-bottom: 0.75rem;
  color: white;
`;

const Meta = styled.div`
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 1rem;
`;

const Excerpt = styled.p`
  color: rgba(255, 255, 255, 0.85);
  margin-bottom: 1.5rem;
  line-height: 1.7;
`;

const ReadMoreLink = styled(Link)`
  margin-top: auto;
  align-self: flex-start;
  padding: 0.75rem 1.5rem;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.8);
  color: white;
  text-decoration: none;
  font-weight: 600;
  font-size: 0.95rem;
  transition: all 0.3s ease;

  &:hover {
    background: white;
    color: #667eea;
    transform: translateY(-2px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
  }
`;

const Blog: React.FC = () => {
  const sortedPosts = [...blogPosts].sort(
    (a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime()
  );

  return (
    <PageWrapper>
      <PageContainer>
        <SEO
          title="AWS & Cloud Strategy Blog | North Point Digital"
          description="Articles on AWS cost optimisation, landing zones, and cloud strategy from North Point Digital."
          canonical="https://northpointdigital.com/blog"
        />
        <HeroSection>
          <Title
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Insights from the Field
          </Title>
          <Subtitle
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Practical articles on AWS cost optimisation, landing zones, and cloud architecture for
            technology leaders who care about outcomes, not buzzwords.
          </Subtitle>
        </HeroSection>

        <BlogGrid>
          {sortedPosts.map((post, index) => (
            <BlogCard
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
            >
              <BlogTitle>{post.title}</BlogTitle>
              <Meta>
                {post.publishDate && (
                  <>
                    {new Date(post.publishDate).toLocaleDateString('en-GB', {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric',
                    })}
                    {' · '}
                  </>
                )}
                {post.author}
              </Meta>
              <Excerpt>{post.excerpt}</Excerpt>
              <ReadMoreLink to={`/blog/${post.slug}`}>Read article</ReadMoreLink>
            </BlogCard>
          ))}
        </BlogGrid>
      </PageContainer>
    </PageWrapper>
  );
};

export default Blog;

