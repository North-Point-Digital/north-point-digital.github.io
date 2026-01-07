"use strict";(self.webpackChunkoffer_landing_page=self.webpackChunkoffer_landing_page||[]).push([[803],{803:(i,e,t)=>{t.r(e),t.d(e,{default:()=>A});t(43);var r=t(464),o=t(446),n=t(774),a=t(542),s=t(945),l=t(926),d=t(579);const m=r.Ay.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding-top: 80px;
`,c=r.Ay.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 2rem;
`,h=r.Ay.section`
  text-align: center;
  margin-bottom: 4rem;
`,p=(0,r.Ay)(o.P.h1)`
  font-size: clamp(2.5rem, 5vw, 4rem);
  color: white;
  margin-bottom: 1rem;
  font-weight: 700;
`,g=(0,r.Ay)(o.P.p)`
  font-size: clamp(1.2rem, 2vw, 1.5rem);
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 2rem;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`,u=r.Ay.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  margin-bottom: 4rem;

  @media (min-width: 968px) {
    grid-template-columns: 1fr 1fr;
    align-items: start;
  }
`,x=(0,r.Ay)(o.P.div)`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 20px;
  padding: 3rem;
  color: white;
`,b=r.Ay.h2`
  font-size: 2rem;
  margin-bottom: 1.5rem;
  color: white;
`,f=r.Ay.ul`
  list-style: none;
  padding: 0;

  li {
    padding: 1.5rem 0;
    display: flex;
    align-items: start;
    gap: 1.5rem;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);

    &:last-child {
      border-bottom: none;
    }

    svg {
      color: white;
      font-size: 1.8rem;
      flex-shrink: 0;
      margin-top: 0.25rem;
    }

    div {
      flex: 1;

      h3 {
        font-size: 1.3rem;
        margin-bottom: 0.5rem;
        color: white;
      }

      p {
        color: rgba(255, 255, 255, 0.8);
        line-height: 1.6;
        font-size: 1rem;
      }

      a {
        color: white;
        text-decoration: none;
        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
`,y=(0,r.Ay)(o.P.div)`
  background: white;
  border-radius: 20px;
  padding: 3rem;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
`,w=r.Ay.h2`
  font-size: 1.8rem;
  color: #333;
  margin-bottom: 1rem;
  text-align: center;
`,j=r.Ay.p`
  color: #666;
  text-align: center;
  margin-bottom: 2rem;
  line-height: 1.6;
`,v=r.Ay.div`
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
`,A=()=>{const i="YOUR_PORTAL_ID"!==l.l.portalId&&!l.l.forms.contact.includes("YOUR_"),e=[{icon:(0,d.jsx)(n.maD,{}),title:"Email Us",description:"Get in touch via email for inquiries and support",detail:"contact@northpointdigital.com"},{icon:(0,d.jsx)(n.Cab,{}),title:"Call Us",description:"Speak directly with our team for immediate assistance",detail:"Available during business hours"},{icon:(0,d.jsx)(n.vq8,{}),title:"Visit Us",description:"Our team is ready to help with your cloud transformation",detail:"Remote-first consultancy serving clients globally"}];return(0,d.jsx)(m,{children:(0,d.jsxs)(c,{children:[(0,d.jsxs)(h,{children:[(0,d.jsx)(p,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6},children:"Get In Touch"}),(0,d.jsx)(g,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6,delay:.1},children:"Ready to transform your AWS infrastructure? Let's discuss how we can help reduce costs, improve security, and accelerate your AI journey."})]}),(0,d.jsxs)(u,{children:[(0,d.jsxs)(x,{initial:{opacity:0,x:-20},animate:{opacity:1,x:0},transition:{duration:.6,delay:.3},children:[(0,d.jsx)(b,{children:"Contact Information"}),(0,d.jsx)(f,{children:e.map((i,e)=>(0,d.jsxs)("li",{children:[i.icon,(0,d.jsxs)("div",{children:[(0,d.jsx)("h3",{children:i.title}),(0,d.jsx)("p",{children:i.description}),"Email Us"===i.title?(0,d.jsx)("a",{href:`mailto:${i.detail}`,children:i.detail}):(0,d.jsx)("p",{style:{fontWeight:500,marginTop:"0.5rem"},children:i.detail})]})]},e))})]}),(0,d.jsxs)(y,{initial:{opacity:0,x:20},animate:{opacity:1,x:0},transition:{duration:.6,delay:.3},children:[(0,d.jsx)(w,{children:"Send Us a Message"}),(0,d.jsx)(j,{children:"Fill out the form below and our team will get back to you within 24 hours"}),i?(0,d.jsx)(v,{children:(0,d.jsx)(a.A,{formType:"contact",region:l.l.region,onFormSubmit:()=>console.log("Contact form submitted!")})}):(0,d.jsx)(s.A,{onSubmit:i=>{console.log("Contact form submitted:",i)}})]})]})]})})}}}]);
//# sourceMappingURL=803.25b76efb.chunk.js.map