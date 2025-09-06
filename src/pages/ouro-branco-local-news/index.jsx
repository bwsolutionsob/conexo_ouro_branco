import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import NewsHero from './components/NewsHero';
import CategoryFilter from './components/CategoryFilter';
import NewsGrid from './components/NewsGrid';
import CommunityCalendar from './components/CommunityCalendar';
import LocalBusinessSpotlight from './components/LocalBusinessSpotlight';
import StoryTipForm from './components/StoryTipForm';
import SearchAndFilters from './components/SearchAndFilters';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';

const OuroBrancoLocalNews = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [stories, setStories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchResults, setSearchResults] = useState(0);

  // Mock data for featured story
  const featuredStory = {
    id: 1,
    title: "Nova Praça Central de Ouro Branco Será Inaugurada em Dezembro",
    excerpt: "Projeto de revitalização do centro da cidade inclui área de lazer, playground infantil e espaço para eventos comunitários. Investimento de R$ 2,5 milhões transformará o coração de Ouro Branco.",
    image: "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=800&h=600&fit=crop",
    category: "Infraestrutura",
    author: "Maria Santos",
    publishDate: "05 de Dezembro, 2025",
    readTime: 5,
    views: "1.2K",
    comments: 23
  };

  // Mock data for categories
  const categories = [
    { id: 'all', name: 'Todas', icon: 'Grid3x3', color: '#6B7280', count: 48 },
    { id: 'politics', name: 'Política Municipal', icon: 'Building', color: '#1E40AF', count: 12 },
    { id: 'business', name: 'Negócios Locais', icon: 'Store', color: '#059669', count: 8 },
    { id: 'community', name: 'Eventos Comunitários', icon: 'Users', color: '#D97706', count: 15 },
    { id: 'infrastructure', name: 'Infraestrutura', icon: 'Construction', color: '#DC2626', count: 7 },
    { id: 'education', name: 'Educação', icon: 'GraduationCap', color: '#7C3AED', count: 6 }
  ];

  // Mock data for news stories
  const mockStories = [
    {
      id: 2,
      title: "Câmara Municipal Aprova Orçamento 2026 com Foco em Educação",
      excerpt: "Sessão extraordinária definiu destinação de 35% do orçamento para melhorias na rede municipal de ensino. Construção de duas novas escolas está prevista para o primeiro semestre.",
      image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=400&h=300&fit=crop",
      category: "Política Municipal",
      categoryColor: "#1E40AF",
      author: "João Silva",
      publishDate: "04 de Dezembro, 2025",
      views: "856",
      comments: 15,
      priority: "normal"
    },
    {
      id: 3,
      title: "Padaria Mineira Completa 50 Anos Servindo a Comunidade",
      excerpt: "Família Oliveira celebra meio século de tradição no centro da cidade. Receitas artesanais passadas de geração em geração mantêm o sabor autêntico do pão de açúcar mineiro.",
      image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400&h=300&fit=crop",
      category: "Negócios Locais",
      categoryColor: "#059669",
      author: "Ana Costa",
      publishDate: "03 de Dezembro, 2025",
      views: "642",
      comments: 28,
      priority: "normal"
    },
    {
      id: 4,
      title: "Festival de Inverno 2025 Atrai Mais de 5 Mil Visitantes",
      excerpt: "Evento cultural movimentou a economia local durante três dias. Apresentações musicais, feira gastronômica e exposição de artesanato regional marcaram a programação.",
      image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=400&h=300&fit=crop",
      category: "Eventos Comunitários",
      categoryColor: "#D97706",
      author: "Carlos Mendes",
      publishDate: "02 de Dezembro, 2025",
      views: "1.1K",
      comments: 42,
      priority: "normal"
    },
    {
      id: 5,
      title: "URGENTE: Interdição na Rua Principal por Vazamento de Água",
      excerpt: "COPASA trabalha para reparar rompimento na rede de abastecimento. Trânsito desviado pela Rua São José até conclusão dos reparos, prevista para esta tarde.",
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&h=300&fit=crop",
      category: "Infraestrutura",
      categoryColor: "#DC2626",
      author: "Redação",
      publishDate: "05 de Dezembro, 2025",
      views: "2.3K",
      comments: 8,
      priority: "urgent"
    },
    {
      id: 6,
      title: "Escola Municipal Conquista Prêmio Estadual de Inovação",
      excerpt: "Projeto de horta escolar desenvolvido pelos alunos do 5º ano foi reconhecido pela Secretaria de Educação de Minas Gerais. Iniciativa será replicada em outras unidades.",
      image: "https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=400&h=300&fit=crop",
      category: "Educação",
      categoryColor: "#7C3AED",
      author: "Fernanda Lima",
      publishDate: "01 de Dezembro, 2025",
      views: "789",
      comments: 19,
      priority: "normal"
    },
    {
      id: 7,
      title: "Novo Sistema de Coleta Seletiva Inicia Operação",
      excerpt: "Programa piloto atenderá inicialmente os bairros Centro e Vila Nova. Caminhões especializados farão coleta duas vezes por semana, com cronograma divulgado pela prefeitura.",
      image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=400&h=300&fit=crop",
      category: "Infraestrutura",
      categoryColor: "#DC2626",
      author: "Roberto Alves",
      publishDate: "30 de Novembro, 2025",
      views: "567",
      comments: 12,
      priority: "normal"
    }
  ];

  // Mock data for community events
  const communityEvents = [
    {
      id: 1,
      title: "Sessão Ordinária da Câmara Municipal",
      description: "Discussão do projeto de lei sobre mobilidade urbana e apresentação do relatório trimestral de obras públicas.",
      date: "2025-12-08",
      time: "19:00",
      location: "Câmara Municipal",
      category: "Política"
    },
    {
      id: 2,
      title: "Feira de Artesanato de Natal",
      description: "Exposição e venda de produtos artesanais locais. Participação de 30 artesãos da região com peças exclusivas para o Natal.",
      date: "2025-12-10",
      time: "08:00",
      location: "Praça Central",
      category: "Cultura"
    },
    {
      id: 3,
      title: "Campanha de Vacinação Antirrábica",
      description: "Vacinação gratuita para cães e gatos. Não é necessário agendamento, apenas levar o animal com coleira ou caixa de transporte.",
      date: "2025-12-12",
      time: "08:00",
      location: "Centro de Saúde",
      category: "Saúde"
    },
    {
      id: 4,
      title: "Torneio de Futebol Amador",
      description: "Campeonato entre equipes locais com premiação para os três primeiros colocados. Inscrições abertas até o dia 15.",
      date: "2025-12-15",
      time: "14:00",
      location: "Campo Municipal",
      category: "Esporte"
    }
  ];

  // Mock data for local businesses
  const localBusinesses = [
    {
      id: 1,
      name: "Restaurante Sabor Mineiro",
      description: "Culinária tradicional mineira com ingredientes frescos da região. Especialidade em comida caseira e pratos típicos.",
      logo: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=100&h=100&fit=crop",
      location: "Centro",
      phone: "(31) 3555-1234",
      category: "Gastronomia",
      rating: 5,
      reviews: 127
    },
    {
      id: 2,
      name: "Farmácia São José",
      description: "Atendimento farmacêutico especializado há 25 anos. Delivery gratuito e programa de fidelidade para medicamentos contínuos.",
      logo: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=100&h=100&fit=crop",
      location: "Rua Principal, 456",
      phone: "(31) 3555-5678",
      category: "Saúde",
      rating: 4,
      reviews: 89
    },
    {
      id: 3,
      name: "Auto Peças Ouro Branco",
      description: "Peças originais e paralelas para todos os tipos de veículos. Oficina mecânica especializada em manutenção preventiva.",
      logo: "https://images.unsplash.com/photo-1486754735734-325b5831c3ad?w=100&h=100&fit=crop",
      location: "Av. Industrial, 789",
      phone: "(31) 3555-9012",
      category: "Automotivo",
      rating: 4,
      reviews: 56
    }
  ];

  useEffect(() => {
    // Simulate loading data
    const loadStories = async () => {
      setLoading(true);
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const filteredStories = activeCategory === 'all' 
        ? mockStories 
        : mockStories?.filter(story => {
            const categoryMap = {
              'politics': 'Política Municipal',
              'business': 'Negócios Locais',
              'community': 'Eventos Comunitários',
              'infrastructure': 'Infraestrutura',
              'education': 'Educação'
            };
            return story?.category === categoryMap?.[activeCategory];
          });
      
      setStories(filteredStories);
      setSearchResults(filteredStories?.length);
      setLoading(false);
    };

    loadStories();
  }, [activeCategory]);

  const handleCategoryChange = (categoryId) => {
    setActiveCategory(categoryId);
  };

  const handleSearch = (searchTerm, filters) => {
    // Simulate search functionality
    console.log('Searching for:', searchTerm, 'with filters:', filters);
    // In real app, this would make API call with search parameters
  };

  const handleFilterChange = (filters) => {
    // Simulate filter functionality
    console.log('Applying filters:', filters);
    // In real app, this would update the stories based on filters
  };

  const handleStoryTipSubmit = (tipData) => {
    console.log('Story tip submitted:', tipData);
    // In real app, this would send data to backend
  };

  return (
    <>
      <Helmet>
        <title>Notícias Locais - Ouro Branco | Conexão Ouro Branco</title>
        <meta name="description" content="Acompanhe as principais notícias de Ouro Branco: política municipal, negócios locais, eventos comunitários e infraestrutura. Sua fonte confiável de informação local." />
        <meta name="keywords" content="Ouro Branco, notícias locais, política municipal, eventos, negócios locais, Minas Gerais" />
        <meta property="og:title" content="Notícias Locais - Ouro Branco | Conexão Ouro Branco" />
        <meta property="og:description" content="Fique por dentro do que acontece em Ouro Branco com nossa cobertura completa de notícias locais." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="/ouro-branco-local-news" />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Header />
        
        {/* Main Content */}
        <main className="pt-16">
          {/* Hero Section */}
          <NewsHero featuredStory={featuredStory} />
          
          {/* Category Filter */}
          <CategoryFilter 
            categories={categories}
            activeCategory={activeCategory}
            onCategoryChange={handleCategoryChange}
          />
          
          {/* Content Grid */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="grid lg:grid-cols-4 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-3 space-y-8">
                {/* Search and Filters */}
                <SearchAndFilters 
                  onSearch={handleSearch}
                  onFilterChange={handleFilterChange}
                  totalResults={searchResults}
                />
                
                {/* News Grid */}
                <section>
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="font-headline text-2xl font-semibold text-foreground">
                      {activeCategory === 'all' ? 'Todas as Notícias' : categories?.find(cat => cat?.id === activeCategory)?.name}
                    </h2>
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <Icon name="Clock" size={16} />
                      <span>Atualizado há 5 minutos</span>
                    </div>
                  </div>
                  
                  <NewsGrid stories={stories} loading={loading} />
                  
                  {/* Load More */}
                  {!loading && stories?.length > 0 && (
                    <div className="text-center mt-8">
                      <Button 
                        variant="outline"
                        className="border-primary text-primary hover:bg-primary hover:text-white"
                      >
                        <Icon name="ChevronDown" size={16} className="mr-2" />
                        Carregar Mais Notícias
                      </Button>
                    </div>
                  )}
                </section>
              </div>
              
              {/* Sidebar */}
              <div className="lg:col-span-1 space-y-6">
                {/* Community Calendar */}
                <CommunityCalendar events={communityEvents} />
                
                {/* Local Business Spotlight */}
                <LocalBusinessSpotlight businesses={localBusinesses} />
                
                {/* Newsletter Signup */}
                <section className="bg-gradient-to-br from-accent/10 to-primary/10 rounded-lg border border-accent/20 p-6 text-center">
                  <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="Bell" size={24} className="text-primary" />
                  </div>
                  <h3 className="font-headline text-lg font-semibold text-foreground mb-2">
                    Newsletter Local
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Receba as principais notícias de Ouro Branco direto no seu email.
                  </p>
                  <Button 
                    variant="default"
                    size="sm"
                    fullWidth
                    className="bg-accent text-accent-foreground hover:bg-accent/90"
                  >
                    <Icon name="Mail" size={16} className="mr-2" />
                    Assinar Newsletter
                  </Button>
                </section>
                
                {/* Quick Stats */}
                <section className="bg-card rounded-lg border border-border p-6">
                  <h3 className="font-headline text-lg font-semibold text-foreground mb-4">
                    Estatísticas da Semana
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Matérias publicadas</span>
                      <span className="font-medium text-foreground">24</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Leitores únicos</span>
                      <span className="font-medium text-foreground">3.2K</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Comentários</span>
                      <span className="font-medium text-foreground">156</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Dicas recebidas</span>
                      <span className="font-medium text-foreground">8</span>
                    </div>
                  </div>
                </section>
              </div>
            </div>
            
            {/* Story Tip Form */}
            <div className="mt-12">
              <StoryTipForm onSubmit={handleStoryTipSubmit} />
            </div>
          </div>
        </main>
        
        {/* Footer */}
        <footer className="bg-card border-t border-border mt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="text-center">
              <div className="flex items-center justify-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-accent to-primary rounded-lg flex items-center justify-center">
                  <Icon name="Zap" size={16} color="white" strokeWidth={2.5} />
                </div>
                <span className="font-headline text-lg font-semibold text-foreground">
                  Conexão Ouro Branco
                </span>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                Sua fonte confiável de notícias locais e insights tecnológicos
              </p>
              <p className="text-xs text-muted-foreground">
                © {new Date()?.getFullYear()} Conexão Ouro Branco. Todos os direitos reservados.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default OuroBrancoLocalNews;