import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { trackNavigationClick, trackButtonClick } from '../utils/analytics';

const NavContainer = styled(motion.nav)<{ scrolled: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: 1rem 2rem;
  background: ${props => props.scrolled ? 'rgba(255, 255, 255, 0.1)' : 'transparent'};
  backdrop-filter: ${props => props.scrolled ? 'blur(10px)' : 'none'};
  -webkit-backdrop-filter: ${props => props.scrolled ? 'blur(10px)' : 'none'};
  border-bottom: ${props => props.scrolled ? '1px solid rgba(255, 255, 255, 0.2)' : 'none'};
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    padding: 0.75rem 1rem;
  }
  
  @media (max-width: 480px) {
    padding: 0.5rem 0.75rem;
  }
`;

const NavContent = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  text-decoration: none;
  
  img {
    height: 100px;
    width: auto;
    transition: height 0.3s ease;
    
    @media (max-width: 768px) {
      height: 70px;
    }
    
    @media (max-width: 480px) {
      height: 50px;
    }
    
    @media (max-width: 360px) {
      height: 40px;
    }
  }
  
  span {
    font-size: 1.5rem;
    font-weight: 700;
    color: white;
    transition: font-size 0.3s ease;
    
    @media (max-width: 768px) {
      font-size: 1.2rem;
    }
    
    @media (max-width: 480px) {
      display: none;
    }
  }
`;

const NavLinks = styled.ul<{ isOpen: boolean }>`
  display: flex;
  list-style: none;
  gap: 2rem;
  align-items: center;

  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    right: ${props => props.isOpen ? '0' : '-100%'};
    height: 100vh;
    width: 70%;
    max-width: 300px;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    flex-direction: column;
    justify-content: center;
    gap: 3rem;
    transition: right 0.3s ease;
    border-left: 1px solid rgba(255, 255, 255, 0.2);
  }
`;

const NavLink = styled(motion.li)`
  a {
    color: white;
    text-decoration: none;
    font-weight: 500;
    transition: opacity 0.3s ease;
    position: relative;

    &:hover {
      opacity: 0.8;
    }

    &::after {
      content: '';
      position: absolute;
      bottom: -5px;
      left: 0;
      width: 0;
      height: 2px;
      background: white;
      transition: width 0.3s ease;
    }

    &:hover::after {
      width: 100%;
    }
  }
`;

const MenuToggle = styled(motion.button)`
  display: none;
  background: none;
  border: none;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
  z-index: 1001;
  padding: 0.5rem;
  transition: font-size 0.3s ease;

  @media (max-width: 768px) {
    display: block;
    font-size: 1.3rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1.1rem;
    padding: 0.25rem;
  }
`;

const CTAButton = styled(motion.button)`
  padding: 0.75rem 1.5rem;
  background: rgba(255, 255, 255, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.3);
  color: white;
  font-weight: 600;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.3);
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  }
`;

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string, linkName: string) => {
    e.preventDefault();
    setIsOpen(false);
    
    trackNavigationClick(linkName, path);
    
    if (path === '/') {
      navigate('/');
    } else if (path.startsWith('/#')) {
      const section = path.substring(2);
      if (location.pathname !== '/') {
        navigate('/');
        setTimeout(() => {
          const element = document.getElementById(section);
          element?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        const element = document.getElementById(section);
        element?.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate(path);
    }
  };

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/#services' },
    { name: 'About Us', path: '/#about' },
    { name: 'Case Studies', path: '/#case-studies' },
    { name: 'Blog', path: '/blog' },
    // { name: 'Testimonials', path: '/#testimonials' },
  ];

  return (
    <NavContainer
      scrolled={scrolled}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <NavContent>
        <Logo
          to="/"
        >
          <img src="/north-point-logo.webp" alt="North Point Digital Logo" loading="eager" />
          <span>North Point Digital</span>
        </Logo>

        <NavLinks isOpen={isOpen}>
          {navItems.map((item, index) => (
            <NavLink
              key={item.name}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <a href={item.path} onClick={(e) => handleNavClick(e, item.path, item.name)}>
                {item.name}
              </a>
            </NavLink>
          ))}
          <NavLink>
            <CTAButton
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                setIsOpen(false);
                trackButtonClick('Contact Us', 'navigation');
                navigate('/contact');
              }}
            >
              Contact Us
            </CTAButton>
          </NavLink>
        </NavLinks>

        <MenuToggle
          onClick={() => setIsOpen(!isOpen)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <AnimatePresence mode="wait">
            {isOpen ? <FaTimes /> : <FaBars />}
          </AnimatePresence>
        </MenuToggle>
      </NavContent>
    </NavContainer>
  );
};

export default Navigation;
