export interface CaseStudy {
  clientName: string;
  industry?: string;
  logo?: string;
  challenge: string;
  solution: string;
  results: string[];
}

export type IconType = 'dollar' | 'shield' | 'clock' | 'chart';

export interface DetailedCaseStudy extends CaseStudy {
  slug: string;
  pageTitle?: string;
  pageSubtitle?: string;
  executiveSummary?: string;
  whyChooseUs?: string;
  detailedChallenge?: string;
  detailedSolution?: string;
  metrics?: {
    label: string;
    value: string;
    icon?: IconType;
  }[];
  timeline?: string;
  technologies?: string[];
  testimonial?: {
    quote: string;
    author: string;
    role: string;
  };
}

export const caseStudies: DetailedCaseStudy[] = [
  {
    slug: 'financial-services-cost-optimisation',
    clientName: 'Financial Services Firm',
    industry: 'FinTech',
    challenge: 'Facing escalating AWS costs with limited visibility into spending patterns and security vulnerabilities in their cloud infrastructure.',
    detailedChallenge: 'A leading financial services firm was experiencing rapidly escalating AWS costs with no clear understanding of where their budget was being allocated. Their cloud infrastructure had grown organically over several years, resulting in over-provisioned resources, untagged assets, and multiple security vulnerabilities that could potentially expose sensitive financial data. The lack of proper cost allocation and budget controls made it impossible to track spending by department or project, while security gaps posed significant compliance risks.',
    solution: 'Conducted comprehensive Well-Architected Review focusing on cost optimisation and security. Implemented proper tagging strategies, right-sized resources, and remediated critical security gaps.',
    detailedSolution: 'We conducted a comprehensive two-week Well-Architected Review focusing on the Cost Optimisation and Security pillars. Our team implemented a systematic tagging strategy across all AWS resources, enabling proper cost allocation and budget tracking. We identified and right-sized over-provisioned EC2 instances, eliminated unused EBS volumes and snapshots, and optimised RDS database instances. For security, we remediated critical vulnerabilities including unencrypted S3 buckets, overly permissive IAM policies, and missing VPC flow logs. We also set up automated budget alerts and implemented AWS Cost Explorer dashboards for ongoing visibility.',
    results: [
      '35% reduction in monthly AWS spend',
      'Eliminated 3 critical security vulnerabilities',
      'Improved cost visibility with automated budget alerts'
    ],
    metrics: [
      {
        label: 'Cost Reduction',
        value: '35%',
        icon: 'dollar' as IconType
      },
      {
        label: 'Security Issues Resolved',
        value: '3 Critical',
        icon: 'shield' as IconType
      },
      {
        label: 'Time to Implement',
        value: '2 Weeks',
        icon: 'clock' as IconType
      }
    ],
    timeline: 'The engagement was completed in two weeks. Week 1 focused on discovery, analysis, and identifying quick wins. Week 2 involved implementing critical optimisations, remediating security issues, and setting up monitoring and alerting systems.',
    technologies: [
      'AWS Cost Explorer',
      'AWS Budgets',
      'AWS Systems Manager',
      'AWS Config',
      'AWS Security Hub',
      'EC2 Auto Scaling',
      'AWS Tag Editor'
    ]
  },
  {
    slug: 'ecommerce-platform-performance',
    clientName: 'E-commerce Platform',
    industry: 'Retail',
    challenge: 'Rapid growth led to over-provisioned infrastructure and performance bottlenecks during peak traffic periods.',
    detailedChallenge: 'An e-commerce platform experiencing rapid growth found their infrastructure struggling to handle peak traffic periods, particularly during sales events and holiday seasons. Their AWS infrastructure was over-provisioned for normal traffic but still couldn\'t handle spikes, leading to slow page load times and occasional downtime. The lack of proper auto-scaling and inefficient database queries were causing both performance issues and unnecessary costs.',
    solution: 'Performed infrastructure audit and optimisation. Implemented auto-scaling policies, optimised database queries, and migrated to more cost-effective instance types.',
    detailedSolution: 'We performed a comprehensive infrastructure audit and identified key bottlenecks in their application architecture. We implemented auto-scaling groups with predictive scaling policies to handle traffic spikes automatically. Database performance was improved through query optimisation, read replicas, and connection pooling. We migrated workloads to more cost-effective instance types (including Graviton2 processors where applicable) and implemented caching strategies using ElastiCache. Load balancing was optimised, and we set up CloudWatch alarms for proactive monitoring.',
    results: [
      '28% cost reduction while improving performance',
      '50% faster page load times',
      'Zero downtime during peak traffic events'
    ],
    metrics: [
      {
        label: 'Cost Reduction',
        value: '28%',
        icon: 'dollar' as IconType
      },
      {
        label: 'Performance Improvement',
        value: '50% Faster',
        icon: 'chart' as IconType
      },
      {
        label: 'Uptime During Peaks',
        value: '100%',
        icon: 'shield' as IconType
      }
    ],
    timeline: 'The optimisation project was completed over three weeks. Week 1 involved infrastructure analysis and planning. Week 2 focused on implementing auto-scaling and database optimisations. Week 3 included testing, monitoring setup, and performance validation.',
    technologies: [
      'EC2 Auto Scaling',
      'Amazon ElastiCache',
      'Amazon RDS',
      'Application Load Balancer',
      'Amazon CloudWatch',
      'AWS Lambda',
      'Amazon CloudFront'
    ]
  },
  {
    slug: 'acorn-healthtech-compliance',
    clientName: 'Acorn (Compliance Platform)',
    industry: 'HealthTech / SaaS',
    pageTitle: 'Building a Secure Foundation for NHS Compliance on AWS',
    pageSubtitle: 'How North Point Digital helped Acorn launch the "Squirrel 2" platform to streamline compliance for healthcare providers.',
    challenge: 'Acorn needed to launch "Squirrel 2," a critical compliance platform for the NHS and healthcare providers. As an incredibly cost-conscious company, they required a secure, scalable infrastructure that could move off expensive EC2 instances while meeting strict NHS compliance standards.',
    executiveSummary: 'Acorn is a HealthTech leader dedicated to helping healthcare providers and the NHS meet rigorous compliance standards. To launch their next-generation platform, Squirrel 2, they needed an infrastructure partner who understood that security wasn\'t just a feature—it was the entire product. North Point Digital stepped in as Fractional CTO, architecting a secure, scalable AWS environment that meets NHS Data Security and Protection Toolkit (DSPT) standards, enabling Acorn to onboard healthcare providers with absolute confidence.',
    detailedChallenge: 'As Acorn prepared to launch Squirrel 2, they faced the "Triple Constraint" common to healthcare innovation:\n\n• Strict Regulatory Standards: The platform handles sensitive compliance data for NHS providers. Any architecture had to be "secure by design" to meet DSPT and GDPR requirements without slowing down development.\n\n• Scalability for Launch: Acorn needed to move from a development environment to a production-ready infrastructure capable of handling rapid user onboarding from large healthcare organisations.\n\n• Operational Efficiency: With limited internal DevOps resources, Acorn needed a partner to not just build the infrastructure, but to establish the "Fractional CTO" strategy for long-term management and cost optimisation.\n\n• Cost Optimisation: As an incredibly cost-conscious company, Acorn needed to redesign their infrastructure to move off expensive EC2 instances, reducing infrastructure costs while maintaining performance and security.',
    solution: 'Acting as Fractional CTO, redesigned infrastructure to move off expensive EC2 instances, implemented a "Security-First" landing zone aligned with NHS DSPT standards, and modernised document generation using AWS Bedrock, SageMaker, and S3 vector storage.',
    whyChooseUs: 'Acorn chose North Point Digital because they needed more than just a developer—they needed strategic leadership.\n\n• Industry-Specific Expertise: North Point Digital brought deep experience in regulated industries, understanding that "move fast and break things" doesn\'t work when patient data privacy is at stake.\n\n• Trust & Security: As an AWS Partner, North Point Digital leveraged the "most trusted healthcare cloud" to ensure the platform was built on a foundation of global compliance certifications.',
    detailedSolution: 'North Point Digital acted as the strategic infrastructure lead, executing a modernisation and migration plan aligned with AWS Well-Architected best practices:\n\n• Secure Landing Zone: Deployed a multi-account AWS architecture with strict isolation between development and production environments to prevent data leakage.\n\n• Encryption & Compliance: Implemented end-to-end encryption (at rest and in transit) using AWS Key Management Service (KMS), ensuring Squirrel 2 met the highest standards of data sovereignty.\n\n• Automated Infrastructure: Utilised Infrastructure as Code (IaC) to automate compliance checks, ensuring that every server launched was automatically compliant with security policies.\n\n• Infrastructure Cost Optimisation: Redesigned their infrastructure architecture to move off expensive EC2 instances, implementing serverless and managed services where appropriate to significantly reduce costs while maintaining performance and security.\n\n• Document Generation Modernisation: Modernised their Document Generation infrastructure utilising core AWS services including Amazon S3 for vector storage, AWS Bedrock for embeddings, and AWS SageMaker for machine learning capabilities, enabling intelligent document processing and generation at scale.',
    results: [
      'Successful Launch of Squirrel 2: The platform went live with zero downtime, immediately serving NHS and private healthcare clients',
      '100% Compliance Confidence: The architecture successfully passed strict due diligence, enabling Acorn to sell into highly regulated NHS trusts without friction',
      'Scalable Foundation: The new infrastructure automatically adjusts to traffic spikes, ensuring performance never degrades for compliance officers using the tool'
    ],
    metrics: [
      {
        label: 'Platform Launch',
        value: 'Zero Downtime',
        icon: 'shield' as IconType
      },
      {
        label: 'Compliance',
        value: '100% Confidence',
        icon: 'shield' as IconType
      },
      {
        label: 'Infrastructure',
        value: 'Auto-Scaling',
        icon: 'chart' as IconType
      }
    ],
    timeline: 'The project involved architectural design, landing zone implementation, and platform deployment. Working as Fractional CTO, we established the secure AWS foundation and successfully launched the Squirrel 2 platform with full compliance to NHS standards.',
    technologies: [
      'AWS Organizations',
      'AWS Landing Zone',
      'AWS KMS',
      'AWS Config',
      'AWS Security Hub',
      'AWS CloudTrail',
      'Amazon VPC',
      'Amazon S3',
      'AWS WAF',
      'AWS SageMaker',
      'AWS Bedrock',
      'NHS DSPT Compliance'
    ],
    testimonial: {
      quote: 'North Point Digital didn\'t just build our servers; they became our strategic technology partner. Their leadership allowed us to launch Squirrel 2 with the confidence that our infrastructure was as robust as the compliance solutions we sell to the NHS.',
      author: 'Founder',
      role: 'Acorn'
    }
  }
];

export const getCaseStudyBySlug = (slug: string): DetailedCaseStudy | undefined => {
  return caseStudies.find(cs => cs.slug === slug);
};

