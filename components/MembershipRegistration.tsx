import React, { useState, useRef, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Check, Printer, ArrowLeft, Loader2, ShieldCheck, Database, Fingerprint, Globe, Download } from 'lucide-react';
import { toPng } from 'html-to-image';

const DigitalIDCard = React.forwardRef<HTMLDivElement, { data: any; idNumber: string; photo: string | null }>(({ data, idNumber, photo }, ref) => {
  return (
    <motion.div 
      ref={ref}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="flex flex-col gap-12 items-center max-w-full overflow-hidden p-8 bg-slate-950/20 rounded-[3rem]"
    >
      {/* FRONT OF CARD */}
      <div className="w-[450px] h-[280px] bg-white rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.3)] overflow-hidden flex flex-col relative border border-slate-200 shrink-0">
        {/* Header Section */}
        <div className="bg-[#1a1513] py-5 px-8 relative">
          <h2 className="text-white text-3xl font-black text-center tracking-wider uppercase">APP SOBEYAA</h2>
          <div className="absolute right-0 top-0 h-full w-16 bg-[#6b4433] transform skew-x-[-25deg] translate-x-8"></div>
        </div>
        
        {/* Sub-header */}
        <div className="bg-[#6b4433] py-2 px-8 relative z-10 shadow-md">
          <p className="text-white text-[10px] font-black tracking-[0.3em] uppercase">UNITED FOR A BETTER GAMBIA</p>
        </div>

        {/* Content Area */}
        <div className="flex-1 flex p-6">
          {/* Details Column */}
          <div className="flex-1 space-y-3">
            <div className="flex gap-3">
              <span className="text-[10px] font-black text-slate-400 uppercase w-24">Name</span>
              <span className="text-[11px] font-bold text-[#1a1513] uppercase leading-tight">: {data.fullName}</span>
            </div>
            <div className="flex gap-3 text-blue-600">
              <span className="text-[10px] font-black uppercase w-24">ID NUMBER</span>
              <span className="text-[11px] font-black uppercase">: {idNumber}</span>
            </div>
            <div className="flex gap-3">
              <span className="text-[10px] font-black text-slate-400 uppercase w-24">TEL</span>
              <span className="text-[11px] font-bold text-[#1a1513] uppercase">: {data.phone}</span>
            </div>
            <div className="flex gap-3">
              <span className="text-[10px] font-black text-slate-400 uppercase w-24">Religion</span>
              <span className="text-[11px] font-bold text-[#1a1513] uppercase">: {data.religion || "N/A"}</span>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-100 flex justify-between items-end">
              <div>
                <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1">Status</p>
                <div className="flex items-center gap-1.5 px-2 py-0.5 bg-green-100 text-green-700 rounded-full">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
                  <span className="text-[9px] font-black uppercase tracking-tighter">Verified Member</span>
                </div>
              </div>
              <div className="text-right">
                <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1">Valid Until</p>
                <p className="text-xs font-black text-[#1a1513]">20-08-2028</p>
              </div>
            </div>
          </div>

          {/* Photo & Barcode Column */}
          <div className="w-40 flex flex-col items-end gap-4 ml-4">
            <div className="w-32 h-36 bg-slate-100 border-2 border-slate-200 rounded-xl overflow-hidden flex items-center justify-center p-0.5 shadow-inner">
              {photo ? (
                <img src={photo} alt="Passport" className="w-full h-full object-cover rounded-lg" />
              ) : (
                <div className="bg-slate-200/50 w-full h-full flex items-center justify-center">
                  <Fingerprint className="w-12 h-12 text-slate-300" />
                </div>
              )}
            </div>
            <div className="w-full text-center flex flex-col items-center">
              <img src={`https://bwipjs-api.metafloor.com/?bcid=code128&text=${idNumber}&scale=1&height=8`} alt="barcode" className="w-full mb-1 h-10 object-contain grayscale" />
              <p className="text-[9px] font-black tracking-[0.2em] text-[#1a1513]">{idNumber}</p>
            </div>
          </div>
        </div>
        
        {/* Accent Footer */}
        <div className="absolute bottom-0 right-0 w-24 h-6 bg-[#6b4433] transform skew-x-[-45deg] translate-x-8"></div>
        <div className="absolute bottom-4 left-6">
           <p className="text-[7px] font-bold text-slate-300 uppercase tracking-[0.5em]">Essa Mbye Faal Campaign 2026</p>
        </div>
      </div>

      {/* BACK OF CARD */}
      <div className="w-[450px] h-[280px] bg-[#1a1513] rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.3)] overflow-hidden flex flex-col relative justify-center items-center p-12 border border-white/5">
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-600 via-[#6b4433] to-red-600 opacity-50"></div>
        
        <h1 className="text-white text-5xl font-black text-center leading-[1] tracking-tighter uppercase mb-6 drop-shadow-2xl">
          UNITED FOR A <br /> 
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">BETTER GAMBIA</span>
        </h1>
        
        <div className="absolute bottom-20 left-0 h-14 w-[70%] bg-[#6b4433] transform skew-x-[-20deg] -translate-x-6 flex items-center justify-center pl-10 shadow-lg border-y border-white/10">
          <p className="text-white font-black text-sm tracking-[0.3em] uppercase skew-x-[20deg]">CITIZEN EMPOWERMENT</p>
        </div>

        <div className="absolute bottom-10 right-10 bg-white p-3 rounded-xl flex flex-col items-center shadow-2xl">
           <img src={`https://bwipjs-api.metafloor.com/?bcid=code128&text=${idNumber}&scale=1&height=6`} alt="barcode" className="w-28 h-8 object-contain grayscale" />
           <p className="text-[8px] font-black text-slate-900 mt-1 tracking-widest">{idNumber}</p>
        </div>
        
        <div className="absolute top-10 left-10">
           <ShieldCheck className="w-8 h-8 text-blue-500 opacity-20" />
        </div>
      </div>
    </motion.div>
  );
});

DigitalIDCard.displayName = 'DigitalIDCard';

const GeneratingIDView: React.FC<{ progress: number; currentStep: string }> = ({ progress, currentStep }) => {
  const steps = [
    { icon: Globe, label: "Connecting to Secure Gateway" },
    { icon: Database, label: "Validating Membership Records" },
    { icon: ShieldCheck, label: "Encrypting Digital Identity" },
    { icon: Fingerprint, label: "Registering Biometric Data" },
    { icon: Check, label: "Finalizing Digital ID Card" }
  ];

  return (
    <div className="py-24 flex flex-col items-center justify-center max-w-2xl mx-auto px-6 text-center animate-in fade-in duration-1000">
      <div className="relative mb-16">
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="w-48 h-48 border-4 border-blue-500/20 border-t-blue-500 rounded-full"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-4xl font-black text-white">{Math.round(progress)}%</span>
        </div>
      </div>

      <h2 className="text-3xl font-black text-white mb-4 uppercase tracking-tight">Generating Digital ID</h2>
      <p className="text-blue-500 font-bold text-sm tracking-widest uppercase mb-12 animate-pulse">{currentStep}</p>

      <div className="w-full space-y-4 text-left">
        {steps.map((step, idx) => {
          const isCompleted = progress > (idx + 1) * 20;
          const isActive = progress >= idx * 20 && progress < (idx + 1) * 20;
          
          return (
            <div key={idx} className={`flex items-center gap-4 p-4 rounded-2xl border transition-all duration-500 ${isCompleted ? 'bg-green-500/10 border-green-500/20' : isActive ? 'bg-blue-600/10 border-blue-500/30' : 'bg-slate-900/50 border-white/5 opacity-40'}`}>
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${isCompleted ? 'bg-green-500' : isActive ? 'bg-blue-600' : 'bg-slate-800'}`}>
                {isCompleted ? <Check className="w-5 h-5 text-white" /> : <step.icon className={`w-5 h-5 text-white ${isActive ? 'animate-bounce' : ''}`} />}
              </div>
              <div className="flex-1">
                <p className={`text-xs font-black uppercase tracking-widest ${isCompleted ? 'text-green-500' : isActive ? 'text-white' : 'text-slate-500'}`}>{step.label}</p>
                {isActive && <div className="h-1 bg-blue-600/20 rounded-full mt-2 overflow-hidden"><motion.div initial={{ width: 0 }} animate={{ width: "100%" }} transition={{ duration: 1.5 }} className="h-full bg-blue-600" /></div>}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const MembershipRegistration: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentStep, setCurrentStep] = useState('');
  const [photoPreview, setPhotoPreview] = useState<string | null>(null);
  const [idNumber, setIdNumber] = useState('');
  const [currency, setCurrency] = useState('GMD');
  const cardRef = useRef<HTMLDivElement>(null);
  
  const [formData, setFormData] = useState({
    fullName: '',
    dob: '',
    gender: 'Male',
    idNumber: '', 
    religion: 'Muslim',
    email: '',
    phone: '',
    location: '',
    address: '',
    membershipType: 'General Member',
    occupation: '',
    reason: '',
    transactionCode: '',
    agreed: false
  });

  const steps = [
    "Connecting to Secure Gateway...",
    "Validating Membership Records...",
    "Encrypting Digital Identity...",
    "Registering Biometric Data...",
    "Finalizing Digital ID Card..."
  ];

  const handleDownload = useCallback(async () => {
    if (cardRef.current === null) return;
    
    setIsDownloading(true);
    try {
      const dataUrl = await toPng(cardRef.current, { 
        cacheBust: true,
        backgroundColor: '#020617', // Match slate-950
        style: {
          borderRadius: '4rem',
        }
      });
      const link = document.createElement('a');
      link.download = `Essa_Mbye_Faal_ID_${idNumber}.png`;
      link.href = dataUrl;
      link.click();
    } catch (err) {
      console.error('Failed to download ID card', err);
    } finally {
      setIsDownloading(false);
    }
  }, [idNumber]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsGenerating(true);
    setProgress(0);
    setCurrentStep(steps[0]);
    window.scrollTo({ top: 0, behavior: 'smooth' });

    let currentProgress = 0;
    const interval = setInterval(() => {
      currentProgress += 1;
      setProgress(currentProgress);
      
      const stepIdx = Math.floor(currentProgress / 20);
      if (stepIdx < steps.length) {
        setCurrentStep(steps[stepIdx]);
      }

      if (currentProgress >= 100) {
        clearInterval(interval);
        setTimeout(() => {
          const generatedId = `YTT-2026-${Math.floor(1000 + Math.random() * 9000)}`;
          setIdNumber(generatedId);
          setIsGenerating(false);
          setSubmitted(true);
        }, 800);
      }
    }, 40);
  };

  const calculateConvertedAmount = () => {
    const exchangeRates: Record<string, { rate: number; symbol: string }> = {
      GMD: { rate: 70.5, symbol: 'D' },
      EUR: { rate: 0.92, symbol: '€' },
      GBP: { rate: 0.79, symbol: '£' },
      USD: { rate: 1, symbol: '$' }
    };
    const data = exchangeRates[currency];
    return `${data.symbol}${(10 * data.rate).toFixed(2)}`;
  };

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPhotoPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  if (isGenerating) {
    return <GeneratingIDView progress={progress} currentStep={currentStep} />;
  }

  if (submitted) {
    return (
      <section className="py-24 max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="w-20 h-20 bg-green-500/20 text-green-500 rounded-3xl flex items-center justify-center mx-auto mb-8 rotate-12 shadow-2xl shadow-green-500/20"
          >
            <Check className="w-10 h-10" />
          </motion.div>
          <h2 className="text-5xl font-black text-white mb-6 uppercase tracking-tighter">Identity Verified</h2>
          <p className="text-slate-400 max-w-2xl mx-auto mb-12 text-lg leading-relaxed font-medium">
            Your application has been processed. Your Digital ID Card is now active and stored in our secure database. A master copy has been sent to <span className="text-blue-500 font-bold">{formData.email}</span>.
          </p>
        </div>

        <div className="flex flex-col items-center gap-16 mb-24">
          <DigitalIDCard ref={cardRef} data={formData} idNumber={idNumber} photo={photoPreview} />
          
          <div className="flex flex-col sm:flex-row gap-6 w-full max-w-2xl">
             <button 
              onClick={handleDownload}
              disabled={isDownloading}
              className="group flex-1 h-16 bg-white text-slate-900 rounded-2xl font-black text-xs tracking-[0.3em] uppercase hover:bg-slate-200 transition-all flex items-center justify-center gap-3 shadow-2xl active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isDownloading ? (
                <Loader2 className="w-5 h-5 animate-spin" />
              ) : (
                <Download className="w-5 h-5 group-hover:bounce" />
              )}
              {isDownloading ? "Generating..." : "Download ID Card"}
            </button>
            <button 
              onClick={() => setSubmitted(false)}
              className="flex-1 h-16 border border-white/10 bg-white/5 text-white rounded-2xl font-black text-xs tracking-[0.3em] uppercase hover:bg-white/10 transition-all flex items-center justify-center gap-3 active:scale-95"
            >
              <ArrowLeft className="w-5 h-5" />
              Apply Again
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="py-24 max-w-4xl mx-auto px-6"
    >
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/20 bg-blue-500/5 text-blue-400 text-[10px] font-black tracking-widest uppercase mb-8">Official Registration</div>
        <h1 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter uppercase leading-none">
          Movement – <span className="text-blue-500">Apply for Digital ID</span>
        </h1>
        <p className="text-slate-400 text-lg max-w-3xl mx-auto leading-relaxed font-medium">
          Secure your place in the movement. Complete the registration below to generate your unique Gambian Identity Card and join the Youth Tech Team.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-12">
        {/* SECTION 1: Personal Information */}
        <div className="bg-slate-950/50 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl">
          <div className="flex items-center gap-4 mb-10">
            <div className="flex items-center justify-center w-10 h-10 rounded-2xl bg-blue-600 text-white font-black text-xs shadow-lg shadow-blue-900/40">1</div>
            <h3 className="text-2xl font-black text-white uppercase tracking-tight">Personal Information</h3>
          </div>
          
          <div className="grid md:grid-cols-2 gap-10">
            <div className="space-y-3">
              <label className="block text-[10px] font-black text-slate-500 uppercase tracking-[0.2em]">Full Legal Name *</label>
              <div className="relative group">
                <input 
                  type="text" 
                  required 
                  placeholder="As it appears on ID"
                  className="w-full bg-slate-900 border border-white/10 rounded-2xl px-6 py-4 text-white focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all group-hover:border-white/20"
                  value={formData.fullName}
                  onChange={e => setFormData({...formData, fullName: e.target.value})}
                />
              </div>
            </div>
            <div className="space-y-3">
              <label className="block text-[10px] font-black text-slate-500 uppercase tracking-[0.2em]">Date of Birth</label>
              <input 
                type="date" 
                className="w-full bg-slate-900 border border-white/10 rounded-2xl px-6 py-4 text-white focus:ring-2 focus:ring-blue-600 outline-none transition-all"
                value={formData.dob}
                onChange={e => setFormData({...formData, dob: e.target.value})}
              />
            </div>
            <div className="space-y-3">
              <label className="block text-[10px] font-black text-slate-500 uppercase tracking-[0.2em]">Gender</label>
              <select 
                className="w-full bg-slate-900 border border-white/10 rounded-2xl px-6 py-4 text-white focus:ring-2 focus:ring-blue-600 outline-none appearance-none cursor-pointer"
                value={formData.gender}
                onChange={e => setFormData({...formData, gender: e.target.value})}
              >
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </select>
            </div>
            <div className="space-y-3">
              <label className="block text-[10px] font-black text-slate-500 uppercase tracking-[0.2em]">Religion</label>
              <select 
                className="w-full bg-slate-900 border border-white/10 rounded-2xl px-6 py-4 text-white focus:ring-2 focus:ring-blue-600 outline-none appearance-none cursor-pointer"
                value={formData.religion}
                onChange={e => setFormData({...formData, religion: e.target.value})}
              >
                <option>Muslim</option>
                <option>Christian</option>
                <option>Traditional</option>
                <option>Other</option>
              </select>
            </div>
            <div className="space-y-3">
              <label className="block text-[10px] font-black text-slate-500 uppercase tracking-[0.2em]">ID / Passport Number *</label>
              <input 
                type="text" 
                required 
                className="w-full bg-slate-900 border border-white/10 rounded-2xl px-6 py-4 text-white focus:ring-2 focus:ring-blue-600 outline-none transition-all"
                value={formData.idNumber}
                onChange={e => setFormData({...formData, idNumber: e.target.value})}
              />
            </div>
            <div className="md:col-span-2 space-y-4 pt-4">
              <label className="block text-[10px] font-black text-slate-500 uppercase tracking-[0.2em]">Biometric Portrait *</label>
              <div className="border-2 border-dashed border-white/10 rounded-3xl p-10 text-center hover:border-blue-500/50 hover:bg-blue-600/5 transition-all cursor-pointer group relative overflow-hidden">
                {photoPreview ? (
                  <div className="flex flex-col items-center">
                    <img src={photoPreview} className="w-32 h-32 rounded-2xl object-cover mb-4 border-4 border-white/10 shadow-2xl" alt="Preview" />
                    <p className="text-xs font-black text-blue-500 tracking-widest uppercase">Portrait Captured</p>
                  </div>
                ) : (
                  <>
                    <Fingerprint className="w-12 h-12 text-slate-600 mx-auto mb-4 group-hover:text-blue-500 transition-colors" />
                    <p className="text-xs font-black text-slate-500 uppercase tracking-widest group-hover:text-slate-300">Upload Professional Passport Photo</p>
                  </>
                )}
                <input 
                  type="file" 
                  required={!photoPreview} 
                  className="absolute inset-0 opacity-0 cursor-pointer" 
                  id="photo-upload" 
                  accept="image/*" 
                  onChange={handlePhotoUpload}
                />
              </div>
            </div>
          </div>
        </div>

        {/* SECTION 2: Contact Information */}
        <div className="bg-slate-950/50 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl">
          <div className="flex items-center gap-4 mb-10">
            <div className="flex items-center justify-center w-10 h-10 rounded-2xl bg-blue-600 text-white font-black text-xs shadow-lg shadow-blue-900/40">2</div>
            <h3 className="text-2xl font-black text-white uppercase tracking-tight">Contact Channels</h3>
          </div>
          
          <div className="grid md:grid-cols-2 gap-10">
            <div className="space-y-3">
              <label className="block text-[10px] font-black text-slate-500 uppercase tracking-[0.2em]">Digital Mailbox *</label>
              <input 
                type="email" 
                required 
                className="w-full bg-slate-900 border border-white/10 rounded-2xl px-6 py-4 text-white focus:ring-2 focus:ring-blue-600 outline-none transition-all"
                value={formData.email}
                onChange={e => setFormData({...formData, email: e.target.value})}
              />
            </div>
            <div className="space-y-3">
              <label className="block text-[10px] font-black text-slate-500 uppercase tracking-[0.2em]">Active Phone Line *</label>
              <input 
                type="tel" 
                required 
                placeholder="+220 XXX XXXX"
                className="w-full bg-slate-900 border border-white/10 rounded-2xl px-6 py-4 text-white focus:ring-2 focus:ring-blue-600 outline-none transition-all"
                value={formData.phone}
                onChange={e => setFormData({...formData, phone: e.target.value})}
              />
            </div>
            <div className="md:col-span-2 space-y-3">
              <label className="block text-[10px] font-black text-slate-500 uppercase tracking-[0.2em]">Physical Location / Address</label>
              <input 
                type="text" 
                placeholder="Region, City, or Street Address"
                className="w-full bg-slate-900 border border-white/10 rounded-2xl px-6 py-4 text-white focus:ring-2 focus:ring-blue-600 outline-none transition-all"
                value={formData.address}
                onChange={e => setFormData({...formData, address: e.target.value})}
              />
            </div>
          </div>
        </div>

        {/* SECTION 4: Verification & Payment */}
        <div className="bg-slate-950/50 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl">
          <div className="flex items-center gap-4 mb-10">
            <div className="flex items-center justify-center w-10 h-10 rounded-2xl bg-blue-600 text-white font-black text-xs shadow-lg shadow-blue-900/40">3</div>
            <h3 className="text-2xl font-black text-white uppercase tracking-tight">Security & Verification</h3>
          </div>
          
          <div className="space-y-10">
            <div className="bg-slate-900 rounded-3xl p-8 border border-white/5 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-5">
                 <ShieldCheck className="w-40 h-40" />
              </div>
              <h4 className="text-sm font-black text-white uppercase tracking-widest mb-6 flex items-center gap-3">
                Processing Instructions
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed max-w-2xl mb-10">
                To cover official processing, secure data encryption, and Digital ID generation, a non-refundable administrative fee is required.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-10 border-t border-white/5 pt-10">
                <div className="space-y-4">
                   <label className="block text-[10px] font-black text-slate-500 uppercase tracking-widest">Your Preferred Currency</label>
                   <div className="relative">
                      <select 
                        className="w-full bg-slate-950 border border-white/10 rounded-2xl px-6 py-4 text-white focus:ring-2 focus:ring-blue-600 outline-none appearance-none cursor-pointer text-xs font-bold"
                        value={currency}
                        onChange={(e) => setCurrency(e.target.value)}
                      >
                        <option value="GMD">Gambian Dalasi (GMD)</option>
                        <option value="USD">US Dollar (USD)</option>
                        <option value="EUR">Euro (EUR)</option>
                        <option value="GBP">British Pound (GBP)</option>
                      </select>
                      <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-slate-500">
                        <ArrowLeft className="w-4 h-4 rotate-[-90deg]" />
                      </div>
                   </div>
                </div>
                <div className="bg-blue-600/10 border border-blue-500/20 rounded-3xl p-6 flex flex-col justify-center items-center text-center shadow-inner">
                   <span className="text-[10px] font-black text-blue-400 uppercase tracking-[0.3em] mb-2">Registration Total</span>
                   <span className="text-4xl font-black text-white">{calculateConvertedAmount()}</span>
                </div>
              </div>

              <div className="space-y-6 pt-4 border-t border-white/5">
                <p className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em]">Official Payment Channels</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="p-6 rounded-2xl bg-slate-950 border border-white/5 hover:border-blue-500/30 transition-all group">
                    <p className="text-[10px] font-black text-slate-500 uppercase mb-2 group-hover:text-blue-500 transition-colors">Mobile Money (Wave)</p>
                    <p className="text-lg text-white font-black">+220 396 540</p>
                  </div>
                  <div className="p-6 rounded-2xl bg-slate-950 border border-white/5 hover:border-blue-500/30 transition-all group">
                    <p className="text-[10px] font-black text-slate-500 uppercase mb-2 group-hover:text-blue-500 transition-colors">Bank Wire (Gambia)</p>
                    <p className="text-sm text-white font-black">Trust Bank - Ref: #5590</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <label className="block text-[10px] font-black text-slate-500 uppercase tracking-[0.2em]">Payment Transaction Code *</label>
              <input 
                type="text" 
                required 
                placeholder="Enter Wave/M-Pesa/Bank Ref"
                className="w-full bg-slate-900 border border-white/10 rounded-2xl px-6 py-4 text-white focus:ring-2 focus:ring-blue-600 outline-none transition-all"
                value={formData.transactionCode}
                onChange={e => setFormData({...formData, transactionCode: e.target.value})}
              />
              <p className="text-[10px] text-slate-500 italic font-medium">Verification will occur instantly after submission.</p>
            </div>

            <label className="flex items-start gap-5 cursor-pointer group pt-6">
              <div className="relative flex items-center justify-center mt-1">
                <input 
                  type="checkbox" 
                  required
                  className="peer appearance-none w-6 h-6 border-2 border-white/10 rounded-lg bg-slate-900 checked:bg-blue-600 checked:border-blue-600 transition-all cursor-pointer"
                  checked={formData.agreed}
                  onChange={e => setFormData({...formData, agreed: e.target.checked})}
                />
                <Check className="absolute w-4 h-4 text-white opacity-0 peer-checked:opacity-100 transition-opacity pointer-events-none" strokeWidth={4} />
              </div>
              <span className="text-xs text-slate-400 group-hover:text-slate-200 transition-colors font-medium leading-relaxed">
                I hereby declare my commitment to the Essa Mbye Faal Movement. I agree to the <a href="#" className="text-blue-500 font-bold hover:underline">Membership Protocol</a> and certify all data is authentic for my Digital ID.
              </span>
            </label>
          </div>
        </div>

        <div className="flex justify-center pt-12">
          <button 
            type="submit"
            disabled={isGenerating}
            className="group relative w-full md:w-auto min-w-[350px] h-20 bg-blue-600 text-white rounded-[2rem] font-black text-xs tracking-[0.4em] uppercase hover:bg-blue-500 transition-all shadow-[0_20px_60px_-15px_rgba(37,99,235,0.5)] active:scale-95 disabled:opacity-50 disabled:pointer-events-none overflow-hidden"
          >
            <span className="relative z-10">Generate My Digital ID</span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-[shimmer_2s_infinite]"></div>
          </button>
        </div>
      </form>
    </motion.div>
  );
};

export default MembershipRegistration;