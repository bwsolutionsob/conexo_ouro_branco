import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const RecentActivity = ({ activities }) => {
  const getActivityIcon = (type) => {
    switch (type) {
      case 'story_published': return 'FileText';
      case 'comment_moderated': return 'MessageSquare';
      case 'media_uploaded': return 'Image';
      case 'user_registered': return 'UserPlus';
      case 'newsletter_sent': return 'Mail';
      default: return 'Activity';
    }
  };

  const getActivityColor = (type) => {
    switch (type) {
      case 'story_published': return 'text-primary';
      case 'comment_moderated': return 'text-warning';
      case 'media_uploaded': return 'text-secondary';
      case 'user_registered': return 'text-success';
      case 'newsletter_sent': return 'text-accent-foreground';
      default: return 'text-muted-foreground';
    }
  };

  const formatTimeAgo = (timestamp) => {
    const now = new Date();
    const time = new Date(timestamp);
    const diffInMinutes = Math.floor((now - time) / (1000 * 60));
    
    if (diffInMinutes < 60) {
      return `${diffInMinutes}m atrás`;
    } else if (diffInMinutes < 1440) {
      return `${Math.floor(diffInMinutes / 60)}h atrás`;
    } else {
      return `${Math.floor(diffInMinutes / 1440)}d atrás`;
    }
  };

  return (
    <div className="story-card p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="font-headline text-xl font-semibold text-foreground">
          Atividade Recente
        </h2>
        <Button variant="ghost" size="sm" iconName="RefreshCw" iconPosition="left">
          Atualizar
        </Button>
      </div>
      <div className="space-y-4">
        {activities?.map((activity, index) => (
          <div key={index} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-muted/50 transition-colors">
            <div className={`w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0`}>
              <Icon 
                name={getActivityIcon(activity?.type)} 
                size={16} 
                className={getActivityColor(activity?.type)} 
              />
            </div>
            
            <div className="flex-1 min-w-0">
              <p className="text-sm text-foreground">
                <span className="font-medium">{activity?.user}</span> {activity?.action}
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                {activity?.details}
              </p>
            </div>
            
            <div className="text-xs text-muted-foreground flex-shrink-0">
              {formatTimeAgo(activity?.timestamp)}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 pt-4 border-t border-border">
        <Button variant="outline" size="sm" fullWidth iconName="Eye" iconPosition="left">
          Ver Todas as Atividades
        </Button>
      </div>
    </div>
  );
};

export default RecentActivity;