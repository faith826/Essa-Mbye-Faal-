import React, { useState, useRef, useEffect } from 'react';

const DigitalIDCard: React.FC<{ data: any; idNumber: string; photo: string | null }> = ({ data, idNumber, photo }) => {
  return (
    <div className="flex flex-col gap-8 items-center animate-in fade-in zoom-in duration-700 max-w-full overflow-hidden">
      {/* FRONT OF CARD */}
      <div className="w-[450px] h-[280px] bg-white rounded-xl shadow-2xl overflow-hidden flex flex-col relative border border-slate-200 shrink-0">
        {/* Header Section */}
        <div className="bg-[#1a1513] py-4 px-6 relative">
          <h2 className="text-white text-3xl font-black text-center tracking-wider uppercase">APP SOBEYAA</h2>
          <div className="absolute right-0 top-0 h-full w-12 bg-[#6b4433] transform skew-x-[-25deg] translate-x-6"></div>
        </div>
        
        {/* Sub-header */}
        <div className="bg-[#6b4433] py-1.5 px-6 relative z-10">
          <p className="text-white text-xs font-bold tracking-[0.2em] uppercase">UNITED FOR A BETTER GAMBIA</p>
        </div>

        {/* Content Area */}
        <div className="flex-1 flex p-5">
          {/* Details Column */}
          <div className="flex-1 space-y-2.5">
            <div className="flex gap-2">
              <span className="text-[11px] font-black text-[#1a1513] uppercase w-20">Name</span>
              <span className="text-[11px] font-bold text-[#1a1513] uppercase">: {data.fullName}</span>
            </div>
            <div className="flex gap-2">
              <span className="text-[11px] font-black text-[#1a1513] uppercase w-20">ID NUMBER</span>
              <span className="text-[11px] font-bold text-[#1a1513] uppercase">: {idNumber}</span>
            </div>
            <div className="flex gap-2">
              <span className="text-[11px] font-black text-[#1a1513] uppercase w-20">TEL</span>
              <span className="text-[11px] font-bold text-[#1a1513] uppercase">: {data.phone}</span>
            </div>
            <div className="flex gap-2">
              <span className="text-[11px] font-black text-[#1a1513] uppercase w-20">Religion</span>
              <span className="text-[11px] font-bold text-[#1a1513] uppercase">: {data.religion || "N/A"}</span>
            </div>

            <div className="mt-6 pt-2">
              <p className="text-[10px] font-medium text-slate-500">Valid Date</p>
              <p className="text-sm font-black text-[#1a1513]">20-08-2028</p>
            </div>
          </div>

          {/* Photo & Barcode Column */}
          <div className="w-36 flex flex-col items-end gap-3">
            <div className="w-28 h-32 bg-slate-100 border border-slate-200 rounded-sm overflow-hidden flex items-center justify-center">
              {photo ? (
                <img src={photo} alt="Passport" className="w-full h-full object-cover" />
              ) : (
                <svg className="w-12 h-12 text-slate-300" fill="currentColor" viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
              )}
            </div>
            <div className="w-full text-center">
              <img src="https://bwipjs-api.metafloor.com/?bcid=code128&text=1234567890&scale=1&height=8" alt="barcode" className="w-full mb-1 h-8 object-contain" />
              <p className="text-[9px] font-bold tracking-widest text-[#1a1513]">123-456-7890</p>
            </div>
          </div>
        </div>
        
        {/* Accent Footer */}
        <div className="absolute bottom-0 right-0 w-16 h-4 bg-[#6b4433] transform skew-x-[-45deg] translate-x-4"></div>
      </div>

      {/* BACK OF CARD */}
      <div className="w-[450px] h-[280px] bg-[#1a1513] rounded-xl shadow-2xl overflow-hidden flex flex-col relative justify-center items-center p-8">
        <h1 className="text-white text-5xl font-black text-center leading-[1.1] tracking-tighter uppercase">
          UNITED FOR A <br /> BETTER GAMBIA
        </h1>
        
        <div className="absolute bottom-16 left-0 h-12 w-[60%] bg-[#6b4433] transform skew-x-[-20deg] -translate-x-4 flex items-center justify-center pl-8">
          <p className="text-white font-bold text-sm tracking-widest uppercase skew-x-[20deg]">Regional coordinator</p>
        </div>

        <div className="absolute bottom-10 right-10 bg-white p-2 rounded-lg flex flex-col items-center">
           <img src="https://bwipjs-api.metafloor.com/?bcid=code128&text=1234567890&scale=1&height=6" alt="barcode" className="w-24 h-6 object-contain" />
           <p className="text-[8px] font-black text-slate-900 mt-1">1 2 3 - 4 5 6 - 7 8 9 0</p>
        </div>
      </div>
    </div>
  );
};

