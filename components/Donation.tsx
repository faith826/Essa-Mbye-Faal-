
import React, { useState } from 'react';

const Donation: React.FC = () => {
  const [selectedAmount, setSelectedAmount] = useState<number | string>(50);
  const amounts = [10, 20, 50, 100, 500];

  const actionItems = [
    {
      title: "Volunteering",
      description: "Leverage frameworks to provide synopsis for high overviews.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
      )
    },
    {
      title: "Take Action",
      description: "Organically grow holistic world view of disruptive innovation.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 19-7-7 7-7"/><path d="M19 12H5"/></svg>
      )
    },
    {
      title: "Join Campaign",
      description: "Capitalize on low hanging fruit to identify a value added.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg>
      )
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-slate-950 to-blue-950/20 border-t border-white/5 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/5 blur-[120px] rounded-full -z-10"></div>
      
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-white mb-6 uppercase">Thank you for supporting our work!</h2>
          <p className="text-slate-400 text-base md:text-lg font-medium leading-relaxed">
            Make a contribution to our campaign today. We're not taking a dime from corporate PACs, so your donation is critical to our success.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto bg-slate-900/50 backdrop-blur-md border border-white/10 rounded-3xl p-6 md:p-10 shadow-2xl mb-20">
          {/* Progress Bar */}
          <div className="flex justify-between text-[10px] font-bold tracking-[0.2em] text-slate-500 mb-3 uppercase">
            <span>Campaign Goal</span>
            <span className="text-white">75% Complete</span>
          </div>
          <div className="h-2.5 w-full bg-slate-800 rounded-full overflow-hidden mb-10">
            <div 
              className="h-full bg-gradient-to-r from-blue-600 to-indigo-500 rounded-full shadow-[0_0_15px_rgba(37,99,235,0.4)] transition-all duration-1000 ease-out"
              style={{ width: '75%' }}
            ></div>
          </div>

          {/* Donation Selectors */}
          <div className="grid grid-cols-3 md:grid-cols-6 gap-3 mb-8">
            {amounts.map((amount) => (
              <button
                key={amount}
                onClick={() => setSelectedAmount(amount)}
                className={`h-12 flex items-center justify-center rounded-xl border transition-all font-bold text-xs ${
                  selectedAmount === amount 
                    ? 'bg-blue-600 border-blue-500 text-white shadow-lg shadow-blue-900/40' 
                    : 'bg-white/5 border-white/10 text-slate-300 hover:bg-white/10'
                }`}
              >
                ${amount}
              </button>
            ))}
            <button
              onClick={() => setSelectedAmount('other')}
              className={`h-12 flex items-center justify-center rounded-xl border transition-all font-bold text-xs ${
                selectedAmount === 'other' 
                  ? 'bg-blue-600 border-blue-500 text-white shadow-lg shadow-blue-900/40' 
                  : 'bg-white/5 border-white/10 text-slate-300 hover:bg-white/10'
              }`}
            >
              Other
            </button>
          </div>

          <button className="w-full h-14 bg-white text-slate-950 rounded-xl font-black text-xs tracking-[0.2em] uppercase hover:bg-slate-200 transition-all active:scale-[0.98] shadow-lg mb-6">
            Donate Now
          </button>
          
          <div className="flex items-center justify-center gap-2 text-[10px] text-slate-500 font-bold tracking-widest uppercase">
            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
            <span>Secure SSL Encrypted Transaction</span>
          </div>
        </div>

        {/* Action Items Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-24">
          {actionItems.map((item, index) => (
            <div key={index} className="p-8 rounded-3xl bg-slate-900/30 border border-white/5 hover:border-white/10 transition-all text-center md:text-left group">
              <div className="w-12 h-12 rounded-2xl bg-blue-600/10 flex items-center justify-center text-blue-500 mb-6 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h3 className="text-lg font-bold text-white mb-3 uppercase tracking-tight">{item.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed font-medium">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Democracy Power Section */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tighter mb-6 uppercase">Democracy is Powered by Donors Like You</h2>
          <p className="text-slate-400 text-base md:text-lg font-medium leading-relaxed">
            Make a contribution to our campaign today. We're not taking a dime from corporate PACs, so your donation is critical to our success.
          </p>
        </div>

        {/* Contribution Rules Section */}
        <div className="max-w-4xl mx-auto border-t border-white/10 pt-16">
          <div className="bg-slate-900/20 rounded-3xl p-8 md:p-12 border border-white/5">
            <h3 className="text-xl font-bold text-white mb-8 uppercase tracking-widest flex items-center gap-3">
              <span className="w-8 h-px bg-blue-600"></span>
              Contribution rules
            </h3>
            <ul className="space-y-6">
              {[
                "I am a U.S. citizen or lawfully admitted permanent resident (i.e., green card holder).",
                "This contribution is made from my own funds, and funds are not being provided to me by another person or entity for the purpose of making this contribution.",
                "I am making this contribution with my own personal credit card and not with a corporate or business credit card or a card issued to another person.",
                "I am at least eighteen years old.",
                "I am not a federal contractor.",
                "We are not accepting contributions from corporate, business, law firm or trade association PACs; federally registered lobbyists; or foreign agents."
              ].map((rule, i) => (
                <li key={i} className="flex items-start gap-4 text-slate-500 text-sm font-medium leading-relaxed">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0"></span>
                  {rule}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Donation;
