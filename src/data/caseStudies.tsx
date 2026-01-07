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
    slug: 'healthcare-compliance-migration',
    clientName: 'Healthcare Technology Company',
    industry: 'HealthTech',
    challenge: 'Compliance requirements and data security concerns with legacy infrastructure that couldn\'t scale efficiently.',
    detailedChallenge: 'A healthcare technology company needed to migrate from legacy on-premises infrastructure to AWS while maintaining strict HIPAA compliance and ensuring patient data security. Their existing infrastructure couldn\'t scale to meet growing demand, and they lacked the expertise to design a compliant cloud architecture. The migration needed to be completed without any service disruption and with full audit trails for compliance purposes.',
    solution: 'Designed secure, compliant AWS architecture with proper data encryption and access controls. Migrated workloads to modern AWS services with automated compliance monitoring.',
    detailedSolution: 'We designed a HIPAA-compliant AWS architecture with end-to-end encryption, proper access controls, and comprehensive audit logging. All patient data is encrypted at rest using AWS KMS and in transit using TLS. We implemented AWS Organizations with Service Control Policies to enforce compliance requirements across all accounts. The migration was performed using AWS Application Migration Service with minimal downtime. We set up AWS Config and AWS Security Hub for continuous compliance monitoring and automated compliance reporting. All infrastructure changes are tracked through AWS CloudTrail for audit purposes.',
    results: [
      '100% compliance with healthcare regulations',
      '40% reduction in infrastructure costs',
      'Improved scalability for future growth'
    ],
    metrics: [
      {
        label: 'Compliance',
        value: '100%',
        icon: 'shield' as IconType
      },
      {
        label: 'Cost Reduction',
        value: '40%',
        icon: 'dollar' as IconType
      },
      {
        label: 'Migration Time',
        value: '4 Weeks',
        icon: 'clock' as IconType
      }
    ],
    timeline: 'The migration project was completed in four weeks. Week 1-2 involved architecture design and compliance validation. Week 3 focused on the migration execution with minimal downtime. Week 4 included testing, validation, and compliance audit preparation.',
    technologies: [
      'AWS Organizations',
      'AWS KMS',
      'AWS Config',
      'AWS Security Hub',
      'AWS CloudTrail',
      'AWS Application Migration Service',
      'Amazon VPC',
      'AWS WAF'
    ],
    testimonial: {
      quote: 'North Point Digital not only delivered a seamless migration but ensured we maintained 100% compliance throughout the process. Their expertise in healthcare cloud architecture is exceptional.',
      author: 'CTO',
      role: 'Healthcare Technology Company'
    }
  }
];

export const getCaseStudyBySlug = (slug: string): DetailedCaseStudy | undefined => {
  return caseStudies.find(cs => cs.slug === slug);
};

