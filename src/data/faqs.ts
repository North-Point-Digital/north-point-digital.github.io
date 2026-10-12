export interface FAQ {
  question: string;
  answer: string;
}

export const faqs: FAQ[] = [
  {
    question: 'What happens on the first call?',
    answer: `<p><strong>Thirty minutes.</strong></p><p>You describe the problem, we ask questions, and we work out whether there is a fit. If there isn't, we'll say so on the call and point you somewhere better if we can. No deck and no follow-up sequence.</p>`,
  },
  {
    question: 'How does an engagement start?',
    answer: `<p><strong>With a written proposal.</strong></p><p>It states the scope, who is on the team, how many days the work needs, and the end date. Nothing is billed until you've agreed it.</p><p>Most engagements take one of three shapes: one consultant embedded in your team, a small team for a defined build, or a set number of consultant days a month for ongoing work.</p>`,
  },
  {
    question: 'Who does the work?',
    answer: `<p><strong>Senior consultants.</strong></p><p>The proposal names who is on the engagement, and you can meet them before it starts. We don't swap people in without telling you. When a piece of work needs another specialism, we bring in a consultant who has it, and the same rule applies.</p>`,
  },
  {
    question: 'Do you only work on AWS?',
    answer: `<p><strong>No.</strong></p><p>AWS is where most of our platform work has been, and North Point Digital is an official AWS Partner. AI adoption and software engineering don't depend on where your systems live.</p><p>For AI work, your data stays where it is: on-prem, Microsoft, Google, or spreadsheets and email. The model runs on infrastructure we set up and manage, and you never need to log into it.</p>`,
  },
  {
    question: 'Do you work remotely or on site?',
    answer: `<p><strong>Remotely by default, from the UK.</strong></p><p>Our consultants work in your chat tools, your repositories and your accounts. Days on site for workshops or kick-offs are fine where they're useful, and they go in the proposal like everything else.</p>`,
  },
  {
    question: 'What happens at the end?',
    answer: `<p><strong>Handover.</strong></p><p>Documentation, infrastructure as code and a knowledge-transfer session, so your team can run what we've built without us. There's nothing to cancel afterwards. Clients who come back do so because they want to, not because they're locked in.</p>`,
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
