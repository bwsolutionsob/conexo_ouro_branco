import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import NewsGrid from './components/NewsGrid';
import NewsletterSection from './components/NewsletterSection';
import CommunitySection from './components/CommunitySection';

const Homepage = () => {
  return (
    <>
      <Helmet>
        <title>Conexão Ouro Branco - Notícias Locais e Insights Tecnológicos</title>
        <meta 
          name="description" 
          content="Sua fonte confiável para notícias de Ouro Branco e insights tecnológicos. Conectando nossa comunidade ao futuro através do jornalismo de qualidade." 
        />
        <meta name="keywords" content="Ouro Branco, notícias locais, tecnologia, jornalismo, Minas Gerais, comunidade" />
        <meta property="og:title" content="Conexão Ouro Branco - Notícias Locais e Insights Tecnológicos" />
        <meta property="og:description" content="Sua fonte confiável para notícias de Ouro Branco e insights tecnológicos." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="/homepage" />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="pt-16">
          {/* Hero Section with Featured Stories */}
          <HeroSection />
          
          {/* Latest News Grid */}
          <NewsGrid />
          
          {/* Community Section */}
          <CommunitySection />
          
          {/* Newsletter Subscription */}
          <NewsletterSection />
        </main>

        {/* Footer */}
        <footer className="bg-card border-t border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Brand */}
              <div className="lg:col-span-2">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-accent to-primary rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-lg">C</span>
                  </div>
                  <div>
                    <h3 className="font-headline text-xl font-bold text-foreground">
                      Conexão Ouro Branco
                    </h3>
                    <p className="font-accent text-sm text-muted-foreground">
                      Comunidade & Inovação
                    </p>
                  </div>
                </div>
                <p className="font-body text-muted-foreground mb-6 max-w-md">
                  Conectando nossa comunidade através do jornalismo de qualidade, 
                  unindo histórias locais com perspectivas tecnológicas globais.
                </p>
                <div className="flex space-x-4">
                  {['Facebook', 'Twitter', 'Instagram', 'Youtube']?.map((social) => (
                    <a
                      key={social}
                      href="#"
                      className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-colors duration-300"
                    >
                      <span className="sr-only">{social}</span>
                      <div className="w-5 h-5 bg-current rounded" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Quick Links */}
              <div>
                <h4 className="font-body text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
                  Navegação
                </h4>
                <ul className="space-y-3">
                  {[
                    { name: 'Início', path: '/homepage' },
                    { name: 'Notícias Locais', path: '/ouro-branco-local-news' },
                    { name: 'Tecnologia', path: '/technology-insights-portal' },
                    { name: 'Histórias', path: '/story-detail-pages' }
                  ]?.map((link) => (
                    <li key={link?.name}>
                      <a
                        href={link?.path}
                        className="font-body text-muted-foreground hover:text-primary transition-colors duration-300"
                      >
                        {link?.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact Info */}
              <div>
                <h4 className="font-body text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
                  Contato
                </h4>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2 text-muted-foreground">
                    <div className="w-4 h-4 bg-current rounded" />
                    <span className="font-body text-sm">contato@conexaoob.com.br</span>
                  </div>
                  <div className="flex items-center space-x-2 text-muted-foreground">
                    <div className="w-4 h-4 bg-current rounded" />
                    <span className="font-body text-sm">(31) 3555-0123</span>
                  </div>
                  <div className="flex items-center space-x-2 text-muted-foreground">
                    <div className="w-4 h-4 bg-current rounded" />
                    <span className="font-body text-sm">Ouro Branco, MG</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-border pt-8 mt-8">
              <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                <p className="font-body text-sm text-muted-foreground">
                  © {new Date()?.getFullYear()} Conexão Ouro Branco. Todos os direitos reservados.
                </p>
                <div className="flex space-x-6">
                  {['Privacidade', 'Termos', 'Padrões Editoriais']?.map((item) => (
                    <a
                      key={item}
                      href="#"
                      className="font-body text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
                    >
                      {item}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Homepage;