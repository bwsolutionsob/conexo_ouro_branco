import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import MissionSection from './components/MissionSection';
import TeamSection from './components/TeamSection';
import StandardsSection from './components/StandardsSection';
import ImpactSection from './components/ImpactSection';
import ContactSection from './components/ContactSection';

const AboutEditorialStandards = () => {
  return (
    <>
      <Helmet>
        <title>Sobre & Padrões Editoriais - Conexão Ouro Branco</title>
        <meta 
          name="description" 
          content="Conheça a missão, equipe e padrões editoriais da Conexão Ouro Branco. Transparência, integridade jornalística e compromisso com a comunidade de Ouro Branco." 
        />
        <meta name="keywords" content="sobre, padrões editoriais, transparência, jornalismo, Ouro Branco, equipe, missão" />
        <meta property="og:title" content="Sobre & Padrões Editoriais - Conexão Ouro Branco" />
        <meta property="og:description" content="Transparência e integridade jornalística. Conheça nossa missão e compromisso com a comunidade de Ouro Branco." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="/about-editorial-standards" />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="pt-16">
          <HeroSection />
          <MissionSection />
          <TeamSection />
          <StandardsSection />
          <ImpactSection />
          <ContactSection />
        </main>

        {/* Footer */}
        <footer className="bg-card border-t border-border py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-4 gap-8">
              {/* Brand */}
              <div className="md:col-span-2">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-accent to-primary rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-lg">C</span>
                  </div>
                  <div>
                    <h3 className="font-headline text-lg font-bold text-foreground">
                      Conexão Ouro Branco
                    </h3>
                    <p className="font-accent text-xs text-muted-foreground">
                      Comunidade & Inovação
                    </p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mb-4 max-w-md">
                  Conectando Ouro Branco ao mundo através de jornalismo local de qualidade 
                  e insights tecnológicos relevantes para nossa comunidade.
                </p>
                <div className="flex items-center space-x-4">
                  <a href="mailto:contato@conexaoourobranco.com.br" className="text-primary hover:text-primary/80">
                    <span className="sr-only">Email</span>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </a>
                  <a href="tel:(31)3741-2580" className="text-primary hover:text-primary/80">
                    <span className="sr-only">Telefone</span>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Quick Links */}
              <div>
                <h4 className="font-medium text-foreground mb-4">Navegação</h4>
                <ul className="space-y-2 text-sm">
                  <li><a href="/homepage" className="text-muted-foreground hover:text-primary">Início</a></li>
                  <li><a href="/ouro-branco-local-news" className="text-muted-foreground hover:text-primary">Notícias Locais</a></li>
                  <li><a href="/technology-insights-portal" className="text-muted-foreground hover:text-primary">Tecnologia</a></li>
                  <li><a href="/story-detail-pages" className="text-muted-foreground hover:text-primary">Histórias</a></li>
                </ul>
              </div>

              {/* Contact Info */}
              <div>
                <h4 className="font-medium text-foreground mb-4">Contato</h4>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p>Rua das Flores, 123<br />Centro - Ouro Branco, MG</p>
                  <p>CEP: 36420-000</p>
                  <p>Segunda a Sexta: 8h às 18h</p>
                </div>
              </div>
            </div>

            <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
              <p className="text-sm text-muted-foreground">
                © {new Date()?.getFullYear()} Conexão Ouro Branco. Todos os direitos reservados.
              </p>
              <div className="flex items-center space-x-6 mt-4 md:mt-0">
                <a href="/privacy" className="text-sm text-muted-foreground hover:text-primary">
                  Política de Privacidade
                </a>
                <a href="/terms" className="text-sm text-muted-foreground hover:text-primary">
                  Termos de Uso
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default AboutEditorialStandards;