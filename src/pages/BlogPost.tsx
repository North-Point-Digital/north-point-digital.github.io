import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaArrowLeft } from 'react-icons/fa';
import { getBlogPostBySlug } from '../data/blogPosts';
import SEO from '../components/SEO';

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

const BackButton = styled(motion.button)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1.25rem;
  margin-bottom: 2rem;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  background: rgba(255, 255, 255, 0.08);
  color: white;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.15);
    transform: translateX(-4px);
  }
`;

const Title = styled.h1`
  font-size: clamp(2.25rem, 4vw, 3rem);
  color: white;
  margin-bottom: 0.75rem;
`;

const Meta = styled.div`
  font-size: 0.95rem;
  color: rgba(255, 255, 255, 0.75);
  margin-bottom: 2rem;
`;

const ArticleBody = styled.div`
  background: rgba(255, 255, 255, 0.06);
  backdrop-filter: blur(12px);
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  padding: 2.5rem;
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.8;
  font-size: 1.05rem;

  h2,
  h3 {
    color: white;
    margin-top: 1.75rem;
    margin-bottom: 0.75rem;
  }

  h2 {
    font-size: 1.6rem;
  }

  h3 {
    font-size: 1.3rem;
  }

  p {
    margin-bottom: 1rem;
  }

  ul {
    margin-left: 1.25rem;
    margin-bottom: 1rem;
  }

  li {
    margin-bottom: 0.4rem;
  }

  code {
    font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New',
      monospace;
    font-size: 0.95em;
    background: rgba(0, 0, 0, 0.4);
    padding: 0.15rem 0.35rem;
    border-radius: 4px;
  }
`;

const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const post = slug ? getBlogPostBySlug(slug) : undefined;

  if (!post) {
    return (
      <PageWrapper>
        <PageContainer>
          <BackButton
            onClick={() => navigate('/blog')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaArrowLeft />
            Back to blog
          </BackButton>
          <Title>Article not found</Title>
          <Meta>We could not find the article you were looking for.</Meta>
        </PageContainer>
      </PageWrapper>
    );
  }

  const description =
    post.seoMeta?.metaDescription || post.excerpt || `${post.title} from North Point Digital.`;
  const canonical = `https://northpointdigital.com/blog/${post.slug}`;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description,
    author: {
      '@type': 'Person',
      name: post.author,
    },
    publisher: {
      '@type': 'Organization',
      name: 'North Point Digital',
      logo: {
        '@type': 'ImageObject',
        url: 'https://northpointdigital.com/north-point-logo.webp',
      },
    },
    datePublished: post.publishDate,
    dateModified: post.lastUpdated || post.publishDate,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': canonical,
    },
  };

  return (
    <PageWrapper>
      <PageContainer>
        <SEO title={`${post.title} | Blog | North Point Digital`} description={description} canonical={canonical} jsonLd={jsonLd} />
        <BackButton
          onClick={() => navigate('/blog')}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <FaArrowLeft />
          Back to blog
        </BackButton>
        <Title>{post.title}</Title>
        <Meta>
          {new Date(post.publishDate).toLocaleDateString('en-GB', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}
          {' · '}
          {post.author}
          {post.authorRole ? `, ${post.authorRole}` : ''}
        </Meta>
        <ArticleBody dangerouslySetInnerHTML={{ __html: post.content }} />
      </PageContainer>
    </PageWrapper>
  );
};

export default BlogPost;

