import React from 'react';
import Icon from '../../../components/AppIcon';

const TechStatsPanel = ({ stats }) => {
  const statItems = [
    {
      id: 'total_articles',
      label: 'Artigos Hoje',
      value: stats?.totalArticles || 25,
      icon: 'FileText',
      trend: '+3',
      trendType: 'positive',
      description: 'Novos artigos publicados'
    },
    {
      id: 'high_relevance',
      label: 'Alta Relevância',
      value: stats?.highRelevance || 12,
      icon: 'TrendingUp',
      trend: '+2',
      trendType: 'positive',
      description: 'Artigos de alta relevância local'
    },
    {
      id: 'bookmarked',
      label: 'Salvos',
      value: stats?.bookmarked || 8,
      icon: 'Bookmark',
      trend: '+1',
      trendType: 'positive',
      description: 'Artigos salvos pelos leitores'
    },
    {
      id: 'shared',
      label: 'Compartilhados',
      value: stats?.shared || 15,
      icon: 'Share2',
      trend: '+5',
      trendType: 'positive',
      description: 'Compartilhamentos nas redes'
    }
  ];

  const getTrendColor = (type) => {
    switch (type) {
      case 'positive': return 'text-success';
      case 'negative': return 'text-error';
      default: return 'text-muted-foreground';
    }
  };

  const getTrendIcon = (type) => {
    switch (type) {
      case 'positive': return 'TrendingUp';
      case 'negative': return 'TrendingDown';
      default: return 'Minus';
    }
  };

  return (
    <div className="bg-card border border-border rounded-lg p-6 mb-6">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2">
          <Icon name="BarChart3" size={20} className="text-primary" />
          <h3 className="font-headline text-lg font-semibold text-foreground">
            Estatísticas de Tecnologia
          </h3>
        </div>
        <div className="text-xs text-muted-foreground">
          Atualizado há 5 min
        </div>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {statItems?.map((item) => (
          <div key={item?.id} className="bg-background rounded-lg p-4 border border-border">
            <div className="flex items-center justify-between mb-2">
              <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                <Icon name={item?.icon} size={16} className="text-primary" />
              </div>
              <div className={`flex items-center space-x-1 text-xs font-medium ${getTrendColor(item?.trendType)}`}>
                <Icon name={getTrendIcon(item?.trendType)} size={12} />
                <span>{item?.trend}</span>
              </div>
            </div>
            
            <div className="space-y-1">
              <div className="text-2xl font-bold text-foreground">
                {item?.value}
              </div>
              <div className="text-sm font-medium text-foreground">
                {item?.label}
              </div>
              <div className="text-xs text-muted-foreground">
                {item?.description}
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Quick Insights */}
      <div className="mt-6 pt-4 border-t border-border">
        <h4 className="font-body text-sm font-semibold text-foreground mb-3">
          Insights Rápidos
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-accent/5 border border-accent/20 rounded-lg p-3">
            <div className="flex items-start space-x-2">
              <Icon name="Lightbulb" size={14} className="text-accent mt-0.5" />
              <div>
                <p className="text-xs font-medium text-accent mb-1">
                  Tendência em Alta
                </p>
                <p className="text-xs text-foreground">
                  Artigos sobre Inteligência Artificial tiveram 40% mais engajamento esta semana
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-primary/5 border border-primary/20 rounded-lg p-3">
            <div className="flex items-start space-x-2">
              <Icon name="Target" size={14} className="text-primary mt-0.5" />
              <div>
                <p className="text-xs font-medium text-primary mb-1">
                  Relevância Local
                </p>
                <p className="text-xs text-foreground">
                  48% dos artigos hoje têm alta relevância para Ouro Branco
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechStatsPanel;