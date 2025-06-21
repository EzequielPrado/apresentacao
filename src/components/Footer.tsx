import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="fixed bottom-2 left-2 right-2 md:bottom-4 md:left-4 md:right-4 z-40 bg-black/20 backdrop-blur-xl border border-white/10 rounded-xl md:rounded-2xl px-3 py-2 md:px-6 md:py-3">
      <div className="flex items-center justify-center">
        {/* Logo Watermark */}
        <div className="flex items-center space-x-2 opacity-60">
          <img 
            src="https://i.imgur.com/HA95fgE.png" 
            alt="NOCTA.I Icon" 
            className="h-4 md:h-6 w-4 md:w-6 object-contain"
          />
        </div>

        {/* Main Phrase */}
        <div className="flex-1 text-center ml-2">
          <p className="text-white text-xs md:text-sm font-medium">
            Inteligência que opera. Tecnologia que escala.
          </p>
        </div>

        {/* Spacer to balance logo */}
        <div className="w-4 md:w-6"></div>
      </div>
    </footer>
  );
};

export default Footer;