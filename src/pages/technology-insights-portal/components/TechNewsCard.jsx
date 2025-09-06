import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const TechNewsCard = ({ article, onBookmark, onShare, isBookmarked = false }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date?.toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const getRelevanceColor = (level) => {
    switch (level) {
      case 'high': return 'text-success bg-success/10';
      case 'medium': return 'text-warning bg-warning/10';
      case 'low': return 'text-muted-foreground bg-muted';
      default: return 'text-muted-foreground bg-muted';
    }
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
    <article className="story-card group p-6 h-full flex flex-col">
      {/* Article Image */}
      <div className="relative mb-4 overflow-hidden rounded-lg bg-muted">
        <div className="aspect-video w-full">
          <Image
            src={article?.image}
            alt={article?.title}
            className={`w-full h-full object-cover transition-all duration-500 ${
              imageLoaded ? 'scale-100' : 'scale-105'
            } group-hover:scale-105`}
            onLoad={() => setImageLoaded(true)}
          />
        </div>
        
        {/* Relevance Badge */}
        <div className="absolute top-3 left-3">
          <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getRelevanceColor(article?.relevance)}`}>
            <Icon name="MapPin" size={12} className="mr-1" />
            Relevância {article?.relevance === 'high' ? 'Alta' : article?.relevance === 'medium' ? 'Média' : 'Baixa'}
          </span>
        </div>

        {/* Bookmark Button */}
        <div className="absolute top-3 right-3">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => onBookmark(article?.id)}
            className={`w-8 h-8 rounded-full backdrop-blur-sm ${
              isBookmarked 
                ? 'bg-accent text-accent-foreground' 
                : 'bg-white/80 text-foreground hover:bg-white'
            }`}
          >
            <Icon name={isBookmarked ? "Bookmark" : "BookmarkPlus"} size={16} />
          </Button>
        </div>
      </div>
      {/* Article Content */}
      <div className="flex-1 flex flex-col">
        {/* Category and Impact */}
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 bg-primary/10 rounded flex items-center justify-center">
              <Icon name={getImpactIcon(article?.category)} size={12} className="text-primary" />
            </div>
            <span className="text-sm font-medium text-primary capitalize">
              {article?.category}
            </span>
          </div>
          <span className="text-xs text-muted-foreground">
            {formatDate(article?.publishedAt)}
          </span>
        </div>

        {/* Title */}
        <h3 className="font-headline text-lg font-semibold text-foreground mb-3 line-clamp-2 group-hover:text-primary transition-colors duration-200">
          {article?.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-muted-foreground mb-4 line-clamp-3 flex-1">
          {article?.description}
        </p>

        {/* Local Impact Commentary */}
        {article?.localImpact && (
          <div className="bg-accent/5 border border-accent/20 rounded-lg p-3 mb-4">
            <div className="flex items-start space-x-2">
              <Icon name="MessageSquare" size={14} className="text-accent mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-xs font-medium text-accent mb-1">Impacto Regional</p>
                <p className="text-xs text-foreground">{article?.localImpact}</p>
              </div>
            </div>
          </div>
        )}

        {/* Tags */}
        {article?.tags && article?.tags?.length > 0 && (
          <div className="flex flex-wrap gap-1 mb-4">
            {article?.tags?.slice(0, 3)?.map((tag, index) => (
              <span
                key={index}
                className="inline-flex items-center px-2 py-1 rounded text-xs bg-muted text-muted-foreground"
              >
                {tag}
              </span>
            ))}
            {article?.tags?.length > 3 && (
              <span className="text-xs text-muted-foreground">
                +{article?.tags?.length - 3} mais
              </span>
            )}
          </div>
        )}

        {/* Footer Actions */}
        <div className="flex items-center justify-between pt-3 border-t border-border">
          <div className="flex items-center space-x-1">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => onShare(article)}
              className="text-muted-foreground hover:text-primary"
            >
              <Icon name="Share2" size={14} className="mr-1" />
              Compartilhar
            </Button>
          </div>
          
          <Link
            to={`/story-detail-pages?id=${article?.id}&type=tech`}
            className="text-sm font-medium text-primary hover:text-primary/80 transition-colors duration-200"
          >
            Ler mais →
          </Link>
        </div>
      </div>
    </article>
  );
};

export default TechNewsCard;