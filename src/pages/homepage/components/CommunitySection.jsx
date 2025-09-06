import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const CommunitySection = () => {
  const [activeTab, setActiveTab] = useState('events');

  const communityEvents = [
    {
      id: 1,
      title: "Feira de Tecnologia e Inovação",
      date: "2025-01-15",
      time: "14:00",
      location: "Centro Cultural Ouro Branco",
      description: "Exposição de startups locais e palestras sobre transformação digital",
      image: "https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "Tecnologia",
      attendees: 120,
      isUpcoming: true
    },
    {
      id: 2,
      title: "Audiência Pública - Orçamento 2025",
      date: "2025-01-12",
      time: "19:00",
      location: "Câmara Municipal",
      description: "Discussão sobre investimentos prioritários para o próximo ano",
      image: "https://images.pexels.com/photos/8112199/pexels-photo-8112199.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "Política",
      attendees: 85,
      isUpcoming: true
    },
    {
      id: 3,
      title: "Festival de Inverno - Encerramento",
      date: "2025-01-08",
      time: "18:00",
      location: "Praça Central",
      description: "Show de encerramento com artistas locais e regionais",
      image: "https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "Cultura",
      attendees: 450,
      isUpcoming: false
    }
  ];

  const communitySpotlights = [
    {
      id: 1,
      name: "Maria Oliveira",
      role: "Empreendedora Local",
      achievement: "Criou cooperativa que emprega 30 famílias",
      image: "https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=600",
      story: "Transformou paixão por artesanato em negócio sustentável que movimenta a economia local",
      impact: "R$ 180K em vendas anuais"
    },
    {
      id: 2,
      name: "João Santos",
      role: "Professor Inovador",
      achievement: "Projeto de robótica vence competição estadual",
      image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=600",
      story: "Desenvolveu metodologia que aumentou interesse dos alunos em ciências exatas",
      impact: "200+ alunos impactados"
    },
    {
      id: 3,
      name: "Ana Costa",
      role: "Ativista Ambiental",
      achievement: "Lidera projeto de reflorestamento urbano",
      image: "https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=600",
      story: "Mobilizou comunidade para plantar 500 árvores em áreas degradadas da cidade",
      impact: "15 hectares recuperados"
    }
  ];

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date?.toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: 'short',
      year: 'numeric'
    });
  };

  const tabs = [
    { id: 'events', label: 'Eventos', icon: 'Calendar', count: communityEvents?.length },
    { id: 'spotlight', label: 'Destaques', icon: 'Star', count: communitySpotlights?.length }
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <Icon name="Users" size={18} className="text-primary-foreground" />
            </div>
            <span className="font-accent text-sm font-medium text-primary uppercase tracking-wider">
              Nossa Comunidade
            </span>
          </div>

          <h2 className="font-headline text-3xl md:text-4xl font-bold text-foreground mb-4">
            O Coração de Ouro Branco
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-3xl mx-auto">
            Conheça os eventos, pessoas e iniciativas que fazem da nossa cidade um lugar especial para viver e crescer
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-8">
          <div className="bg-card rounded-lg p-1 shadow-sm border border-border">
            {tabs?.map((tab) => (
              <button
                key={tab?.id}
                onClick={() => setActiveTab(tab?.id)}
                className={`golden-thread px-6 py-3 rounded-md font-medium transition-all duration-300 ${
                  activeTab === tab?.id
                    ? 'bg-accent text-accent-foreground active'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                <div className="flex items-center space-x-2">
                  <Icon name={tab?.icon} size={18} />
                  <span>{tab?.label}</span>
                  <span className="bg-muted-foreground/20 text-xs px-2 py-1 rounded-full">
                    {tab?.count}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Events Tab */}
        {activeTab === 'events' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {communityEvents?.map((event) => (
              <div key={event?.id} className="story-card group">
                <div className="relative overflow-hidden rounded-t-lg">
                  <Image
                    src={event?.image}
                    alt={event?.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  
                  {/* Status Badge */}
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      event?.isUpcoming
                        ? 'bg-success text-success-foreground'
                        : 'bg-muted text-muted-foreground'
                    }`}>
                      {event?.isUpcoming ? 'Próximo' : 'Realizado'}
                    </span>
                  </div>

                  {/* Category */}
                  <div className="absolute bottom-4 right-4">
                    <span className="bg-accent/90 text-accent-foreground px-3 py-1 rounded-full text-sm font-medium">
                      {event?.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="font-headline text-xl font-semibold text-foreground mb-3 leading-tight">
                    {event?.title}
                  </h3>
                  <p className="font-body text-muted-foreground mb-4 leading-relaxed">
                    {event?.description}
                  </p>

                  {/* Event Details */}
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <Icon name="Calendar" size={14} />
                      <span>{formatDate(event?.date)} às {event?.time}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <Icon name="MapPin" size={14} />
                      <span>{event?.location}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <Icon name="Users" size={14} />
                      <span>{event?.attendees} interessados</span>
                    </div>
                  </div>

                  <Button 
                    variant="outline" 
                    size="sm"
                    fullWidth
                    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  >
                    {event?.isUpcoming ? 'Participar' : 'Ver Cobertura'}
                    <Icon name="ArrowRight" size={14} className="ml-2" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Spotlight Tab */}
        {activeTab === 'spotlight' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {communitySpotlights?.map((person) => (
              <div key={person?.id} className="story-card group">
                <div className="p-6">
                  {/* Profile */}
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="relative">
                      <Image
                        src={person?.image}
                        alt={person?.name}
                        className="w-16 h-16 rounded-full object-cover"
                      />
                      <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-accent rounded-full flex items-center justify-center">
                        <Icon name="Star" size={12} className="text-accent-foreground" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-headline text-lg font-semibold text-foreground">
                        {person?.name}
                      </h3>
                      <p className="font-body text-sm text-primary font-medium">
                        {person?.role}
                      </p>
                    </div>
                  </div>

                  {/* Achievement */}
                  <div className="bg-accent/10 rounded-lg p-4 mb-4">
                    <h4 className="font-body text-sm font-semibold text-foreground mb-2">
                      Conquista em Destaque
                    </h4>
                    <p className="font-body text-sm text-muted-foreground">
                      {person?.achievement}
                    </p>
                  </div>

                  {/* Story */}
                  <p className="font-body text-muted-foreground mb-4 leading-relaxed">
                    {person?.story}
                  </p>

                  {/* Impact */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-body text-sm text-muted-foreground">Impacto:</span>
                    <span className="font-body text-sm font-semibold text-success">
                      {person?.impact}
                    </span>
                  </div>

                  <Link to="/story-detail-pages">
                    <Button 
                      variant="outline" 
                      size="sm"
                      fullWidth
                      className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                    >
                      Ler História Completa
                      <Icon name="ArrowRight" size={14} className="ml-2" />
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="story-card p-8 max-w-2xl mx-auto">
            <Icon name="Heart" size={48} className="text-primary mx-auto mb-4" />
            <h3 className="font-headline text-2xl font-bold text-foreground mb-4">
              Faça Parte da Nossa História
            </h3>
            <p className="font-body text-muted-foreground mb-6">
              Tem uma história inspiradora para compartilhar? Conhece alguém que está fazendo a diferença em nossa comunidade?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="default"
                className="bg-accent text-accent-foreground hover:bg-accent/90"
              >
                <Icon name="PenTool" size={16} className="mr-2" />
                Enviar Dica
              </Button>
              <Button 
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                <Icon name="Users" size={16} className="mr-2" />
                Participar da Comunidade
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;