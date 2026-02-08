import React from 'react';
import { ViewType } from '../types';
import Logo from './Logo';

interface FooterProps {
  onNavigate: (view: ViewType) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const socialLinks = [
    {
      name: 'twitter',
      href: '#',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
        </svg>
      )
    },
    {
      name: 'facebook',
      href: 'https://facebook.com/groups/550024519616589/',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
        </svg>
      )
    },
    {
      name: 'instagram',
      href: '#',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
          <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
        </svg>
      )
    },
    {
      name: 'youtube',
      href: 'https://youtube.com/@eyeafricatv?si=h3wb4Q0U183PUynv',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 2-2h15a2 2 0 0 1 2 2 24.12 24.12 0 0 1 0 10 2 2 0 0 1-2 2h-15a2 2 0 0 1-2-2z"/>
          <path d="m10 15 5-3-5-3z"/>
        </svg>
      )
    }
  ];

  return (
    <footer className="border-t border-white/5 bg-slate-950 pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 mb-16">
          <div className="col-span-2">
            <button onClick={() => onNavigate('home')} className="flex items-center gap-4 mb-6 group text-left">
              <Logo className="w-16 h-16 md:w-20 md:h-20" />
              <div className="flex flex-col">
                <span className="text-sm md:text-base font-black tracking-tight text-white uppercase">ESSA MBYE FAAL</span>
                <span className="text-[7px] md:text-[8px] text-blue-500 font-black tracking-[0.2em] uppercase">PRESIDENTIAL CAMPAIGN</span>
              </div>
            </button>
            <p className="text-slate-500 text-[10px] max-w-xs leading-relaxed font-medium uppercase tracking-widest mb-8">
              Paid for by the Essa Mbye Faal Campaign. Committed to the development and prosperity of our people through the App Sobeyaa movement.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a 
                  key={social.name} 
                  href={social.href}
                  target={social.href !== '#' ? "_blank" : undefined}
                  rel={social.href !== '#' ? "noopener noreferrer" : undefined}
                  className="w-10 h-10 rounded-xl border border-white/10 flex items-center justify-center text-slate-400 hover:text-blue-400 hover:border-blue-500/50 hover:bg-blue-500/5 transition-all group"
                  aria-label={social.name}
                >
                   {social.icon}
                </a>
              ))}
            </div>
          </div>
          
          <div className="flex flex-col gap-4">
            <h4 className="text-[10px] font-bold text-white uppercase tracking-[0.2em]">About</h4>
            <button onClick={() => onNavigate('about')} className="text-left text-slate-400 hover:text-blue-400 text-xs font-medium transition-colors">Candidate Vision</button>
            <button onClick={() => onNavigate('agriculture')} className="text-left text-slate-400 hover:text-blue-400 text-xs font-medium transition-colors">Agriculture</button>
            <button onClick={() => onNavigate('infrastructure')} className="text-left text-slate-400 hover:text-blue-400 text-xs font-medium transition-colors">Infrastructure</button>
          </div>
          
          <div className="flex flex-col gap-4">
            <h4 className="text-[10px] font-bold text-white uppercase tracking-[0.2em]">Contribute</h4>
            <button onClick={() => onNavigate('donate')} className="text-left text-slate-400 hover:text-blue-400 text-xs font-medium transition-colors">Donate</button>
            <button onClick={() => onNavigate('membership-registration')} className="text-left text-slate-400 hover:text-blue-400 text-xs font-medium transition-colors">Apply for Digital ID</button>
            <button onClick={() => onNavigate('join-group')} className="text-left text-slate-400 hover:text-blue-400 text-xs font-medium transition-colors">Join Our Group</button>
            <button onClick={() => onNavigate('volunteer')} className="text-left text-slate-400 hover:text-blue-400 text-xs font-medium transition-colors">Volunteering</button>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="text-[10px] font-bold text-white uppercase tracking-[0.2em]">Contact</h4>
            <div className="flex flex-col gap-4 mt-2">
              <div className="flex items-center gap-3 text-slate-400 text-[11px] font-medium">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                <span>+220 396 5401</span>
              </div>
              <div className="flex items-center gap-3 text-slate-400 text-[11px] font-medium">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                <span>info@appsobeyaa.com</span>
              </div>
              <div className="flex items-center gap-3 text-slate-400 text-[11px] font-medium">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                <span>Banjul, The Gambia</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-col items-center md:items-start gap-1">
            <p className="text-[9px] text-slate-600 font-bold tracking-widest uppercase">
              © 2025 Essa Mbye Faal Campaign. All rights reserved.
            </p>
            <p className="text-[8px] text-blue-500/50 font-black tracking-[0.2em] uppercase">
              Powered by Fradynex
            </p>
          </div>
          <div className="flex gap-6">
            <button 
              onClick={() => onNavigate('privacy-policy')}
              className="text-[9px] text-slate-600 hover:text-white font-bold tracking-widest uppercase transition-colors"
            >
              Privacy Policy
            </button>
            <button 
              onClick={() => onNavigate('terms-of-service')}
              className="text-[9px] text-slate-600 hover:text-white font-bold tracking-widest uppercase transition-colors"
            >
              Terms of Service
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;