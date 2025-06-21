import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface NavigationArrowsProps {
  onPrevious: () => void;
  onNext: () => void;
  canGoPrevious: boolean;
  canGoNext: boolean;
}

const NavigationArrows: React.FC<NavigationArrowsProps> = ({
  onPrevious,
  onNext,
  canGoPrevious,
  canGoNext,
}) => {
  return (
    <>
      {/* Previous Arrow */}
      <button
        onClick={onPrevious}
        disabled={!canGoPrevious}
        className={`fixed left-2 md:left-6 top-1/2 -translate-y-1/2 z-40 w-10 h-10 md:w-12 md:h-12 rounded-full backdrop-blur-xl border transition-all duration-300 flex items-center justify-center ${
          canGoPrevious
            ? 'bg-purple-600/80 border-purple-500/50 text-white hover:bg-purple-600 hover:scale-110 cursor-pointer shadow-lg shadow-purple-500/25'
            : 'bg-black/10 border-white/5 text-gray-600 cursor-not-allowed'
        }`}
      >
        <ChevronLeft size={18} className="md:w-5 md:h-5" />
      </button>

      {/* Next Arrow */}
      <button
        onClick={onNext}
        disabled={!canGoNext}
        className={`fixed right-2 md:right-6 top-1/2 -translate-y-1/2 z-40 w-10 h-10 md:w-12 md:h-12 rounded-full backdrop-blur-xl border transition-all duration-300 flex items-center justify-center ${
          canGoNext
            ? 'bg-purple-600/80 border-purple-500/50 text-white hover:bg-purple-600 hover:scale-110 cursor-pointer shadow-lg shadow-purple-500/25'
            : 'bg-black/10 border-white/5 text-gray-600 cursor-not-allowed'
        }`}
      >
        <ChevronRight size={18} className="md:w-5 md:h-5" />
      </button>
    </>
  );
};

export default NavigationArrows;