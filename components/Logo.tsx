import React from 'react';

const Logo: React.FC<{ className?: string }> = ({ className = "w-12 h-12" }) => {
  return (
    <div className={`${className} flex items-center justify-center`}>
      <img 
        src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQTij-3a-VQ3Zi1sPYU_UI-J7fiTpCAZ1kzo1yxuHhFJgCWfbvz" 
        alt="Essa Mbye Faal Campaign Logo" 
        className="w-full h-full object-contain rounded-lg"
      />
    </div>
  );
};

export default Logo;