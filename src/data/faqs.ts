export interface FAQ {
  question: string;
  answer: string;
}

export const faqs: FAQ[] = [
  {
    question: 'What happens on the first call?',
    answer: `<p><strong>Thirty minutes with me, not a salesperson.</strong></p><p>You describe the problem, I ask questions, and we work out whether there is a fit. If there isn't, I'll say so on the call and point you somewhere better if I can. No deck and no follow-up sequence.</p>`,
  },
  {
    question: 'How does an engagement start?',
    answer: `<p><strong>With a written proposal.</strong></p><p>It states the scope, how much of my time the work needs, who does it, and the end date. Nothing is billed until you've agreed it.</p><p>Most engagements take one of three shapes: a review over a few days, a build over several weeks, or a set number of days a month for ongoing work.</p>`,
  },
  {
    question: 'How much of your time do I get?',
    answer: `<p><strong>Whatever the proposal says, and it's my time rather than a delegated junior's.</strong></p><p>A build might be two or three days a week. Ongoing work is a set number of days a month. When a piece of work needs another specialism, I bring in an associate, and you know who before they start.</p>`,
  },
  {
    question: 'Do you only work on AWS?',
    answer: `<p><strong>No.</strong></p><p>AWS is where most of my platform work has been, and North Point Digital is an official AWS Partner. AI adoption and software engineering don't depend on where your systems live.</p><p>For AI work, your data stays where it is: on-prem, Microsoft, Google, or spreadsheets and email. The model runs on infrastructure I set up and manage, and you never need to log into it.</p>`,
  },
  {
    question: 'Do you work remotely or on site?',
    answer: `<p><strong>Remotely by default, from the UK.</strong></p><p>I work in your chat tools, your repositories and your accounts. Days on site for workshops or kick-offs are fine where they're useful, and they go in the proposal like everything else.</p>`,
  },
  {
    question: 'What happens at the end?',
    answer: `<p><strong>Handover.</strong></p><p>Documentation, infrastructure as code and a knowledge-transfer session, so your team can run what I've built without me. There's nothing to cancel afterwards. Clients who come back do so because they want to, not because they're locked in.</p>`,
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
