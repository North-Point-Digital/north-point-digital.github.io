import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

const SITE = 'https://northpointdigital.com';
const BOOKING = 'https://calendly.com/david-northpointdigital/north-point-digital-initial-call';

// Strip MDX import/export lines and JSX-ish component tags so the output is
// clean prose for LLM consumption. Keeps headings, lists, links and quotes.
function toPlainMarkdown(body: string): string {
  return body
    .replace(/^import .*$/gm, '')
    .replace(/^export .*$/gm, '')
    .replace(/<\/?[A-Z][^>]*>/g, '')
    .replace(/\n{3,}/g, '\n\n')
    .trim();
}

// Full-content companion to llms.txt — expands every service, case study and
// blog post with full prose so AI engines can answer without crawling the site.
export const GET: APIRoute = async () => {
  const posts = (await getCollection('blog')).sort(
    (a, b) => new Date(b.data.publishDate).getTime() - new Date(a.data.publishDate).getTime()
  );
  const caseStudies = await getCollection('caseStudies');
  const lastUpdated = new Date().toISOString().slice(0, 10);

  const lines: string[] = [
    '# North Point Digital — Full Content',
    '',
    `> Last-Updated: ${lastUpdated}`,
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
    'first call is free, 30 minutes, with an engineer.',
    '',
    `Contact: contact@northpointdigital.com. Book a free call: ${BOOKING}`,
    '',
    '## Services',
    '',
    `### AI Launchpad (${SITE}/ai-launchpad)`,
    "Fixed-fee, six-week AI proof of concept built with the client's own data. You get a working prototype, its production running costs, and a roadmap to live — or a documented reason not to proceed. Week one scopes the use case; there are weekly demos during the build. Clients do not need to be on AWS or be technical; the prototype runs on infrastructure North Point sets up and manages.",
    '',
    `### Security & Cost Optimisation Blueprint (${SITE}/aws-cost-optimisation)`,
    'A two-week AWS Well-Architected review covering cost and security. Critical security issues are fixed during the engagement rather than just listed. It targets 25%+ cost reduction with no upfront cost and a no-savings-no-fee guarantee: if at least 25% in potential savings is not found, there is no fee. Cost levers include right-sizing with AWS Compute Optimizer, Savings Plans and Reserved Instances, idle/orphaned resource cleanup, S3 storage tiering, Graviton and serverless moves, and Cost Explorer plus tagging and budget alerts. Security covers IAM, public-exposure checks, encryption and KMS, and logging/guardrails (CloudTrail, AWS Config, GuardDuty, Trusted Advisor). Requires an AWS account (the only offer that does).',
    '',
    `### Build Better on AWS (${SITE}/build-better)`,
    'AWS architecture, cloud migrations (including AWS Migration Acceleration Program funding where workloads qualify), landing zones, DevOps and modernisation.',
    '',
    `### AI Adoption Playbook (${SITE}/ai-adoption-playbook)`,
    'A free downloadable guide to planning, validating and scaling AI in a small business: picking a use case, data readiness, what AI costs to run, and how to calculate and maximise the return.',
    '',
    '## Case studies',
    '',
  ];

  for (const cs of caseStudies) {
    const d = cs.data;
    lines.push(`### ${d.clientName}${d.industry ? ` (${d.industry})` : ''} (${SITE}/case-studies/${cs.slug})`);
    lines.push('');
    if (d.executiveSummary) { lines.push(d.executiveSummary.replace(/\s+/g, ' ').trim(), ''); }
    lines.push(`**Challenge:** ${(d.detailedChallenge || d.challenge).replace(/[ \t]+/g, ' ').trim()}`, '');
    lines.push(`**Solution:** ${(d.detailedSolution || d.solution).replace(/[ \t]+/g, ' ').trim()}`, '');
    if (d.results?.length) { lines.push('**Results:**', ...d.results.map((r) => `- ${r}`), ''); }
    if (d.testimonial) { lines.push(`> "${d.testimonial.quote}" — ${d.testimonial.author}${d.testimonial.role ? `, ${d.testimonial.role}` : ''}`, ''); }
  }

  lines.push('## Blog', '');
  for (const post of posts) {
    lines.push(`### ${post.data.title} (${SITE}/blog/${post.slug})`);
    lines.push(`Published ${post.data.publishDate}${post.data.lastUpdated ? `, updated ${post.data.lastUpdated}` : ''} by ${post.data.author}.`);
    lines.push('');
    lines.push(toPlainMarkdown(post.body));
    lines.push('');
  }

  lines.push(
    '## Company',
    '',
    `- How we work (${SITE}/#how-we-work): Four steps — a free 30-minute call, an assessment with a written fixed-price scope, fixed-fee delivery with weekly demos, then handover with documentation and 30 days of support.`,
    `- Contact (${SITE}/contact): Email contact@northpointdigital.com, send a message, or book a free call at ${BOOKING}.`,
    ''
  );

  return new Response(lines.join('\n'), {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
