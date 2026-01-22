"use strict";(self.webpackChunkoffer_landing_page=self.webpackChunkoffer_landing_page||[]).push([[509],{392:(e,n,t)=>{t.d(n,{A:()=>o,t:()=>i});const o=[{slug:"reduce-aws-bill-without-rewriting-everything",title:"How to Reduce Your AWS Bill Without Rewriting Everything",excerpt:"A practical, operator-focused guide to cutting AWS costs using tagging, right-sizing, and quick-win changes that do not stall delivery.",content:'\n      <h2>Stop Treating Cost Optimisation as a One-Off Project</h2>\n      <p>\n        Most teams know their AWS bill is too high, but the idea of a full re-architecture feels\n        unrealistic. The good news is you can unlock meaningful savings without a two-year migration\n        programme. The key is to treat cost optimisation as an ongoing <strong>operations discipline</strong>,\n        not a one-off event.\n      </p>\n      <h3>1. Get Visibility First: Tagging and Cost Allocation</h3>\n      <p>\n        You cannot optimise what you cannot see. Start by enforcing a simple tagging model across\n        accounts: <code>Environment</code>, <code>Application</code>, <code>Owner</code>, and\n        <code>CostCentre</code>. Once tags are consistent, you can break the bill down by team and\n        workload, and have sensible conversations about value versus spend.\n      </p>\n      <h3>2. Target the No-Regret Changes</h3>\n      <p>\n        Before you touch application code, look for changes that are operational only:\n      </p>\n      <ul>\n        <li>Right-size consistently under-utilised instances.</li>\n        <li>Move cold data to cheaper storage tiers.</li>\n        <li>Turn off non-production environments out-of-hours.</li>\n      </ul>\n      <p>\n        These actions can usually be implemented by the platform team with very low risk and\n        immediate measurable impact.\n      </p>\n      <h3>3. Build Guard Rails, Not Hero Dashboards</h3>\n      <p>\n        Fancy cost dashboards are useless if engineers ignore them. Instead, wire cost signals\n        into the way people already work: budgets, alerts, and simple monthly reviews tied to\n        your AWS accounts and applications.\n      </p>\n      <div class="callout callout-tip">\n        <span class="callout-title">Pro Tip</span>\n        <p>\n          At North Point Digital we use our Security &amp; Cost Optimisation Blueprint to find these\n          quick wins in the first few weeks, while also giving you a longer-term roadmap for deeper\n          modernisation work.\n        </p>\n      </div>\n    ',author:"David Turnbull",authorRole:"Founder & AWS Solutions Architect",publishDate:"2025-01-27",category:"AWS Cost Optimisation",tags:["AWS","Cost Optimisation","Cloud Governance"],seoMeta:{metaDescription:"A practical guide to reducing your AWS bill without a full re-architecture, focusing on tagging, right-sizing and no-regret operational changes."}},{slug:"landing-zones-for-growing-aws-teams",title:"Building on Bedrock: Why Your Business Needs an AWS Landing Zone",excerpt:"As your cloud usage matures, a single-account \u201cwild west\u201d AWS setup turns into security risk, billing chaos, and operational drag. A Landing Zone fixes the foundation.",content:"\n      <h2>Building on Bedrock: Why Your Business Needs an AWS Landing Zone</h2>\n      <p>\n        If you have ever tried to build a skyscraper on a swamp, you know that without a solid foundation,\n        even the most impressive structure will eventually sink. The same logic applies to the cloud.\n      </p>\n      <p>\n        In the early days of cloud adoption, organisations often operated out of a single AWS account,\n        manually configuring services and lumping development and production workloads together. However,\n        as cloud usage matures, this \u201cwild west\u201d approach leads to security vulnerabilities, billing\n        nightmares, and operational bottlenecks.\n      </p>\n      <p>\n        This is where an AWS Landing Zone becomes critical. A landing zone is a well-architected,\n        multi-account AWS environment that provides a standardised foundation for security, identity,\n        networking, and governance.\n      </p>\n      <p>\n        Here is why establishing a landing zone is essential for any organisation looking to scale in the cloud.\n      </p>\n\n      <h3>1. Security and Isolation: Limiting the \u201cBlast Radius\u201d</h3>\n      <p>\n        One of the most dangerous anti-patterns in cloud architecture is housing all resources within a\n        single AWS account or sharing accounts among different teams. If a security breach or\n        misconfiguration occurs in a single-account setup, it can potentially affect all services and workloads.\n      </p>\n      <p>\n        A landing zone solves this by enforcing a multi-account strategy. By separating workloads into\n        distinct accounts\u2014such as separate accounts for production, development, and security logging\u2014you\n        create logical boundaries that restrict the impact of an adverse event. This isolation minimises\n        the blast radius, ensuring that an issue in one application does not bring down your entire\n        infrastructure or compromise sensitive data in another environment.\n      </p>\n      <p>\n        Furthermore, a landing zone allows you to implement specific security perimeters. For instance,\n        you can designate specific accounts to house sensitive data, drastically reducing the exposure\n        surface and attack vectors.\n      </p>\n\n      <h3>2. Scalable Governance and Automation</h3>\n      <p>\n        As an organisation grows, manually configuring identity and access management (IAM), networking,\n        and logging for every new project becomes slow, complex, and error-prone. A landing zone\n        facilitates automation, streamlining the process of provisioning new AWS accounts and resources.\n      </p>\n      <p>\n        By using tools like AWS Control Tower, organisations can automate the setup of a secure landing\n        zone using predefined best practices. This allows teams to provision new accounts quickly via an\n        account factory, ensuring that every new environment comes pre-configured with the necessary\n        security baselines and network settings.\n      </p>\n      <p>\n        This automation eliminates the operational inefficiency of manual configuration, allowing your\n        cloud footprint to scale without a linear increase in headcount.\n      </p>\n\n      <h3>3. Centralised Identity and Access Management</h3>\n      <p>\n        Managing users and permissions across dozens of different accounts can be chaotic. A landing zone\n        integrates with AWS IAM Identity Center to centrally manage single sign-on (SSO) access.\n      </p>\n      <p>\n        This structure supports the principle of least privilege. Instead of managing individual users in\n        every account, you can use federated access to allow human users to use their existing credentials\n        to access only the specific accounts they are authorised to touch.\n      </p>\n      <p>\n        This centralisation ensures that if an employee leaves or changes roles, their access can be\n        managed or revoked from a single location rather than across fragmented environments.\n      </p>\n\n      <h3>4. Visibility and Compliance</h3>\n      <p>\n        For regulated industries, the ability to audit and monitor infrastructure is non-negotiable. A\n        landing zone provides a centralised view of your cloud infrastructure, resource dependencies, and\n        account usage.\n      </p>\n      <p>\n        A key component of this architecture is the Log Archive account. This dedicated account acts as a\n        repository for immutable logs collected from across the organisation, including AWS CloudTrail\n        (audit logs) and AWS Config (configuration history).\n      </p>\n      <p>\n        Centralising these logs ensures that security and compliance teams have a single source of truth\n        for auditing, without needing to access the individual workload accounts where the applications run.\n      </p>\n      <p>\n        Additionally, landing zones allow you to apply Service Control Policies (SCPs). These are guardrails\n        that define the maximum available permissions for accounts within your organisation, ensuring that\n        member accounts cannot disable essential security features like logging or modify restricted resources.\n      </p>\n\n      <h3>5. Cost Management and Allocation</h3>\n      <p>\n        Without a structured landing zone, tracking which team or project is responsible for specific\n        cloud costs can be nearly impossible. This leads to the anti-pattern of convoluted expense tracking\n        where you cannot easily identify opportunities for savings.\n      </p>\n      <p>\n        Using a multi-account strategy within a landing zone creates natural billing boundaries. Because\n        AWS costs are allocated by account, having different accounts for different business units or\n        workloads makes it easy to report, forecast, and budget expenditures.\n      </p>\n      <p>\n        Furthermore, landing zones enable organisations to implement cost management practices by applying\n        policies and guardrails for resource usage, providing visibility into spending patterns across\n        the entire organisation.\n      </p>\n\n      <h3>6. Innovation Without Risk</h3>\n      <p>\n        Innovation requires experimentation, but you do not want experiments to threaten your production data.\n        A well-designed landing zone includes specific Sandbox Organisational Units (OUs).\n      </p>\n      <p>\n        These sandbox accounts provide developers with the freedom to explore AWS services and experiment\n        with new technologies in an environment that is disconnected from internal networks and sensitive data.\n      </p>\n      <p>\n        This separation promotes agility and innovation while ensuring that corporate intellectual property\n        and production workloads remain secure.\n      </p>\n\n      <h3>Conclusion</h3>\n      <p>\n        Building a landing zone might seem like a heavy lift at the start of your journey, but it is an\n        investment in your organisation\u2019s future. It transforms cloud adoption from a chaotic process into\n        a scalable, manageable operation.\n      </p>\n      <p>\n        Whether you build it manually or leverage AWS Control Tower to automate the process, a landing zone\n        ensures that your cloud environment is secure, compliant, and ready to grow with your business.\n      </p>\n    ",author:"David Turnbull",authorRole:"Founder & AWS Solutions Architect",publishDate:"2025-01-27",category:"Cloud Foundations",tags:["AWS","Landing Zones","Security"],seoMeta:{metaDescription:"Why an AWS Landing Zone is a critical foundation for security, compliance, cost management and innovation as your cloud estate grows."}}],i=e=>o.find(n=>n.slug===e)},509:(e,n,t)=>{t.r(n),t.d(n,{default:()=>f});t(43);var o=t(615),i=t(464),a=t(446),r=t(774),s=t(392),l=t(90),c=t(579);const d=i.Ay.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding-top: 80px;
`,u=i.Ay.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 4rem 2rem;
`,g=(0,i.Ay)(a.P.button)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1.25rem;
  margin-bottom: 2rem;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  background: rgba(255, 255, 255, 0.08);
  color: white;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.15);
    transform: translateX(-4px);
  }
`,p=i.Ay.h1`
  font-size: clamp(2.25rem, 4vw, 3rem);
  color: white;
  margin-bottom: 0.75rem;
`,h=i.Ay.div`
  font-size: 0.95rem;
  color: rgba(255, 255, 255, 0.75);
  margin-bottom: 2rem;
`,m=(0,i.Ay)(a.P.img)`
  width: 100%;
  max-height: 500px;
  object-fit: cover;
  border-radius: 20px;
  margin-bottom: 2.5rem;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.2);
  
  @media (max-width: 768px) {
    max-height: 300px;
    border-radius: 15px;
  }
`,b=i.Ay.div`
  background: rgba(255, 255, 255, 0.06);
  backdrop-filter: blur(12px);
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  padding: 2.5rem;
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.8;
  font-size: 1.05rem;

  h2,
  h3 {
    color: white;
    margin-top: 1.75rem;
    margin-bottom: 0.75rem;
  }

  h2 {
    font-size: 1.6rem;
  }

  h3 {
    font-size: 1.3rem;
  }

  p {
    margin-bottom: 1rem;
  }

  ul {
    margin-left: 1.25rem;
    margin-bottom: 1rem;
  }

  li {
    margin-bottom: 0.4rem;
  }

  code {
    font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New',
      monospace;
    font-size: 0.95em;
    background: rgba(0, 0, 0, 0.4);
    padding: 0.15rem 0.35rem;
    border-radius: 4px;
  }

  .callout {
    border-radius: 12px;
    padding: 1.5rem;
    margin: 2rem 0;
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    position: relative;
    padding-left: 3.5rem;
    
    &::before {
      position: absolute;
      left: 1.25rem;
      top: 1.5rem;
      font-size: 1.5rem;
      line-height: 1;
    }
    
    &.callout-info {
      background: rgba(56, 189, 248, 0.15);
      border-left: 4px solid rgba(56, 189, 248, 0.4);
      
      &::before {
        content: 'ℹ️';
      }
    }
    
    &.callout-tip {
      background: rgba(251, 191, 36, 0.15);
      border-left: 4px solid rgba(251, 191, 36, 0.4);
      
      &::before {
        content: '💡';
      }
    }
    
    &.callout-warning {
      background: rgba(239, 68, 68, 0.15);
      border-left: 4px solid rgba(239, 68, 68, 0.4);
      
      &::before {
        content: '⚠️';
      }
    }
    
    &.callout-success {
      background: rgba(34, 197, 94, 0.15);
      border-left: 4px solid rgba(34, 197, 94, 0.4);
      
      &::before {
        content: '✅';
      }
    }
    
    .callout-title {
      font-size: 1.1rem;
      font-weight: 600;
      margin-bottom: 0.5rem;
      color: white;
      display: block;
    }
    
    p {
      margin-bottom: 0.75rem;
      line-height: 1.7;
      color: rgba(255, 255, 255, 0.95);
      
      &:last-child {
        margin-bottom: 0;
      }
    }
    
    ul, ol {
      margin-left: 1.25rem;
      margin-top: 0.5rem;
      margin-bottom: 0.5rem;
      color: rgba(255, 255, 255, 0.95);
    }
    
    li {
      margin-bottom: 0.4rem;
      line-height: 1.7;
    }
  }
`,f=()=>{var e,n;const{slug:t}=(0,o.g)(),i=(0,o.Zp)(),a=t?(0,s.t)(t):void 0;if(!a)return(0,c.jsx)(d,{children:(0,c.jsxs)(u,{children:[(0,c.jsxs)(g,{onClick:()=>i("/blog"),whileHover:{scale:1.05},whileTap:{scale:.95},children:[(0,c.jsx)(r.QVr,{}),"Back to blog"]}),(0,c.jsx)(p,{children:"Article not found"}),(0,c.jsx)(h,{children:"We could not find the article you were looking for."})]})});const f=(null===(e=a.seoMeta)||void 0===e?void 0:e.metaDescription)||a.excerpt||`${a.title} from North Point Digital.`,y=`https://northpointdigital.com/blog/${a.slug}`,w=a.featuredImage||a.thumbnailImage,v=(null===(n=a.seoMeta)||void 0===n?void 0:n.ogImage)||w||"https://northpointdigital.com/north-point-logo.webp",x={"@context":"https://schema.org","@type":"BlogPosting",headline:a.title,description:f,author:{"@type":"Person",name:a.author},publisher:{"@type":"Organization",name:"North Point Digital",logo:{"@type":"ImageObject",url:"https://northpointdigital.com/north-point-logo.webp"}},datePublished:a.publishDate,dateModified:a.lastUpdated||a.publishDate,mainEntityOfPage:{"@type":"WebPage","@id":y},...w&&{image:{"@type":"ImageObject",url:w.startsWith("http")?w:`https://northpointdigital.com${w}`}}};return(0,c.jsx)(d,{children:(0,c.jsxs)(u,{children:[(0,c.jsx)(l.A,{title:`${a.title} | Blog | North Point Digital`,description:f,canonical:y,jsonLd:x,ogImage:v}),(0,c.jsxs)(g,{onClick:()=>i("/blog"),whileHover:{scale:1.05},whileTap:{scale:.95},children:[(0,c.jsx)(r.QVr,{}),"Back to blog"]}),(0,c.jsx)(p,{children:a.title}),(0,c.jsxs)(h,{children:[new Date(a.publishDate).toLocaleDateString("en-GB",{year:"numeric",month:"long",day:"numeric"})," \xb7 ",a.author,a.authorRole?`, ${a.authorRole}`:""]}),a.featuredImage&&(0,c.jsx)(m,{src:a.featuredImage,alt:a.title,initial:{opacity:0,scale:.95},animate:{opacity:1,scale:1},transition:{duration:.6},loading:"eager"}),(0,c.jsx)(b,{dangerouslySetInnerHTML:{__html:a.content}})]})})}}}]);
//# sourceMappingURL=509.249aeb40.chunk.js.map