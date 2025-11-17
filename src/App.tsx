import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles, theme } from './styles/GlobalStyles';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import IndustryStatsSection from './components/IndustryStatsSection';
import AboutSection from './components/AboutSection';
import FAQSection from './components/FAQSection';
import ContactSection from './components/ContactSection';
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
                <HeroSection />
                <IndustryStatsSection />
                <ServicesSection />
                <AboutSection />
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
