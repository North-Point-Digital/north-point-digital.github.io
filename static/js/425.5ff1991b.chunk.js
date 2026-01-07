"use strict";(self.webpackChunkoffer_landing_page=self.webpackChunkoffer_landing_page||[]).push([[425],{425:(e,i,t)=>{t.r(i),t.d(i,{default:()=>J});var r=t(43),n=t(464),a=t(446),o=t(774),s=t(579);const l=(0,n.Ay)(a.P.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 1.5rem;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 15px;
  color: white;
  min-height: 120px;
`,d=n.Ay.div`
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 700;
  color: white;
  margin-bottom: 0.3rem;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
`,c=n.Ay.div`
  font-size: clamp(0.9rem, 1.5vw, 1rem);
  color: rgba(255, 255, 255, 0.9);
  font-weight: 500;
`,p=e=>{let{endValue:i,duration:t=2,suffix:n="",text:a,delay:o=0}=e;const[p,m]=(0,r.useState)(0),g=(0,r.useRef)(null),u=(0,r.useRef)(null),h=(0,r.useRef)(!1);(0,r.useEffect)(()=>{const e=new IntersectionObserver(e=>{let[i]=e;i.isIntersecting&&!h.current?(m(0),h.current=!0,setTimeout(()=>{x()},1e3*o)):!i.isIntersecting&&h.current&&(m(0),h.current=!1,u.current&&(cancelAnimationFrame(u.current),u.current=null))},{threshold:.5});return g.current&&e.observe(g.current),()=>{e.disconnect(),u.current&&cancelAnimationFrame(u.current)}},[o]);const x=()=>{const e=Date.now(),r=()=>{const n=Date.now(),a=Math.min((n-e)/(1e3*t),1),o=1-Math.pow(1-a,4),s=Math.floor(o*i);m(s),a<1&&h.current?u.current=requestAnimationFrame(r):h.current=!1};u.current=requestAnimationFrame(r)};return(0,s.jsxs)(l,{ref:g,initial:{opacity:0,scale:.8},animate:{opacity:1,scale:1},transition:{duration:.6},children:[(0,s.jsxs)(d,{children:[p,n]}),(0,s.jsx)(c,{children:a})]})},m=n.Ay.section`
  margin: 3rem 0;
`,g=n.Ay.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
  max-width: 600px;
  margin: 0 auto;
`,u=()=>(0,s.jsx)(m,{children:(0,s.jsx)(g,{children:[{endValue:20,suffix:"+",text:"Reviews Completed",duration:2,delay:.2},{endValue:30,suffix:"%",text:"Cost Savings Average*",duration:2.5,delay:.4}].map((e,i)=>(0,s.jsx)(p,{endValue:e.endValue,suffix:e.suffix,text:e.text,duration:e.duration,delay:e.delay},i))})}),h=n.Ay.section`
  padding: 5rem 2rem;
  position: relative;
  background: ${e=>{let{$framed:i}=e;return i?"rgba(255, 255, 255, 0.08)":"rgba(255, 255, 255, 0.05)"}};
  border: ${e=>{let{$framed:i}=e;return i?"1px solid rgba(255, 255, 255, 0.2)":"none"}};
  border-radius: ${e=>{let{$framed:i}=e;return i?"20px":"0"}};
  backdrop-filter: ${e=>{let{$framed:i}=e;return i?"blur(14px)":"none"}};
  overflow: ${e=>{let{$framed:i}=e;return i?"hidden":"visible"}};
`,x=n.Ay.div`
  max-width: 1200px;
  margin: 0 auto;
`,f=n.Ay.div`
  text-align: center;
  margin-bottom: 4rem;
`,y=(0,n.Ay)(a.P.h2)`
  font-size: clamp(2rem, 4vw, 3rem);
  color: white;
  margin-bottom: 1rem;
`,b=(0,n.Ay)(a.P.p)`
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.8);
  max-width: 700px;
  margin: 0 auto;
`,w=n.Ay.div`
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    left: 50%;
    top: 0;
    bottom: 0;
    width: 2px;
    background: linear-gradient(180deg, rgba(255, 255, 255, 0.65) 0%, rgba(255, 255, 255, 0.3) 100%);
    transform: translateX(-50%);
    
    @media (max-width: 768px) {
      left: 20px;
    }
  }
`,v=(0,n.Ay)(a.P.div)`
  display: flex;
  justify-content: ${e=>"left"===e.$align?"flex-start":"flex-end"};
  padding: 2rem 0;
  position: relative;
  
  @media (max-width: 768px) {
    justify-content: flex-start;
    padding-left: 60px;
  }
`,j=n.Ay.div`
  background: rgba(255, 255, 255, 0.18);
  backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.35);
  box-shadow: 0 20px 40px rgba(12, 18, 46, 0.25);
  border-radius: 22px;
  padding: 2.25rem;
  width: 45%;
  position: relative;
  
  @media (max-width: 768px) {
    width: 100%;
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    ${e=>"left"===e.$align?"right: -12px":"left: -12px"};
    transform: translateY(-50%);
    width: 0;
    height: 0;
    border-style: solid;
    border-width: ${e=>"left"===e.$align?"10px 0 10px 12px":"10px 12px 10px 0"};
    border-color: ${e=>"left"===e.$align?"transparent transparent transparent rgba(255, 255, 255, 0.1)":"transparent rgba(255, 255, 255, 0.1) transparent transparent"};
    
    @media (max-width: 768px) {
      left: -12px;
      border-width: 10px 12px 10px 0;
      border-color: transparent rgba(255, 255, 255, 0.1) transparent transparent;
    }
  }
`,A=n.Ay.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 60px;
  height: 60px;
  background: rgba(255, 255, 255, 0.28);
  backdrop-filter: blur(16px);
  border: 2px solid rgba(255, 255, 255, 0.55);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
  
  svg {
    font-size: 1.5rem;
    color: white;
  }
  
  @media (max-width: 768px) {
    left: 20px;
  }
`,k=n.Ay.div`
  font-size: 0.9rem;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.8);
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 0.5rem;
`,z=n.Ay.h3`
  font-size: 1.5rem;
  color: white;
  margin-bottom: 1rem;
`,R=n.Ay.ul`
  list-style: none;
  padding: 0;
  
  li {
    color: rgba(255, 255, 255, 0.95);
    padding: 0.5rem 0;
    display: flex;
    align-items: flex-start;
    gap: 0.75rem;
    font-size: 1rem;
    line-height: 1.6;
    
    &:before {
      content: "✓";
      color: rgba(255, 255, 255, 0.9);
      font-weight: bold;
      flex-shrink: 0;
      margin-top: 0.1rem;
    }
  }
`,S=e=>{let{framed:i}=e;const t=[{icon:(0,s.jsx)(o.KSO,{}),week:"Week 1",title:"Discovery & Analysis",items:["Comprehensive account audit & cost analysis","Security vulnerability assessment","Architecture review","Initial findings report with quick wins"],align:"left"},{icon:(0,s.jsx)(o.xdT,{}),week:"Week 2",title:"Implementation & Optimisation",items:["Remediation of critical security issues","Cost optimisation implementation","Budget alerts & tagging setup","Performance tuning"],align:"right"},{icon:(0,s.jsx)(o.t69,{}),week:"Delivery",title:"Final Report & Roadmap",items:["Comprehensive Well-Architected report","Long-term optimisation roadmap","Knowledge transfer session","30-day support included"],align:"left"}],r={hidden:{opacity:0,x:-20},visible:{opacity:1,x:0,transition:{duration:.6}}};return(0,s.jsx)(h,{$framed:i,children:(0,s.jsxs)(x,{children:[(0,s.jsxs)(f,{children:[(0,s.jsx)(y,{initial:{opacity:0,y:-20},whileInView:{opacity:1,y:0},transition:{duration:.5},viewport:{once:!0},children:"How It Works"}),(0,s.jsx)(b,{initial:{opacity:0,y:-20},whileInView:{opacity:1,y:0},transition:{duration:.5,delay:.1},viewport:{once:!0},children:"Complete Well-Architected Review in just 2 weeks"})]}),(0,s.jsx)(w,{children:t.map((e,i)=>(0,s.jsxs)(v,{$align:e.align,as:a.P.div,variants:r,initial:"hidden",whileInView:"visible",viewport:{once:!0},transition:{delay:.2*i},children:[(0,s.jsx)(A,{children:e.icon}),(0,s.jsxs)(j,{$align:e.align,children:[(0,s.jsx)(k,{children:e.week}),(0,s.jsx)(z,{children:e.title}),(0,s.jsx)(R,{children:e.items.map((e,i)=>(0,s.jsx)("li",{children:e},i))})]})]},i))})]})})};var $=t(28);const C=n.Ay.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding-top: 80px;
  position: relative;
  overflow: hidden;
  background-image: url('/product_offer_hero_bg.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(102, 126, 234, 0.7) 0%, rgba(118, 75, 162, 0.7) 100%);
    z-index: 1;
  }
`,P=n.Ay.section`
  text-align: center;
  margin-bottom: 3rem;
  min-height: calc(100vh - 140px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 3rem 0;
`,I=n.Ay.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 2rem;
  position: relative;
  z-index: 2;
`,W=(0,n.Ay)(a.P.h1)`
  font-size: clamp(2.5rem, 5vw, 4rem);
  color: white;
  margin-bottom: 1rem;
  font-weight: 700;
`,T=(0,n.Ay)(a.P.p)`
  font-size: clamp(1.2rem, 2vw, 1.5rem);
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 3rem;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`,_=(0,n.Ay)(a.P.button)`
  padding: 1rem 2.5rem;
  background: white;
  color: #667eea;
  border: none;
  border-radius: 50px;
  font-weight: 600;
  font-size: 1.2rem;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  }
`,B="https://calendly.com/david-northpointdigital/30min",O=n.Ay.section`
  display: grid;
  gap: 3rem;
  margin-bottom: 5rem;
`,V=(0,n.Ay)(a.P.div)`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 20px;
  padding: 3rem;
  color: white;
`,F=n.Ay.h2`
  font-size: 2rem;
  margin-bottom: 1.5rem;
  color: white;
`,H=n.Ay.div`
  font-size: 1.1rem;
  line-height: 1.8;
  color: rgba(255, 255, 255, 0.9);

  p {
    margin-bottom: 1.5rem;
  }

  ul {
    list-style: none;
    padding: 0;

    li {
      padding: 0.5rem 0;
      display: flex;
      align-items: center;
      gap: 1rem;
      
      svg {
        color: white;
        font-size: 1.2rem;
        flex-shrink: 0;
      }
    }
  }
`,D=n.Ay.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`,E=(0,n.Ay)(a.P.div)`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 15px;
  padding: 2rem;
  text-align: center;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    background: rgba(255, 255, 255, 0.15);
  }
  
  svg {
    font-size: 3rem;
    color: white;
    margin-bottom: 1rem;
  }
  
  h3 {
    color: white;
    font-size: 1.3rem;
    margin-bottom: 0.5rem;
  }
  
  p {
    color: rgba(255, 255, 255, 0.8);
    font-size: 1rem;
  }
`,M=(0,n.Ay)(a.P.div)`
  background: rgba(255, 255, 255, 0.12);
  border: 1px solid rgba(255, 255, 255, 0.25);
  border-radius: 20px;
  padding: 3rem;
  text-align: center;
  color: white;
  backdrop-filter: blur(12px);
`,Y=n.Ay.h3`
  font-size: clamp(1.8rem, 4vw, 2.5rem);
  margin-bottom: 1rem;
  color: white;
`,Z=n.Ay.p`
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.85);
  margin-bottom: 2rem;
  max-width: 640px;
  margin-left: auto;
  margin-right: auto;
`,L=n.Ay.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
`,q=(0,n.Ay)(_)`
  background: transparent;
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.6);
`,K=(0,n.Ay)(a.P.section)`
  margin-top: 6rem;
  text-align: center;
  color: white;
`,X=n.Ay.h2`
  font-size: clamp(2rem, 4vw, 3rem);
  margin-bottom: 1rem;
`,G=n.Ay.p`
  font-size: 1.15rem;
  color: rgba(255, 255, 255, 0.85);
  margin-bottom: 2.5rem;
`,J=()=>{const e=[{icon:(0,s.jsx)(o.Tsk,{}),title:"Cost Optimisation",description:"Identify and eliminate waste in your AWS spending"},{icon:(0,s.jsx)(o.SMR,{}),title:"Enhanced Security",description:"Implement best practices for cloud security"},{icon:(0,s.jsx)(o.Z0L,{}),title:"Best Practices",description:"Align with AWS Well-Architected Framework"}],i=(0,r.useRef)(null);return(0,r.useLayoutEffect)(()=>{var e;const t=window.history.scrollRestoration;return"scrollRestoration"in window.history&&(window.history.scrollRestoration="manual"),window.scrollTo({top:0,left:0,behavior:"auto"}),null===(e=i.current)||void 0===e||e.scrollIntoView({behavior:"auto",block:"start",inline:"nearest"}),()=>{"scrollRestoration"in window.history&&(window.history.scrollRestoration=null!==t&&void 0!==t?t:"auto")}},[]),(0,s.jsx)(C,{children:(0,s.jsxs)(I,{children:[(0,s.jsxs)(P,{ref:i,children:[(0,s.jsx)(W,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6},children:"Security & Cost Optimisation Blueprint"}),(0,s.jsx)(T,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6,delay:.2},children:"Comprehensive Well-Architected Review that targets 25%+ cost reduction while strengthening security. Risk-free engagement with no upfront cost."}),(0,s.jsx)(_,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6,delay:.4},whileHover:{scale:1.05},whileTap:{scale:.95},as:a.P.a,href:B,target:"_blank",rel:"noopener noreferrer",children:"Book A Call Today"}),(0,s.jsx)(u,{})]}),(0,s.jsxs)(O,{children:[(0,s.jsxs)(V,{initial:{opacity:0,x:-20},animate:{opacity:1,x:0},transition:{duration:.6,delay:.6},children:[(0,s.jsx)(F,{children:"Your Blueprint to Secure and Cost-Effective Infrastructure"}),(0,s.jsxs)(H,{children:[(0,s.jsx)("p",{children:"Our Security & Cost Optimisation Blueprint is a comprehensive Well-Architected Review focused on the two pillars that deliver immediate ROI: Cost Optimisation and Security. This isn't a theoretical audit\u2014we identify actionable improvements and remediate critical issues during the engagement."}),(0,s.jsx)("p",{children:"We audit your AWS accounts and infrastructure, applying proven cost-saving strategies, implementing budget alerts, and targeting a minimum 25% reduction in your AWS spend. With infrastructure misconfigurations being a leading cause of data breaches, our experts identify and remediate high-risk security vulnerabilities during the review\u2014delivering immediate value."}),(0,s.jsx)("p",{children:(0,s.jsxs)("ul",{children:[(0,s.jsxs)("li",{children:[(0,s.jsx)(o.aZA,{}),"Complete infrastructure assessment by AWS-certified experts"]}),(0,s.jsxs)("li",{children:[(0,s.jsx)(o.aZA,{}),"Detailed cost optimisation roadmap with tagging strategies and budget alerts (targeting 25%+ reduction)"]}),(0,s.jsxs)("li",{children:[(0,s.jsx)(o.aZA,{}),"Security vulnerability remediation\u2014we fix critical issues during the engagement"]}),(0,s.jsxs)("li",{children:[(0,s.jsx)(o.aZA,{}),"Risk-free engagement with no upfront cost and no long-term commitments"]})]})}),(0,s.jsx)(_,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6,delay:.4},whileHover:{scale:1.05},whileTap:{scale:.95},as:a.P.a,href:B,target:"_blank",rel:"noopener noreferrer",children:"Book A Call Today"})]})]}),(0,s.jsx)(S,{framed:!0}),(0,s.jsxs)(M,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},transition:{duration:.6},viewport:{once:!0},children:[(0,s.jsx)(Y,{children:"Ready for rapid cost and security wins?"}),(0,s.jsx)(Z,{children:"Kick off your Security & Cost Optimisation Blueprint and get actionable changes in motion within two weeks."}),(0,s.jsxs)(L,{children:[(0,s.jsx)(_,{whileHover:{scale:1.05},whileTap:{scale:.95},as:a.P.a,href:B,target:"_blank",rel:"noopener noreferrer",children:"Book A Call Today"}),(0,s.jsx)(q,{whileHover:{scale:1.05},whileTap:{scale:.95},as:a.P.a,href:B,target:"_blank",rel:"noopener noreferrer",children:"See Available Times"})]})]}),(0,s.jsx)($.A,{framed:!0})]}),(0,s.jsx)(D,{children:e.map((e,i)=>(0,s.jsxs)(E,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5,delay:1+.1*i},children:[e.icon,(0,s.jsx)("h3",{children:e.title}),(0,s.jsx)("p",{children:e.description})]},i))}),(0,s.jsxs)(K,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},transition:{duration:.6},viewport:{once:!0},children:[(0,s.jsx)(X,{children:"Let\u2019s transform your AWS foundation"}),(0,s.jsx)(G,{children:"Book a discovery call and we'll deliver a tailored optimisation roadmap with measurable ROI."}),(0,s.jsxs)(L,{children:[(0,s.jsx)(_,{whileHover:{scale:1.05},whileTap:{scale:.95},as:a.P.a,href:B,target:"_blank",rel:"noopener noreferrer",children:"Schedule Your Call"}),(0,s.jsx)(q,{whileHover:{scale:1.05},whileTap:{scale:.95},as:a.P.a,href:B,target:"_blank",rel:"noopener noreferrer",children:"Talk With An Expert"})]})]})]})})}}}]);
//# sourceMappingURL=425.5ff1991b.chunk.js.map