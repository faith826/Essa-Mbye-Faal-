import React from 'react';

const Agriculture: React.FC = () => {
  const initiatives = [
    {
      title: "Smart Farming",
      description: "Implementing drone technology and sensor-based irrigation to maximize crop yields with minimal resource waste.",
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 18V6"/><path d="m5 13 7-7 7 7"/><path d="M4 22h16"/></svg>,
      color: "text-[#54b4ff]"
    },
    {
      title: "Food Security",
      description: "Establishing local grain reserves and cold-storage facilities to ensure a year-round supply of fresh produce.",
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 18h12"/><path d="M12 22v-4"/><path d="M3 12c0-3.3 2.7-6 6-6 1.7 0 3.3.7 4.4 1.9L15 9"/><path d="M21 12c0 3.3-2.7 6-6 6-1.7 0-3.3-.7-4.4-1.9L9 15"/><path d="M3 12h18"/></svg>,
      color: "text-amber-400"
    },
    {
      title: "Agritech Hubs",
      description: "Providing farmers with digital training and market-access tools through community-based technology centers.",
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect width="16" height="12" x="4" y="8" rx="2"/><path d="M2 14h2"/><path d="M20 14h2"/><path d="M15 13v2"/><path d="M9 13v2"/><path d="M12 8V4"/><path d="M8 4h8"/></svg>,
      color: "text-blue-400"
    }
  ];

  return (
    <section id="agriculture" className="py-24 bg-slate-950/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#54b4ff]/20 bg-[#54b4ff]/5 text-[#54b4ff] text-[10px] font-bold tracking-widest uppercase mb-6">
              Sustainable Growth
            </div>
            <h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight mb-6">Modernizing Our Agriculture</h2>
            <p className="text-slate-400 leading-relaxed mb-8">
              The Appsobeyaa Foundation is committed to transforming agriculture from a survival activity into a thriving modern industry. We believe in empowering our farmers with the tools of tomorrow to feed the communities of today.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-200">
                <span className="w-1.5 h-1.5 rounded-full bg-[#54b4ff]"></span>
                Incentivized Inputs
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-200">
                <span className="w-1.5 h-1.5 rounded-full bg-[#54b4ff]"></span>
                Tractor Mechanization
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-200">
                <span className="w-1.5 h-1.5 rounded-full bg-[#54b4ff]"></span>
                Market Connectivity
              </div>
            </div>
          </div>
          <div className="relative group">
            <div className="absolute -inset-4 bg-[#54b4ff]/10 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="grid grid-cols-1 gap-4 relative z-10">
              {initiatives.map((item, i) => (
                <div key={i} className="p-6 rounded-2xl bg-slate-900 border border-white/5 hover:border-[#54b4ff]/30 transition-all">
                  <div className={`w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center mb-4 ${item.color}`}>
                    {item.icon}
                  </div>
                  <h4 className="text-white font-semibold mb-2">{item.title}</h4>
                  <p className="text-xs text-slate-500 leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Agriculture;