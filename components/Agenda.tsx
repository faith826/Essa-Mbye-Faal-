import React from 'react';
import { PolicyCardProps } from '../types';

const PolicyCard: React.FC<PolicyCardProps> = ({ title, description, icon, colorClass, large }) => (
  <div className={`${large ? 'md:col-span-2' : ''} group relative overflow-hidden rounded-2xl bg-slate-900 border border-white/5 p-8 transition-all hover:border-white/10`}>
    <div className={`absolute inset-0 bg-gradient-to-br ${colorClass} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
    <div className="relative z-10 h-full flex flex-col justify-between">
      <div>
        <div className="w-12 h-12 rounded-xl bg-slate-800 border border-white/5 flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform">
          {icon}
        </div>
        <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
        <p className="text-sm text-slate-400 max-w-sm leading-relaxed">{description}</p>
      </div>
      {large && (
        <div className="mt-8">
          <button className="text-[10px] font-bold tracking-[0.2em] text-white uppercase border border-white/10 px-5 py-2 rounded hover:bg-white/5 transition-colors">
            Read Plan
          </button>
        </div>
      )}
    </div>
    {large && (
      <svg className="absolute bottom-0 right-0 w-64 h-32 text-slate-800 opacity-30 translate-y-4 translate-x-4 pointer-events-none" viewBox="0 0 100 50" preserveAspectRatio="none">
        <path d="M0 50 L 20 40 L 40 45 L 60 20 L 80 25 L 100 5 V 50 Z" fill="currentColor"></path>
      </svg>
    )}
  </div>
);

const Agenda: React.FC = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight mb-4">The Development Agenda</h2>
            <p className="text-slate-400 max-w-md text-sm leading-relaxed">
              A concrete roadmap focused on the pillars of modern society. Real solutions for Agriculture, Infrastructure, and Education.
            </p>
          </div>
          <a href="#" className="text-xs font-bold tracking-widest text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-2 group uppercase">
            View Full Manifesto 
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transform group-hover:translate-x-1 transition-transform"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <PolicyCard 
            large
            title="Modern Infrastructure"
            description="Expanding road networks, improving drainage systems, and ensuring reliable electricity and digital connectivity for every household."
            colorClass="from-blue-500/10"
            icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M11 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v2"/><path d="M12 22v-6"/><path d="M8 18h8"/><path d="M22 17v2a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-2"/></svg>}
          />
          <PolicyCard 
            title="Agriculture"
            description="Subsidizing fertilizers, modernizing farming tools, and opening new markets for local produce to ensure food security."
            colorClass="from-[#54b4ff]/10"
            icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8a8 8 0 0 1-10 10Z"/><path d="M11 20c-4 0-7-3-7-7 0-4.5 3.5-7 6-7"/><path d="M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/><path d="M12 10V16"/></svg>}
          />
          <PolicyCard 
            title="Education"
            description="Upgrading school facilities and providing scholarships for technical and vocational training for our youth."
            colorClass="from-purple-500/10"
            icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>}
          />
          <PolicyCard 
            large
            title="Community Welfare"
            description="Improving access to local clinics and launching youth employment initiatives to reduce poverty and improve quality of life."
            colorClass="from-red-500/10"
            icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/><path d="M12 5V3a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v18a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1h-7.5"/></svg>}
          />
        </div>
      </div>
    </section>
  );
};

export default Agenda;