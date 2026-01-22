import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description?: string;
  canonical?: string;
  noIndex?: boolean;
  jsonLd?: any | any[];
  ogImage?: string;
}

const SEO: React.FC<SEOProps> = ({ title, description, canonical, noIndex, jsonLd, ogImage }) => {
  const robots = noIndex ? 'noindex,nofollow' : 'index,follow';
  const imageUrl = ogImage 
    ? (ogImage.startsWith('http') ? ogImage : `https://northpointdigital.com${ogImage}`)
    : 'https://northpointdigital.com/north-point-logo.webp';

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="robots" content={robots} />
      {description && <meta name="description" content={description} />}
      {canonical && <link rel="canonical" href={canonical} />}
      <meta property="og:title" content={title} />
      {description && <meta property="og:description" content={description} />}
      {canonical && <meta property="og:url" content={canonical} />}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="North Point Digital" />
      <meta property="og:image" content={imageUrl} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      {description && <meta name="twitter:description" content={description} />}
      <meta name="twitter:image" content={imageUrl} />
      {jsonLd &&
        (Array.isArray(jsonLd) ? jsonLd : [jsonLd]).map((schema, index) => (
          <script
            key={index}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        ))}
    </Helmet>
  );
};

export default SEO;

