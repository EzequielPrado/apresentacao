import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import DocumentContent from './components/DocumentContent';
import NavigationArrows from './components/NavigationArrows';
import Footer from './components/Footer';
import { documents } from './data/documents';

function App() {
  const [currentDocumentIndex, setCurrentDocumentIndex] = useState(0);

  const handlePrevious = () => {
    if (currentDocumentIndex > 0) {
      setCurrentDocumentIndex(currentDocumentIndex - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleNext = () => {
    if (currentDocumentIndex < documents.length - 1) {
      setCurrentDocumentIndex(currentDocumentIndex + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const canGoPrevious = currentDocumentIndex > 0;
  const canGoNext = currentDocumentIndex < documents.length - 1;

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowLeft' && canGoPrevious) {
        handlePrevious();
      } else if (event.key === 'ArrowRight' && canGoNext) {
        handleNext();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [currentDocumentIndex, canGoPrevious, canGoNext]);

  // Scroll to top when document changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentDocumentIndex]);

  return (
    <div className="min-h-screen bg-[#121212] text-white font-['Inter',sans-serif] relative overflow-x-hidden">
      {/* Background Pattern */}
      <div className="fixed inset-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-transparent to-purple-600/10"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(104,49,243,0.1),transparent_50%)]"></div>
      </div>

      {/* Header */}
      <Header currentDocumentTitle={documents[currentDocumentIndex]?.title || ''} />

      {/* Navigation Arrows */}
      <NavigationArrows
        onPrevious={handlePrevious}
        onNext={handleNext}
        canGoPrevious={canGoPrevious}
        canGoNext={canGoNext}
      />

      {/* Main Content */}
      <main className="relative z-10">
        <DocumentContent currentDocumentIndex={currentDocumentIndex} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Progress Indicator */}
      <div className="fixed bottom-16 md:bottom-20 left-1/2 transform -translate-x-1/2 z-40">
        <div className="bg-black/20 backdrop-blur-xl rounded-full px-4 py-2 border border-white/10">
          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-400">
              {currentDocumentIndex + 1} de {documents.length}
            </span>
            <div className="w-24 h-1 bg-gray-700 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-purple-600 to-purple-400 transition-all duration-300 ease-out"
                style={{ width: `${((currentDocumentIndex + 1) / documents.length) * 100}%` }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;