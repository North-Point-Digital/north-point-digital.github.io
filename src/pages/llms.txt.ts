import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

const SITE = 'https://northpointdigital.com';

// Generated at build time so new posts and case studies appear automatically.
export const GET: APIRoute = async () => {
  const posts = (await getCollection('blog')).sort(
    (a, b) => new Date(b.data.publishDate).getTime() - new Date(a.data.publishDate).getTime()
  );
  const caseStudies = await getCollection('caseStudies');

  const lines = [
    '# North Point Digital',
    '',
    '> North Point Digital is a consultancy that builds working AI for small businesses',
    '> in six weeks for a fixed fee, and helps AWS customers cut cloud costs and tighten',
    '> security. Clients do not need to be on AWS or be technical: prototypes run on',
    '> infrastructure North Point sets up and manages, and client systems stay where',
    '> they are (on-premises, Microsoft, Google, or spreadsheets and email).',
    '',
    'Key facts: official AWS Partner; fixed-fee engagements with no long-term contracts;',
    'the cost review carries a written guarantee (if at least 25% in potential AWS savings',
    'is not found, there is no fee — across 20+ reviews the average found is 30%). The',
    'first call is free, 30 minutes, with an engineer. Contact: contact@northpointdigital.com.',
    '',
    '## Services',
    '',
    `- [AI Launchpad](${SITE}/ai-launchpad): Fixed-fee, six-week AI proof of concept built with the client's own data — working prototype, production running costs, and a roadmap to live (or a documented reason not to proceed). Week one scopes the use case; weekly demos during the build.`,
    `- [Security & Cost Optimisation Blueprint](${SITE}/aws-cost-optimisation): Two-week AWS Well-Architected review covering cost and security. Critical issues are fixed during the engagement; targets 25%+ cost reduction with no upfront cost and a no-savings-no-fee guarantee. Requires an AWS account (the only offer that does).`,
    `- [Build Better on AWS](${SITE}/build-better): AWS architecture, cloud migrations (including AWS Migration Acceleration Program funding where workloads qualify), landing zones, DevOps and modernisation.`,
    `- [AI Adoption Playbook](${SITE}/ai-adoption-playbook): Free downloadable guide to planning, validating and scaling AI in a small business — picking a use case, data readiness, and what AI costs to run.`,
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
    `- [How we work](${SITE}/#how-we-work): Four steps — a free 30-minute call, an assessment with a written fixed-price scope, fixed-fee delivery with weekly demos, then handover with documentation and 30 days of support.`,
    `- [Contact](${SITE}/contact): Email contact@northpointdigital.com, send a message, or book a free call.`,
    '',
    '## Optional',
    '',
    `- [Privacy policy](${SITE}/privacy-policy): How personal data is collected and handled.`,
    '',
  ];

  return new Response(lines.join('\n'), {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
