import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const RelatedStories = ({ stories, currentStoryId }) => {
  const filteredStories = stories?.filter(story => story?.id !== currentStoryId);

  const formatDate = (date) => {
    return new Intl.DateTimeFormat('pt-BR', {
      day: '2-digit',
      month: 'short',
      year: 'numeric'
    })?.format(new Date(date));
  };

  const getReadingTime = (content) => {
    const wordsPerMinute = 200;
    const wordCount = content?.split(' ')?.length;
    return Math.ceil(wordCount / wordsPerMinute);
  };

  return (
    <section className="mt-12">
      <div className="border-t border-border pt-8">
        <h3 className="font-headline text-2xl font-semibold text-foreground mb-6">
          Histórias relacionadas
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredStories?.slice(0, 6)?.map((story) => (
            <Link
              key={story?.id}
              to={`/story-detail-pages/${story?.id}`}
              className="story-card group block"
            >
              {/* Story Image */}
              <div className="relative overflow-hidden rounded-lg mb-4">
                <Image
                  src={story?.featuredImage?.url || 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=400&h=250&fit=crop'}
                  alt={story?.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                
                {/* Category Badge */}
                <div className="absolute top-3 left-3">
                  <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                    story?.category === 'local' ?'bg-accent/90 text-accent-foreground' :'bg-secondary/90 text-secondary-foreground'
                  }`}>
                    <Icon 
                      name={story?.category === 'local' ? 'MapPin' : 'Cpu'} 
                      size={12} 
                      className="mr-1" 
                    />
                    {story?.category === 'local' ? 'Local' : 'Tech'}
                  </span>
                </div>

                {/* Reading Time */}
                <div className="absolute bottom-3 right-3">
                  <span className="bg-black/70 text-white text-xs px-2 py-1 rounded-full">
                    {getReadingTime(story?.content)} min
                  </span>
                </div>
              </div>

              {/* Story Content */}
              <div className="space-y-3">
                <h4 className="font-headline text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-200 line-clamp-2">
                  {story?.title}
                </h4>

                <p className="text-muted-foreground text-sm line-clamp-2 leading-relaxed">
                  {story?.subtitle || story?.content?.substring(0, 120) + '...'}
                </p>

                {/* Meta Info */}
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <div className="flex items-center space-x-2">
                    <Image
                      src={story?.author?.avatar}
                      alt={story?.author?.name}
                      className="w-5 h-5 rounded-full object-cover"
                    />
                    <span>{story?.author?.name}</span>
                  </div>
                  <span>{formatDate(story?.publishedAt)}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* View All Stories */}
        <div className="text-center mt-8">
          <Link
            to="/ouro-branco-local-news"
            className="inline-flex items-center px-6 py-3 bg-accent text-accent-foreground rounded-lg font-medium hover:bg-accent/90 transition-colors duration-200"
          >
            <Icon name="ArrowRight" size={16} className="mr-2" />
            Ver todas as histórias
          </Link>
        </div>
      </div>
    </section>
  );
};

export default RelatedStories;