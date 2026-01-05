import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaLinkedinIn } from 'react-icons/fa';

const FooterWrapper = styled.footer`
  background: rgba(0, 0, 0, 0.9);
  color: white;
  padding: 3rem 2rem 2rem;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  
  @media (min-width: 768px) {
    grid-template-columns: 2fr 1fr 1fr;
  }
`;

const CompanyInfo = styled.div`
  h3 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    
    img {
      height: 90px;
      width: auto;
    }
  }
  
  p {
    color: rgba(255, 255, 255, 0.7);
    line-height: 1.6;
    margin-bottom: 1rem;
  }
`;

const FooterSection = styled.div`
  h4 {
    font-size: 1.2rem;
    margin-bottom: 1rem;
  }
  
  ul {
    list-style: none;
    
    li {
      margin-bottom: 0.5rem;
      
      a {
        color: rgba(255, 255, 255, 0.7);
        text-decoration: none;
        transition: color 0.3s ease;
        
        &:hover {
          color: white;
        }
      }
    }
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
  
  a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 50%;
    color: white;
    transition: all 0.3s ease;
    
    &:hover {
      background: #667eea;
      transform: translateY(-2px);
    }
  }
`;

const XIcon = styled.svg`
  width: 20px;
  height: 20px;
  fill: currentColor;
`;

const BottomBar = styled.div`
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  text-align: center;
  color: rgba(255, 255, 255, 0.7);

  a {
    color: rgba(255, 255, 255, 0.7);
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: white;
      text-decoration: underline;
    }
  }
`;

const Footer: React.FC = () => {
  return (
    <FooterWrapper>
      <FooterContent>
        <CompanyInfo>
          <h3>
            <img src="/north-point-logo.webp" alt="North Point Digital Logo" />
            North Point Digital
          </h3>
          <p>
            Transforming businesses through innovative technology solutions.
            We're committed to delivering excellence and driving your success.
          </p>
          <SocialLinks>
            <a href="https://x.com/n0rth_p0int" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)">
              <XIcon viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </XIcon>
            </a>
            <a href="https://www.linkedin.com/company/north-point-digital-ai/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedinIn />
            </a>
          </SocialLinks>
        </CompanyInfo>
        
        <FooterSection>
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#services">Services</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </FooterSection>
        
        <FooterSection>
          <h4>Services</h4>
          <ul>
            <li><a href="#">Web Development</a></li>
            <li><a href="#">Mobile Apps</a></li>
            <li><a href="#">Cloud Solutions</a></li>
            <li><a href="#">IT Consulting</a></li>
          </ul>
        </FooterSection>
      </FooterContent>
      
      <BottomBar>
        <p>&copy; 2025 North Point Digital. All rights reserved. | <Link to="/privacy-policy">Privacy Policy</Link> | Terms of Service</p>
      </BottomBar>
    </FooterWrapper>
  );
};

export default Footer;

