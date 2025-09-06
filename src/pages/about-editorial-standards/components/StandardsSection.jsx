import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const StandardsSection = () => {
  const [activeStandard, setActiveStandard] = useState(0);

  const editorialStandards = [
    {
      title: "Verificação de Fatos",
      icon: "CheckCircle",
      description: "Processo rigoroso de checagem de informações antes da publicação",
      details: [
        "Verificação de fontes primárias e secundárias",
        "Confirmação cruzada de informações com múltiplas fontes",
        "Checagem de dados estatísticos e citações",
        "Validação de imagens e documentos",
        "Processo de revisão por editor sênior"
      ],
      process: "Toda informação passa por no mínimo 3 etapas de verificação antes da publicação, incluindo checagem de fontes, validação de dados e revisão editorial."
    },
    {
      title: "Correções e Transparência",
      icon: "AlertTriangle",
      description: "Política clara para correções e atualizações de conteúdo",
      details: [
        "Correções claramente marcadas e datadas",
        "Manutenção do conteúdo original com indicação de alteração",
        "Notificação aos leitores sobre correções importantes",
        "Processo de retratação quando necessário",
        "Registro público de todas as correções"
      ],
      process: "Correções são implementadas dentro de 2 horas após identificação do erro, com notificação clara aos leitores e manutenção da transparência editorial."
    },
    {
      title: "Proteção de Fontes",
      icon: "Shield",
      description: "Compromisso com a confidencialidade e proteção de informantes",
      details: [
        "Anonimato garantido quando solicitado",
        "Proteção de dados pessoais de fontes",
        "Processo seguro de comunicação",
        "Avaliação ética antes de revelar informações sensíveis",
        "Treinamento da equipe em proteção de fontes"
      ],
      process: "Utilizamos canais seguros de comunicação e mantemos protocolos rígidos para proteger a identidade de fontes que solicitam anonimato."
    },
    {
      title: "Conflito de Interesses",
      icon: "Scale",
      description: "Identificação e gestão de potenciais conflitos de interesse",
      details: [
        "Declaração obrigatória de conflitos pela equipe",
        "Recusa de presentes ou benefícios de fontes",
        "Transparência sobre relacionamentos pessoais relevantes",
        "Processo de revisão independente quando necessário",
        "Política clara sobre investimentos pessoais"
      ],
      process: "Todos os membros da equipe declaram anualmente potenciais conflitos e seguimos protocolo rígido de transparência e independência editorial."
    }
  ];

  const ethicsCommitments = [
    {
      title: "Imparcialidade",
      description: "Cobertura equilibrada de todos os lados de uma questão",
      icon: "Balance"
    },
    {
      title: "Precisão",
      description: "Compromisso com informações corretas e verificáveis",
      icon: "Target"
    },
    {
      title: "Responsabilidade",
      description: "Assumimos responsabilidade por nosso conteúdo",
      icon: "UserCheck"
    },
    {
      title: "Independência",
      description: "Editorial livre de influências externas inadequadas",
      icon: "Unlock"
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-accent/10 rounded-full px-4 py-2 mb-6">
            <Icon name="FileCheck" size={16} className="text-primary" />
            <span className="text-sm font-medium text-primary">Padrões Editoriais</span>
          </div>
          
          <h2 className="font-headline text-3xl lg:text-4xl font-bold text-foreground mb-6">
            Nossos Compromissos com a Qualidade
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Seguimos rigorosos padrões jornalísticos que garantem a confiabilidade, 
            precisão e integridade de todo o conteúdo publicado na Conexão Ouro Branco.
          </p>
        </div>

        {/* Editorial Standards */}
        <div className="mb-16">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Standards Navigation */}
            <div className="lg:col-span-1">
              <div className="space-y-2 sticky top-24">
                {editorialStandards?.map((standard, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveStandard(index)}
                    className={`w-full text-left p-4 rounded-lg border transition-all duration-200 ${
                      activeStandard === index
                        ? 'bg-accent/10 border-primary text-primary' :'bg-card border-border text-foreground hover:bg-accent/5 hover:border-accent'
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <Icon 
                        name={standard?.icon} 
                        size={20} 
                        className={activeStandard === index ? 'text-primary' : 'text-muted-foreground'}
                      />
                      <div>
                        <h3 className="font-medium text-sm">{standard?.title}</h3>
                        <p className="text-xs text-muted-foreground mt-1">
                          {standard?.description}
                        </p>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Standards Content */}
            <div className="lg:col-span-2">
              <div className="story-card p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-accent to-primary rounded-lg flex items-center justify-center">
                    <Icon 
                      name={editorialStandards?.[activeStandard]?.icon} 
                      size={24} 
                      color="white" 
                      strokeWidth={2.5} 
                    />
                  </div>
                  <div>
                    <h3 className="font-headline text-xl font-semibold text-foreground">
                      {editorialStandards?.[activeStandard]?.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {editorialStandards?.[activeStandard]?.description}
                    </p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className="font-medium text-foreground mb-3">Processo Detalhado:</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      {editorialStandards?.[activeStandard]?.process}
                    </p>
                  </div>

                  <div>
                    <h4 className="font-medium text-foreground mb-3">Práticas Específicas:</h4>
                    <ul className="space-y-2">
                      {editorialStandards?.[activeStandard]?.details?.map((detail, index) => (
                        <li key={index} className="flex items-start space-x-2">
                          <Icon name="CheckCircle" size={16} className="text-success mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Ethics Commitments */}
        <div className="bg-gradient-to-br from-accent/5 to-primary/5 rounded-2xl p-8 lg:p-12">
          <div className="text-center mb-12">
            <h3 className="font-headline text-2xl font-semibold text-foreground mb-4">
              Compromissos Éticos Fundamentais
            </h3>
            <p className="text-muted-foreground">
              Os pilares éticos que orientam cada decisão editorial e interação com a comunidade
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {ethicsCommitments?.map((commitment, index) => (
              <div key={index} className="bg-card rounded-lg p-6 border border-border text-center group hover:shadow-lg transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-accent to-primary rounded-full mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Icon name={commitment?.icon} size={24} color="white" strokeWidth={2.5} />
                </div>
                
                <h4 className="font-headline text-lg font-semibold text-foreground mb-3">
                  {commitment?.title}
                </h4>
                
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {commitment?.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StandardsSection;