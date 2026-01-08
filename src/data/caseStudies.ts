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
    slug: 'alluvial-institutional-liquid-staking',
    clientName: 'Alluvial (Institutional Liquid Staking)',
    industry: 'FinTech / Web3',
    pageTitle: 'Bridging DeFi and Compliance: Institutional Liquid Staking Architecture',
    pageSubtitle: 'Leveraging Kubernetes and Golang to build secure, regulatory-ready staking infrastructure for Alluvial Finance.',
    challenge: 'Institutional investors needed a compliant way to stake assets. They required the yield of staking but needed the flexibility to toggle between "Private" (compliant) and "Liquid" (public) states based on shifting regulatory landscapes.',
    executiveSummary: 'Note: This project represents the specific domain expertise delivered by North Point Digital\'s founder prior to establishing the consultancy.\n\nAlluvial Finance operates at the cutting edge of institutional crypto, bridging the gap between traditional finance (TradFi) and decentralised finance (DeFi). The goal was to build the first "Institutional Liquid Staking" standard. To succeed, the platform needed infrastructure that was not only cryptographically secure but also operationally robust enough to satisfy institutional risk managers. The North Point Digital leadership team played a pivotal role in implementing the protocol\'s core architecture, ensuring seamless interoperability between on-chain smart contracts and off-chain cloud infrastructure.',
    detailedChallenge: 'The project faced a unique "Regulatory Paradox" that required a complex technical solution:\n\n• The Liquidity Dilemma: Institutions wanted the liquidity of public tokens but could not hold assets that might be deemed "unregulated securities."\n\n• Infrastructure Reliability: Most DeFi projects run on fragile scripts. Alluvial needed enterprise-grade stability (99.99% uptime) for their off-chain services to manage validator performance and reporting.\n\n• Auditability: Every line of code—whether Solidity smart contracts or Go binaries—needed to pass rigorous security audits and automated testing.',
    solution: 'Engineered a hybrid staking protocol allowing atomic swaps between Private Pools and Liquid Tokens. Built the supporting off-chain infrastructure using Golang on Kubernetes for high-availability event indexing and validator management.',
    whyChooseUs: 'This project validates North Point Digital\'s ability to operate in high-stakes environments where a single bug can result in massive financial loss.\n\n• Hybrid Architecture: We specialise in the difficult intersection where blockchain meets the cloud (AWS/Kubernetes).\n\n• Golang Concurrency: We utilised Go\'s high-performance concurrency to handle massive streams of blockchain event data in real-time.',
    detailedSolution: 'Our leadership team delivered a dual-layer architecture:\n\nThe "Private-to-Public" Protocol Mechanism\nWe implemented a novel staking architecture that gave institutions a safety valve.\n\n• Private Pools: Institutions stake into isolated, compliant pools.\n\n• The "regulatory Switch": Built the technical capability for these private tokens to swap into a liquid, tradeable token only if regulatory conditions were met. This future-proofed the client against SEC changes.\n\nEnterprise Off-Chain Infrastructure\nWhile the blockchain handles the money, the infrastructure handles the intelligence.\n\n• Kubernetes Hosting: Deployed resilient microservices on Kubernetes to monitor validator health and manage staking operations.\n\n• Golang Backend: Built high-performance off-chain services in Go to index blockchain data and serve APIs to institutional partners.\n\n• Unified CI/CD: Implemented a rigorous GitHub Actions pipeline that tested both the Solidity contracts and the Go infrastructure in parallel, ensuring that an update to one didn\'t break the other.',
    results: [
      'Regulatory Flexibility: Provided a technical solution to a legal problem, allowing the product to launch despite regulatory ambiguity',
      'Audit-Ready Code: The strict CI/CD and typed Go infrastructure ensured the codebase passed multiple external security audits with flying colours',
      'High Availability: The Kubernetes-based off-chain layer ensured that data feeds and APIs remained responsive even during periods of high network congestion'
    ],
    metrics: [
      {
        label: 'Infrastructure Grade',
        value: 'Institutional',
        icon: 'shield' as IconType
      },
      {
        label: 'Uptime Target',
        value: '99.99%',
        icon: 'shield' as IconType
      },
      {
        label: 'Availability',
        value: 'High-Availability',
        icon: 'chart' as IconType
      }
    ],
    timeline: 'The project involved designing the hybrid staking protocol architecture, developing smart contracts for atomic state transitions, building the Golang-based event indexing system, and deploying the Kubernetes infrastructure. The unified CI/CD pipeline was implemented to streamline deployments across both on-chain and off-chain components.',
    technologies: [
      'Golang',
      'Kubernetes',
      'Solidity',
      'Smart Contracts',
      'Blockchain Event Indexing',
      'AWS EKS',
      'GitHub Actions',
      'CI/CD Pipelines',
      'Validator Management',
      'Web3 Infrastructure'
    ],
    testimonial: {
      quote: 'The architecture delivered here wasn\'t just code; it was a strategic asset. By decoupling the "private" and "liquid" states, we built a protocol that could survive and thrive regardless of how the regulatory wind blew.',
      author: 'David Turnbull',
      role: 'Founder & Principal Architect'
    }
  },
  {
    slug: 'edsports-edtech-platform',
    clientName: 'EDSports (EdTech Platform)',
    industry: 'Education / Gaming',
    pageTitle: 'Democratising Classroom E-Sports with AWS Cloud Streaming',
    pageSubtitle: 'How North Point Digital helped EDSports deliver high-performance Minecraft Education experiences to any device, anywhere.',
    challenge: 'EDSports wanted to bring Minecraft Education esports to schools, but most schools rely on low-spec Chromebooks that cannot run the game locally. They needed a zero-install, GDPR-compliant solution.',
    executiveSummary: 'EDSports is an educational e-sports platform designed to engage students through the creativity and competition of Minecraft Education. However, the digital divide posed a threat: many schools rely on legacy hardware or Chromebooks incapable of running 3D games. North Point Digital architected a solution using AWS Application Streaming technology to render the game in the cloud and stream it to the browser. The result is a secure, GDPR-compliant platform that allows students to access high-fidelity educational gaming from a standard web browser.',
    detailedChallenge: 'EDSports had a vision to gamify education, but technical logistics stood in the way:\n\n• Hardware Inequity: The majority of UK schools utilise low-power Chromebooks or aging desktops that lack the GPU power required for Minecraft Education.\n\n• Strict Data Compliance: Installing software on school networks is a bureaucratic nightmare. The solution needed to be "Zero Touch" and fully GDPR compliant, ensuring no student data was stored on local machines.\n\n• Classroom Management: Teachers needed a simple way to control the chaos—launching specific lesson maps (e.g., Capture the Flag, Parkour) without needing technical support.',
    solution: 'Built a custom cloud-streaming platform using AWS AppStream 2.0 (WorkSpaces Family). Developed a custom web launcher that allows teachers to deploy specific game environments (Bedwars, Parkour) instantly.',
    whyChooseUs: 'EDSports required a partner who could bridge the gap between "Cloud Infrastructure" and "User Experience."\n\n• End-User Computing (EUC) Expertise: North Point Digital holds specific expertise in AWS streaming technologies, understanding latency, frame rates, and cost-per-session economics.\n\n• Custom Application Development: Unlike standard infrastructure partners, we could build the bespoke front-end application required to make the complex backend invisible to children and teachers.',
    detailedSolution: 'North Point Digital delivered a "Pixel Streaming" architecture that moved the heavy lifting from the classroom to the cloud:\n\n• AWS AppStream 2.0 (WorkSpaces Family): We configured a fleet of GPU-backed streaming instances that render Minecraft Education on AWS servers and stream the video feed to the student\'s browser with sub-millisecond latency.\n\n• Custom "Launcher" Application: We built a gamified frontend web application acting as a lobby. This allows students to customise avatars and enter sessions, while providing teachers with a "Command Centre" to trigger awards and gamification events.\n\n• Dynamic Environment Loading: The architecture allows dynamic injection of specific game worlds. A teacher can select "Bedwars" or "Capture the Flag" from a web menu, and the AWS infrastructure instantly spins up a session pre-loaded with that map.\n\n• GDPR-Compliant Storage: All user profiles and game states are stored in encrypted, transient cloud sessions. No data ever touches the physical school device, satisfying strict data protection requirements.',
    results: [
      '100% Hardware Agnostic: High-fidelity Minecraft now runs smoothly on $150 Chromebooks and ten-year-old laptops',
      'Instant Access: No installation or patching required by school IT admins. Students simply log in and play',
      'Teacher Empowerment: The custom launcher reduced setup time from 20 minutes to 30 seconds, maximising learning time'
    ],
    metrics: [
      {
        label: 'Hardware Compatibility',
        value: '100% Agnostic',
        icon: 'shield' as IconType
      },
      {
        label: 'Setup Time',
        value: '30 Seconds',
        icon: 'clock' as IconType
      },
      {
        label: 'Scalability',
        value: 'Thousands Concurrent',
        icon: 'chart' as IconType
      }
    ],
    timeline: 'The project involved designing the cloud-streaming architecture, developing the custom web launcher, configuring AWS AppStream 2.0 environments, and implementing GDPR-compliant data handling. The platform was built to scale automatically and support multiple concurrent game sessions across different schools.',
    technologies: [
      'AWS AppStream 2.0',
      'AWS WorkSpaces',
      'Amazon VPC',
      'AWS IAM',
      'Amazon CloudWatch',
      'AWS Auto Scaling',
      'Minecraft Education Edition',
      'GDPR Compliance'
    ],
    testimonial: {
      quote: 'North Point Digital took a complex technical hurdle—running 3D games on low-end hardware—and turned it into our biggest competitive advantage. Their cloud streaming solution allows us to drop into any school in the country and be up and running in seconds.',
      author: 'Founder',
      role: 'EDSports'
    }
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

