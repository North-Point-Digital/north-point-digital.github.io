import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles, theme } from './styles/GlobalStyles';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import IndustryStatsSection from './components/IndustryStatsSection';
import AboutSection from './components/AboutSection';
import TeamSection from './components/TeamSection';
import FAQSection from './components/FAQSection';
import ContactSection from './components/ContactSection';
import LogoCarousel from './components/LogoCarousel';
import Footer from './components/Footer';
import AwsProfitabilityResilienceBlueprint from './pages/AwsProfitabilityResilienceBlueprint';
import AILaunchpad from './pages/AILaunchpad';
import PrivacyPolicy from './pages/PrivacyPolicy';
import AIAdoptionPlaybook from './pages/AIAdoptionPlaybook';
import ContactUs from './pages/ContactUs';
import ScrollToTop from './components/ScrollToTop';
import { initGA, logPageView } from './utils/analytics';

// Analytics component to track page views
const Analytics = () => {
  const location = useLocation();

  useEffect(() => {
    logPageView();
  }, [location]);

  return null;
};

function App() {
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
                      bio: "10+ years of enterprise cloud expertise, specializing in AWS cost optimization and security.",
                      image: "/team/david-turnbull.png"
                    },
                    {
                      name: "Mark Bridgett",
                      role: "Principal AWS Solutions Architect",
                      bio: "15+ years of enterprise cloud expertise, specializing in AWS cost optimization and security.",
                      image: "/team/mark-bridgett.png"
                    },
                    {
                      name: "Ross Haselhurst",
                      role: "Head of Business Development",
                      bio: "10+ years experience in the technology industry, specializing in business development and sales.",
                      image: "/team/ross-haselhurst.jpeg"
                    },
                    {
                      name: "Krystian Nowak",
                      role: "Senior Software Engineer",
                      bio: "10+ years experience in the technology industry, specializing in software engineering and development.",
                      image: "/team/krystian-nowak.jpeg"
                    },
                    {
                      name: "Sarah Turnbull",
                      role: "Head of Delivery",
                      bio: "10+ years experience in the technology industry, specializing in delivery and project management.",
                      image: "/team/sarah-turnbull.jpeg"
                    },
                    {
                      name: "Matthew Squires",
                      role: "Head of Marketing",
                      bio: "10+ years experience in the technology industry, specializing in marketing and branding.",
                      image: "/team/matthew-squires.jpeg"
                    }
                  ]}
                />
                <FAQSection />
                <ContactSection />
              </>
            } />
            <Route path="/aws-profitability-resilience-blueprint" element={
              <AwsProfitabilityResilienceBlueprint />
            } />
            <Route path="/ai-launchpad" element={
              <AILaunchpad />
            } />
            <Route path="/privacy-policy" element={
              <PrivacyPolicy />
            } />
            <Route path="/ai-adoption-playbook" element={
              <AIAdoptionPlaybook />
            } />
            <Route path="/contact" element={
              <ContactUs />
            } />
          </Routes>
        </main>
        <Footer />
      </ThemeProvider>
    </Router>
  );
}

export default App;
