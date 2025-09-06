import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const FeaturedTechStory = ({ story, onBookmark, onShare, isBookmarked = false }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date?.toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const getImpactIcon = (category) => {
    switch (category) {
      case 'health': return 'Heart';
      case 'education': return 'GraduationCap';
      case 'business': return 'Briefcase';
      case 'infrastructure': return 'Building';
      case 'environment': return 'Leaf';
      default: return 'Zap';
    }
  };

  return (
    <div className="bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 border border-primary/20 rounded-xl p-6 mb-8">
      <div className="flex items-center space-x-2 mb-4">
        <Icon name="Star" size={18} className="text-accent" />
        <span className="font-headline text-sm font-semibold text-accent">
          História em Destaque
        </span>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Image Section */}
        <div className="relative">
          <div className="aspect-video w-full overflow-hidden rounded-lg bg-muted">
            <Image
              src={story?.image}
              alt={story?.title}
              className={`w-full h-full object-cover transition-all duration-500 ${
                imageLoaded ? 'scale-100' : 'scale-105'
              }`}
              onLoad={() => setImageLoaded(true)}
            />
          </div>
          
          {/* Overlay Badges */}
          <div className="absolute top-4 left-4 flex items-center space-x-2">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-success text-success-foreground">
              <Icon name="TrendingUp" size={12} className="mr-1" />
              Alta Relevância
            </span>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary text-primary-foreground">
              <Icon name={getImpactIcon(story?.category)} size={12} className="mr-1" />
              {story?.category === 'health' ? 'Saúde' : 
               story?.category === 'education' ? 'Educação' :
               story?.category === 'business' ? 'Negócios' :
               story?.category === 'infrastructure' ? 'Infraestrutura' :
               story?.category === 'environment' ? 'Sustentabilidade' : 'Tecnologia'}
            </span>
          </div>

          <div className="absolute top-4 right-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => onBookmark(story?.id)}
              className={`w-10 h-10 rounded-full backdrop-blur-sm ${
                isBookmarked 
                  ? 'bg-accent text-accent-foreground' 
                  : 'bg-white/90 text-foreground hover:bg-white'
              }`}
            >
              <Icon name={isBookmarked ? "Bookmark" : "BookmarkPlus"} size={18} />
            </Button>
          </div>
        </div>

        {/* Content Section */}
        <div className="flex flex-col justify-between">
          <div>
            {/* Meta Info */}
            <div className="flex items-center space-x-4 mb-4">
              <span className="text-sm text-muted-foreground">
                {formatDate(story?.publishedAt)}
              </span>
              <span className="text-sm text-muted-foreground">
                Por {story?.author}
              </span>
              <span className="text-sm text-primary font-medium">
                {story?.readTime} min de leitura
              </span>
            </div>

            {/* Title */}
            <h2 className="font-headline text-2xl lg:text-3xl font-bold text-foreground mb-4 leading-tight">
              {story?.title}
            </h2>

            {/* Description */}
            <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
              {story?.description}
            </p>

            {/* Local Impact */}
            <div className="bg-accent/10 border border-accent/30 rounded-lg p-4 mb-6">
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="MapPin" size={16} className="text-accent" />
                </div>
                <div>
                  <h4 className="font-body text-sm font-semibold text-accent mb-2">
                    Impacto para Ouro Branco
                  </h4>
                  <p className="text-sm text-foreground">
                    {story?.localImpact}
                  </p>
                </div>
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-6">
              {story?.tags?.map((tag, index) => (
                <span
                  key={index}
                  className="inline-flex items-center px-3 py-1 rounded-full text-xs bg-background border border-border text-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center justify-between pt-4 border-t border-border">
            <div className="flex items-center space-x-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => onShare(story)}
                className="text-muted-foreground hover:text-primary"
              >
                <Icon name="Share2" size={16} className="mr-2" />
                Compartilhar
              </Button>
              
              <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                <Icon name="Eye" size={14} />
                <span>{story?.views} visualizações</span>
              </div>
            </div>
            
            <Link to={`/story-detail-pages?id=${story?.id}&type=tech&featured=true`}>
              <Button
                variant="default"
                className="bg-primary text-primary-foreground hover:bg-primary/90"
              >
                Ler História Completa
                <Icon name="ArrowRight" size={16} className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedTechStory;