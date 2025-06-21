import React from 'react';

interface HeaderProps {
  currentDocumentTitle: string;
}

const Header: React.FC<HeaderProps> = ({ currentDocumentTitle }) => {
  return (
    <header className="fixed top-2 left-2 right-2 md:top-4 md:left-4 md:right-4 z-50 bg-black/20 backdrop-blur-xl border border-white/10 rounded-xl md:rounded-2xl px-3 py-2 md:px-6 md:py-3 transition-all duration-300">
      <div className="flex items-center justify-center">
        {/* Logo */}
        <div className="flex items-center space-x-2 md:space-x-3">
          <img 
            src="https://i.imgur.com/48PfOVX.png" 
            alt="NOCTA.I Logo" 
            className="h-6 md:h-8 w-auto object-contain"
          />
        </div>

        {/* Current Document Title */}
        <div className="flex-1 text-center ml-2 md:ml-0">
          <h1 className="text-white text-sm md:text-lg font-semibold tracking-wide truncate">
            {currentDocumentTitle}
          </h1>
        </div>

        {/* Spacer to balance logo */}
        <div className="w-6 md:w-8"></div>
      </div>
    </header>
  );
};

export default Header;