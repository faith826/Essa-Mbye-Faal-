
import React from 'react';

const Newsletter: React.FC = () => {
  return (
    <section className="py-24 max-w-7xl mx-auto px-6">
      <div className="relative overflow-hidden bg-slate-900 border border-white/5 rounded-3xl p-8 md:p-16 flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Background mesh/grain effect */}
        <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
        
        <div className="max-w-md relative z-10">
          <h3 className="text-3xl font-semibold text-white mb-4 tracking-tight">Stay Connected</h3>
          <p className="text-slate-400 text-sm leading-relaxed">
            Join the Appsobeyaa newsletter to get the latest updates on campaign rallies, policy announcements, and how to get involved.
          </p>
        </div>
        
        <form className="flex w-full md:w-auto gap-3 relative z-10" onSubmit={(e) => e.preventDefault()}>
          <input 
            type="email" 
            placeholder="email@address.com" 
            className="flex-1 md:w-80 bg-slate-950 border border-white/10 text-white text-xs font-medium rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all placeholder:text-slate-600 uppercase tracking-widest"
          />
          <button 
            type="submit" 
            className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-xl text-[10px] font-bold tracking-widest uppercase transition-all shadow-lg shadow-blue-900/20 active:scale-95 whitespace-nowrap"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
