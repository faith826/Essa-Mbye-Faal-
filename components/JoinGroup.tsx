
import React from 'react';

const JoinGroup: React.FC = () => {
  return (
    <section className="py-24 max-w-4xl mx-auto px-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="bg-slate-900 border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl">
        <h2 className="text-3xl font-black text-white mb-8 uppercase tracking-tight border-b border-white/5 pb-4">Join Our Movement</h2>
        
        <form className="space-y-10" onSubmit={e => e.preventDefault()}>
          {/* Membership Rate */}
          <div className="space-y-4">
            <label className="block text-xs font-black text-blue-400 uppercase tracking-widest">Choose your membership rate</label>
            <div className="relative group">
              <select className="w-full bg-slate-950 border border-white/10 rounded-xl px-4 py-4 text-white focus:ring-2 focus:ring-blue-600 outline-none appearance-none cursor-pointer">
                <option>Standard - $5 per month</option>
                <option>Reduced - $3 per month</option>
                <option>Other - $10 per month</option>
                <option>Renew my membership</option>
              </select>
              <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-500">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
              </div>
            </div>
          </div>

          {/* Your Details */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white uppercase tracking-tight flex items-center gap-3">
              <span className="w-6 h-px bg-blue-600"></span>
              Your details
            </h3>
            
            <div className="grid md:grid-cols-4 gap-6">
              <div className="space-y-2">
                <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest">Title</label>
                <select className="w-full bg-slate-950 border border-white/10 rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-blue-600 outline-none">
                  <option>Mrs</option>
                  <option>Mr</option>
                  <option>Ms</option>
                  <option>Miss</option>
                  <option>Dr</option>
                </select>
              </div>
              <div className="md:col-span-3 space-y-2">
                <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest">First name</label>
                <input type="text" className="w-full bg-slate-950 border border-white/10 rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-blue-600 outline-none" />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest">Last name</label>
                <input type="text" className="w-full bg-slate-950 border border-white/10 rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-blue-600 outline-none" />
              </div>
              <div className="space-y-2">
                <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest">Gender</label>
                <select className="w-full bg-slate-950 border border-white/10 rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-blue-600 outline-none">
                  <option>Male</option>
                  <option>Female</option>
                  <option>Other</option>
                  <option>Prefer not to say</option>
                </select>
              </div>
            </div>

            <div className="space-y-2 max-w-xs">
              <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest">Date of birth</label>
              <input type="date" className="w-full bg-slate-950 border border-white/10 rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-blue-600 outline-none" placeholder="mm/dd/yyyy" />
            </div>
          </div>

          {/* Address */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white uppercase tracking-tight flex items-center gap-3">
              <span className="w-6 h-px bg-blue-600"></span>
              Address
            </h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest">Country/State</label>
                <input type="text" className="w-full bg-slate-950 border border-white/10 rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-blue-600 outline-none" />
              </div>
              <div className="space-y-2">
                <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest">Town/City</label>
                <input type="text" className="w-full bg-slate-950 border border-white/10 rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-blue-600 outline-none" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest">Address</label>
              <input type="text" className="w-full bg-slate-950 border border-white/10 rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-blue-600 outline-none" />
            </div>

            <div className="space-y-2 max-w-xs">
              <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest">Postcode</label>
              <input type="text" className="w-full bg-slate-950 border border-white/10 rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-blue-600 outline-none" />
            </div>
          </div>

          {/* Contact Details */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white uppercase tracking-tight flex items-center gap-3">
              <span className="w-6 h-px bg-blue-600"></span>
              Contact details
            </h3>
            <p className="text-xs text-slate-500 leading-relaxed font-medium italic">
              For any queries we may have and to keep you updated. We will never pass your information on to any third parties.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest">Phone number</label>
                <input type="tel" className="w-full bg-slate-950 border border-white/10 rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-blue-600 outline-none" />
              </div>
              <div className="space-y-2">
                <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest">Email address</label>
                <input type="email" className="w-full bg-slate-950 border border-white/10 rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-blue-600 outline-none" />
              </div>
            </div>
          </div>

          {/* Terms */}
          <div className="flex items-start gap-3 p-4 bg-white/5 rounded-2xl border border-white/5">
            <input type="checkbox" id="terms" className="mt-1 w-4 h-4 rounded border-white/10 bg-slate-950 text-blue-600 focus:ring-blue-600 cursor-pointer" />
            <label htmlFor="terms" className="text-xs text-slate-400 font-medium cursor-pointer">
              I have read and agree with the terms and conditions.
            </label>
          </div>

          <button className="w-full bg-blue-600 hover:bg-blue-500 text-white font-black py-5 rounded-2xl transition-all uppercase tracking-[0.2em] text-xs shadow-xl shadow-blue-900/20 active:scale-[0.98]">
            Join the new party
          </button>
        </form>
      </div>
    </section>
  );
};

export default JoinGroup;
