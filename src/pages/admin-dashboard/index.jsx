import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/ui/Header';
import DashboardHeader from './components/DashboardHeader';
import MetricsOverview from './components/MetricsOverview';
import QuickActions from './components/QuickActions';
import RecentActivity from './components/RecentActivity';
import ContentManagement from './components/ContentManagement';
import AnalyticsChart from './components/AnalyticsChart';

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [chartType, setChartType] = useState('line');
  const [isAuthenticated, setIsAuthenticated] = useState(true); // Mock authentication

  // Mock user data
  const currentUser = {
    name: "Maria Silva",
    role: "Editora Chefe",
    email: "maria.silva@conexaoourobranco.com.br"
  };

  // Mock metrics data
  const dashboardMetrics = {
    storiesPublished: "47",
    activeReaders: "2.4K",
    engagement: "89%",
    newsletterSubs: "1.2K"
  };

  // Mock recent activities
  const recentActivities = [
    {
      id: 1,
      type: 'story_published',
      user: 'João Santos',
      action: 'publicou uma nova história',
      details: '"Desenvolvimento Tecnológico em Ouro Branco: Novas Oportunidades"',
      timestamp: new Date(Date.now() - 300000) // 5 minutes ago
    },
    {
      id: 2,
      type: 'comment_moderated',
      user: 'Maria Silva',
      action: 'moderou comentários',
      details: '3 comentários aprovados na história sobre educação digital',
      timestamp: new Date(Date.now() - 900000) // 15 minutes ago
    },
    {
      id: 3,
      type: 'media_uploaded',
      user: 'Carlos Oliveira',
      action: 'enviou novas imagens',
      details: 'Galeria de fotos do evento "Tech Talk Ouro Branco 2024"',
      timestamp: new Date(Date.now() - 1800000) // 30 minutes ago
    },
    {
      id: 4,
      type: 'user_registered',
      user: 'Sistema',
      action: 'registrou novos usuários',
      details: '5 novos assinantes da newsletter hoje',
      timestamp: new Date(Date.now() - 3600000) // 1 hour ago
    },
    {
      id: 5,
      type: 'newsletter_sent',
      user: 'Sistema Automático',
      action: 'enviou newsletter semanal',
      details: 'Newsletter "Conexão Semanal" enviada para 1.2K assinantes',
      timestamp: new Date(Date.now() - 7200000) // 2 hours ago
    }
  ];

  // Mock stories data
  const storiesData = [
    {
      id: 1,
      title: "Inovação Tecnológica Transforma Educação em Ouro Branco",
      author: "João Santos",
      status: "published",
      createdAt: "2024-01-05T10:30:00Z",
      views: 1247,
      category: "Tecnologia"
    },
    {
      id: 2,
      title: "Prefeitura Anuncia Novos Investimentos em Infraestrutura Digital",
      author: "Maria Silva",
      status: "published",
      createdAt: "2024-01-04T14:15:00Z",
      views: 892,
      category: "Local"
    },
    {
      id: 3,
      title: "Startup Local Desenvolve Solução para Agricultura Inteligente",
      author: "Carlos Oliveira",
      status: "draft",
      createdAt: "2024-01-06T09:00:00Z",
      views: 0,
      category: "Tecnologia"
    },
    {
      id: 4,
      title: "Festival de Tecnologia 2024: Programação Completa",
      author: "Ana Costa",
      status: "scheduled",
      createdAt: "2024-01-06T16:45:00Z",
      views: 0,
      category: "Eventos"
    },
    {
      id: 5,
      title: "Entrevista: Empreendedor Local Fala Sobre Inovação",
      author: "João Santos",
      status: "draft",
      createdAt: "2024-01-06T11:20:00Z",
      views: 0,
      category: "Entrevistas"
    }
  ];

  // Mock analytics data
  const analyticsData = [
    { date: '01/01', views: 1200, engagement: 89 },
    { date: '02/01', views: 1350, engagement: 92 },
    { date: '03/01', views: 1100, engagement: 85 },
    { date: '04/01', views: 1450, engagement: 94 },
    { date: '05/01', views: 1600, engagement: 97 },
    { date: '06/01', views: 1380, engagement: 91 },
    { date: '07/01', views: 1520, engagement: 95 }
  ];

  // Authentication check
  useEffect(() => {
    // Mock authentication check
    const checkAuth = () => {
      const isLoggedIn = localStorage.getItem('adminAuth') === 'true';
      if (!isLoggedIn) {
        // In a real app, redirect to login
        console.log('User not authenticated');
      }
      setIsAuthenticated(isLoggedIn);
    };

    checkAuth();
  }, []);

  // Event handlers
  const handleLogout = () => {
    localStorage.removeItem('adminAuth');
    setIsAuthenticated(false);
    navigate('/homepage');
  };

  const handleNewStory = () => {
    console.log('Creating new story...');
    // In a real app, navigate to story editor
  };

  const handleManageMedia = () => {
    console.log('Opening media manager...');
    // In a real app, open media management modal
  };

  const handleViewAnalytics = () => {
    console.log('Opening detailed analytics...');
    // In a real app, navigate to analytics page
  };

  const handleModerateComments = () => {
    console.log('Opening comment moderation...');
    // In a real app, navigate to comment moderation
  };

  const handleEditStory = (storyId) => {
    console.log(`Editing story ${storyId}...`);
    // In a real app, navigate to story editor with story ID
  };

  const handleDeleteStory = (storyId) => {
    console.log(`Deleting story ${storyId}...`);
    // In a real app, show confirmation dialog and delete story
  };

  const handlePublishStory = (storyId) => {
    console.log(`Publishing story ${storyId}...`);
    // In a real app, update story status to published
  };

  const handleChartTypeChange = (type) => {
    setChartType(type);
  };

  // Mock authentication screen
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">
            Acesso Restrito
          </h1>
          <p className="text-muted-foreground mb-6">
            Faça login para acessar o painel administrativo
          </p>
          <button
            onClick={() => {
              localStorage.setItem('adminAuth', 'true');
              setIsAuthenticated(true);
            }}
            className="px-6 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
          >
            Login Demo (admin@conexao.com / admin123)
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="pt-16">
        <DashboardHeader user={currentUser} onLogout={handleLogout} />
        
        <main className="max-w-7xl mx-auto p-6 space-y-8">
          <MetricsOverview metrics={dashboardMetrics} />
          
          <QuickActions
            onNewStory={handleNewStory}
            onManageMedia={handleManageMedia}
            onViewAnalytics={handleViewAnalytics}
            onModerateComments={handleModerateComments}
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <RecentActivity activities={recentActivities} />
            <AnalyticsChart
              data={analyticsData}
              chartType={chartType}
              onChartTypeChange={handleChartTypeChange}
            />
          </div>
          
          <ContentManagement
            stories={storiesData}
            onEditStory={handleEditStory}
            onDeleteStory={handleDeleteStory}
            onPublishStory={handlePublishStory}
          />
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;