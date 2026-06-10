export interface FAQ {
  question: string;
  answer: string;
}

export const faqs: FAQ[] = [
  {
    question: "What if you don't find 25% in savings?",
    answer: `<p><strong>Then the review is free.</strong></p><p>That's the deal on our Security & Cost Optimisation Blueprint: if we can't find at least 25% in potential cost reductions, you don't pay. We can offer that because 78% of companies overspend on AWS, and the causes are usually the same — no tagging discipline, no Reserved Instance strategy, instances sized for a launch day that never came.</p><p>In 20+ reviews so far, we've averaged 30% in savings found.</p>`,
  },
  {
    question: 'What do we need to bring to an AI Launchpad?',
    answer: `<p>Three things:</p><ul><li><strong>A problem worth solving</strong> — a process that eats hours, questions your data could answer, work that queues up. If you're not sure which one to pick, that's what the first week is for.</li><li><strong>Some of your data</strong> — even a sample. We build the prototype on your data, not a demo dataset, because that's the only way the result means anything.</li><li><strong>Someone who can say yes</strong> — a sponsor who'll watch the weekly demos and make the call at the end.</li></ul><p>You don't need an AI strategy document. The Launchpad usually replaces one.</p>`,
  },
  {
    question: 'How long do engagements take?',
    answer: `<p><strong>The Blueprint takes two weeks. The AI Launchpad takes six.</strong> Both are fixed-fee, priced before we start.</p><p>Blueprint: week one is the audit — costs, security, architecture — with an initial findings report. Week two we implement: critical fixes, budget alerts, tagging, tuning. You end with a full Well-Architected report and roadmap.</p><p>Launchpad: week one we scope the use case and look at your data. Weeks two to five we build, with a demo every week. Week six you get the working prototype, production costings and a route to live.</p><p>Both come with 30 days of support after delivery.</p>`,
  },
  {
    question: 'Do you require long-term contracts?',
    answer: `<p><strong>No.</strong> Every engagement is fixed-fee with a defined end date, and there's nothing to cancel afterwards.</p><p>Plenty of clients take the Blueprint report, implement it themselves, and come back months later with a new project. That suits us fine — we'd rather be invited back than locked in.</p>`,
  },
  {
    question: 'What makes you different from other AWS consultancies?',
    answer: `<p><strong>We only do AWS, and we put senior engineers on every engagement.</strong></p><ul><li>The people you meet on the first call are the people who do the work — no junior staff padding hours</li><li>Fixed fees with named deliverables, not open-ended day rates</li><li>We fix critical issues during a review rather than listing them in a PDF</li><li>If we don't find 25% in savings on a Blueprint, you don't pay</li></ul>`,
  },
  {
    question: 'Why should I trust your consultancy?',
    answer: `<p>Fair question — every consultancy says they're experts. Here's what you can check:</p><ul><li>We're an official AWS Partner, and our consultants hold AWS certifications with 10+ years of enterprise cloud work behind them</li><li>Our case studies name the clients and the numbers — zero-downtime launches, NHS compliance sign-off, 30-second Minecraft deployments</li><li>The Blueprint guarantee is in writing: no 25% savings found, no fee</li><li>The first call is free, and the people on it are engineers</li></ul>`,
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
