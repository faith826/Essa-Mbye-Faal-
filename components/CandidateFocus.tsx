import React from 'react';
import { ViewType } from '../types';

interface CandidateFocusProps {
  onNavigate: (view: ViewType) => void;
}

const CandidateFocus: React.FC<CandidateFocusProps> = ({ onNavigate }) => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-24">
          {/* Left Side: Candidate Image */}
          <div className="flex-1 relative group">
            <div className="absolute -inset-4 bg-blue-600/20 blur-3xl rounded-full opacity-50 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl aspect-[4/5] max-w-[450px] mx-auto">
              <img 
                src="https://voiceoutdigital.com/wp-content/uploads/2024/12/essa-faal.jpeg" 
                alt="Essa Mbye Faal" 
                className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6">
                <p className="text-white font-bold text-2xl tracking-tight">Essa Mbye Faal</p>
                <p className="text-blue-400 text-xs font-bold tracking-[0.2em] uppercase">The People's Choice</p>
              </div>
            </div>
          </div>

          {/* Right Side: Endorsement Text */}
          <div className="flex-1 text-center md:text-left">
            <div className="inline-flex items-center gap-3 mb-8">
               <div className="w-16 h-16 rounded-2xl bg-blue-600 flex items-center justify-center text-white shadow-xl shadow-blue-900/40 animate-float">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m9 12 2 2 4-4"/><circle cx="12" cy="12" r="10"/></svg>
               </div>
               <div className="h-px w-12 bg-blue-600/30"></div>
               <span className="text-xs font-black text-blue-400 uppercase tracking-[0.3em]">Vote 2025</span>
            </div>
            
            <h2 className="text-6xl md:text-8xl font-black text-white leading-none tracking-tighter mb-6">
              Essa Mbye Faal <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">For President</span>
            </h2>
            
            <p className="text-slate-400 text-lg leading-relaxed max-w-xl mb-10 font-medium italic">
              "United for a better Gambia. It is time for service with integrity, action, and a vision that leaves no Gambian behind."
            </p>

            <div className="flex flex-wrap justify-center md:justify-start gap-4">
               <button 
                onClick={() => onNavigate('history-policies')}
                className="h-14 px-10 rounded-2xl bg-white text-slate-950 font-black text-xs tracking-widest uppercase hover:bg-blue-50 transition-all shadow-xl active:scale-95"
               >
                  Learn About Essa
               </button>
               <button 
                onClick={() => onNavigate('about')}
                className="h-14 px-10 rounded-2xl border border-white/10 bg-white/5 text-white font-black text-xs tracking-widest uppercase hover:bg-white/10 transition-all backdrop-blur-sm active:scale-95"
               >
                  The Manifesto
               </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CandidateFocus;