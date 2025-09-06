import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const NewsGrid = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const newsStories = [
    {
      id: 1,
      title: "Prefeitura Anuncia Novo Sistema de Coleta Seletiva",
      excerpt: "Iniciativa sustentável promete reduzir em 60% o lixo enviado para aterros sanitários, com coleta porta a porta em todos os bairros.",
      image: "https://images.pexels.com/photos/3735218/pexels-photo-3735218.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "Meio Ambiente",
      type: "local",
      readTime: "4 min",
      publishedAt: "2025-01-06T13:45:00Z",
      author: "Carlos Mendes",
      isPopular: true
    },
    {
      id: 2,
      title: "5G Chega às Cidades do Interior de Minas Gerais",
      excerpt: "Tecnologia de quinta geração promete revolucionar conectividade em municípios menores, incluindo Ouro Branco na primeira fase.",
      image: "https://images.pexels.com/photos/8849295/pexels-photo-8849295.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "Conectividade",
      type: "tech",
      readTime: "5 min",
      publishedAt: "2025-01-06T11:20:00Z",
      author: "Tech MG",
      isBrazilian: true
    },
    {
      id: 3,
      title: "Feira de Artesanato Bate Recorde de Visitação",
      excerpt: "Evento mensal atraiu mais de 3 mil pessoas e movimentou R$ 150 mil, consolidando Ouro Branco como polo cultural regional.",
      image: "https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "Cultura",
      type: "local",
      readTime: "3 min",
      publishedAt: "2025-01-06T09:15:00Z",
      author: "Lucia Ferreira"
    },
    {
      id: 4,
      title: "Startup Brasileira Cria Solução para Energia Solar",
      excerpt: "Empresa mineira desenvolve sistema inteligente que otimiza geração de energia solar residencial, reduzindo custos em 30%.",
      image: "https://images.pexels.com/photos/9875416/pexels-photo-9875416.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "Energia",
      type: "tech",
      readTime: "6 min",
      publishedAt: "2025-01-06T07:30:00Z",
      author: "Inovação Brasil",
      isBrazilian: true
    },
    {
      id: 5,
      title: "Nova Unidade de Saúde Será Inaugurada no Bairro Centro",
      excerpt: "Investimento de R$ 2 milhões garante atendimento especializado para 15 mil moradores da região central da cidade.",
      image: "https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "Saúde",
      type: "local",
      readTime: "4 min",
      publishedAt: "2025-01-06T06:45:00Z",
      author: "Saúde Ouro Branco"
    },
    {
      id: 6,
      title: "Inteligência Artificial na Educação Pública Mineira",
      excerpt: "Projeto piloto utiliza IA para personalizar ensino em escolas estaduais, melhorando desempenho dos estudantes em 25%.",
      image: "https://images.pexels.com/photos/8849295/pexels-photo-8849295.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "Educação",
      type: "tech",
      readTime: "7 min",
      publishedAt: "2025-01-05T18:20:00Z",
      author: "EduTech MG",
      isBrazilian: true
    }
  ];

  const filters = [
    { id: 'all', label: 'Todas', icon: 'Grid3X3' },
    { id: 'local', label: 'Ouro Branco', icon: 'MapPin' },
    { id: 'tech', label: 'Tecnologia', icon: 'Cpu' }
  ];

  const filteredStories = activeFilter === 'all' 
    ? newsStories 
    : newsStories?.filter(story => story?.type === activeFilter);

  const formatTimeAgo = (dateString) => {
    const now = new Date();
    const published = new Date(dateString);
    const diffInHours = Math.floor((now - published) / (1000 * 60 * 60));
    
    if (diffInHours < 1) return 'Agora mesmo';
    if (diffInHours < 24) return `${diffInHours}h atrás`;
    return `${Math.floor(diffInHours / 24)}d atrás`;
  };

  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
          <div>
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-foreground mb-4">
              Últimas Notícias
            </h2>
            <p className="font-body text-lg text-muted-foreground max-w-2xl">
              Acompanhe as principais notícias de Ouro Branco e insights tecnológicos que impactam nossa comunidade
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex items-center space-x-2 mt-6 md:mt-0">
            {filters?.map((filter) => (
              <button
                key={filter?.id}
                onClick={() => setActiveFilter(filter?.id)}
                className={`golden-thread px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                  activeFilter === filter?.id
                    ? 'bg-accent text-accent-foreground active'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                }`}
              >
                <div className="flex items-center space-x-2">
                  <Icon name={filter?.icon} size={16} />
                  <span>{filter?.label}</span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredStories?.map((story, index) => (
            <article key={story?.id} className="story-card group">
              {/* Image */}
              <div className="relative overflow-hidden rounded-t-lg">
                <Image
                  src={story?.image}
                  alt={story?.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                
                {/* Badges */}
                <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                  {story?.isPopular && (
                    <span className="bg-error text-error-foreground px-2 py-1 rounded-full text-xs font-medium">
                      <Icon name="TrendingUp" size={12} className="inline mr-1" />
                      Popular
                    </span>
                  )}
                  {story?.isBrazilian && (
                    <span className="bg-secondary text-secondary-foreground px-2 py-1 rounded-full text-xs font-medium">
                      <Icon name="MapPin" size={12} className="inline mr-1" />
                      Brasil
                    </span>
                  )}
                </div>

                {/* Category */}
                <div className="absolute bottom-4 left-4">
                  <span className="bg-accent/90 text-accent-foreground px-3 py-1 rounded-full text-sm font-medium">
                    {story?.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-headline text-xl font-semibold text-foreground mb-3 leading-tight group-hover:text-primary transition-colors duration-300">
                  {story?.title}
                </h3>
                <p className="font-body text-muted-foreground mb-4 leading-relaxed">
                  {story?.excerpt}
                </p>

                {/* Meta Information */}
                <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                  <div className="flex items-center space-x-3">
                    <span className="flex items-center space-x-1">
                      <Icon name="User" size={14} />
                      <span>{story?.author}</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <Icon name="Clock" size={14} />
                      <span>{story?.readTime}</span>
                    </span>
                  </div>
                  <span className="flex items-center space-x-1">
                    <Icon name="Calendar" size={14} />
                    <span>{formatTimeAgo(story?.publishedAt)}</span>
                  </span>
                </div>

                {/* Read More Button */}
                <Link to="/story-detail-pages">
                  <Button 
                    variant="outline" 
                    size="sm"
                    fullWidth
                    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  >
                    Ler Matéria Completa
                    <Icon name="ArrowRight" size={14} className="ml-2" />
                  </Button>
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Link to={activeFilter === 'local' ? '/ouro-branco-local-news' : '/technology-insights-portal'}>
            <Button 
              variant="default"
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90"
            >
              Ver Todas as Notícias
              <Icon name="ArrowRight" size={18} className="ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NewsGrid;