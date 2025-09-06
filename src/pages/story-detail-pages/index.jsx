import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import StoryHeader from './components/StoryHeader';
import StoryContent from './components/StoryContent';
import SocialShare from './components/SocialShare';
import CommentSection from './components/CommentSection';
import RelatedStories from './components/RelatedStories';
import StoryTipForm from './components/StoryTipForm';

const StoryDetailPages = () => {
  const { id } = useParams();
  const [story, setStory] = useState(null);
  const [bookmarkedStories, setBookmarkedStories] = useState([]);
  const [showShareModal, setShowShareModal] = useState(false);
  const [shareQuote, setShareQuote] = useState(null);
  const [loading, setLoading] = useState(true);

  // Mock stories data
  const mockStories = [
    {
      id: 1,
      title: "Nova Praça Central de Ouro Branco Será Inaugurada em Dezembro",
      subtitle: "Projeto de revitalização urbana promete transformar o centro da cidade com espaços verdes, área de convivência e infraestrutura moderna para toda a família.",
      content: `A Prefeitura de Ouro Branco anunciou oficialmente que a nova Praça Central será inaugurada no próximo mês de dezembro, marcando um importante marco na revitalização do centro histórico da cidade.\n\nO projeto, que teve início em março deste ano, representa um investimento de R$ 2,8 milhões em recursos municipais e estaduais. A nova praça contará com área total de 3.500 metros quadrados, incluindo jardins paisagísticos, playground infantil, academia ao ar livre e um palco para eventos culturais.\n\n"Esta praça representa muito mais que um espaço público renovado. É um símbolo do nosso compromisso com a qualidade de vida dos moradores de Ouro Branco", declarou o prefeito João Silva durante coletiva de imprensa realizada na manhã desta terça-feira.\n\nO projeto arquitetônico, desenvolvido pelo escritório local Arquitetura & Cidade, priorizou a sustentabilidade e a acessibilidade. Todas as áreas contarão com rampas de acesso, pisos táteis e iluminação LED de baixo consumo energético.\n\nA nova praça também abrigará uma fonte ornamental que funcionará com sistema de recirculação de água, reduzindo o consumo hídrico em 60% comparado aos sistemas convencionais. O paisagismo utilizará espécies nativas da região, contribuindo para a preservação da flora local.\n\nSegundo a Secretaria de Obras, as obras estão 85% concluídas e dentro do cronograma estabelecido. A inauguração está prevista para o dia 15 de dezembro, com uma festa comunitária que contará com apresentações musicais de artistas locais.\n\nA população poderá acompanhar os últimos detalhes da construção através do portal da transparência municipal, onde são publicadas atualizações semanais sobre o andamento dos trabalhos.`,
      category: 'local',
      author: {
        name: 'Maria Santos',
        role: 'Repórter Local',
        avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face'
      },
      publishedAt: '2024-11-15T10:30:00Z',
      featuredImage: {
        url: 'https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=800&h=500&fit=crop',
        caption: 'Projeto arquitetônico da nova Praça Central de Ouro Branco',
        credit: 'Prefeitura Municipal'
      },
      tags: ['urbanismo', 'obras públicas', 'centro histórico']
    },
    {
      id: 2,
      title: "Startup Mineira Desenvolve App para Conectar Produtores Rurais",
      subtitle: "Plataforma digital criada em Belo Horizonte promete revolucionar a comercialização de produtos agrícolas, conectando diretamente produtores e consumidores.",
      content: `Uma startup sediada em Belo Horizonte está chamando atenção no cenário tecnológico nacional com o desenvolvimento de uma plataforma digital inovadora voltada para o agronegócio. O aplicativo "Campo Direto" promete revolucionar a forma como produtores rurais comercializam seus produtos.\n\nFundada pelos engenheiros de software Pedro Oliveira e Ana Costa, ambos formados pela UFMG, a empresa surgiu da necessidade identificada durante visitas a propriedades rurais na região metropolitana de Belo Horizonte.\n\n"Percebemos que muitos pequenos produtores tinham dificuldade para escoar sua produção e encontrar compradores que valorizassem a qualidade dos produtos locais", explica Pedro Oliveira, CEO da startup.\n\nO aplicativo funciona como uma ponte digital entre produtores rurais e consumidores finais, eliminando intermediários e garantindo preços mais justos para ambas as partes. A plataforma já conta com mais de 200 produtores cadastrados em Minas Gerais.\n\nEntre as funcionalidades do app estão: catálogo de produtos com fotos e descrições detalhadas, sistema de avaliações e comentários, rastreamento de pedidos em tempo real e integração com sistemas de pagamento digital.\n\nA startup recebeu recentemente um aporte de R$ 500 mil do programa de aceleração TechStart MG, do governo estadual. Os recursos serão utilizados para expandir a operação para outros estados da região Sudeste.\n\n"Nosso objetivo é democratizar o acesso ao mercado para pequenos produtores, ao mesmo tempo em que oferecemos aos consumidores produtos frescos, de qualidade e com origem rastreável", destaca Ana Costa, CTO da empresa.\n\nO aplicativo está disponível gratuitamente para Android e iOS, e a empresa planeja lançar uma versão web até o final do ano.`,
      category: 'technology',
      author: {
        name: 'Carlos Mendes',
        role: 'Editor de Tecnologia',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face'
      },
      publishedAt: '2024-11-14T14:20:00Z',
      featuredImage: {
        url: 'https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=800&h=500&fit=crop',
        caption: 'Interface do aplicativo Campo Direto em desenvolvimento',
        credit: 'Campo Direto/Divulgação'
      },
      tags: ['startup', 'agronegócio', 'tecnologia', 'minas gerais']
    },
    {
      id: 3,
      title: "Escola Municipal de Ouro Branco Conquista Prêmio Nacional de Educação",
      subtitle: "Projeto pedagógico inovador da Escola Municipal Santos Dumont é reconhecido pelo Ministério da Educação como exemplo de excelência educacional.",
      content: `A Escola Municipal Santos Dumont, localizada no bairro Centro de Ouro Branco, foi contemplada com o Prêmio Nacional de Educação 2024, concedido pelo Ministério da Educação. O reconhecimento veio através do projeto "Aprendendo com a Comunidade", que integra conhecimentos tradicionais locais ao currículo escolar.\n\nO projeto, coordenado pela diretora pedagógica Luciana Ferreira, envolve 280 alunos do ensino fundamental em atividades que conectam o aprendizado formal com saberes da comunidade local. Idosos, artesãos e trabalhadores rurais participam como "professores comunitários", compartilhando experiências e conhecimentos.\n\n"A ideia surgiu da necessidade de tornar o aprendizado mais significativo para nossos alunos. Quando eles veem a aplicação prática dos conteúdos em suas próprias vidas, o interesse e o rendimento aumentam consideravelmente", explica Luciana.\n\nO projeto abrange diversas disciplinas: em matemática, os alunos aprendem geometria através da construção de hortas; em história, conhecem relatos de moradores antigos sobre a formação da cidade; em ciências, estudam plantas medicinais com curandeiros locais.\n\nOs resultados são impressionantes: a escola registrou aumento de 35% no índice de aprovação e redução de 40% na evasão escolar. O projeto também fortaleceu os laços entre escola e comunidade, com a participação ativa de mais de 50 voluntários.\n\n"Este prêmio não é apenas nosso, é de toda a comunidade de Ouro Branco. Ele reconhece a riqueza dos saberes locais e a importância de valorizá-los no processo educativo", celebra a diretora.\n\nA premiação será entregue em cerimônia oficial em Brasília no próximo mês, e a escola receberá R$ 50 mil para investir em melhorias na infraestrutura educacional.`,
      category: 'local',
      author: {
        name: 'Roberto Lima',
        role: 'Correspondente Educacional',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face'
      },
      publishedAt: '2024-11-13T09:15:00Z',
      featuredImage: {
        url: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&h=500&fit=crop',
        caption: 'Alunos da Escola Municipal Santos Dumont durante atividade do projeto premiado',
        credit: 'Secretaria Municipal de Educação'
      },
      tags: ['educação', 'prêmio nacional', 'comunidade', 'inovação pedagógica']
    }
  ];

  // Mock comments data
  const mockComments = [
    {
      id: 1,
      author: {
        name: 'Ana Silva',
        avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face'
      },
      content: 'Excelente notícia! Ouro Branco realmente precisava de mais espaços públicos de qualidade. Mal posso esperar para levar meus filhos na nova praça.',
      timestamp: new Date(Date.now() - 3600000), // 1 hour ago
      likes: 12,
      replies: [
        {
          id: 11,
          author: {
            name: 'João Santos',
            avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face'
          },
          content: 'Concordo plenamente! E o projeto parece ter pensado em acessibilidade, o que é fundamental.',
          timestamp: new Date(Date.now() - 1800000), // 30 minutes ago
          likes: 5
        }
      ]
    },
    {
      id: 2,
      author: {
        name: 'Carlos Oliveira',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face'
      },
      content: 'Ótima iniciativa da prefeitura! Espero que mantenham a praça bem cuidada após a inauguração. Já vi muitos projetos bonitos que foram abandonados depois.',
      timestamp: new Date(Date.now() - 7200000), // 2 hours ago
      likes: 8,
      replies: []
    },
    {
      id: 3,
      author: {
        name: 'Maria Costa',
        avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face'
      },
      content: 'Parabéns pela matéria! Muito bem detalhada. Seria interessante ter mais informações sobre os eventos culturais que acontecerão no palco.',
      timestamp: new Date(Date.now() - 10800000), // 3 hours ago
      likes: 6,
      replies: []
    }
  ];

  useEffect(() => {
    // Simulate loading
    setLoading(true);
    setTimeout(() => {
      const currentStory = mockStories?.find(s => s?.id === parseInt(id)) || mockStories?.[0];
      setStory(currentStory);
      setLoading(false);
    }, 1000);

    // Load bookmarked stories from localStorage
    const saved = localStorage.getItem('bookmarkedStories');
    if (saved) {
      setBookmarkedStories(JSON.parse(saved));
    }
  }, [id]);

  const handleBookmark = (storyId) => {
    const isBookmarked = bookmarkedStories?.includes(storyId);
    let newBookmarks;
    
    if (isBookmarked) {
      newBookmarks = bookmarkedStories?.filter(id => id !== storyId);
    } else {
      newBookmarks = [...bookmarkedStories, storyId];
    }
    
    setBookmarkedStories(newBookmarks);
    localStorage.setItem('bookmarkedStories', JSON.stringify(newBookmarks));
  };

  const handleShare = (storyData, quote = null) => {
    setShareQuote(quote);
    setShowShareModal(true);
  };

  const handleQuoteShare = (quote) => {
    handleShare(story, quote);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="pt-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="animate-pulse">
              <div className="h-8 bg-muted rounded w-1/4 mb-4"></div>
              <div className="h-12 bg-muted rounded w-3/4 mb-6"></div>
              <div className="h-6 bg-muted rounded w-1/2 mb-8"></div>
              <div className="h-64 bg-muted rounded mb-8"></div>
              <div className="space-y-4">
                <div className="h-4 bg-muted rounded"></div>
                <div className="h-4 bg-muted rounded w-5/6"></div>
                <div className="h-4 bg-muted rounded w-4/6"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!story) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="pt-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
            <div className="w-16 h-16 bg-error/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="AlertCircle" size={32} className="text-error" />
            </div>
            <h1 className="font-headline text-2xl font-bold text-foreground mb-2">
              História não encontrada
            </h1>
            <p className="text-muted-foreground mb-6">
              A história que você está procurando não existe ou foi removida.
            </p>
            <Link to="/ouro-branco-local-news">
              <Button variant="default" className="bg-accent text-accent-foreground hover:bg-accent/90">
                <Icon name="ArrowLeft" size={16} className="mr-2" />
                Voltar às notícias
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="pt-16">
        {/* Breadcrumb */}
        <div className="bg-muted/30 border-b border-border">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
            <nav className="flex items-center space-x-2 text-sm">
              <Link to="/homepage" className="text-muted-foreground hover:text-primary">
                Início
              </Link>
              <Icon name="ChevronRight" size={14} className="text-muted-foreground" />
              <Link 
                to={story?.category === 'local' ? '/ouro-branco-local-news' : '/technology-insights-portal'} 
                className="text-muted-foreground hover:text-primary"
              >
                {story?.category === 'local' ? 'Notícias Locais' : 'Tecnologia'}
              </Link>
              <Icon name="ChevronRight" size={14} className="text-muted-foreground" />
              <span className="text-foreground truncate">{story?.title}</span>
            </nav>
          </div>
        </div>

        {/* Main Content */}
        <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <article>
            {/* Story Header */}
            <StoryHeader
              story={story}
              onShare={handleShare}
              onBookmark={handleBookmark}
              isBookmarked={bookmarkedStories?.includes(story?.id)}
            />

            {/* Story Content */}
            <StoryContent
              content={story?.content}
              onQuoteShare={handleQuoteShare}
            />

            {/* Social Share */}
            <div className="mt-8">
              <SocialShare story={story} />
            </div>

            {/* Tags */}
            {story?.tags && story?.tags?.length > 0 && (
              <div className="mt-8 pt-6 border-t border-border">
                <h3 className="font-medium text-foreground mb-3">Tags:</h3>
                <div className="flex flex-wrap gap-2">
                  {story?.tags?.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-muted text-muted-foreground hover:bg-accent/10 hover:text-primary transition-colors duration-200"
                    >
                      <Icon name="Hash" size={12} className="mr-1" />
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </article>

          {/* Comments Section */}
          <CommentSection
            storyId={story?.id}
            initialComments={mockComments}
          />

          {/* Story Tip Form */}
          <div className="mt-12">
            <StoryTipForm />
          </div>

          {/* Related Stories */}
          <RelatedStories
            stories={mockStories}
            currentStoryId={story?.id}
          />
        </main>

        {/* Share Modal */}
        {showShareModal && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div className="bg-card rounded-lg max-w-md w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-headline text-lg font-semibold text-foreground">
                    Compartilhar História
                  </h3>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setShowShareModal(false)}
                  >
                    <Icon name="X" size={20} />
                  </Button>
                </div>
                <SocialShare story={story} quote={shareQuote} />
              </div>
            </div>
          </div>
        )}

        {/* Back to Top Button */}
        <div className="fixed bottom-6 right-6">
          <Button
            variant="outline"
            size="icon"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="w-12 h-12 rounded-full shadow-lg bg-card border-border hover:bg-accent/10"
          >
            <Icon name="ArrowUp" size={20} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default StoryDetailPages;