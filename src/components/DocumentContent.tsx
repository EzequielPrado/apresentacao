import React from 'react';
import { documents } from '../data/documents';

interface DocumentContentProps {
  currentDocumentIndex: number;
}

const DocumentContent: React.FC<DocumentContentProps> = ({ currentDocumentIndex }) => {
  const document = documents[currentDocumentIndex];

  if (!document) return null;

  return (
    <div className="min-h-screen pt-16 md:pt-20 pb-20 md:pb-24 px-4 md:px-6">
      <div className="max-w-4xl mx-auto">
        <div className="bg-black/30 backdrop-blur-sm border border-white/10 rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-12 shadow-2xl">
          <div 
            className="prose prose-invert prose-lg max-w-none
              prose-headings:text-white prose-headings:font-bold
              prose-h1:text-2xl md:prose-h1:text-4xl prose-h1:mb-6 md:prose-h1:mb-8 prose-h1:text-center prose-h1:bg-gradient-to-r prose-h1:from-purple-400 prose-h1:to-purple-600 prose-h1:bg-clip-text prose-h1:text-transparent
              prose-h2:text-xl md:prose-h2:text-2xl prose-h2:mt-8 md:prose-h2:mt-12 prose-h2:mb-4 md:prose-h2:mb-6 prose-h2:text-purple-300 prose-h2:border-b prose-h2:border-purple-500/30 prose-h2:pb-2
              prose-h3:text-lg md:prose-h3:text-xl prose-h3:mt-6 md:prose-h3:mt-8 prose-h3:mb-3 md:prose-h3:mb-4 prose-h3:text-purple-200
              prose-h4:text-base md:prose-h4:text-lg prose-h4:mt-4 md:prose-h4:mt-6 prose-h4:mb-2 md:prose-h4:mb-3 prose-h4:text-purple-100
              prose-p:text-gray-200 prose-p:leading-relaxed prose-p:mb-4 md:prose-p:mb-6
              prose-strong:text-white prose-strong:font-semibold
              prose-em:text-purple-200 prose-em:italic
              prose-ul:space-y-2 prose-li:text-gray-200
              prose-blockquote:border-l-4 prose-blockquote:border-purple-500 prose-blockquote:bg-purple-900/20 prose-blockquote:p-4 prose-blockquote:rounded-r-lg prose-blockquote:my-6
              prose-code:text-purple-300 prose-code:bg-purple-900/30 prose-code:px-2 prose-code:py-1 prose-code:rounded
              prose-table:border-collapse prose-table:w-full prose-table:my-6
              prose-th:bg-purple-900/30 prose-th:border prose-th:border-purple-500/30 prose-th:p-3 prose-th:text-left prose-th:font-semibold prose-th:text-purple-200
              prose-td:border prose-td:border-purple-500/20 prose-td:p-3 prose-td:text-gray-200"
            dangerouslySetInnerHTML={{ __html: document.content }}
          />
        </div>
      </div>
    </div>
  );
};

export default DocumentContent;