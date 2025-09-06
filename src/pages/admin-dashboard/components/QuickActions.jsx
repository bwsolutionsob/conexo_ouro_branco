import React from 'react';
import Button from '../../../components/ui/Button';

const QuickActions = ({ onNewStory, onManageMedia, onViewAnalytics, onModerateComments }) => {
  const actions = [
    {
      title: 'Nova História',
      description: 'Criar nova reportagem ou artigo',
      icon: 'Plus',
      variant: 'default',
      onClick: onNewStory,
      className: 'bg-accent text-accent-foreground hover:bg-accent/90'
    },
    {
      title: 'Gerenciar Mídia',
      description: 'Organizar fotos e vídeos',
      icon: 'Image',
      variant: 'outline',
      onClick: onManageMedia
    },
    {
      title: 'Ver Análises',
      description: 'Relatórios de desempenho',
      icon: 'BarChart3',
      variant: 'outline',
      onClick: onViewAnalytics
    },
    {
      title: 'Moderar Comentários',
      description: 'Revisar interações da comunidade',
      icon: 'MessageSquare',
      variant: 'outline',
      onClick: onModerateComments
    }
  ];

  return (
    <div className="story-card p-6 mb-8">
      <h2 className="font-headline text-xl font-semibold text-foreground mb-6">
        Ações Rápidas
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {actions?.map((action, index) => (
          <Button
            key={index}
            variant={action?.variant}
            onClick={action?.onClick}
            iconName={action?.icon}
            iconPosition="left"
            className={`h-auto p-4 flex-col items-start text-left ${action?.className || ''}`}
            fullWidth
          >
            <div className="w-full">
              <div className="font-medium mb-1">{action?.title}</div>
              <div className="text-xs opacity-75">{action?.description}</div>
            </div>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default QuickActions;