import React, { useState, useEffect } from 'react';
import { Menu, X, Terminal, ArrowUpRight } from 'lucide-react';
import { scrollToSection, useScrollSpy } from '../../hooks/useScrollSpy';
import { NAV_LINKS, PERSONAL_INFO } from '../../utils/constants';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const activeSection = useScrollSpy(NAV_LINKS.map(link => link.id));

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (sectionId) => {
    scrollToSection(sectionId);
    setIsMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-500 ease-in-out px-6 ${isScrolled ? 'py-4' : 'py-8'
      }`}>
      <div className={`mx-auto transition-all duration-500 ease-out ${isScrolled
        ? 'max-w-3xl bg-black/40 backdrop-blur-xl border border-primary/20 rounded-2xl px-6 py-2 shadow-[0_10px_40px_rgba(0,0,0,0.8)]'
        : 'max-w-7xl bg-transparent px-0 border-transparent'
        }`}>
        <div className='flex items-center justify-between'>

          {/* Logo Section */}
          <div className='flex items-center gap-3 group cursor-pointer'
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className='w-9 h-9 bg-primary/10 border border-primary/20 rounded-lg flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all duration-500'>
              <Terminal className='w-4 h-4 text-primary group-hover:text-black transition-colors' />
            </div>
            <span className='text-lg font-bold tracking-tighter text-white uppercase font-mono'>
              {PERSONAL_INFO.name.split(" ")[0]}<span className='text-primary'>_</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className='hidden md:flex items-center gap-1'>
            {NAV_LINKS.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`relative px-4 py-2 text-[11px] font-mono uppercase tracking-widest transition-all duration-300 rounded-lg ${activeSection === link.id
                  ? 'text-primary'
                  : 'text-white/50 hover:text-white'
                  }`}
              >
                {link.label}
                {activeSection === link.id && (
                  <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-8 h-[1px] bg-primary shadow-[0_0_12px_#A8FF8D]" />
                )}
              </button>
            ))}
          </div>

          {/* CTA Button */}
          <div className='hidden md:flex items-center'>
            <button
              onClick={() => handleNavClick('contact')}
              className={`flex items-center gap-2 px-5 py-2 text-[10px] font-bold rounded-lg transition-all duration-500 group border ${isScrolled
                ? 'bg-primary text-black border-primary hover:bg-transparent hover:text-primary'
                : 'bg-transparent text-white border-white/20 hover:border-primary hover:text-primary'
                }`}
            >
              HIRE_ME
              <ArrowUpRight className='w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform' />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className='md:hidden w-10 h-10 flex items-center justify-center text-white bg-white/5 border border-white/10 rounded-lg transition-all active:scale-95'
          >
            {isMenuOpen ? <X className='w-5 h-5' /> : <Menu className='w-5 h-5' />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-x-6 top-24 md:hidden transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] ${isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}>
        <div className='bg-black/90 backdrop-blur-3xl border border-primary/20 rounded-2xl p-6 shadow-2xl'>
          <div className='space-y-1'>
            {NAV_LINKS.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`flex items-center justify-between w-full px-4 py-4 rounded-xl text-sm font-mono uppercase tracking-widest transition-all ${activeSection === link.id
                  ? 'bg-primary/10 text-primary border-l-2 border-primary'
                  : 'text-white/60 hover:bg-white/5'
                  }`}
              >
                {link.label}
                <div className={`w-1.5 h-1.5 rounded-full ${activeSection === link.id ? 'bg-primary shadow-[0_0_8px_#A8FF8D]' : 'bg-white/5'}`} />
              </button>
            ))}
          </div>
          <button
            onClick={() => handleNavClick('contact')}
            className='w-full mt-6 px-6 py-4 bg-primary text-black font-bold rounded-xl flex items-center justify-center gap-2 text-xs tracking-[0.2em]'
          >
            EXECUTE_CONTACT
            <ArrowUpRight className='w-4 h-4' />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;