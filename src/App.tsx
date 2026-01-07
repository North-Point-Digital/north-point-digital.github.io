import React, { useEffect, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles, theme } from './styles/GlobalStyles';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import IndustryStatsSection from './components/IndustryStatsSection';
import AboutSection from './components/AboutSection';
import TeamSection from './components/TeamSection';
import CaseStudySection from './components/CaseStudySection';
import FAQSection from './components/FAQSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import { initGA, logPageView } from './utils/analytics';
import { useScrollTracking } from './hooks/useScrollTracking';

const AwsProfitabilityResilienceBlueprint = lazy(() => import('./pages/AwsProfitabilityResilienceBlueprint'));
const AILaunchpad = lazy(() => import('./pages/AILaunchpad'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));
const AIAdoptionPlaybook = lazy(() => import('./pages/AIAdoptionPlaybook'));
const ContactUs = lazy(() => import('./pages/ContactUs'));
const CaseStudyDetail = lazy(() => import('./pages/CaseStudyDetail'));

const LoadingFallback = () => (
  <div style={{ 
    minHeight: '100vh', 
    display: 'flex', 
    alignItems: 'center', 
    justifyContent: 'center',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    color: 'white'
  }}>
    Loading...
  </div>
);

// Analytics component to track page views
const Analytics = () => {
  const location = useLocation();

  useEffect(() => {
    logPageView();
  }, [location]);

  return null;
};

function App() {
  useScrollTracking(); // Track scroll depth

  useEffect(() => {
    initGA();
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <Analytics />
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Navigation />
        <main>
          <Routes>
            <Route path="/" element={
              <>
                <HeroSection 
                  logos={[
                    '/logos/client1-logo.jpeg',
                    '/logos/client2-logo.png',
                    '/logos/client3-logo.png',
                    '/logos/client4-logo.svg',
                    '/logos/client5-logo.png',
                    '/logos/client6-logo.webp',
                    '/logos/client7-logo.png',
                    '/logos/client8-logo.png',
                    '/logos/client9-logo.jpeg',
                    '/logos/client10-logo.jpeg',
                    '/logos/client11-logo.jpeg',
                  ]}
                  logosWithBackground={['/logos/client4-logo.svg', '/logos/client5-logo.png']}
                />
                <IndustryStatsSection />
                <ServicesSection />
                <AboutSection />
                <TeamSection 
                  teamMembers={[
                    {
                      name: "David Turnbull",
                      role: "Founder & AWS Solutions Architect",
                      bio: "10+ years of enterprise cloud expertise, specialising in AWS cost optimisation and security.",
                      image: "/team/david-turnbull.png"
                    },
                    {
                      name: "Mark Bridgett",
                      role: "Principal AWS Solutions Architect",
                      bio: "15+ years of enterprise cloud expertise, specialising in blockchain and web3 infrastructure.",
                      image: "/team/mark-bridgett.png"
                    },
                    {
                      name: "Ross Haselhurst",
                      role: "Head of Business Development",
                      bio: "10+ years experience in the technology industry, specialising in business development and sales.",
                      image: "/team/ross-haselhurst.jpeg"
                    },
                    {
                      name: "Krystian Nowak",
                      role: "Senior Software Engineer",
                      bio: "10+ years experience in the technology industry, specialising in software engineering and development.",
                      image: "/team/krystian-nowak.jpeg"
                    },
                    {
                      name: "Sarah Turnbull",
                      role: "Head of Delivery",
                      bio: "10+ years experience in the technology industry, specialising in delivery and project management.",
                      image: "/team/sarah-turnbull.jpeg"
                    },
                    {
                      name: "Matthew Squires",
                      role: "Head of Marketing",
                      bio: "10+ years experience in the technology industry, specialising in marketing and branding.",
                      image: "/team/matthew-squires.jpeg"
                    }
                  ]}
                />
                <CaseStudySection />
                <FAQSection />
                <ContactSection />
              </>
            } />
            <Route path="/aws-profitability-resilience-blueprint" element={
              <Suspense fallback={<LoadingFallback />}>
                <AwsProfitabilityResilienceBlueprint />
              </Suspense>
            } />
            <Route path="/ai-launchpad" element={
              <Suspense fallback={<LoadingFallback />}>
                <AILaunchpad />
              </Suspense>
            } />
            <Route path="/privacy-policy" element={
              <Suspense fallback={<LoadingFallback />}>
                <PrivacyPolicy />
              </Suspense>
            } />
            <Route path="/ai-adoption-playbook" element={
              <Suspense fallback={<LoadingFallback />}>
                <AIAdoptionPlaybook />
              </Suspense>
            } />
            <Route path="/contact" element={
              <Suspense fallback={<LoadingFallback />}>
                <ContactUs />
              </Suspense>
            } />
            <Route path="/case-studies/:slug" element={
              <Suspense fallback={<LoadingFallback />}>
                <CaseStudyDetail />
              </Suspense>
            } />
          </Routes>
        </main>
        <Footer />
      </ThemeProvider>
    </Router>
  );
}

export default App;
