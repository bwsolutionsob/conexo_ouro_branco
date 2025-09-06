import React from 'react';
import Icon from '../../../components/AppIcon';

const MetricsOverview = ({ metrics }) => {
  const metricCards = [
    {
      title: 'Histórias Publicadas',
      value: metrics?.storiesPublished,
      change: '+12%',
      changeType: 'positive',
      icon: 'FileText',
      color: 'text-primary'
    },
    {
      title: 'Leitores Ativos',
      value: metrics?.activeReaders,
      change: '+8%',
      changeType: 'positive',
      icon: 'Users',
      color: 'text-secondary'
    },
    {
      title: 'Engajamento',
      value: metrics?.engagement,
      change: '+15%',
      changeType: 'positive',
      icon: 'Heart',
      color: 'text-success'
    },
    {
      title: 'Newsletter',
      value: metrics?.newsletterSubs,
      change: '+5%',
      changeType: 'positive',
      icon: 'Mail',
      color: 'text-warning'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {metricCards?.map((metric, index) => (
        <div key={index} className="story-card p-6">
          <div className="flex items-center justify-between mb-4">
            <div className={`w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center`}>
              <Icon name={metric?.icon} size={24} className={metric?.color} />
            </div>
            <div className={`text-sm font-medium ${
              metric?.changeType === 'positive' ? 'text-success' : 'text-error'
            }`}>
              {metric?.change}
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-1">
              {metric?.value}
            </h3>
            <p className="text-sm text-muted-foreground">
              {metric?.title}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MetricsOverview;