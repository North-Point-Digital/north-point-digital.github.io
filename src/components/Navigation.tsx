import { useState, useEffect } from 'react';
import { trackNavigationClick, trackButtonClick } from '../utils/analytics';

const BarsIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor" width="1em" height="1em">
    <path d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z" />
  </svg>
);

const TimesIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 512" fill="currentColor" width="1em" height="1em">
    <path d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z" />
  </svg>
);

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/#services' },
  { name: 'About Us', path: '/#about' },
  { name: 'Case Studies', path: '/#case-studies' },
  { name: 'Blog', path: '/blog' },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (path: string, linkName: string) => {
    setIsOpen(false);
    trackNavigationClick(linkName, path);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[1000] px-8 py-4 transition-all duration-300 ${
        scrolled
          ? 'bg-white/10 backdrop-blur-[10px] border-b border-white/20'
          : 'bg-transparent'
      } max-md:px-4 max-md:py-3 max-[480px]:px-3 max-[480px]:py-2`}
    >
      <div className="max-w-[1440px] mx-auto flex justify-between items-center">
        <a href="/" className="flex items-center gap-2 no-underline">
          <img
            src="/north-point-logo.webp"
            alt="North Point Digital Logo"
            loading="eager"
            className="h-[100px] w-auto transition-all duration-300 max-md:h-[70px] max-[480px]:h-[50px] max-[360px]:h-[40px]"
          />
          <span className="text-2xl font-bold text-white transition-all duration-300 max-md:text-xl max-[480px]:hidden">
            North Point Digital
          </span>
        </a>

        <ul
          className={`flex list-none gap-8 items-center max-md:fixed max-md:top-0 max-md:h-screen max-md:w-[70%] max-md:max-w-[300px] max-md:bg-white/10 max-md:backdrop-blur-[20px] max-md:flex-col max-md:justify-center max-md:gap-12 max-md:border-l max-md:border-white/20 max-md:transition-all max-md:duration-300 ${
            isOpen ? 'max-md:right-0' : 'max-md:right-[-100%]'
          }`}
        >
          {navItems.map((item) => (
            <li key={item.name}>
              <a
                href={item.path}
                onClick={() => handleNavClick(item.path, item.name)}
                className="text-white no-underline font-medium hover:opacity-80 relative after:content-[''] after:absolute after:bottom-[-5px] after:left-0 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 hover:after:w-full"
              >
                {item.name}
              </a>
            </li>
          ))}
          <li>
            <a
              href="/contact"
              onClick={() => {
                setIsOpen(false);
                trackButtonClick('Contact Us', 'navigation');
              }}
              className="py-3 px-6 bg-white/20 border border-white/30 text-white font-semibold rounded-full cursor-pointer transition-all duration-300 hover:bg-white/30 hover:-translate-y-0.5 hover:shadow-lg"
            >
              Contact Us
            </a>
          </li>
        </ul>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="hidden max-md:block bg-transparent border-none text-white text-2xl cursor-pointer z-[1001] p-2 max-md:text-xl max-[480px]:text-lg max-[480px]:p-1"
          aria-label="Toggle menu"
        >
          {isOpen ? <TimesIcon /> : <BarsIcon />}
        </button>
      </div>
    </nav>
  );
}
