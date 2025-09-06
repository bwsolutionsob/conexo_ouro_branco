import React from 'react';
import Icon from '../../../components/AppIcon';


const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-accent/5 via-background to-primary/5 py-16 lg:py-24">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1504711434969-e33886168f5c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-5"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-12 h-12 bg-gradient-to-br from-accent to-primary rounded-lg flex items-center justify-center">
                  <Icon name="Shield" size={24} color="white" strokeWidth={2.5} />
                </div>
                <div className="h-px bg-gradient-to-r from-accent to-primary flex-1 max-w-20"></div>
              </div>
              
              <h1 className="font-headline text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                Transparência e
                <span className="text-primary block">Padrões Editoriais</span>
              </h1>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                Construindo confiança através da transparência, integridade jornalística e 
                compromisso inabalável com a verdade. Conheça nossa missão, equipe e os 
                padrões que nos guiam na cobertura de Ouro Branco.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <div className="flex items-center space-x-2 bg-card border border-border rounded-lg px-4 py-2">
                <Icon name="Users" size={16} className="text-primary" />
                <span className="text-sm font-medium text-foreground">Equipe Local</span>
              </div>
              <div className="flex items-center space-x-2 bg-card border border-border rounded-lg px-4 py-2">
                <Icon name="CheckCircle" size={16} className="text-success" />
                <span className="text-sm font-medium text-foreground">Verificação de Fatos</span>
              </div>
              <div className="flex items-center space-x-2 bg-card border border-border rounded-lg px-4 py-2">
                <Icon name="Heart" size={16} className="text-error" />
                <span className="text-sm font-medium text-foreground">Compromisso Comunitário</span>
              </div>
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="relative bg-card rounded-2xl shadow-editorial p-8 border border-border">
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-accent to-primary rounded-full opacity-10"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full opacity-10"></div>
              
              <div className="relative space-y-6">
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-accent to-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Icon name="Zap" size={32} color="white" strokeWidth={2.5} />
                  </div>
                  <h3 className="font-headline text-xl font-semibold text-foreground mb-2">
                    Conexão Ouro Branco
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Onde comunidade encontra inovação
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="space-y-1">
                    <div className="text-2xl font-bold text-primary">2.4K+</div>
                    <div className="text-xs text-muted-foreground">Leitores Ativos</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-2xl font-bold text-primary">150+</div>
                    <div className="text-xs text-muted-foreground">Histórias Publicadas</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-2xl font-bold text-primary">98%</div>
                    <div className="text-xs text-muted-foreground">Precisão Editorial</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-2xl font-bold text-primary">24h</div>
                    <div className="text-xs text-muted-foreground">Tempo de Resposta</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;