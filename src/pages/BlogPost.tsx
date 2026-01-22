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

const FeaturedImage = styled(motion.img)`
  width: 100%;
  max-height: 500px;
  object-fit: cover;
  border-radius: 20px;
  margin-bottom: 2.5rem;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.2);
  
  @media (max-width: 768px) {
    max-height: 300px;
    border-radius: 15px;
  }
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

  .callout {
    border-radius: 12px;
    padding: 1.5rem;
    margin: 2rem 0;
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    position: relative;
    padding-left: 3.5rem;
    
    &::before {
      position: absolute;
      left: 1.25rem;
      top: 1.5rem;
      font-size: 1.5rem;
      line-height: 1;
    }
    
    &.callout-info {
      background: rgba(56, 189, 248, 0.15);
      border-left: 4px solid rgba(56, 189, 248, 0.4);
      
      &::before {
        content: 'ℹ️';
      }
    }
    
    &.callout-tip {
      background: rgba(251, 191, 36, 0.15);
      border-left: 4px solid rgba(251, 191, 36, 0.4);
      
      &::before {
        content: '💡';
      }
    }
    
    &.callout-warning {
      background: rgba(239, 68, 68, 0.15);
      border-left: 4px solid rgba(239, 68, 68, 0.4);
      
      &::before {
        content: '⚠️';
      }
    }
    
    &.callout-success {
      background: rgba(34, 197, 94, 0.15);
      border-left: 4px solid rgba(34, 197, 94, 0.4);
      
      &::before {
        content: '✅';
      }
    }
    
    .callout-title {
      font-size: 1.1rem;
      font-weight: 600;
      margin-bottom: 0.5rem;
      color: white;
      display: block;
    }
    
    p {
      margin-bottom: 0.75rem;
      line-height: 1.7;
      color: rgba(255, 255, 255, 0.95);
      
      &:last-child {
        margin-bottom: 0;
      }
    }
    
    ul, ol {
      margin-left: 1.25rem;
      margin-top: 0.5rem;
      margin-bottom: 0.5rem;
      color: rgba(255, 255, 255, 0.95);
    }
    
    li {
      margin-bottom: 0.4rem;
      line-height: 1.7;
    }
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

  const imageUrl = post.featuredImage || post.thumbnailImage;
  const ogImage = post.seoMeta?.ogImage || imageUrl || 'https://northpointdigital.com/north-point-logo.webp';

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
    ...(imageUrl && {
      image: {
        '@type': 'ImageObject',
        url: imageUrl.startsWith('http') ? imageUrl : `https://northpointdigital.com${imageUrl}`,
      },
    }),
  };

  return (
    <PageWrapper>
      <PageContainer>
        <SEO 
          title={`${post.title} | Blog | North Point Digital`} 
          description={description} 
          canonical={canonical} 
          jsonLd={jsonLd}
          ogImage={ogImage}
        />
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
        {post.featuredImage && (
          <FeaturedImage
            src={post.featuredImage}
            alt={post.title}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            loading="eager"
          />
        )}
        <ArticleBody dangerouslySetInnerHTML={{ __html: post.content }} />
      </PageContainer>
    </PageWrapper>
  );
};

export default BlogPost;

