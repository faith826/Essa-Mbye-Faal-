
import React from 'react';

const VotingProcess: React.FC = () => {
  const steps = [
    {
      title: "Step 1",
      description: "Go to your assigned voting location",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
      )
    },
    {
      title: "Step 2",
      description: "Present your ID",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="12" x="3" y="6" rx="2" ry="2"/><line x1="3" x2="21" y1="10" y2="10"/><line x1="7" x2="7" y1="14" y2="14"/><line x1="11" x2="11" y1="14" y2="14"/></svg>
      )
    },
    {
      title: "Step 3",
      description: "Your fingers will be marked with ink",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 11V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0"/><path d="M14 10V4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v11"/><path d="M10 10.5V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v8"/><path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15"/></svg>
      )
    },
    {
      title: "Step 4",
      description: "Take your tickets",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"/><path d="M13 5v2"/><path d="M13 17v2"/><path d="M13 11v2"/></svg>
      )
    },
    {
      title: "Step 5",
      description: "Cast your vote secretly",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 13H7"/><path d="m9 9 2 2 4-4"/><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M21 15H3"/></svg>
      )
    },
    {
      title: "Step 6",
      description: "Deposit ticket in the ballot box",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22V12"/></svg>
      )
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight mb-8">
            How We Can Build a Better Country Together!
          </h2>
          <p className="text-slate-400 leading-relaxed text-sm md:text-base">
            Elections make a fundamental contribution to democratic governance. Because direct democracy – a form of government in which political decisions are made directly by the entire body of qualified citizens – is impractical in most modern societies, democratic government must be conducted through representatives.
          </p>
        </div>

        <div className="mb-12 text-center">
          <h3 className="text-xl font-bold text-blue-400 uppercase tracking-[0.2em] mb-4">Voter Status Check</h3>
        </div>

        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center gap-4 lg:gap-0">
          {steps.map((step, index) => (
            <React.Fragment key={index}>
              <div className="flex flex-col items-center text-center w-full lg:w-48 group">
                <div className="relative mb-6">
                  <div className="w-16 h-16 rounded-full bg-slate-800 border border-white/10 flex items-center justify-center text-blue-400 shadow-xl group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                    {step.icon}
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-blue-600 text-white text-[10px] font-bold flex items-center justify-center shadow-lg">
                    {index + 1}
                  </div>
                </div>
                <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-2">{step.title}</h4>
                <p className="text-xs text-slate-500 font-medium px-4 leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Arrow connector */}
              {index < steps.length - 1 && (
                <div className="flex items-center justify-center h-16 lg:h-auto lg:py-8 py-2">
                  <svg 
                    className="w-6 h-6 text-slate-700 lg:rotate-0 rotate-90" 
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VotingProcess;
