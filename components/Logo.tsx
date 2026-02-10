import React from 'react';

const Logo: React.FC<{ className?: string }> = ({ className = "w-20 h-20" }) => {
  const imageUrl = "https://i.postimg.cc/hG427YZk/1885094c-231f-4da5-be21-2cfa17e3b5ac-(1).jpg";

  return (
    <div className={`${className} relative flex items-center justify-center transition-all duration-500 hover:scale-110 group`}>
      {/* Brand Accent Glow */}
      <div className="absolute inset-0 bg-[#54b4ff]/10 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
      
      <div className="relative w-full h-full flex items-center justify-center">
        <img 
          src={imageUrl} 
          alt="App Sobeyaa Logo" 
          className="w-full h-full object-contain filter drop-shadow-[0_0_12px_rgba(84,180,255,0.3)] rounded-full"
          loading="eager"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.style.display = 'none';
            // Fallback UI if image fails to load
            const parent = target.parentElement;
            if (parent) {
              parent.classList.add('bg-[#54b4ff]', 'rounded-full', 'p-2');
              parent.innerHTML = '<span class="text-[8px] font-black text-white">AS</span>';
            }
          }}
        />
      </div>
    </div>
  );
};

export default Logo;