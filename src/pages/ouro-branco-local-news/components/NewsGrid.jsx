import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const NewsGrid = ({ stories, loading = false }) => {
  if (loading) {
    return (
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(6)]?.map((_, index) => (
          <div key={index} className="story-card p-6 animate-pulse">
            <div className="aspect-[16/10] bg-muted rounded-lg mb-4"></div>
            <div className="space-y-3">
              <div className="h-4 bg-muted rounded w-1/3"></div>
              <div className="h-6 bg-muted rounded"></div>
              <div className="h-4 bg-muted rounded w-3/4"></div>
              <div className="flex justify-between">
                <div className="h-4 bg-muted rounded w-1/4"></div>
                <div className="h-4 bg-muted rounded w-1/4"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {stories?.map((story) => (
        <article key={story?.id} className="story-card group">
          {/* Story Image */}
          <div className="relative aspect-[16/10] overflow-hidden rounded-t-lg">
            <Image
              src={story?.image}
              alt={story?.title}
              className="w-full h-full object-cover sepia-enhance group-hover:scale-105 transition-transform duration-300"
            />
            
            {/* Category Badge */}
            <div 
              className="absolute top-3 left-3 px-2 py-1 rounded-full text-xs font-medium text-white"
              style={{ backgroundColor: story?.categoryColor }}
            >
              {story?.category}
            </div>
            
            {/* Priority Badge */}
            {story?.priority === 'urgent' && (
              <div className="absolute top-3 right-3 bg-error text-error-foreground px-2 py-1 rounded-full text-xs font-medium pulse-gold">
                <Icon name="AlertTriangle" size={12} className="mr-1" />
                Urgente
              </div>
            )}
          </div>
          
          {/* Story Content */}
          <div className="p-6">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                <Icon name="Calendar" size={12} />
                <span>{story?.publishDate}</span>
              </div>
              <div className="flex items-center space-x-3 text-xs text-muted-foreground">
                <div className="flex items-center space-x-1">
                  <Icon name="Eye" size={12} />
                  <span>{story?.views}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Icon name="MessageCircle" size={12} />
                  <span>{story?.comments}</span>
                </div>
              </div>
            </div>
            
            <h3 className="font-headline text-lg font-semibold text-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors">
              {story?.title}
            </h3>
            
            <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
              {story?.excerpt}
            </p>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 bg-muted rounded-full flex items-center justify-center">
                  <Icon name="User" size={12} className="text-muted-foreground" />
                </div>
                <span className="text-xs text-muted-foreground">{story?.author}</span>
              </div>
              
              <Button 
                variant="ghost" 
                size="sm"
                className="text-primary hover:text-primary hover:bg-accent/10"
                asChild
              >
                <Link to="/story-detail-pages">
                  <span className="mr-1">Ler mais</span>
                  <Icon name="ArrowRight" size={14} />
                </Link>
              </Button>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
};

export default NewsGrid;