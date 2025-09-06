import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const SocialShare = ({ story, quote = null }) => {
  const [copied, setCopied] = useState(false);

  const shareUrl = `${window.location?.origin}/story-detail-pages/${story?.id}`;
  const shareTitle = quote ? `"${quote}" - ${story?.title}` : story?.title;
  const shareText = quote || story?.subtitle || story?.title;

  const socialPlatforms = [
    {
      name: 'WhatsApp',
      icon: 'MessageCircle',
      color: 'text-green-600',
      url: `https://wa.me/?text=${encodeURIComponent(`${shareTitle}\n\n${shareUrl}`)}`
    },
    {
      name: 'Facebook',
      icon: 'Facebook',
      color: 'text-blue-600',
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}&quote=${encodeURIComponent(shareText)}`
    },
    {
      name: 'Twitter',
      icon: 'Twitter',
      color: 'text-blue-400',
      url: `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareTitle)}&url=${encodeURIComponent(shareUrl)}`
    },
    {
      name: 'LinkedIn',
      icon: 'Linkedin',
      color: 'text-blue-700',
      url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`
    },
    {
      name: 'Telegram',
      icon: 'Send',
      color: 'text-blue-500',
      url: `https://t.me/share/url?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareTitle)}`
    }
  ];

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard?.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy link:', err);
    }
  };

  const handleShare = (platform) => {
    window.open(platform?.url, '_blank', 'width=600,height=400');
  };

  return (
    <div className="bg-muted/30 rounded-lg p-6">
      <h3 className="font-headline text-lg font-semibold text-foreground mb-4">
        {quote ? 'Compartilhar citação' : 'Compartilhar história'}
      </h3>
      {quote && (
        <blockquote className="border-l-4 border-accent pl-4 mb-4 italic text-muted-foreground">
          "{quote}"
        </blockquote>
      )}
      {/* Social Platforms */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-4">
        {socialPlatforms?.map((platform) => (
          <Button
            key={platform?.name}
            variant="outline"
            size="sm"
            onClick={() => handleShare(platform)}
            className="flex flex-col items-center p-3 h-auto hover:bg-accent/5"
          >
            <Icon 
              name={platform?.icon} 
              size={20} 
              className={`mb-1 ${platform?.color}`} 
            />
            <span className="text-xs">{platform?.name}</span>
          </Button>
        ))}
      </div>
      {/* Copy Link */}
      <div className="flex items-center space-x-2">
        <div className="flex-1 bg-background border border-border rounded-md px-3 py-2">
          <p className="text-sm text-muted-foreground truncate">{shareUrl}</p>
        </div>
        <Button
          variant="outline"
          size="sm"
          onClick={handleCopyLink}
          className={copied ? 'text-success border-success' : ''}
        >
          <Icon name={copied ? 'Check' : 'Copy'} size={16} className="mr-1" />
          {copied ? 'Copiado!' : 'Copiar'}
        </Button>
      </div>
    </div>
  );
};

export default SocialShare;