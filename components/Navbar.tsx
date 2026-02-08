import React, { useState, useEffect, useRef } from 'react';
import { ViewType } from '../types';
import Logo from './Logo';

interface NavbarProps {
  onNavigate: (view: ViewType) => void;
  currentView: ViewType;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate, currentView }) => {
  const [scrolled, setScrolled] = useState(false);
  const [openDropdownId, setOpenDropdownId] = useState<string | null>(null);
  const navbarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    const handleClickOutside = (event: MouseEvent) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target as Node)) {
        setOpenDropdownId(null);
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'agriculture', label: 'Agriculture' },
    { id: 'infrastructure', label: 'Infrastructure', isDropdown: true },
    { id: 'contribute', label: 'Contribute', isDropdown: true },
    { id: 'news', label: 'News' },
    { id: 'contact', label: 'Contact' },
  ];

  const submenus: Record<string, { id: string; label: string }[]> = {
    contribute: [
      { id: 'donate', label: 'Donate' },
      { id: 'membership-registration', label: 'Apply for Digital ID' },
      { id: 'join-group', label: 'Join Our Group' },
      { id: 'volunteer', label: 'Volunteering' },
    ],
    infrastructure: [
      { id: 'infrastructure', label: 'Overview' },
      { id: 'infrastructure', label: 'Road Networks' },
      { id: 'infrastructure', label: 'Digital Transformation' },
      { id: 'infrastructure', label: 'Public Utilities' },
    ]
  };

  const isActive = (itemId: string, isDropdown?: boolean) => {
    if (isDropdown) {
      return submenus[itemId]?.some(sub => sub.id === currentView);
    }
    return currentView === itemId;
  };

  return (
    <nav ref={navbarRef} className={`fixed top-0 w-full z-40 border-b border-white/5 transition-all duration-500 h-24 ${scrolled ? 'glass' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
        <button onClick={() => onNavigate('home')} className="flex items-center gap-4 group text-left outline-none">
          {/* Fixed Logo Size */}
          <Logo className="w-14 h-14 md:w-16 md:h-16 shrink-0" />
          
          {/* Static Branding Section */}
          <div className="flex flex-col">
            <span className="text-base md:text-lg font-black tracking-tight text-white uppercase leading-none whitespace-nowrap">
              ESSA MBYE FAAL
            </span>
            <span className="text-[8px] md:text-[9px] text-[#54b4ff] font-black tracking-[0.3em] uppercase mt-1.5 whitespace-nowrap">
              FOR PRESIDENT 2025
            </span>
          </div>
        </button>

        <div className="hidden lg:flex items-center gap-6 text-[10px] font-bold tracking-[0.1em] text-slate-400">
          {navItems.map((item) => (
            item.isDropdown ? (
              <div 
                key={item.id} 
                className="relative h-full flex items-center"
                onMouseEnter={() => setOpenDropdownId(item.id)}
                onMouseLeave={() => setOpenDropdownId(null)}
              >
                <button
                  className={`hover:text-white transition-all uppercase relative py-2 flex items-center gap-1 ${
                    isActive(item.id, true) ? 'text-white' : ''
                  }`}
                >
                  {item.label}
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                  {isActive(item.id, true) && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.5)]"></span>
                  )}
                </button>

                {/* Dropdown Menu */}
                {openDropdownId === item.id && (
                  <div 
                    className="absolute top-full left-0 w-52 bg-slate-900 border border-white/10 rounded-xl shadow-2xl py-2 animate-in fade-in slide-in-from-top-2 duration-200"
                  >
                    {submenus[item.id].map((sub, idx) => (
                      <button
                        key={`${sub.id}-${idx}`}
                        onClick={() => {
                          onNavigate(sub.id as ViewType);
                          setOpenDropdownId(null);
                        }}
                        className={`w-full text-left px-4 py-3 text-[10px] font-bold tracking-wider uppercase hover:bg-white/5 transition-colors ${
                          currentView === sub.id ? 'text-blue-400' : 'text-slate-400'
                        }`}
                      >
                        {sub.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id as ViewType)}
                className={`hover:text-white transition-all uppercase relative py-2 ${
                  currentView === item.id ? 'text-white' : ''
                }`}
              >
                {item.label}
                {currentView === item.id && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.5)]"></span>
                )}
              </button>
            )
          ))}
        </div>

        <div className="flex items-center gap-4">
          <button 
            onClick={() => onNavigate('donate')}
            className="bg-blue-600 text-white px-6 py-2.5 rounded-xl text-[10px] font-bold tracking-widest hover:bg-blue-500 transition-colors shadow-lg shadow-blue-900/40 active:scale-95 uppercase"
          >
            Contribute
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;