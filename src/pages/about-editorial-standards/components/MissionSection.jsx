import React from 'react';
import Icon from '../../../components/AppIcon';

const MissionSection = () => {
  const missionPillars = [
    {
      icon: "MapPin",
      title: "Autoridade Hiperlocal",
      description: "Cobertura profunda dos desenvolvimentos municipais, política local, negócios comunitários e eventos cívicos que a mídia tradicional negligencia."
    },
    {
      icon: "Cpu",
      title: "Contextualização Tecnológica",
      description: "Notícias de tecnologia brasileira com análise de relevância local e impacto comunitário, conectando inovação global com realidade regional."
    },
    {
      icon: "Users",
      title: "Narrativas Comunitárias",
      description: "Perfis de moradores, histórias de sucesso local, recursos históricos e celebrações culturais que fortalecem a identidade comunitária."
    },
    {
      icon: "Shield",
      title: "Engajamento Cívico",
      description: "Reportagens de transparência governamental, cobertura de reuniões públicas e advocacia por questões comunitárias importantes."
    }
  ];

  const values = [
    {
      title: "Integridade",
      description: "Compromisso inabalável com a verdade e transparência em todas as nossas reportagens."
    },
    {
      title: "Comunidade",
      description: "Servimos aos interesses de Ouro Branco e seus moradores acima de tudo."
    },
    {
      title: "Excelência",
      description: "Padrões jornalísticos profissionais aplicados a cada história que contamos."
    },
    {
      title: "Inovação",
      description: "Abraçamos novas tecnologias para melhor servir nossa comunidade."
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mission Statement */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-accent/10 rounded-full px-4 py-2 mb-6">
            <Icon name="Target" size={16} className="text-primary" />
            <span className="text-sm font-medium text-primary">Nossa Missão</span>
          </div>
          
          <h2 className="font-headline text-3xl lg:text-4xl font-bold text-foreground mb-6">
            Conectando Ouro Branco ao Mundo
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Somos mais que uma fonte de notícias—somos um catalisador comunitário que celebra 
            a identidade local enquanto mantém os cidadãos informados sobre inovações que 
            podem impactar suas vidas. Nossa missão é ser a ponte confiável entre as raízes 
            da comunidade e o progresso tecnológico.
          </p>
        </div>

        {/* Mission Pillars */}
        <div className="mb-20">
          <h3 className="font-headline text-2xl font-semibold text-foreground text-center mb-12">
            Pilares da Nossa Cobertura
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {missionPillars?.map((pillar, index) => (
              <div key={index} className="story-card p-6 text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-accent to-primary rounded-full mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Icon name={pillar?.icon} size={24} color="white" strokeWidth={2.5} />
                </div>
                
                <h4 className="font-headline text-lg font-semibold text-foreground mb-3">
                  {pillar?.title}
                </h4>
                
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {pillar?.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Values */}
        <div className="bg-gradient-to-br from-accent/5 to-primary/5 rounded-2xl p-8 lg:p-12">
          <div className="text-center mb-12">
            <h3 className="font-headline text-2xl font-semibold text-foreground mb-4">
              Nossos Valores Fundamentais
            </h3>
            <p className="text-muted-foreground">
              Os princípios que guiam cada decisão editorial e interação comunitária
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values?.map((value, index) => (
              <div key={index} className="bg-card rounded-lg p-6 border border-border">
                <h4 className="font-headline text-lg font-semibold text-foreground mb-3">
                  {value?.title}
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {value?.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;