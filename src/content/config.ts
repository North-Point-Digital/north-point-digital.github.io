import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    excerpt: z.string(),
    author: z.string(),
    authorRole: z.string().optional(),
    publishDate: z.string(),
    lastUpdated: z.string().optional(),
    featuredImage: z.string().optional(),
    thumbnailImage: z.string().optional(),
    category: z.string(),
    tags: z.array(z.string()).optional(),
    metaDescription: z.string().optional(),
    ogImage: z.string().optional(),
  }),
});

const caseStudies = defineCollection({
  type: 'content',
  schema: z.object({
    clientName: z.string(),
    industry: z.string().optional(),
    logo: z.string().optional(),
    challenge: z.string(),
    solution: z.string(),
    results: z.array(z.string()),
    pageTitle: z.string().optional(),
    pageSubtitle: z.string().optional(),
    executiveSummary: z.string().optional(),
    whyChooseUs: z.string().optional(),
    detailedChallenge: z.string().optional(),
    detailedSolution: z.string().optional(),
    metrics: z.array(z.object({
      label: z.string(),
      value: z.string(),
      icon: z.enum(['dollar', 'shield', 'clock', 'chart']).optional(),
    })).optional(),
    timeline: z.string().optional(),
    technologies: z.array(z.string()).optional(),
    testimonial: z.object({
      quote: z.string(),
      author: z.string(),
      role: z.string(),
    }).optional(),
  }),
});

export const collections = { blog, caseStudies };