const MembershipRegistration: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [photoPreview, setPhotoPreview] = useState<string | null>(null);
  const [idNumber, setIdNumber] = useState('');
  const [currency, setCurrency] = useState('GMD');
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

  const exchangeRates: Record<string, { rate: number; symbol: string }> = {
    GMD: { rate: 70.5, symbol: 'D' },
    EUR: { rate: 0.92, symbol: '€' },
    GBP: { rate: 0.79, symbol: '£' },
    USD: { rate: 1, symbol: '$' }
  };

  const calculateConvertedAmount = () => {
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const generatedId = `YTT-2026-${Math.floor(1000 + Math.random() * 9000)}`;
    setIdNumber(generatedId);
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (submitted) {
    return (
      <section className="py-24 max-w-5xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className="w-16 h-16 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
          </div>
          <h2 className="text-4xl font-black text-white mb-4 uppercase tracking-tight">Application Submitted</h2>
          <p className="text-slate-400 max-w-2xl mx-auto mb-8">
            Your application is being processed by the Youth Tech Team. Below is a preview of your Digital ID Card. A high-resolution copy will be sent to <strong>{formData.email}</strong> upon final verification.
          </p>
        </div>

        <div className="flex flex-col items-center gap-12 mb-16">
          <DigitalIDCard data={formData} idNumber={idNumber} photo={photoPreview} />
          
          <div className="flex gap-4">
             <button 
              onClick={() => window.print()}
              className="px-8 py-4 bg-white text-slate-900 rounded-xl font-black text-xs tracking-widest uppercase hover:bg-slate-200 transition-all flex items-center gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9V2h12v7"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><rect width="12" height="8" x="6" y="14"/></svg>
              Print Card
            </button>
            <button 
              onClick={() => setSubmitted(false)}
              className="px-8 py-4 border border-white/10 bg-white/5 text-white rounded-xl font-black text-xs tracking-widest uppercase hover:bg-white/10 transition-all"
            >
              Back to Form
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-24 max-w-4xl mx-auto px-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tighter uppercase leading-none">
          Membership Registration – <span className="text-blue-500">Apply for Digital ID</span>
        </h1>
        <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed font-medium">
          Complete the form below to apply for membership. Once approved by the Youth Tech Team, a Digital Membership ID Card will be generated and sent to your email.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-12">
        {/* SECTION 1: Personal Information */}
        <div className="bg-slate-900/50 border border-white/5 rounded-3xl p-8 md:p-12 shadow-xl">
          <div className="flex items-center gap-4 mb-8">
            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white text-xs font-bold">1</span>
            <h3 className="text-xl font-bold text-white uppercase tracking-tight">Personal Information</h3>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <label className="block text-[10px] font-black text-slate-500 uppercase tracking-[0.2em]">Full Name *</label>
              <input 
                type="text" 
                required 
                placeholder="As it appears on ID"
                className="w-full bg-slate-950 border border-white/10 rounded-xl px-4 py-3.5 text-white focus:ring-2 focus:ring-blue-600 outline-none transition-all"
                value={formData.fullName}
                onChange={e => setFormData({...formData, fullName: e.target.value})}
              />
            </div>
            <div className="space-y-2">
              <label className="block text-[10px] font-black text-slate-500 uppercase tracking-[0.2em]">Date of Birth</label>
              <input 
                type="date" 
                className="w-full bg-slate-950 border border-white/10 rounded-xl px-4 py-3.5 text-white focus:ring-2 focus:ring-blue-600 outline-none transition-all"
                value={formData.dob}
                onChange={e => setFormData({...formData, dob: e.target.value})}
              />
            </div>
            <div className="space-y-2">
              <label className="block text-[10px] font-black text-slate-500 uppercase tracking-[0.2em]">Gender</label>
              <select 
                className="w-full bg-slate-950 border border-white/10 rounded-xl px-4 py-3.5 text-white focus:ring-2 focus:ring-blue-600 outline-none appearance-none cursor-pointer"
                value={formData.gender}
                onChange={e => setFormData({...formData, gender: e.target.value})}
              >
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="block text-[10px] font-black text-slate-500 uppercase tracking-[0.2em]">Religion</label>
              <select 
                className="w-full bg-slate-950 border border-white/10 rounded-xl px-4 py-3.5 text-white focus:ring-2 focus:ring-blue-600 outline-none appearance-none cursor-pointer"
                value={formData.religion}
                onChange={e => setFormData({...formData, religion: e.target.value})}
              >
                <option>Muslim</option>
                <option>Christian</option>
                <option>Traditional</option>
                <option>Other</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="block text-[10px] font-black text-slate-500 uppercase tracking-[0.2em]">National ID / Passport Number *</label>
              <input 
                type="text" 
                required 
                className="w-full bg-slate-950 border border-white/10 rounded-xl px-4 py-3.5 text-white focus:ring-2 focus:ring-blue-600 outline-none transition-all"
                value={formData.idNumber}
                onChange={e => setFormData({...formData, idNumber: e.target.value})}
              />
            </div>
            <div className="md:col-span-2 space-y-4">
              <label className="block text-[10px] font-black text-slate-500 uppercase tracking-[0.2em]">Passport Photo *</label>
              <div className="border-2 border-dashed border-white/10 rounded-2xl p-8 text-center hover:border-blue-500/50 transition-colors cursor-pointer group relative overflow-hidden">
                {photoPreview ? (
                  <div className="flex flex-col items-center">
                    <img src={photoPreview} className="w-24 h-24 rounded-lg object-cover mb-4 border border-white/20" alt="Preview" />
                    <p className="text-xs font-bold text-blue-500">Photo selected. Click to change.</p>
                  </div>
                ) : (
                  <>
                    <svg className="w-10 h-10 text-slate-600 mx-auto mb-4 group-hover:text-blue-500 transition-colors" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/></svg>
                    <p className="text-xs font-bold text-slate-500 group-hover:text-slate-300">Click to upload Passport Photo (JPG/PNG)</p>
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
        <div className="bg-slate-900/50 border border-white/5 rounded-3xl p-8 md:p-12 shadow-xl">
          <div className="flex items-center gap-4 mb-8">
            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white text-xs font-bold">2</span>
            <h3 className="text-xl font-bold text-white uppercase tracking-tight">Contact Information</h3>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <label className="block text-[10px] font-black text-slate-500 uppercase tracking-[0.2em]">Email Address *</label>
              <input 
                type="email" 
                required 
                className="w-full bg-slate-950 border border-white/10 rounded-xl px-4 py-3.5 text-white focus:ring-2 focus:ring-blue-600 outline-none transition-all"
                value={formData.email}
                onChange={e => setFormData({...formData, email: e.target.value})}
              />
            </div>
            <div className="space-y-2">
              <label className="block text-[10px] font-black text-slate-500 uppercase tracking-[0.2em]">Phone Number *</label>
              <input 
                type="tel" 
                required 
                placeholder="+220 XXX XXXX"
                className="w-full bg-slate-950 border border-white/10 rounded-xl px-4 py-3.5 text-white focus:ring-2 focus:ring-blue-600 outline-none transition-all"
                value={formData.phone}
                onChange={e => setFormData({...formData, phone: e.target.value})}
              />
            </div>
            <div className="space-y-2">
              <label className="block text-[10px] font-black text-slate-500 uppercase tracking-[0.2em]">County / Location</label>
              <input 
                type="text" 
                className="w-full bg-slate-950 border border-white/10 rounded-xl px-4 py-3.5 text-white focus:ring-2 focus:ring-blue-600 outline-none transition-all"
                value={formData.location}
                onChange={e => setFormData({...formData, location: e.target.value})}
              />
            </div>
            <div className="space-y-2">
              <label className="block text-[10px] font-black text-slate-500 uppercase tracking-[0.2em]">Physical Address (Optional)</label>
              <input 
                type="text" 
                className="w-full bg-slate-950 border border-white/10 rounded-xl px-4 py-3.5 text-white focus:ring-2 focus:ring-blue-600 outline-none transition-all"
                value={formData.address}
                onChange={e => setFormData({...formData, address: e.target.value})}
              />
            </div>
          </div>
        </div>

        {/* SECTION 3: Membership Details */}
        <div className="bg-slate-900/50 border border-white/5 rounded-3xl p-8 md:p-12 shadow-xl">
          <div className="flex items-center gap-4 mb-8">
            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white text-xs font-bold">3</span>
            <h3 className="text-xl font-bold text-white uppercase tracking-tight">Membership Details</h3>
          </div>
          
          <div className="space-y-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="block text-[10px] font-black text-slate-500 uppercase tracking-[0.2em]">Membership Type</label>
                <select 
                  className="w-full bg-slate-950 border border-white/10 rounded-xl px-4 py-3.5 text-white focus:ring-2 focus:ring-blue-600 outline-none appearance-none cursor-pointer"
                  value={formData.membershipType}
                  onChange={e => setFormData({...formData, membershipType: e.target.value})}
                >
                  <option>Youth Member</option>
                  <option>Volunteer</option>
                  <option>General Member</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="block text-[10px] font-black text-slate-500 uppercase tracking-[0.2em]">Occupation / School / Organization</label>
                <input 
                  type="text" 
                  className="w-full bg-slate-950 border border-white/10 rounded-xl px-4 py-3.5 text-white focus:ring-2 focus:ring-blue-600 outline-none transition-all"
                  value={formData.occupation}
                  onChange={e => setFormData({...formData, occupation: e.target.value})}
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="block text-[10px] font-black text-slate-500 uppercase tracking-[0.2em]">Reason for Joining</label>
              <textarea 
                rows={4}
                className="w-full bg-slate-950 border border-white/10 rounded-xl px-4 py-3.5 text-white focus:ring-2 focus:ring-blue-600 outline-none transition-all resize-none"
                placeholder="Briefly tell us why you want to join the movement..."
                value={formData.reason}
                onChange={e => setFormData({...formData, reason: e.target.value})}
              />
            </div>
          </div>
        </div>

        {/* SECTION 4: Verification & Payment */}
        <div className="bg-slate-900/50 border border-white/5 rounded-3xl p-8 md:p-12 shadow-xl">
          <div className="flex items-center gap-4 mb-8">
            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white text-xs font-bold">4</span>
            <h3 className="text-xl font-bold text-white uppercase tracking-tight">Verification & Payment</h3>
          </div>
          
          <div className="space-y-8">
            <div className="bg-slate-950 rounded-2xl p-6 border border-white/10">
              <h4 className="text-sm font-bold text-white uppercase tracking-widest mb-4 flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500"><rect width="20" height="12" x="2" y="6" rx="2"/><circle cx="12" cy="12" r="2"/><path d="M6 12h.01M18 12h.01"/></svg>
                Registration Fee Instructions
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed mb-6">
                To cover administrative costs and generate your Digital ID Card, a non-refundable fee of <strong>$10 USD</strong> is required. Please use the currency converter below for local equivalents.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div className="space-y-3">
                   <label className="block text-[10px] font-black text-slate-500 uppercase tracking-widest">Select Your Currency</label>
                   <div className="relative">
                      <select 
                        className="w-full bg-slate-900 border border-white/10 rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-blue-600 outline-none appearance-none cursor-pointer text-xs"
                        value={currency}
                        onChange={(e) => setCurrency(e.target.value)}
                      >
                        <option value="GMD">Gambian Dalasi (GMD)</option>
                        <option value="USD">US Dollar (USD)</option>
                        <option value="EUR">Euro (EUR)</option>
                        <option value="GBP">British Pound (GBP)</option>
                      </select>
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-500">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                      </div>
                   </div>
                </div>
                <div className="bg-blue-600/10 border border-blue-500/20 rounded-xl p-4 flex flex-col justify-center items-center text-center">
                   <span className="text-[10px] font-black text-blue-400 uppercase tracking-widest mb-1">Total to Pay</span>
                   <span className="text-2xl font-black text-white">{calculateConvertedAmount()}</span>
                </div>
              </div>

              <div className="space-y-4">
                <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Payment Methods</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-slate-900 border border-white/5">
                    <p className="text-[10px] font-bold text-white uppercase mb-1">Mobile Money / Wave</p>
                    <p className="text-xs text-blue-400 font-black">+220 396 5401</p>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-900 border border-white/5">
                    <p className="text-[10px] font-bold text-white uppercase mb-1">Bank Transfer (Gambia)</p>
                    <p className="text-xs text-blue-400 font-black">Trust Bank - Acc: 110-XXX-XXX</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4 pt-4">
              <label className="block text-[10px] font-black text-slate-500 uppercase tracking-[0.2em]">Upload ID Proof *</label>
              <div className="border-2 border-dashed border-white/10 rounded-2xl p-8 text-center hover:border-blue-500/50 transition-colors cursor-pointer group">
                <input type="file" required className="hidden" id="id-proof" />
                <label htmlFor="id-proof" className="cursor-pointer">
                  <svg className="w-10 h-10 text-slate-600 mx-auto mb-4 group-hover:text-blue-500 transition-colors" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/></svg>
                  <p className="text-xs font-bold text-slate-500 group-hover:text-slate-300">Click to upload National ID/Passport Scan</p>
                </label>
              </div>
            </div>

            <div className="space-y-2 max-w-md">
              <label className="block text-[10px] font-black text-slate-500 uppercase tracking-[0.2em]">Payment Transaction Code *</label>
              <input 
                type="text" 
                required 
                placeholder="Enter Wave/M-Pesa/Bank Ref"
                className="w-full bg-slate-950 border border-white/10 rounded-xl px-4 py-3.5 text-white focus:ring-2 focus:ring-blue-600 outline-none transition-all"
                value={formData.transactionCode}
                onChange={e => setFormData({...formData, transactionCode: e.target.value})}
              />
              <p className="text-[10px] text-slate-600 italic">Please enter the transaction reference from your payment provider.</p>
            </div>

            <label className="flex items-start gap-4 cursor-pointer group pt-4">
              <div className="relative flex items-center justify-center mt-0.5">
                <input 
                  type="checkbox" 
                  required
                  className="peer appearance-none w-5 h-5 border-2 border-white/10 rounded bg-slate-950 checked:bg-blue-600 checked:border-blue-600 transition-all cursor-pointer"
                  checked={formData.agreed}
                  onChange={e => setFormData({...formData, agreed: e.target.checked})}
                />
                <svg className="absolute w-3 h-3 text-white opacity-0 peer-checked:opacity-100 transition-opacity pointer-events-none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
              </div>
              <span className="text-xs text-slate-400 group-hover:text-slate-200 transition-colors font-medium">
                I agree to the <a href="#" className="text-blue-500 hover:underline">Terms & Conditions</a> of the Essa Mbye Faal Movement. I certify that all information provided is accurate and truthful.
              </span>
            </label>
          </div>
        </div>

        <div className="flex justify-center pt-8">
          <button 
            type="submit"
            className="w-full md:w-auto min-w-[300px] h-16 bg-blue-600 text-white rounded-2xl font-black text-xs tracking-[0.3em] uppercase hover:bg-blue-500 transition-all shadow-2xl shadow-blue-900/40 active:scale-95"
          >
            Submit Application
          </button>
        </div>
      </form>
    </section>
  );
};

export default MembershipRegistration;