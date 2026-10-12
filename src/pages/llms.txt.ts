import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

const SITE = 'https://northpointdigital.com';

// Generated at build time so new posts and case studies appear automatically.
export const GET: APIRoute = async () => {
  const posts = (await getCollection('blog')).sort(
    (a, b) => new Date(b.data.publishDate).getTime() - new Date(a.data.publishDate).getTime()
  );
  const caseStudies = await getCollection('caseStudies');
  const lastUpdated = new Date().toISOString().slice(0, 10);

  const lines = [
    '# North Point Digital',
    '',
    `> Last-Updated: ${lastUpdated}`,
    '',
    '> North Point Digital is a UK consultancy run by David Turnbull, a senior platform',
    '> engineer. It sells his time across three tracks: platform, AWS and SRE engineering;',
    '> AI adoption; and software engineering. Engagements are scoped in writing (days,',
    '> deliverable, end date) before work starts. No rates or packages are published.',
    '> For AI work, client systems stay where they are (on-premises, Microsoft, Google, or',
    '> spreadsheets and email) and the model runs on infrastructure North Point manages.',
    '',
    'Key facts: official AWS Partner; work is done by David Turnbull, with named associates',
    'brought in when a piece of work needs another specialism; engagements take one of three',
    'shapes (a review over a few days, a build over weeks, or a set number of days a month);',
    'nothing to cancel afterwards. The first call is 30 minutes, with the engineer.',
    'Contact: contact@northpointdigital.com.',
    '',
    '## Services',
    '',
    `- [Platform, AWS and SRE engineering](${SITE}/services/#platform): Well-Architected, cost and security reviews; multi-account landing zones and governance; migrations with AWS MAP funding where the workload qualifies; Terraform and CDK; observability, on-call and incident response.`,
    `- [AI adoption](${SITE}/services/#ai-adoption): Use-case selection and data readiness, proof of concept on the client's own data, Amazon Bedrock with guardrails and evaluation, running-cost modelling, production hardening and handover.`,
    `- [Software engineering](${SITE}/services/#software): Backend services in TypeScript and Python, APIs and event-driven systems, CI/CD pipelines, modernising legacy code, code and architecture reviews.`,
    `- [How engagements work](${SITE}/services/#how-engagements-work): Three shapes. A review (a few days, read-only access, written report ranked by risk and cost). A build (weeks, part-time or full-time, a defined deliverable in the client's repository and accounts, weekly written update). Ongoing (a set number of days a month, month to month, cancel with notice).`,
    `- [AI Adoption Playbook](${SITE}/ai-adoption-playbook): Free downloadable guide to planning, validating and scaling AI in a small business: picking a use case, data readiness, what AI costs to run, and how to calculate and maximise the return.`,
    '',
    '## Case studies',
    '',
    ...caseStudies.map(
      (cs) =>
        `- [${cs.data.clientName}${cs.data.industry ? ` (${cs.data.industry})` : ''}](${SITE}/case-studies/${cs.slug}): ${cs.data.challenge.replace(/\s+/g, ' ').trim()}`
    ),
    '',
    '## Blog',
    '',
    ...posts.map(
      (post) =>
        `- [${post.data.title}](${SITE}/blog/${post.slug}): ${(post.data.metaDescription || post.data.excerpt).replace(/\s+/g, ' ').trim()}`
    ),
    '',
    '## Company',
    '',
    `- [How we work](${SITE}/#how-we-work): Four steps: a 30-minute call, a written proposal (scope, days, who does the work, end date), the work in the client's repositories and accounts with a weekly written update, then handover with documentation and knowledge transfer.`,
    `- [Contact](${SITE}/contact): Email contact@northpointdigital.com, send a message, or book a call.`,
    `- [Book a call](https://calendly.com/david-northpointdigital/north-point-digital-initial-call): A 30-minute call with the engineer.`,
    '',
    '## Optional',
    '',
    `- [Full content](${SITE}/llms-full.txt): Every service, case study and blog post expanded in full.`,
    `- [Privacy policy](${SITE}/privacy-policy): How personal data is collected and handled.`,
    '',
  ];

  return new Response(lines.join('\n'), {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
