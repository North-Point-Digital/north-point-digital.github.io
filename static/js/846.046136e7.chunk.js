"use strict";(self.webpackChunkoffer_landing_page=self.webpackChunkoffer_landing_page||[]).push([[846],{846:(e,i,t)=>{t.r(i),t.d(i,{default:()=>_});var n=t(43),a=t(615),r=t(464),o=t(446),s=t(774),l=t(248),d=t(579);const c=r.Ay.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding-top: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
`,m=r.Ay.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 4rem 2rem;
  width: 100%;
`,p=(0,r.Ay)(o.P.div)`
  background: white;
  border-radius: 20px;
  padding: 4rem 3rem;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  text-align: center;
`,h=(0,r.Ay)(o.P.div)`
  width: 100px;
  height: 100px;
  margin: 0 auto 2rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 3rem;
`,g=(0,r.Ay)(o.P.h1)`
  font-size: clamp(2rem, 4vw, 3rem);
  color: #333;
  margin-bottom: 1rem;
  font-weight: 700;
`,y=(0,r.Ay)(o.P.p)`
  font-size: clamp(1.1rem, 2vw, 1.3rem);
  color: #666;
  margin-bottom: 2rem;
  line-height: 1.6;
`,x=(0,r.Ay)(o.P.div)`
  background: #f8f9fa;
  border-radius: 15px;
  padding: 2rem;
  margin: 2rem 0;
  text-align: left;
`,u=r.Ay.h3`
  font-size: 1.3rem;
  color: #333;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  
  svg {
    color: #667eea;
  }
`,f=r.Ay.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  
  li {
    padding: 0.75rem 0;
    color: #666;
    line-height: 1.6;
    padding-left: 2rem;
    position: relative;
    
    &:before {
      content: '✓';
      position: absolute;
      left: 0;
      color: #667eea;
      font-weight: bold;
      font-size: 1.2rem;
    }
  }
`,j=(0,r.Ay)(o.P.div)`
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 2rem;
`,b=(0,r.Ay)(o.P.a)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 2rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  text-decoration: none;
  border-radius: 10px;
  font-weight: 600;
  font-size: 1.1rem;
  transition: all 0.3s ease;
  cursor: pointer;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(102, 126, 234, 0.3);
  }
`,w=(0,r.Ay)(o.P.button)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 2rem;
  background: transparent;
  color: #667eea;
  border: 2px solid #667eea;
  text-decoration: none;
  border-radius: 10px;
  font-weight: 600;
  font-size: 1.1rem;
  transition: all 0.3s ease;
  cursor: pointer;
  font-family: inherit;
  
  &:hover {
    background: #667eea;
    color: white;
    transform: translateY(-2px);
  }
`,v=(0,r.Ay)(o.P.div)`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 15px;
  padding: 2.5rem;
  margin: 2rem 0;
  color: white;
  text-align: left;
`,k=r.Ay.h3`
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: white;
  
  svg {
    font-size: 1.8rem;
  }
`,A=r.Ay.div`
  display: flex;
  align-items: start;
  gap: 1rem;
  margin-bottom: 1.25rem;
  
  &:last-child {
    margin-bottom: 0;
  }
  
  svg {
    margin-top: 0.25rem;
    flex-shrink: 0;
    font-size: 1.3rem;
    opacity: 0.9;
  }
`,T=r.Ay.div`
  flex: 1;
  
  strong {
    display: block;
    font-size: 0.9rem;
    opacity: 0.9;
    margin-bottom: 0.25rem;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }
  
  span {
    display: block;
    font-size: 1.1rem;
    font-weight: 600;
  }
`,z=e=>{try{const i=new Date(e),t=i.toLocaleDateString("en-GB",{weekday:"long",year:"numeric",month:"long",day:"numeric"});return{date:t,time:i.toLocaleTimeString("en-GB",{hour:"2-digit",minute:"2-digit",timeZoneName:"short"})}}catch{return{date:e,time:""}}},_=()=>{const e=(0,a.Zp)(),[i]=(0,a.ok)(),t=(0,n.useMemo)(()=>{const e=i.get("event_start_time"),t=i.get("event_end_time"),n=i.get("invitee_name"),a=i.get("invitee_email"),r=i.get("event_type_name");if(!e)return null;const o=z(e),s=t?z(t):null;return{name:n,email:a,eventType:r||"Free Consultation",startDate:o.date,startTime:o.time,endTime:null===s||void 0===s?void 0:s.time}},[i]);return(0,n.useEffect)(()=>{(0,l.HE)()},[]),(0,d.jsx)(c,{children:(0,d.jsx)(m,{children:(0,d.jsxs)(p,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6},children:[(0,d.jsx)(h,{initial:{scale:0},animate:{scale:1},transition:{type:"spring",stiffness:200,damping:15,delay:.2},children:(0,d.jsx)(s.A7C,{})}),(0,d.jsx)(g,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6,delay:.3},children:"Thank You for Booking!"}),(0,d.jsx)(y,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6,delay:.4},children:t?`Hi ${t.name||"there"}, your booking is confirmed! We're excited to speak with you.`:"We've received your booking request and we're excited to speak with you. You should receive a confirmation email shortly with all the details."}),t&&(0,d.jsxs)(v,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6,delay:.45},children:[(0,d.jsxs)(k,{children:[(0,d.jsx)(s.gUT,{}),"Meeting Confirmation"]}),(0,d.jsxs)(A,{children:[(0,d.jsx)(s.w_X,{}),(0,d.jsxs)(T,{children:[(0,d.jsx)("strong",{children:"Date & Time"}),(0,d.jsx)("span",{children:t.startDate}),(0,d.jsxs)("span",{style:{fontSize:"1rem",fontWeight:400,marginTop:"0.25rem"},children:[t.startTime,t.endTime&&` - ${t.endTime}`]})]})]}),t.eventType&&(0,d.jsxs)(A,{children:[(0,d.jsx)(s.HiP,{}),(0,d.jsxs)(T,{children:[(0,d.jsx)("strong",{children:"Meeting Type"}),(0,d.jsx)("span",{children:t.eventType})]})]}),t.name&&(0,d.jsxs)(A,{children:[(0,d.jsx)(s.x$1,{}),(0,d.jsxs)(T,{children:[(0,d.jsx)("strong",{children:"Attendee"}),(0,d.jsx)("span",{children:t.name}),t.email&&(0,d.jsx)("span",{style:{fontSize:"0.95rem",fontWeight:400,marginTop:"0.25rem",opacity:.9},children:t.email})]})]})]}),(0,d.jsxs)(x,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6,delay:.5},children:[(0,d.jsxs)(u,{children:[(0,d.jsx)(s.gUT,{}),"What Happens Next?"]}),(0,d.jsxs)(f,{children:[(0,d.jsx)("li",{children:"You'll receive a calendar confirmation email with meeting details"}),(0,d.jsx)("li",{children:"We'll send you a brief pre-call questionnaire to help us prepare"}),(0,d.jsx)("li",{children:"Our team will review your requirements before the call"}),(0,d.jsx)("li",{children:"During the call, we'll discuss how we can help save money on your AWS bill"})]})]}),(0,d.jsxs)(x,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6,delay:.6},children:[(0,d.jsxs)(u,{children:[(0,d.jsx)(s.maD,{}),"Need to Make Changes?"]}),(0,d.jsxs)(f,{children:[(0,d.jsx)("li",{children:"Check your email for the calendar confirmation"}),(0,d.jsx)("li",{children:"Use the reschedule link in the email if you need to change the time"}),(0,d.jsx)("li",{children:"Contact us at contact@northpointdigital.com for any questions"})]})]}),(0,d.jsxs)(j,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6,delay:.7},children:[(0,d.jsx)(b,{href:"/",whileHover:{scale:1.05},whileTap:{scale:.95},children:"Return to Home"}),(0,d.jsxs)(w,{onClick:()=>e(-1),whileHover:{scale:1.05},whileTap:{scale:.95},children:[(0,d.jsx)(s.QVr,{}),"Go Back"]})]})]})})})}}}]);
//# sourceMappingURL=846.046136e7.chunk.js.map