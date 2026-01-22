export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  authorRole?: string;
  publishDate: string;
  lastUpdated?: string;
  featuredImage?: string;
  thumbnailImage?: string;
  category?: string;
  tags?: string[];
  seoMeta?: {
    metaDescription: string;
    ogImage?: string;
  };
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'reduce-aws-bill-without-rewriting-everything',
    title: 'How to Reduce Your AWS Bill Without Rewriting Everything',
    excerpt:
      'A practical, operator-focused guide to cutting AWS costs using tagging, right-sizing, and quick-win changes that do not stall delivery.',
    content: `
      <h2>Stop Treating Cost Optimisation as a One-Off Project</h2>
      <p>
        Most teams know their AWS bill is too high, but the idea of a full re-architecture feels
        unrealistic. The good news is you can unlock meaningful savings without a two-year migration
        programme. The key is to treat cost optimisation as an ongoing <strong>operations discipline</strong>,
        not a one-off event.
      </p>
      <h3>1. Get Visibility First: Tagging and Cost Allocation</h3>
      <p>
        You cannot optimise what you cannot see. Start by enforcing a simple tagging model across
        accounts: <code>Environment</code>, <code>Application</code>, <code>Owner</code>, and
        <code>CostCentre</code>. Once tags are consistent, you can break the bill down by team and
        workload, and have sensible conversations about value versus spend.
      </p>
      <h3>2. Target the No-Regret Changes</h3>
      <p>
        Before you touch application code, look for changes that are operational only:
      </p>
      <ul>
        <li>Right-size consistently under-utilised instances.</li>
        <li>Move cold data to cheaper storage tiers.</li>
        <li>Turn off non-production environments out-of-hours.</li>
      </ul>
      <p>
        These actions can usually be implemented by the platform team with very low risk and
        immediate measurable impact.
      </p>
      <h3>3. Build Guard Rails, Not Hero Dashboards</h3>
      <p>
        Fancy cost dashboards are useless if engineers ignore them. Instead, wire cost signals
        into the way people already work: budgets, alerts, and simple monthly reviews tied to
        your AWS accounts and applications.
      </p>
      <div class="callout callout-tip">
        <span class="callout-title">Pro Tip</span>
        <p>
          At North Point Digital we use our Security &amp; Cost Optimisation Blueprint to find these
          quick wins in the first few weeks, while also giving you a longer-term roadmap for deeper
          modernisation work.
        </p>
      </div>
    `,
    author: 'David Turnbull',
    authorRole: 'Founder & AWS Solutions Architect',
    publishDate: '2025-01-27',
    category: 'AWS Cost Optimisation',
    tags: ['AWS', 'Cost Optimisation', 'Cloud Governance'],
    seoMeta: {
      metaDescription:
        'A practical guide to reducing your AWS bill without a full re-architecture, focusing on tagging, right-sizing and no-regret operational changes.',
    },
  },
  {
    slug: 'landing-zones-for-growing-aws-teams',
    title: 'Building on Bedrock: Why Your Business Needs an AWS Landing Zone',
    excerpt:
      'As your cloud usage matures, a single-account “wild west” AWS setup turns into security risk, billing chaos, and operational drag. A Landing Zone fixes the foundation.',
    content: `
      <h2>Building on Bedrock: Why Your Business Needs an AWS Landing Zone</h2>
      <p>
        If you have ever tried to build a skyscraper on a swamp, you know that without a solid foundation,
        even the most impressive structure will eventually sink. The same logic applies to the cloud.
      </p>
      <p>
        In the early days of cloud adoption, organisations often operated out of a single AWS account,
        manually configuring services and lumping development and production workloads together. However,
        as cloud usage matures, this “wild west” approach leads to security vulnerabilities, billing
        nightmares, and operational bottlenecks.
      </p>
      <p>
        This is where an AWS Landing Zone becomes critical. A landing zone is a well-architected,
        multi-account AWS environment that provides a standardised foundation for security, identity,
        networking, and governance.
      </p>
      <p>
        Here is why establishing a landing zone is essential for any organisation looking to scale in the cloud.
      </p>

      <h3>1. Security and Isolation: Limiting the “Blast Radius”</h3>
      <p>
        One of the most dangerous anti-patterns in cloud architecture is housing all resources within a
        single AWS account or sharing accounts among different teams. If a security breach or
        misconfiguration occurs in a single-account setup, it can potentially affect all services and workloads.
      </p>
      <p>
        A landing zone solves this by enforcing a multi-account strategy. By separating workloads into
        distinct accounts—such as separate accounts for production, development, and security logging—you
        create logical boundaries that restrict the impact of an adverse event. This isolation minimises
        the blast radius, ensuring that an issue in one application does not bring down your entire
        infrastructure or compromise sensitive data in another environment.
      </p>
      <p>
        Furthermore, a landing zone allows you to implement specific security perimeters. For instance,
        you can designate specific accounts to house sensitive data, drastically reducing the exposure
        surface and attack vectors.
      </p>

      <h3>2. Scalable Governance and Automation</h3>
      <p>
        As an organisation grows, manually configuring identity and access management (IAM), networking,
        and logging for every new project becomes slow, complex, and error-prone. A landing zone
        facilitates automation, streamlining the process of provisioning new AWS accounts and resources.
      </p>
      <p>
        By using tools like AWS Control Tower, organisations can automate the setup of a secure landing
        zone using predefined best practices. This allows teams to provision new accounts quickly via an
        account factory, ensuring that every new environment comes pre-configured with the necessary
        security baselines and network settings.
      </p>
      <p>
        This automation eliminates the operational inefficiency of manual configuration, allowing your
        cloud footprint to scale without a linear increase in headcount.
      </p>

      <h3>3. Centralised Identity and Access Management</h3>
      <p>
        Managing users and permissions across dozens of different accounts can be chaotic. A landing zone
        integrates with AWS IAM Identity Center to centrally manage single sign-on (SSO) access.
      </p>
      <p>
        This structure supports the principle of least privilege. Instead of managing individual users in
        every account, you can use federated access to allow human users to use their existing credentials
        to access only the specific accounts they are authorised to touch.
      </p>
      <p>
        This centralisation ensures that if an employee leaves or changes roles, their access can be
        managed or revoked from a single location rather than across fragmented environments.
      </p>

      <h3>4. Visibility and Compliance</h3>
      <p>
        For regulated industries, the ability to audit and monitor infrastructure is non-negotiable. A
        landing zone provides a centralised view of your cloud infrastructure, resource dependencies, and
        account usage.
      </p>
      <p>
        A key component of this architecture is the Log Archive account. This dedicated account acts as a
        repository for immutable logs collected from across the organisation, including AWS CloudTrail
        (audit logs) and AWS Config (configuration history).
      </p>
      <p>
        Centralising these logs ensures that security and compliance teams have a single source of truth
        for auditing, without needing to access the individual workload accounts where the applications run.
      </p>
      <p>
        Additionally, landing zones allow you to apply Service Control Policies (SCPs). These are guardrails
        that define the maximum available permissions for accounts within your organisation, ensuring that
        member accounts cannot disable essential security features like logging or modify restricted resources.
      </p>

      <h3>5. Cost Management and Allocation</h3>
      <p>
        Without a structured landing zone, tracking which team or project is responsible for specific
        cloud costs can be nearly impossible. This leads to the anti-pattern of convoluted expense tracking
        where you cannot easily identify opportunities for savings.
      </p>
      <p>
        Using a multi-account strategy within a landing zone creates natural billing boundaries. Because
        AWS costs are allocated by account, having different accounts for different business units or
        workloads makes it easy to report, forecast, and budget expenditures.
      </p>
      <p>
        Furthermore, landing zones enable organisations to implement cost management practices by applying
        policies and guardrails for resource usage, providing visibility into spending patterns across
        the entire organisation.
      </p>

      <h3>6. Innovation Without Risk</h3>
      <p>
        Innovation requires experimentation, but you do not want experiments to threaten your production data.
        A well-designed landing zone includes specific Sandbox Organisational Units (OUs).
      </p>
      <p>
        These sandbox accounts provide developers with the freedom to explore AWS services and experiment
        with new technologies in an environment that is disconnected from internal networks and sensitive data.
      </p>
      <p>
        This separation promotes agility and innovation while ensuring that corporate intellectual property
        and production workloads remain secure.
      </p>

      <h3>Conclusion</h3>
      <p>
        Building a landing zone might seem like a heavy lift at the start of your journey, but it is an
        investment in your organisation’s future. It transforms cloud adoption from a chaotic process into
        a scalable, manageable operation.
      </p>
      <p>
        Whether you build it manually or leverage AWS Control Tower to automate the process, a landing zone
        ensures that your cloud environment is secure, compliant, and ready to grow with your business.
      </p>
    `,
    author: 'David Turnbull',
    authorRole: 'Founder & AWS Solutions Architect',
    publishDate: '2025-01-27',
    category: 'Cloud Foundations',
    tags: ['AWS', 'Landing Zones', 'Security'],
    seoMeta: {
      metaDescription:
        'Why an AWS Landing Zone is a critical foundation for security, compliance, cost management and innovation as your cloud estate grows.',
    },
  },
];

export const getBlogPostBySlug = (slug: string): BlogPost | undefined => {
  return blogPosts.find((post) => post.slug === slug);
};

