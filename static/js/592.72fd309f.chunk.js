"use strict";(self.webpackChunkoffer_landing_page=self.webpackChunkoffer_landing_page||[]).push([[592],{592:(e,r,i)=>{i.r(r),i.d(r,{default:()=>_});var o=i(43),a=i(464),n=i(446),t=i(774),s=i(579);const l=a.Ay.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`,d=a.Ay.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`,m=a.Ay.div`
  display: flex;
  flex-direction: column;
`,c=a.Ay.label`
  color: #555;
  margin-bottom: 0.5rem;
  font-weight: 500;
  
  span {
    color: #dc3545;
  }
`,p=a.Ay.input`
  padding: 0.75rem 1rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  transition: all 0.3s ease;

  &:hover, &:focus {
    border-color: #667eea;
    outline: none;
  }

  &.error {
    border-color: #dc3545;
  }
`,u=a.Ay.select`
  padding: 0.75rem 1rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  background: white;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover, &:focus {
    border-color: #667eea;
    outline: none;
  }

  &.error {
    border-color: #dc3545;
  }
`,h=a.Ay.span`
  color: #dc3545;
  font-size: 0.875rem;
  margin-top: 0.25rem;
`,x=a.Ay.button`
  padding: 1rem 2rem;
  background: #667eea;
  color: white;
  border: none;
  border-radius: 4px;
  font-weight: 600;
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover:not(:disabled) {
    background: #5661d5;
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`,g=a.Ay.div`
  padding: 1.5rem;
  background: #d4edda;
  border: 1px solid #c3e6cb;
  border-radius: 4px;
  color: #155724;
  text-align: center;
  font-weight: 500;
`,y=e=>{let{onSubmit:r}=e;const[i,a]=(0,o.useState)({firstName:"",lastName:"",email:"",country:"",companyName:"",industry:""}),[n,t]=(0,o.useState)({}),[y,b]=(0,o.useState)(!1),[f,j]=(0,o.useState)(!1),v=e=>{const{name:r,value:i}=e.target;a(e=>({...e,[r]:i})),n[r]&&t(e=>({...e,[r]:void 0}))};return f?(0,s.jsx)(g,{children:"Thank you! Your download will begin shortly."}):(0,s.jsxs)(l,{onSubmit:async e=>{if(e.preventDefault(),(()=>{const e={};return i.firstName.trim()||(e.firstName="First name is required"),i.lastName.trim()||(e.lastName="Last name is required"),i.email.trim()?/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(i.email)||(e.email="Please enter a valid email"):e.email="Email is required",i.country.trim()||(e.country="Country/Region is required"),i.companyName.trim()||(e.companyName="Company name is required"),i.industry||(e.industry="Please select an industry"),t(e),0===Object.keys(e).length})()){b(!0);try{await r(i),j(!0)}catch(o){console.error("Form submission error:",o)}finally{b(!1)}}},children:[(0,s.jsxs)(d,{children:[(0,s.jsxs)(m,{children:[(0,s.jsxs)(c,{children:["First Name ",(0,s.jsx)("span",{children:"*"})]}),(0,s.jsx)(p,{type:"text",name:"firstName",value:i.firstName,onChange:v,className:n.firstName?"error":""}),n.firstName&&(0,s.jsx)(h,{children:n.firstName})]}),(0,s.jsxs)(m,{children:[(0,s.jsxs)(c,{children:["Last Name ",(0,s.jsx)("span",{children:"*"})]}),(0,s.jsx)(p,{type:"text",name:"lastName",value:i.lastName,onChange:v,className:n.lastName?"error":""}),n.lastName&&(0,s.jsx)(h,{children:n.lastName})]})]}),(0,s.jsxs)(m,{children:[(0,s.jsxs)(c,{children:["Email Address ",(0,s.jsx)("span",{children:"*"})]}),(0,s.jsx)(p,{type:"email",name:"email",value:i.email,onChange:v,className:n.email?"error":""}),n.email&&(0,s.jsx)(h,{children:n.email})]}),(0,s.jsxs)(d,{children:[(0,s.jsxs)(m,{children:[(0,s.jsxs)(c,{children:["Company Name ",(0,s.jsx)("span",{children:"*"})]}),(0,s.jsx)(p,{type:"text",name:"companyName",value:i.companyName,onChange:v,className:n.companyName?"error":""}),n.companyName&&(0,s.jsx)(h,{children:n.companyName})]}),(0,s.jsxs)(m,{children:[(0,s.jsxs)(c,{children:["Country/Region ",(0,s.jsx)("span",{children:"*"})]}),(0,s.jsx)(p,{type:"text",name:"country",value:i.country,onChange:v,className:n.country?"error":""}),n.country&&(0,s.jsx)(h,{children:n.country})]})]}),(0,s.jsxs)(m,{children:[(0,s.jsxs)(c,{children:["Industry ",(0,s.jsx)("span",{children:"*"})]}),(0,s.jsxs)(u,{name:"industry",value:i.industry,onChange:v,className:n.industry?"error":"",children:[(0,s.jsx)("option",{value:"",children:"Select an industry"}),["Technology","Finance","Healthcare","Manufacturing","Retail","Education","Government","Telecommunications","Energy","Transportation","Hospitality","Media & Entertainment","Real Estate","Professional Services","Other"].map(e=>(0,s.jsx)("option",{value:e,children:e},e))]}),n.industry&&(0,s.jsx)(h,{children:n.industry})]}),(0,s.jsx)(x,{type:"submit",disabled:y,children:y?"Processing...":"Download Playbook"})]})};var b=i(542),f=i(926);const j=a.Ay.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding-top: 80px;
`,v=a.Ay.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 2rem;
`,w=a.Ay.section`
  text-align: center;
  margin-bottom: 4rem;
`,N=(0,a.Ay)(n.P.h1)`
  font-size: clamp(2.5rem, 5vw, 4rem);
  color: white;
  margin-bottom: 1rem;
  font-weight: 700;
`,A=(0,a.Ay)(n.P.p)`
  font-size: clamp(1.2rem, 2vw, 1.5rem);
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 2rem;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`,k=a.Ay.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  margin-bottom: 4rem;

  @media (min-width: 968px) {
    grid-template-columns: 1fr 1fr;
    align-items: start;
  }
`,S=(0,a.Ay)(n.P.div)`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 20px;
  padding: 3rem;
  color: white;
`,P=a.Ay.h2`
  font-size: 2rem;
  margin-bottom: 1.5rem;
  color: white;
  display: flex;
  align-items: center;
  gap: 1rem;

  svg {
    font-size: 2rem;
  }
`,C=a.Ay.ul`
  list-style: none;
  padding: 0;

  li {
    padding: 1rem 0;
    display: flex;
    align-items: start;
    gap: 1rem;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);

    &:last-child {
      border-bottom: none;
    }

    svg {
      color: white;
      font-size: 1.5rem;
      flex-shrink: 0;
      margin-top: 0.25rem;
    }

    div {
      flex: 1;

      h3 {
        font-size: 1.2rem;
        margin-bottom: 0.5rem;
        color: white;
      }

      p {
        color: rgba(255, 255, 255, 0.8);
        line-height: 1.6;
      }
    }
  }
`,z=(0,a.Ay)(n.P.div)`
  background: white;
  border-radius: 20px;
  padding: 3rem;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
`,I=a.Ay.h2`
  font-size: 1.8rem;
  color: #333;
  margin-bottom: 1rem;
  text-align: center;
`,R=a.Ay.p`
  color: #666;
  text-align: center;
  margin-bottom: 2rem;
  line-height: 1.6;
`,Y=a.Ay.div`
  .hs-form {
    width: 100%;
  }

  .hs-form-field {
    margin-bottom: 1.5rem;
  }

  .hs-label {
    display: block;
    color: #555;
    margin-bottom: 0.5rem;
    font-weight: 500;
  }

  .hs-input {
    width: 100%;
    padding: 0.75rem 1rem;
    border: 1px solid #ddd;
    border-radius: 4px;
    transition: all 0.3s ease;

    &:hover, &:focus {
      border-color: #667eea;
      outline: none;
    }
  }

  .hs-button {
    padding: 1rem 2rem;
    background: #667eea;
    color: white;
    border: none;
    border-radius: 4px;
    font-weight: 600;
    font-size: 1.1rem;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
      background: #5661d5;
      transform: translateY(-2px);
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
    }
  }

  .hs-error-msgs {
    color: #dc3545;
    font-size: 0.875rem;
    margin-top: 0.25rem;
  }
`,_=()=>{const e="YOUR_PORTAL_ID"!==f.l.portalId&&!f.l.forms.aiPlaybook.includes("YOUR_"),r=()=>{window.open("https://drive.google.com/uc?export=download&id=1kYmIXpwALyr3Nab1uScEDkiHuNtI__SK","_blank")},i=[{icon:(0,s.jsx)(t.ZPX,{}),title:"Strategic Framework",description:"Step-by-step guide to building your AI adoption strategy"},{icon:(0,s.jsx)(t.YYR,{}),title:"Implementation Roadmap",description:"Clear path from planning to production deployment"},{icon:(0,s.jsx)(t.y8Q,{}),title:"Use Case Examples",description:"Real-world AI applications tailored for SMBs"}];return(0,s.jsx)(j,{children:(0,s.jsxs)(v,{children:[(0,s.jsxs)(w,{children:[(0,s.jsx)(N,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6},children:"AI Adoption Strategy Playbook"}),(0,s.jsx)(A,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6,delay:.1},children:"Your comprehensive guide to successfully implementing AI in your organisation. Learn proven strategies, avoid common pitfalls, and accelerate your AI journey."})]}),(0,s.jsxs)(k,{children:[(0,s.jsxs)(S,{initial:{opacity:0,x:-20},animate:{opacity:1,x:0},transition:{duration:.6,delay:.3},children:[(0,s.jsxs)(P,{children:[(0,s.jsx)(t.WCW,{}),"What's Inside"]}),(0,s.jsx)(C,{children:i.map((e,r)=>(0,s.jsxs)("li",{children:[e.icon,(0,s.jsxs)("div",{children:[(0,s.jsx)("h3",{children:e.title}),(0,s.jsx)("p",{children:e.description})]})]},r))})]}),(0,s.jsxs)(z,{initial:{opacity:0,x:20},animate:{opacity:1,x:0},transition:{duration:.6,delay:.3},children:[(0,s.jsx)(I,{children:"Download Your Free Playbook"}),(0,s.jsx)(R,{children:"Fill out the form below to receive instant access to the AI Adoption Strategy Playbook"}),e?(0,s.jsx)(Y,{children:(0,s.jsx)(b.A,{formType:"aiPlaybook",region:f.l.region,onFormSubmit:()=>{r()}})}):(0,s.jsx)(y,{onSubmit:e=>{console.log("Lead captured:",e),r()}})]})]})]})})}}}]);
//# sourceMappingURL=592.72fd309f.chunk.js.map