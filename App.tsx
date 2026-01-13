import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Agenda from './components/Agenda';
import Agriculture from './components/Agriculture';
import Infrastructure from './components/Infrastructure';
import Donation from './components/Donation';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import PolicyAide from './components/PolicyAide';
import VotingProcess from './components/VotingProcess';
import CandidateFocus from './components/CandidateFocus';
import JoinGroup from './components/JoinGroup';
import { ViewType } from './types';

const PrivacyPolicyView = () => (
  <section className="py-24 max-w-4xl mx-auto px-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
    <h2 className="text-4xl font-black text-white mb-8 tracking-tighter uppercase">Privacy Policy</h2>
    <div className="prose prose-invert max-w-none text-slate-400 space-y-6 text-sm md:text-base leading-relaxed">
      <p>Last Updated: October 2025</p>
      <p>The Essa Mbye Faal Campaign ("we," "us," or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and share information about you when you use our website and services.</p>
      
      <h3 className="text-xl font-bold text-white uppercase mt-10">1. Information We Collect</h3>
      <p>We collect information you provide directly to us, such as when you sign up for our newsletter, join our movement, volunteer, or make a donation. This information may include your name, email address, phone number, zip code, and payment information.</p>
      
      <h3 className="text-xl font-bold text-white uppercase mt-10">2. Use of Information</h3>
      <p>We use the information we collect to communicate with you about campaign updates, events, and opportunities to get involved. We also use it to process donations and comply with legal requirements.</p>
      
      <h3 className="text-xl font-bold text-white uppercase mt-10">3. AI Development Aide</h3>
      <p>Our website features an AI-powered Development Aide powered by Google Gemini. While we do not store your chat history permanently on our servers, anonymized queries may be processed by Google to provide policy-based responses. Please do not share sensitive personal information with the AI Aide.</p>
      
      <h3 className="text-xl font-bold text-white uppercase mt-10">4. Sharing of Information</h3>
      <p>We do not sell your personal information. We may share information with third-party service providers who perform services on our behalf, such as payment processing and email delivery, or when required by law.</p>
      
      <h3 className="text-xl font-bold text-white uppercase mt-10">5. Contact Us</h3>
      <p>If you have any questions about this Privacy Policy, please contact us at info@appsobeyaa.com.</p>
    </div>
  </section>
);

const TermsOfServiceView = () => (
  <section className="py-24 max-w-4xl mx-auto px-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
    <h2 className="text-4xl font-black text-white mb-8 tracking-tighter uppercase">Terms of Service</h2>
    <div className="prose prose-invert max-w-none text-slate-400 space-y-6 text-sm md:text-base leading-relaxed">
      <p>Last Updated: October 2025</p>
      <p>By accessing or using the Essa Mbye Faal Campaign website, you agree to be bound by these Terms of Service.</p>
      
      <h3 className="text-xl font-bold text-white uppercase mt-10">1. Eligibility</h3>
      <p>To use our services, you must be at least 18 years old. By using the site, you represent and warrant that you meet this requirement.</p>
      
      <h3 className="text-xl font-bold text-white uppercase mt-10">2. Donations</h3>
      <p>All donations made through our website are subject to the contribution rules specified on the donation page. You must be a citizen or lawfully admitted permanent resident of The Gambia (or the relevant jurisdiction) to contribute.</p>
      
      <h3 className="text-xl font-bold text-white uppercase mt-10">3. User Conduct</h3>
      <p>You agree not to use our website for any unlawful purpose or in any way that could damage, disable, or impair the site. You are responsible for maintaining the confidentiality of any account information.</p>
      
      <h3 className="text-xl font-bold text-white uppercase mt-10">4. Intellectual Property</h3>
      <p>All content on this website, including text, graphics, logos, and images, is the property of the Essa Mbye Faal Campaign and is protected by copyright and other intellectual property laws.</p>
      
      <h3 className="text-xl font-bold text-white uppercase mt-10">5. Limitation of Liability</h3>
      <p>To the fullest extent permitted by law, the Essa Mbye Faal Campaign shall not be liable for any indirect, incidental, special, or consequential damages arising out of or in connection with your use of the website.</p>
    </div>
  </section>
);

const HistoryPoliciesView = ({ onNavigate }: { onNavigate: (view: ViewType) => void }) => (
  <section className="py-24 max-w-5xl mx-auto px-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
    <div className="mb-12">
      <h3 className="text-blue-500 text-xs font-black tracking-[0.3em] uppercase mb-4">History & Policies</h3>
      <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-8 leading-none">Essa Mbye Faal</h2>
    </div>

    <div className="grid lg:grid-cols-1 gap-12">
      <div className="space-y-12">
        <div>
          <h4 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
            <span className="w-8 h-1 bg-blue-600 rounded-full"></span>
            Our Guiding Principles
          </h4>
          <p className="text-slate-400 mb-8 text-lg leading-relaxed font-medium">
            If honored to be elected president, under the leadership and administration of Essa Mbye Faal we can turn things around for our country. Essa’s Turn Around Blueprint priorities are:
          </p>
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-4">
            {[
              "Fight Endemic Corruption",
              "Provide Livable Wages",
              "Improve Education Standards",
              "Invest in Agriculture",
              "Improve Healthcare",
              "Diaspora Engagement",
              "Public Service Reform",
              "Job Creation & Women’s Empowerment",
              "Invest in Infrastructure & Digital Transformation",
              "Security Sector Reform"
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-4 group p-4 rounded-xl bg-slate-900/50 border border-white/5 hover:border-blue-500/30 transition-all">
                <span className="text-blue-500 font-black text-sm w-6">{idx + 1}.</span>
                <span className="text-slate-200 text-sm font-semibold group-hover:text-white transition-colors uppercase tracking-tight">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6 text-slate-400 leading-relaxed text-lg">
          <h4 className="text-2xl font-bold text-white uppercase tracking-tight">Biography</h4>
          <p>
            Essa Mbye Faal is a Gambian international lawyer who is a defense counsel at the International Criminal Court (ICC). On August 27th, 2021, Essa declared his bid to run for President of the Republic of The Gambia.
          </p>
          <p>
            Essa Mbye Faal holds an LLB from Fourah Bay College, University of Sierra Leone, and an LLM in legislative drafting and public law from the University of the West Indies.
          </p>
          <p>
            Essa Mbye Faal began his legal career as a state counsel at the Ministry of Justice in The Gambia in 1994. He was later appointed a judicial affairs officer by the UN in 2002, followed by a successful career at the International Development Law Organization (IDLO). In 2006 Essa was appointed by the International Criminal Court (ICC) to lead the investigations into the Darfur genocide, and in 2011 as an International Defense Lawyer at the ICC where he was Lead Counsel for several high-profile cases.
          </p>
          <p className="font-bold text-white italic">
            Essa Mbye Faal and the “Turn Around Campaign” humbly request your support so that we can take our country back from the clutches of ineptitude and turn it around for a better Gambia for all.
          </p>
          
          <div className="py-8">
            <button 
              onClick={() => onNavigate('donate')}
              className="bg-blue-600 hover:bg-blue-500 text-white px-10 py-4 rounded-2xl font-black text-xs tracking-widest uppercase transition-all shadow-xl active:scale-95"
            >
              DONATE
            </button>
          </div>

          <p>
            In 2018, he was appointed as Lead Counsel at The Gambian Truth, Reconciliation and Reparations Commission (TRRC). Essa accepted to be Lead Counsel of the TRRC and made a personal commitment to go above and beyond the call of duty to deliver on the expectation of the Gambian people. The horror stories of victims, the systematic dismantling of our critical governmental institutions had a profound effect on him.
          </p>
          <p>
            The impact of an inefficient government can be seen in more ways than one, especially during the covid pandemic. Hundreds of thousands of Gambians struggled and continue to struggle with the fallout from the pandemic. To play a part in helping relieve the plight of Gambians, Essa travelled the length and breadth of the country in the service of our people to deliver food aid to struggling Gambians during the covid pandemic. That journey reinforced his unyielding faith in the love the Gambian people have for our country and our capacity under the right leadership to change, even amid impossible odds.
          </p>
        </div>
      </div>
    </div>
  </section>
);

const AboutView = () => (
  <section className="py-24 max-w-7xl mx-auto px-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/20 bg-blue-500/5 text-blue-400 text-[10px] font-bold tracking-widest uppercase mb-8">About the Candidate</div>
    <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter">Essa Mbye Faal</h2>
    <div className="grid md:grid-cols-2 gap-12 text-slate-400 leading-relaxed text-lg">
      <p>App Sobeyaa is more than a foundation; it is a movement dedicated to the holistic development of Gambia. Led by Essa Mbye Faal, our mission is to drive sustainable growth through targeted initiatives in agriculture, infrastructure, and social welfare.</p>
      <p>With a vision for a better Gambia, we focus on integrity, accountability, and real action. Our vision is a future where every citizen has the tools and environment to prosper, starting with 2025.</p>
    </div>
  </section>
);

const VolunteeringView = () => {
  const options = [
    "Knock Doors",
    "Deliver yard signs",
    "Host a Fundraiser",
    "Data Entry",
    "Host a Meet & Greet",
    "Collect Office Supplies",
    "Make Calls",
    "Help with Social Media"
  ];

  return (
    <section className="py-24 max-w-4xl mx-auto px-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="mb-12">
        <h3 className="text-blue-500 text-xs font-black tracking-[0.3em] uppercase mb-4">History & Policies</h3>
        <h2 className="text-5xl font-black text-white tracking-tighter mb-4 leading-none">Volunteering</h2>
        <p className="text-blue-400 text-lg font-bold uppercase tracking-widest">How we can build a better country together!</p>
      </div>

      <div className="bg-slate-900 border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl">
        <h3 className="text-2xl font-bold text-white mb-4 uppercase tracking-tight">Elections Volunteer Request</h3>
        <p className="text-slate-400 mb-10 text-sm leading-relaxed">
          Check all options you’re interested in and we’ll provide details for each once we know you’re in.
        </p>
        
        <form className="space-y-12" onSubmit={e => e.preventDefault()}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8">
            {options.map((option) => (
              <label key={option} className="flex items-center gap-4 cursor-pointer group">
                <div className="relative flex items-center justify-center">
                  <input 
                    type="checkbox" 
                    className="peer appearance-none w-6 h-6 border-2 border-white/10 rounded-md bg-slate-950 checked:bg-blue-600 checked:border-blue-600 transition-all cursor-pointer"
                  />
                  <svg 
                    className="absolute w-4 h-4 text-white opacity-0 peer-checked:opacity-100 transition-opacity pointer-events-none" 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="4" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <span className="text-slate-300 group-hover:text-white font-bold text-sm uppercase tracking-tight transition-colors">
                  {option}
                </span>
              </label>
            ))}
          </div>

          <div className="pt-10 border-t border-white/5 space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest">Name*</label>
                <input type="text" required className="w-full bg-slate-950 border border-white/10 rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-blue-600 outline-none" />
              </div>
              <div className="space-y-2">
                <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest">Email*</label>
                <input type="email" required className="w-full bg-slate-950 border border-white/10 rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-blue-600 outline-none" />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest">Phone*</label>
                <input type="tel" required className="w-full bg-slate-950 border border-white/10 rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-blue-600 outline-none" />
              </div>
              <div className="space-y-2">
                <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest">Zip*</label>
                <input type="text" required className="w-full bg-slate-950 border border-white/10 rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-blue-600 outline-none" />
              </div>
            </div>
          </div>

          <button className="w-full bg-blue-600 hover:bg-blue-500 text-white font-black py-5 rounded-2xl transition-all uppercase tracking-[0.2em] text-xs shadow-xl shadow-blue-900/20 active:scale-[0.98]">
            Submit Request
          </button>
        </form>
      </div>
    </section>
  );
};

const ContactView = () => (
  <section className="py-24 max-w-4xl mx-auto px-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold text-white mb-4 uppercase tracking-tight">Contact the Campaign</h2>
      <p className="text-slate-400">Have questions for Essa? We'd love to hear from you.</p>
    </div>
    <div className="grid md:grid-cols-3 gap-8 mb-16">
      <div className="p-6 rounded-2xl bg-slate-900 border border-white/5 text-center">
        <div className="w-10 h-10 bg-blue-600/20 text-blue-400 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
        </div>
        <h4 className="text-white font-semibold mb-2">Phone</h4>
        <p className="text-xs text-slate-500">+220 396 5401</p>
      </div>
      <div className="p-6 rounded-2xl bg-slate-900 border border-white/5 text-center">
        <div className="w-10 h-10 bg-blue-600/20 text-blue-400 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
        </div>
        <h4 className="text-white font-semibold mb-2">Email</h4>
        <p className="text-xs text-slate-500">info@appsobeyaa.com</p>
      </div>
      <div className="p-6 rounded-2xl bg-slate-900 border border-white/5 text-center">
        <div className="w-10 h-10 bg-blue-600/20 text-blue-400 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
        </div>
        <h4 className="text-white font-semibold mb-2">Location</h4>
        <p className="text-xs text-slate-500">Banjul, The Gambia</p>
      </div>
    </div>
  </section>
);

const App: React.FC = () => {
  const [activeView, setActiveView] = useState<ViewType>('home');
  const [showAide, setShowAide] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeView]);

  const renderContent = () => {
    switch (activeView) {
      case 'home':
        return (
          <>
            <Hero />
            <CandidateFocus onNavigate={(view) => setActiveView(view as ViewType)} />
            <VotingProcess />
            <Stats />
            <div className="max-w-7xl mx-auto px-6 py-20 border-t border-white/5">
              <div className="grid md:grid-cols-3 gap-8">
                <div onClick={() => setActiveView('agriculture')} className="group cursor-pointer p-8 rounded-3xl bg-slate-900 border border-white/5 hover:border-[#54b4ff]/30 transition-all">
                  <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-[#54b4ff] transition-colors">Agriculture →</h3>
                  <p className="text-sm text-slate-500">Transforming our farming heritage with modern technology.</p>
                </div>
                <div onClick={() => setActiveView('infrastructure')} className="group cursor-pointer p-8 rounded-3xl bg-slate-900 border border-white/5 hover:border-blue-500/30 transition-all">
                  <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-blue-400 transition-colors">Infrastructure →</h3>
                  <p className="text-sm text-slate-500">Building the roads and digital grids that power progress.</p>
                </div>
                <div onClick={() => setActiveView('about')} className="group cursor-pointer p-8 rounded-3xl bg-slate-900 border border-white/5 hover:border-purple-500/30 transition-all">
                  <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-purple-400 transition-colors">Our Vision →</h3>
                  <p className="text-sm text-slate-500">Integrity and action at the core of our community service.</p>
                </div>
              </div>
            </div>
          </>
        );
      case 'history-policies':
        return <HistoryPoliciesView onNavigate={(view) => setActiveView(view as ViewType)} />;
      case 'about':
        return <AboutView />;
      case 'agriculture':
        return <Agriculture />;
      case 'infrastructure':
        return <Infrastructure />;
      case 'news':
        return <Newsletter />;
      case 'contact':
        return <ContactView />;
      case 'donate':
        return <Donation />;
      case 'join-group':
        return <JoinGroup />;
      case 'volunteer':
        return <VolunteeringView />;
      case 'privacy-policy':
        return <PrivacyPolicyView />;
      case 'terms-of-service':
        return <TermsOfServiceView />;
      default:
        return <Hero />;
    }
  };

  return (
    <div className="relative min-h-screen flex flex-col">
      <Navbar currentView={activeView} onNavigate={(view) => setActiveView(view as ViewType)} />
      
      <main className="flex-grow pt-20">
        <div className="animate-in fade-in duration-700">
          {renderContent()}
        </div>
      </main>

      <Footer onNavigate={(view) => setActiveView(view as ViewType)} />

      {/* Floating Action Button for AI Aide */}
      <button 
        onClick={() => setShowAide(!showAide)}
        className="fixed bottom-8 right-8 z-50 w-14 h-14 bg-blue-600 text-white rounded-full shadow-2xl shadow-blue-500/50 flex items-center justify-center hover:bg-blue-500 transition-all hover:scale-110 group active:scale-95"
      >
        {showAide ? (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 8V4H8"/><rect width="16" height="12" x="4" y="8" rx="2"/><path d="M2 14h2"/><path d="M20 14h2"/><path d="M15 13v2"/><path d="M9 13v2"/></svg>
        )}
      </button>

      {showAide && (
        <div className="fixed bottom-24 right-8 z-50 w-[90vw] max-w-[400px]">
          <PolicyAide onClose={() => setShowAide(false)} />
        </div>
      )}
    </div>
  );
};

export default App;