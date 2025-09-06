import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import TechNewsCard from './components/TechNewsCard';
import FilterPanel from './components/FilterPanel';
import SearchAndSort from './components/SearchAndSort';
import TechStatsPanel from './components/TechStatsPanel';
import FeaturedTechStory from './components/FeaturedTechStory';

const TechnologyInsightsPortal = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('relevance');
  const [viewMode, setViewMode] = useState('grid');
  const [filters, setFilters] = useState({});
  const [isFilterCollapsed, setIsFilterCollapsed] = useState(false);
  const [bookmarkedArticles, setBookmarkedArticles] = useState(new Set());
  const [loading, setLoading] = useState(false);

  // Mock data for Brazilian tech news with local relevance
  const mockTechNews = [
    {
      id: 'tech-001',
      title: 'Inteligência Artificial Revoluciona Diagnósticos Médicos no Brasil',
      description: 'Nova tecnologia de IA desenvolvida por startup brasileira promete acelerar diagnósticos em hospitais públicos, com potencial impacto direto na saúde pública de cidades do interior.',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=450&fit=crop',
      category: 'health',
      relevance: 'high',
      publishedAt: '2025-01-06T14:30:00Z',
      author: 'Dr. Marina Santos',
      readTime: 8,
      views: 1250,
      localImpact: `Esta tecnologia pode ser implementada no Hospital Municipal de Ouro Branco, reduzindo o tempo de diagnóstico de doenças complexas e melhorando o atendimento à população local.`,
      tags: ['Inteligência Artificial', 'Saúde Pública', 'Diagnóstico Médico', 'Startup Brasil'],
      source: 'national'
    },
    {
      id: 'tech-002',
      title: 'Blockchain Transforma Gestão Pública em Minas Gerais',
      description: 'Governo de MG implementa sistema blockchain para transparência em licitações e contratos públicos, estabelecendo novo padrão de governança digital.',
      image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=450&fit=crop',
      category: 'infrastructure',
      relevance: 'high',
      publishedAt: '2025-01-06T11:15:00Z',
      author: 'Carlos Mendes',
      readTime: 6,
      views: 890,
      localImpact: `A prefeitura de Ouro Branco poderá adotar esta tecnologia para aumentar a transparência nas licitações municipais e fortalecer a confiança dos cidadãos na gestão pública.`,
      tags: ['Blockchain', 'Governo Digital', 'Transparência', 'Minas Gerais'],
      source: 'government'
    },
    {
      id: 'tech-003',
      title: 'Educação Digital: Plataforma Conecta Escolas Rurais à Internet',
      description: 'Iniciativa inovadora leva internet de alta velocidade e conteúdo educacional digital para escolas em áreas rurais de Minas Gerais.',
      image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=450&fit=crop',
      category: 'education',
      relevance: 'high',
      publishedAt: '2025-01-06T09:45:00Z',
      author: 'Ana Paula Silva',
      readTime: 7,
      views: 1100,
      localImpact: `As escolas rurais próximas a Ouro Branco podem se beneficiar desta conectividade, oferecendo aos estudantes acesso a recursos educacionais digitais de qualidade.`,
      tags: ['Educação Digital', 'Internet Rural', 'Inclusão Digital', 'Ensino Público'],
      source: 'national'
    },
    {
      id: 'tech-004',
      title: 'Startup Mineira Desenvolve App para Agricultura Sustentável',
      description: 'Aplicativo utiliza sensores IoT e machine learning para otimizar o uso de água e fertilizantes, promovendo agricultura mais sustentável.',
      image: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=800&h=450&fit=crop',
      category: 'environment',
      relevance: 'medium',
      publishedAt: '2025-01-06T08:20:00Z',
      author: 'Roberto Oliveira',
      readTime: 5,
      views: 650,
      localImpact: `Produtores rurais da região de Ouro Branco podem adotar esta tecnologia para melhorar a produtividade e reduzir o impacto ambiental de suas atividades.`,
      tags: ['AgTech', 'Sustentabilidade', 'IoT', 'Machine Learning'],
      source: 'startup'
    },
    {
      id: 'tech-005',
      title: 'Telemedicina Expande Atendimento em Cidades do Interior',
      description: 'Plataforma de telemedicina conecta especialistas de grandes centros com pacientes em cidades menores, democratizando o acesso à saúde especializada.',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=450&fit=crop',
      category: 'health',
      relevance: 'high',
      publishedAt: '2025-01-05T16:30:00Z',
      author: 'Dra. Fernanda Costa',
      readTime: 9,
      views: 1450,
      localImpact: `Moradores de Ouro Branco poderão ter acesso a consultas com especialistas de Belo Horizonte sem precisar se deslocar, melhorando significativamente o acesso à saúde.`,
      tags: ['Telemedicina', 'Saúde Digital', 'Acesso à Saúde', 'Interior'],
      source: 'national'
    },
    {
      id: 'tech-006',
      title: 'Fintech Brasileira Lança Cartão de Crédito Sustentável',
      description: 'Nova fintech oferece cartão feito de materiais recicláveis e planta árvores a cada compra, combinando tecnologia financeira com responsabilidade ambiental.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=450&fit=crop',
      category: 'business',
      relevance: 'medium',
      publishedAt: '2025-01-05T14:15:00Z',
      author: 'Lucas Ferreira',
      readTime: 4,
      views: 780,
      localImpact: `Pequenos comerciantes de Ouro Branco podem se beneficiar das taxas competitivas e contribuir para projetos ambientais locais através desta solução financeira.`,
      tags: ['Fintech', 'Sustentabilidade', 'Cartão de Crédito', 'Meio Ambiente'],
      source: 'startup'
    }
  ];

  const featuredStory = {
    id: 'featured-001',
    title: 'Revolução da Inteligência Artificial Chega ao Interior de Minas Gerais',
    description: 'Como pequenas cidades estão se preparando para a era da IA e quais oportunidades isso representa para comunidades como Ouro Branco.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&h=600&fit=crop',
    category: 'business',
    publishedAt: '2025-01-06T15:00:00Z',
    author: 'Equipe Editorial',
    readTime: 12,
    views: 2100,
    localImpact: `Ouro Branco tem potencial para se tornar um hub de inovação tecnológica na região, atraindo startups e investimentos em tecnologia que podem gerar empregos qualificados e desenvolvimento econômico sustentável.`,
    tags: ['Inteligência Artificial', 'Desenvolvimento Regional', 'Inovação', 'Futuro do Trabalho', 'Interior de MG']
  };

  const techStats = {
    totalArticles: 25,
    highRelevance: 12,
    bookmarked: bookmarkedArticles?.size,
    shared: 15
  };

  // Filter and search logic
  const filteredArticles = mockTechNews?.filter(article => {
    // Search filter
    if (searchQuery) {
      const searchLower = searchQuery?.toLowerCase();
      const matchesSearch = 
        article?.title?.toLowerCase()?.includes(searchLower) ||
        article?.description?.toLowerCase()?.includes(searchLower) ||
        article?.tags?.some(tag => tag?.toLowerCase()?.includes(searchLower)) ||
        article?.author?.toLowerCase()?.includes(searchLower);
      
      if (!matchesSearch) return false;
    }

    // Category filters
    if (filters?.category && filters?.category?.length > 0) {
      if (!filters?.category?.includes(article?.category)) return false;
    }

    // Relevance filters
    if (filters?.relevance && filters?.relevance?.length > 0) {
      if (!filters?.relevance?.includes(article?.relevance)) return false;
    }

    // Source filters
    if (filters?.source && filters?.source?.length > 0) {
      if (!filters?.source?.includes(article?.source)) return false;
    }

    return true;
  });

  // Sort logic
  const sortedArticles = [...filteredArticles]?.sort((a, b) => {
    switch (sortBy) {
      case 'date':
        return new Date(b.publishedAt) - new Date(a.publishedAt);
      case 'relevance':
        const relevanceOrder = { high: 3, medium: 2, low: 1 };
        return relevanceOrder?.[b?.relevance] - relevanceOrder?.[a?.relevance];
      case 'impact':
        return b?.views - a?.views;
      case 'popularity':
        return b?.views - a?.views;
      case 'alphabetical':
        return a?.title?.localeCompare(b?.title);
      default:
        return 0;
    }
  });

  const handleFilterChange = (categoryId, values) => {
    setFilters(prev => ({
      ...prev,
      [categoryId]: values
    }));
  };

  const handleClearFilters = () => {
    setFilters({});
    setSearchQuery('');
  };

  const handleBookmark = (articleId) => {
    setBookmarkedArticles(prev => {
      const newSet = new Set(prev);
      if (newSet?.has(articleId)) {
        newSet?.delete(articleId);
      } else {
        newSet?.add(articleId);
      }
      return newSet;
    });
  };

  const handleShare = (article) => {
    if (navigator.share) {
      navigator.share({
        title: article?.title,
        text: article?.description,
        url: window.location?.href
      });
    } else {
      // Fallback for browsers that don't support Web Share API
      navigator.clipboard?.writeText(window.location?.href);
      // You could show a toast notification here
    }
  };

  const getGridClasses = () => {
    switch (viewMode) {
      case 'list':
        return 'grid grid-cols-1 gap-6';
      case 'compact':
        return 'grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4';
      default: // grid
        return 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6';
    }
  };

  useEffect(() => {
    // Simulate loading when filters change
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 300);
    return () => clearTimeout(timer);
  }, [filters, searchQuery, sortBy]);

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Portal de Insights Tecnológicos - Conexão Ouro Branco</title>
        <meta name="description" content="Descubra as últimas tendências tecnológicas com relevância local para Ouro Branco. Notícias de tecnologia brasileira com análise de impacto regional." />
        <meta name="keywords" content="tecnologia, inovação, Ouro Branco, Minas Gerais, inteligência artificial, blockchain, startups" />
      </Helmet>
      <Header />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/10 via-accent/5 to-primary/5 border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="text-center mb-8">
              <div className="flex items-center justify-center space-x-2 mb-4">
                <Icon name="Cpu" size={32} className="text-primary" />
                <h1 className="font-headline text-4xl lg:text-5xl font-bold text-foreground">
                  Portal de Insights Tecnológicos
                </h1>
              </div>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Conectando Ouro Branco às inovações que moldam o futuro. 
                Tecnologia brasileira com relevância local e impacto regional.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center space-x-1">
                <Icon name="Globe" size={16} />
                <span>Cobertura Nacional</span>
              </div>
              <div className="flex items-center space-x-1">
                <Icon name="MapPin" size={16} />
                <span>Relevância Local</span>
              </div>
              <div className="flex items-center space-x-1">
                <Icon name="TrendingUp" size={16} />
                <span>Análise de Impacto</span>
              </div>
              <div className="flex items-center space-x-1">
                <Icon name="Clock" size={16} />
                <span>Atualizado Diariamente</span>
              </div>
            </div>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Stats Panel */}
          <TechStatsPanel stats={techStats} />

          {/* Featured Story */}
          <FeaturedTechStory
            story={featuredStory}
            onBookmark={handleBookmark}
            onShare={handleShare}
            isBookmarked={bookmarkedArticles?.has(featuredStory?.id)}
          />

          {/* Search and Sort */}
          <SearchAndSort
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            sortBy={sortBy}
            onSortChange={setSortBy}
            viewMode={viewMode}
            onViewModeChange={setViewMode}
            totalResults={sortedArticles?.length}
          />

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Filters Sidebar */}
            <div className="lg:col-span-1">
              <FilterPanel
                filters={filters}
                onFilterChange={handleFilterChange}
                onClearFilters={handleClearFilters}
                isCollapsed={isFilterCollapsed}
                onToggleCollapse={() => setIsFilterCollapsed(!isFilterCollapsed)}
              />
            </div>

            {/* Articles Grid */}
            <div className="lg:col-span-3">
              {loading ? (
                <div className="flex items-center justify-center py-12">
                  <div className="flex items-center space-x-2">
                    <div className="w-6 h-6 border-2 border-primary border-t-transparent rounded-full animate-spin"></div>
                    <span className="text-muted-foreground">Carregando artigos...</span>
                  </div>
                </div>
              ) : sortedArticles?.length > 0 ? (
                <div className={getGridClasses()}>
                  {sortedArticles?.map((article) => (
                    <TechNewsCard
                      key={article?.id}
                      article={article}
                      onBookmark={handleBookmark}
                      onShare={handleShare}
                      isBookmarked={bookmarkedArticles?.has(article?.id)}
                    />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <Icon name="Search" size={48} className="text-muted-foreground mx-auto mb-4" />
                  <h3 className="font-headline text-xl font-semibold text-foreground mb-2">
                    Nenhum artigo encontrado
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Tente ajustar seus filtros ou termo de busca para encontrar mais conteúdo.
                  </p>
                  <Button
                    variant="outline"
                    onClick={handleClearFilters}
                    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  >
                    <Icon name="RotateCcw" size={16} className="mr-2" />
                    Limpar Filtros
                  </Button>
                </div>
              )}

              {/* Load More Button */}
              {sortedArticles?.length > 0 && (
                <div className="text-center mt-12">
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  >
                    <Icon name="Plus" size={18} className="mr-2" />
                    Carregar Mais Artigos
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Newsletter CTA */}
        <section className="bg-gradient-to-r from-primary/10 to-accent/10 border-t border-border mt-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
            <Icon name="Bell" size={48} className="text-primary mx-auto mb-6" />
            <h2 className="font-headline text-3xl font-bold text-foreground mb-4">
              Mantenha-se Atualizado
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Receba as principais tendências tecnológicas com relevância para Ouro Branco 
              diretamente no seu email.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Button
                variant="default"
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90"
              >
                <Icon name="Mail" size={18} className="mr-2" />
                Assinar Newsletter Tech
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-accent text-accent hover:bg-accent hover:text-accent-foreground"
              >
                <Icon name="Smartphone" size={18} className="mr-2" />
                Baixar App
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default TechnologyInsightsPortal;