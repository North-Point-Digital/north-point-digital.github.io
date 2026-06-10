export interface FAQ {
  question: string;
  answer: string;
}

export const faqs: FAQ[] = [
  {
    question: 'Why should I trust your consultancy?',
    answer: `<p><strong>Our team brings enterprise-level cloud expertise</strong>—the kind previously only available to Fortune 500 companies—now accessible to growing businesses.</p><p>Here's what sets us apart:</p><ul><li>AWS-certified consultants with 10+ years enterprise cloud experience</li><li>Former senior engineers from leading consultancies and tech companies</li><li>Deep expertise in AWS Well-Architected Framework and cost optimisation</li><li>Risk-free engagement: If we don't identify at least 25% in potential savings, you don't pay</li></ul><p>We deliver measurable results, not vague consulting hours. Our track record speaks for itself.</p>`,
  },
  {
    question: "What if you don't find 25% in savings?",
    answer: `<p><strong>Then you don't pay.</strong> That's our guarantee.</p><p>Our Security & Cost Optimisation Blueprint is designed to be risk-free. We're confident in our ability to identify significant savings because:</p><ul><li>78% of companies overspend on AWS due to common misconfigurations</li><li>Most organisations lack proper tagging, Reserved Instance strategies, and right-sizing</li><li>We've developed proven methodologies for uncovering hidden waste</li></ul><p>If we can't find at least 25% in potential cost reductions during our review, the engagement is free. No questions asked.</p>`,
  },
  {
    question: 'How long does the Blueprint engagement take?',
    answer: `<p><strong>Two weeks from start to finish.</strong></p><p>Week 1: We audit your infrastructure, analyse costs, and assess security vulnerabilities. You'll receive an initial findings report with quick wins.</p><p>Week 2: We implement critical optimisations, remediate security issues, set up budget alerts and tagging strategies, and deliver your comprehensive Well-Architected report with a long-term roadmap.</p><p>Plus, you get 30 days of support included to ensure smooth implementation of our recommendations.</p>`,
  },
  {
    question: 'Do you require long-term contracts?',
    answer: `<p><strong>No.</strong> We believe in earning your business with results, not locking you into contracts.</p><p>Our Blueprint is a fixed-fee, two-week engagement with clear deliverables. If you want ongoing support afterward, great—but there's zero obligation. Many clients engage us for the Blueprint, implement our recommendations independently, and come back when they need help with new projects.</p><p>We're consultants, not account managers looking for recurring revenue at your expense.</p>`,
  },
  {
    question: 'What makes you different from other AWS consultancies?',
    answer: `<p><strong>We're specialists, not generalists.</strong></p><p>Most consultancies offer generic "cloud services" across multiple providers. We focus exclusively on AWS optimisation—security, cost reduction, and performance. This specialisation means:</p><ul><li>Deep expertise in AWS-specific cost optimisation strategies</li><li>Fixed-fee engagements with concrete deliverables, not open-ended hourly billing</li><li>Focus on immediate ROI, not theoretical recommendations</li><li>Boutique service with direct access to senior engineers (no junior staff padding hours)</li></ul><p>We do one thing exceptionally well: make your AWS infrastructure lean, secure, and profitable.</p>`,
  },
];

function stripHtml(html: string): string {
  return html.replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim();
}

export function buildFaqJsonLd(items: FAQ[] = faqs) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: stripHtml(faq.answer),
      },
    })),
  };
}
