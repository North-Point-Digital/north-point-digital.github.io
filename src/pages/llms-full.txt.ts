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

// Full-content companion to llms.txt. Expands every service, case study and
// blog post with full prose so AI engines can answer without crawling the site.
export const GET: APIRoute = async () => {
  const posts = (await getCollection('blog')).sort(
    (a, b) => new Date(b.data.publishDate).getTime() - new Date(a.data.publishDate).getTime()
  );
  const caseStudies = await getCollection('caseStudies');
  const lastUpdated = new Date().toISOString().slice(0, 10);

  const lines: string[] = [
    '# North Point Digital: Full Content',
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
    '',
    `Contact: contact@northpointdigital.com. Book a call: ${BOOKING}`,
    '',
    '## Services',
    '',
    `### Platform, AWS and SRE engineering (${SITE}/services/#platform)`,
    'Most of David Turnbull\'s career has been inside AWS estates: building them, running them and fixing them when they break. He works in the client\'s accounts, with their team, and leaves infrastructure as code behind. Typical work: Well-Architected, cost and security reviews; multi-account landing zones and governance; migrations, with AWS Migration Acceleration Program funding where the workload qualifies; Terraform and CDK; observability, on-call and incident response.',
    '',
    `### AI adoption (${SITE}/services/#ai-adoption)`,
    'Picking the use case that pays, proving it on the client\'s own data, and running it in production with a readable bill. Client systems stay where they are; the model runs on infrastructure North Point sets up and manages. Typical work: use-case selection and data readiness, proof of concept on the client\'s data, Amazon Bedrock with guardrails and evaluation, running-cost modelling, production hardening and handover.',
    '',
    `### Software engineering (${SITE}/services/#software)`,
    'Backend and platform code shipped into the client\'s repository with tests and a pipeline. Typical work: backend services in TypeScript and Python, APIs and event-driven systems, CI/CD pipelines, modernising legacy code, code and architecture reviews.',
    '',
    `### How engagements work (${SITE}/services/#how-engagements-work)`,
    'Every engagement is David\'s time, scoped in writing before it starts. Three shapes cover most of them. A review: a few days, read-only access, a written report with findings ranked by risk and cost, and a call to walk through it. A build: weeks, part-time or full-time, a defined deliverable in the client\'s repository and accounts, with a weekly written update. Ongoing: a set number of days a month for architecture, reviews and escalation, month to month, cancel with notice. The proposal states the days, the deliverable and the end date; nothing else is billed. No rates or packages are published.',
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
    `- How we work (${SITE}/#how-we-work): Four steps: a 30-minute call, a written proposal (scope, days, who does the work, end date), the work in the client's repositories and accounts with a weekly written update, then handover with documentation and knowledge transfer.`,
    `- Contact (${SITE}/contact): Email contact@northpointdigital.com, send a message, or book a call at ${BOOKING}.`,
    ''
  );

  return new Response(lines.join('\n'), {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
