
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-blue-600/20 rounded-[100%] blur-[100px] -z-10 opacity-50"></div>
      <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-indigo-900/10 rounded-full blur-[120px] -z-10"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            <span className="text-[10px] font-bold tracking-[0.2em] text-blue-200 uppercase">Building Our Future</span>
          </div>

          <h1 className="text-5xl md:text-8xl font-semibold tracking-tighter text-white mb-6 leading-[0.9]">
            Together for a <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-slate-100 to-slate-500">Stronger Tomorrow.</span>
          </h1>

          <p className="text-base md:text-lg text-slate-400 max-w-xl mb-10 leading-relaxed font-light">
            Promoting sustainable agriculture, robust infrastructure, and opportunities for youth. Join Essa Mbye Faal in nurturing a prosperous, united community.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <button className="h-12 px-10 rounded bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold tracking-widest transition-all shadow-[0_0_20px_-5px_rgba(37,99,235,0.4)] flex items-center justify-center gap-2 uppercase active:scale-95">
              Join the Movement
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </button>
            <button className="h-12 px-10 rounded border border-white/10 bg-white/5 hover:bg-white/10 text-white text-xs font-bold tracking-widest transition-colors backdrop-blur-sm flex items-center justify-center gap-2 uppercase active:scale-95">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polygon points="10 8 16 12 10 16 10 8"/></svg>
              Our Vision
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30 animate-bounce">
        <span className="text-[9px] tracking-[0.3em] uppercase font-bold">Scroll</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
      </div>
    </section>
  );
};

export default Hero;
