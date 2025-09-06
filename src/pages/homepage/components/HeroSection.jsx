import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const HeroSection = () => {
  const [activeTab, setActiveTab] = useState('local');
  const [currentSlide, setCurrentSlide] = useState(0);

  const featuredStories = {
    local: [
      {
        id: 1,
        title: "Nova Praça Central Será Inaugurada em Dezembro",
        excerpt: "Projeto de revitalização urbana promete transformar o coração de Ouro Branco com espaços verdes e área de convivência para toda a família.",
        image: "https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg?auto=compress&cs=tinysrgb&w=800",
        category: "Desenvolvimento Urbano",
        readTime: "3 min",
        publishedAt: "2025-01-06T14:30:00Z",
        author: "Maria Santos",
        isBreaking: true
      },
      {
        id: 2,
        title: "Escola Municipal Recebe Prêmio de Inovação Educacional",
        excerpt: "Projeto pedagógico desenvolvido pela Escola Tiradentes é reconhecido pelo Ministério da Educação como modelo para outras instituições.",
        image: "https://images.pexels.com/photos/1370296/pexels-photo-1370296.jpeg?auto=compress&cs=tinysrgb&w=800",
        category: "Educação",
        readTime: "4 min",
        publishedAt: "2025-01-06T10:15:00Z",
        author: "João Silva"
      },
      {
        id: 3,
        title: "Festival de Inverno Movimenta Economia Local",
        excerpt: "Evento cultural atraiu mais de 5 mil visitantes e gerou R$ 200 mil em receita para comerciantes e artesãos da região.",
        image: "https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=800",
        category: "Cultura & Economia",
        readTime: "5 min",
        publishedAt: "2025-01-06T08:45:00Z",
        author: "Ana Costa"
      }
    ],
    tech: [
      {
        id: 4,
        title: "Startup Mineira Desenvolve App para Agricultura Familiar",
        excerpt: "Solução tecnológica criada em Belo Horizonte promete revolucionar o manejo de pequenas propriedades rurais em Minas Gerais.",
        image: "https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=800",
        category: "AgTech",
        readTime: "6 min",
        publishedAt: "2025-01-06T16:20:00Z",
        author: "Tech Brasil",
        isBrazilian: true
      },
      {
        id: 5,
        title: "Inteligência Artificial na Saúde Pública Brasileira",
        excerpt: "Hospitais públicos de MG implementam sistema de IA para diagnóstico precoce, reduzindo tempo de espera em 40%.",
        image: "https://images.pexels.com/photos/3825581/pexels-photo-3825581.jpeg?auto=compress&cs=tinysrgb&w=800",
        category: "HealthTech",
        readTime: "7 min",
        publishedAt: "2025-01-06T12:10:00Z",
        author: "Inovação Saúde",
        isBrazilian: true
      },
      {
        id: 6,
        title: "Blockchain para Transparência Municipal",
        excerpt: "Tecnologia blockchain está sendo testada em cidades mineiras para aumentar transparência em licitações e gastos públicos.",
        image: "https://images.pexels.com/photos/8370752/pexels-photo-8370752.jpeg?auto=compress&cs=tinysrgb&w=800",
        category: "GovTech",
        readTime: "5 min",
        publishedAt: "2025-01-06T09:30:00Z",
        author: "Digital Gov",
        isBrazilian: true
      }
    ]
  };

  const currentStories = featuredStories?.[activeTab];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % currentStories?.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [currentStories?.length]);

  const formatTimeAgo = (dateString) => {
    const now = new Date();
    const published = new Date(dateString);
    const diffInHours = Math.floor((now - published) / (1000 * 60 * 60));
    
    if (diffInHours < 1) return 'Agora mesmo';
    if (diffInHours < 24) return `${diffInHours}h atrás`;
    return `${Math.floor(diffInHours / 24)}d atrás`;
  };

  return (
    <section className="relative bg-gradient-to-br from-background via-muted/30 to-accent/5 pt-8 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-headline text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
            Conexão <span className="text-primary">Ouro Branco</span>
          </h1>
          <p className="font-body text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Sua fonte confiável para notícias locais e insights tecnológicos que conectam nossa comunidade ao futuro
          </p>
          
          {/* Tab Navigation */}
          <div className="flex justify-center mb-8">
            <div className="bg-card rounded-lg p-1 shadow-sm border border-border">
              <button
                onClick={() => setActiveTab('local')}
                className={`golden-thread px-6 py-3 rounded-md font-medium transition-all duration-300 ${
                  activeTab === 'local' ?'bg-accent text-accent-foreground active' :'text-muted-foreground hover:text-foreground'
                }`}
              >
                <div className="flex items-center space-x-2">
                  <Icon name="MapPin" size={18} />
                  <span>Ouro Branco</span>
                </div>
              </button>
              <button
                onClick={() => setActiveTab('tech')}
                className={`golden-thread px-6 py-3 rounded-md font-medium transition-all duration-300 ${
                  activeTab === 'tech' ?'bg-accent text-accent-foreground active' :'text-muted-foreground hover:text-foreground'
                }`}
              >
                <div className="flex items-center space-x-2">
                  <Icon name="Cpu" size={18} />
                  <span>Tecnologia</span>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Featured Story Carousel */}
        <div className="relative">
          <div className="overflow-hidden rounded-2xl shadow-editorial">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {currentStories?.map((story, index) => (
                <div key={story?.id} className="w-full flex-shrink-0">
                  <div className="relative h-96 md:h-[500px] lg:h-[600px]">
                    <Image
                      src={story?.image}
                      alt={story?.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    
                    {/* Story Content */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 lg:p-12">
                      <div className="max-w-4xl">
                        {/* Badges */}
                        <div className="flex flex-wrap items-center gap-3 mb-4">
                          {story?.isBreaking && (
                            <span className="bg-error text-error-foreground px-3 py-1 rounded-full text-sm font-medium pulse-gold">
                              <Icon name="Zap" size={14} className="inline mr-1" />
                              URGENTE
                            </span>
                          )}
                          {story?.isBrazilian && (
                            <span className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm font-medium">
                              <Icon name="MapPin" size={14} className="inline mr-1" />
                              Brasil
                            </span>
                          )}
                          <span className="bg-accent/20 text-accent-foreground px-3 py-1 rounded-full text-sm font-medium">
                            {story?.category}
                          </span>
                        </div>

                        <h2 className="font-headline text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight">
                          {story?.title}
                        </h2>
                        <p className="font-body text-lg text-gray-200 mb-6 leading-relaxed max-w-3xl">
                          {story?.excerpt}
                        </p>

                        {/* Story Meta */}
                        <div className="flex flex-wrap items-center justify-between gap-4">
                          <div className="flex items-center space-x-4 text-gray-300">
                            <span className="flex items-center space-x-1">
                              <Icon name="User" size={16} />
                              <span className="text-sm">{story?.author}</span>
                            </span>
                            <span className="flex items-center space-x-1">
                              <Icon name="Clock" size={16} />
                              <span className="text-sm">{story?.readTime}</span>
                            </span>
                            <span className="flex items-center space-x-1">
                              <Icon name="Calendar" size={16} />
                              <span className="text-sm">{formatTimeAgo(story?.publishedAt)}</span>
                            </span>
                          </div>

                          <Link to="/story-detail-pages">
                            <Button 
                              variant="default"
                              className="bg-accent text-accent-foreground hover:bg-accent/90"
                            >
                              Ler Matéria
                              <Icon name="ArrowRight" size={16} className="ml-2" />
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Carousel Controls */}
          <div className="flex justify-center mt-6 space-x-2">
            {currentStories?.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? 'bg-accent scale-125' :'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                }`}
              />
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={() => setCurrentSlide((prev) => (prev - 1 + currentStories?.length) % currentStories?.length)}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-card/80 backdrop-blur-sm border border-border rounded-full flex items-center justify-center text-foreground hover:bg-card transition-all duration-300 shadow-lg"
          >
            <Icon name="ChevronLeft" size={20} />
          </button>
          <button
            onClick={() => setCurrentSlide((prev) => (prev + 1) % currentStories?.length)}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-card/80 backdrop-blur-sm border border-border rounded-full flex items-center justify-center text-foreground hover:bg-card transition-all duration-300 shadow-lg"
          >
            <Icon name="ChevronRight" size={20} />
          </button>
        </div>

        {/* Quick Stats */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { label: 'Matérias Hoje', value: '8', icon: 'FileText', trend: '+3' },
            { label: 'Leitores Ativos', value: '2.4K', icon: 'Users', trend: '+12%' },
            { label: 'Dicas Recebidas', value: '15', icon: 'MessageSquare', trend: '+5' },
            { label: 'Compartilhamentos', value: '342', icon: 'Share2', trend: '+28%' }
          ]?.map((stat, index) => (
            <div key={index} className="story-card p-6 text-center">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Icon name={stat?.icon} size={24} className="text-primary" />
              </div>
              <div className="text-2xl font-bold text-foreground mb-1">{stat?.value}</div>
              <div className="text-sm text-muted-foreground mb-2">{stat?.label}</div>
              <div className="text-xs text-success font-medium">{stat?.trend}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;