import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const StoryHeader = ({ story, onShare, onBookmark, isBookmarked }) => {
  const formatDate = (date) => {
    return new Intl.DateTimeFormat('pt-BR', {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })?.format(new Date(date));
  };

  const getReadingTime = (content) => {
    const wordsPerMinute = 200;
    const wordCount = content?.split(' ')?.length;
    return Math.ceil(wordCount / wordsPerMinute);
  };

  return (
    <header className="mb-8">
      {/* Category Badge */}
      <div className="mb-4">
        <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
          story?.category === 'local' ?'bg-accent/10 text-primary' :'bg-secondary/10 text-secondary'
        }`}>
          <Icon 
            name={story?.category === 'local' ? 'MapPin' : 'Cpu'} 
            size={14} 
            className="mr-1" 
          />
          {story?.category === 'local' ? 'Ouro Branco' : 'Tecnologia'}
        </span>
      </div>
      {/* Headline */}
      <h1 className="font-headline text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 leading-tight">
        {story?.title}
      </h1>
      {/* Subtitle */}
      {story?.subtitle && (
        <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
          {story?.subtitle}
        </p>
      )}
      {/* Meta Information */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-6 border-b border-border">
        <div className="flex items-center space-x-4">
          {/* Author */}
          <div className="flex items-center space-x-3">
            <Image
              src={story?.author?.avatar}
              alt={story?.author?.name}
              className="w-10 h-10 rounded-full object-cover"
            />
            <div>
              <p className="font-medium text-foreground">{story?.author?.name}</p>
              <p className="text-sm text-muted-foreground">{story?.author?.role}</p>
            </div>
          </div>

          {/* Publication Info */}
          <div className="hidden sm:block w-px h-8 bg-border"></div>
          <div className="text-sm text-muted-foreground">
            <p>{formatDate(story?.publishedAt)}</p>
            <p>{getReadingTime(story?.content)} min de leitura</p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center space-x-2">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => onBookmark(story?.id)}
            className={isBookmarked ? 'text-accent' : 'text-muted-foreground'}
          >
            <Icon name={isBookmarked ? 'Bookmark' : 'BookmarkPlus'} size={16} className="mr-1" />
            {isBookmarked ? 'Salvo' : 'Salvar'}
          </Button>
          
          <Button
            variant="ghost"
            size="sm"
            onClick={() => onShare(story)}
            className="text-muted-foreground hover:text-primary"
          >
            <Icon name="Share2" size={16} className="mr-1" />
            Compartilhar
          </Button>
        </div>
      </div>
      {/* Featured Image */}
      {story?.featuredImage && (
        <div className="mb-8">
          <div className="relative overflow-hidden rounded-lg">
            <Image
              src={story?.featuredImage?.url}
              alt={story?.featuredImage?.caption || story?.title}
              className="w-full h-64 md:h-80 lg:h-96 object-cover"
            />
          </div>
          {story?.featuredImage?.caption && (
            <p className="text-sm text-muted-foreground mt-2 italic">
              {story?.featuredImage?.caption}
            </p>
          )}
          {story?.featuredImage?.credit && (
            <p className="text-xs text-muted-foreground mt-1">
              Foto: {story?.featuredImage?.credit}
            </p>
          )}
        </div>
      )}
    </header>
  );
};

export default StoryHeader;