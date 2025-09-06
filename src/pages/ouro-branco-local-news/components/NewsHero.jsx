import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const NewsHero = ({ featuredStory }) => {
  return (
    <section className="relative bg-gradient-to-br from-accent/5 to-primary/5 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent z-10"></div>
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <Icon name="MapPin" size={16} color="white" />
              </div>
              <span className="font-accent text-sm font-medium text-primary uppercase tracking-wider">
                Destaque Local
              </span>
            </div>
            
            <h1 className="font-headline text-3xl lg:text-5xl font-bold text-foreground leading-tight">
              {featuredStory?.title}
            </h1>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              {featuredStory?.excerpt}
            </p>
            
            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <Icon name="Calendar" size={16} />
                <span>{featuredStory?.publishDate}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="User" size={16} />
                <span>{featuredStory?.author}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Clock" size={16} />
                <span>{featuredStory?.readTime} min</span>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-3">
              <Button 
                variant="default"
                className="bg-primary hover:bg-primary/90"
                asChild
              >
                <Link to="/story-detail-pages">
                  <Icon name="ArrowRight" size={16} className="mr-2" />
                  Ler Matéria Completa
                </Link>
              </Button>
              
              <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                <Icon name="Share2" size={16} className="mr-2" />
                Compartilhar
              </Button>
            </div>
          </div>
          
          {/* Featured Image */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-editorial">
              <Image
                src={featuredStory?.image}
                alt={featuredStory?.title}
                className="w-full h-full object-cover sepia-enhance"
              />
            </div>
            
            {/* Category Badge */}
            <div className="absolute top-4 left-4 bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-medium">
              {featuredStory?.category}
            </div>
            
            {/* Engagement Stats */}
            <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2">
              <div className="flex items-center space-x-4 text-sm">
                <div className="flex items-center space-x-1">
                  <Icon name="Eye" size={14} className="text-muted-foreground" />
                  <span className="font-medium">{featuredStory?.views}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Icon name="MessageCircle" size={14} className="text-muted-foreground" />
                  <span className="font-medium">{featuredStory?.comments}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsHero;