import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const CommunityCalendar = ({ events }) => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [viewMode, setViewMode] = useState('upcoming'); // 'upcoming' or 'calendar'

  const formatDate = (date) => {
    return new Intl.DateTimeFormat('pt-BR', {
      day: '2-digit',
      month: 'short',
      year: 'numeric'
    })?.format(date);
  };

  const upcomingEvents = events?.filter(event => 
    new Date(event.date) >= new Date()
  )?.slice(0, 4);

  return (
    <section className="bg-card rounded-lg border border-border p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center">
            <Icon name="Calendar" size={18} className="text-primary" />
          </div>
          <div>
            <h3 className="font-headline text-lg font-semibold text-foreground">
              Agenda Comunitária
            </h3>
            <p className="text-sm text-muted-foreground">
              Eventos e atividades locais
            </p>
          </div>
        </div>
        
        <div className="flex items-center space-x-2">
          <Button
            variant={viewMode === 'upcoming' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setViewMode('upcoming')}
            className="text-xs"
          >
            Próximos
          </Button>
          <Button
            variant={viewMode === 'calendar' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setViewMode('calendar')}
            className="text-xs"
          >
            Calendário
          </Button>
        </div>
      </div>
      {viewMode === 'upcoming' ? (
        <div className="space-y-4">
          {upcomingEvents?.map((event) => (
            <div key={event?.id} className="flex items-start space-x-4 p-4 rounded-lg heritage-gradient hover:bg-accent/5 transition-colors">
              <div className="flex-shrink-0 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex flex-col items-center justify-center">
                  <span className="text-xs font-medium text-primary">
                    {new Date(event.date)?.getDate()}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {new Date(event.date)?.toLocaleDateString('pt-BR', { month: 'short' })}
                  </span>
                </div>
              </div>
              
              <div className="flex-1 min-w-0">
                <h4 className="font-medium text-foreground mb-1 line-clamp-1">
                  {event?.title}
                </h4>
                <p className="text-sm text-muted-foreground mb-2 line-clamp-2">
                  {event?.description}
                </p>
                <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                  <div className="flex items-center space-x-1">
                    <Icon name="Clock" size={12} />
                    <span>{event?.time}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Icon name="MapPin" size={12} />
                    <span>{event?.location}</span>
                  </div>
                  {event?.category && (
                    <span className="px-2 py-0.5 bg-accent/20 text-primary rounded-full">
                      {event?.category}
                    </span>
                  )}
                </div>
              </div>
              
              <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary">
                <Icon name="ExternalLink" size={16} />
              </Button>
            </div>
          ))}
          
          <Button 
            variant="outline" 
            fullWidth 
            className="border-primary text-primary hover:bg-primary hover:text-white mt-4"
          >
            <Icon name="Calendar" size={16} className="mr-2" />
            Ver Todos os Eventos
          </Button>
        </div>
      ) : (
        <div className="text-center py-8">
          <Icon name="Calendar" size={48} className="text-muted-foreground mx-auto mb-4" />
          <p className="text-muted-foreground mb-4">
            Visualização de calendário em desenvolvimento
          </p>
          <Button 
            variant="outline"
            onClick={() => setViewMode('upcoming')}
          >
            Ver Próximos Eventos
          </Button>
        </div>
      )}
    </section>
  );
};

export default CommunityCalendar;