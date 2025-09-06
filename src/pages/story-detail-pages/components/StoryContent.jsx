import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const StoryContent = ({ content, onQuoteShare }) => {
  const [selectedText, setSelectedText] = useState('');
  const [showQuoteShare, setShowQuoteShare] = useState(false);
  const [quotePosition, setQuotePosition] = useState({ x: 0, y: 0 });

  const handleTextSelection = () => {
    const selection = window.getSelection();
    const text = selection?.toString()?.trim();
    
    if (text?.length > 10) {
      setSelectedText(text);
      
      const range = selection?.getRangeAt(0);
      const rect = range?.getBoundingClientRect();
      
      setQuotePosition({
        x: rect?.left + rect?.width / 2,
        y: rect?.top - 10
      });
      
      setShowQuoteShare(true);
    } else {
      setShowQuoteShare(false);
    }
  };

  const handleQuoteShare = () => {
    onQuoteShare(selectedText);
    setShowQuoteShare(false);
    window.getSelection()?.removeAllRanges();
  };

  const formatContent = (text) => {
    // Split content into paragraphs and format
    return text?.split('\n\n')?.map((paragraph, index) => {
      if (paragraph?.trim() === '') return null;
      
      return (
        <p key={index} className="mb-6 text-lg leading-relaxed text-foreground">
          {paragraph}
        </p>
      );
    });
  };

  return (
    <div className="relative">
      {/* Quote Share Tooltip */}
      {showQuoteShare && (
        <div
          className="fixed z-50 bg-card border border-border rounded-lg shadow-lg p-2"
          style={{
            left: `${quotePosition?.x}px`,
            top: `${quotePosition?.y}px`,
            transform: 'translateX(-50%) translateY(-100%)'
          }}
        >
          <Button
            variant="ghost"
            size="sm"
            onClick={handleQuoteShare}
            className="text-primary hover:bg-accent/10"
          >
            <Icon name="Quote" size={14} className="mr-1" />
            Compartilhar citação
          </Button>
        </div>
      )}
      {/* Story Content */}
      <article 
        className="prose prose-lg max-w-none"
        onMouseUp={handleTextSelection}
        onTouchEnd={handleTextSelection}
      >
        <div className="font-body text-foreground">
          {formatContent(content)}
        </div>
      </article>
      {/* Trust Signals */}
      <div className="mt-8 pt-6 border-t border-border">
        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center space-x-1">
            <Icon name="CheckCircle" size={16} className="text-success" />
            <span>Verificado pela redação</span>
          </div>
          <div className="flex items-center space-x-1">
            <Icon name="Shield" size={16} className="text-primary" />
            <span>Padrões editoriais</span>
          </div>
          <div className="flex items-center space-x-1">
            <Icon name="Clock" size={16} />
            <span>Atualizado em {new Date()?.toLocaleDateString('pt-BR')}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoryContent;