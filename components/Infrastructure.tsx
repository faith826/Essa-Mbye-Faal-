
import React from 'react';

const Infrastructure: React.FC = () => {
  const pillars = [
    {
      title: "Road Networks",
      description: "Bitumen surfacing for critical farm-to-market links, ensuring products move efficiently and safely.",
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="m2 22 1-3.5a2 2 0 0 1 1-1.5l14-6"/><path d="M12 2h10l-6 14-4-4L2 22"/><path d="M7 11v.01"/><path d="M11 7v.01"/><path d="M15 3v.01"/></svg>
    },
    {
      title: "Digital Grid",
      description: "Expanding high-speed fiber connectivity to every rural school and community library.",
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9"/><path d="M13 2v7h7"/><path d="M16 13H8"/><path d="M16 17H8"/></svg>
    },
    {
      title: "Public Utilities",
      description: "Sustainable water management systems and decentralized solar power for remote clinics.",
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 7V3"/><path d="M4.22 19.78 7.05 16.95"/><path d="M2 12h4"/><path d="M4.22 4.22 7.05 7.05"/><path d="M12 21v-4"/><path d="M16.95 16.95 19.78 19.78"/><path d="M18 12h4"/><path d="M16.95 7.05 19.78 4.22"/></svg>
    }
  ];

  return (
    <section id="infrastructure" className="py-24 bg-white/[0.01] border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/20 bg-blue-500/5 text-blue-400 text-[10px] font-bold tracking-widest uppercase mb-6">
            Foundation of Progress
          </div>
          <h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight mb-6">Building Sustainable Infrastructure</h2>
          <p className="text-slate-400 leading-relaxed">
            We are investing in the physical and digital backbone of our constituency to create a landscape where businesses can flourish and families can thrive.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((pillar, i) => (
            <div key={i} className="relative group p-8 rounded-3xl bg-slate-900 border border-white/5 hover:border-blue-500/20 transition-all hover:-translate-y-2 duration-500">
              <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl"></div>
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-blue-600/10 flex items-center justify-center text-blue-400 mb-6 group-hover:scale-110 transition-transform">
                  {pillar.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{pillar.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed mb-6">{pillar.description}</p>
                <div className="h-0.5 w-8 bg-blue-600 group-hover:w-16 transition-all duration-500"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Infrastructure;
