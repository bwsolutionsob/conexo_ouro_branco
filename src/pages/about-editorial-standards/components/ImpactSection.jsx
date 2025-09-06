import React from 'react';
import Icon from '../../../components/AppIcon';

const ImpactSection = () => {
  const impactMetrics = [
    {
      category: "Engajamento Cívico",
      metrics: [
        { label: "Aumento na participação em reuniões públicas", value: "45%", period: "Últimos 6 meses" },
        { label: "Cidadãos que acompanham política local", value: "2.1K+", period: "Leitores regulares" },
        { label: "Questões comunitárias levantadas", value: "28", period: "Este ano" }
      ],
      icon: "Users",
      color: "text-blue-600"
    },
    {
      category: "Apoio aos Negócios Locais",
      metrics: [
        { label: "Empresas locais destacadas", value: "85+", period: "Últimos 12 meses" },
        { label: "Aumento médio em visibilidade", value: "60%", period: "Após cobertura" },
        { label: "Eventos comerciais promovidos", value: "15", period: "Este ano" }
      ],
      icon: "Store",
      color: "text-green-600"
    },
    {
      category: "Transparência Governamental",
      metrics: [
        { label: "Reuniões da câmara cobertas", value: "100%", period: "Últimos 8 meses" },
        { label: "Documentos públicos analisados", value: "150+", period: "Este ano" },
        { label: "Respostas obtidas de órgãos públicos", value: "92%", period: "Taxa de resposta" }
      ],
      icon: "FileText",
      color: "text-amber-600"
    }
  ];

  const communityTestimonials = [
    {
      name: "Maria José Santos",
      role: "Comerciante Local",
      quote: "A Conexão Ouro Branco transformou como nossa comunidade se informa. Finalmente temos uma fonte confiável que realmente entende nossas necessidades locais.",
      avatar: "https://images.unsplash.com/photo-1559941707-4f4e6c6e8b5e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Dr. Carlos Mendes",
      role: "Vereador",
      quote: "O trabalho jornalístico da equipe tem contribuído significativamente para aumentar a transparência e o engajamento cívico em nossa cidade.",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Ana Beatriz Lima",
      role: "Professora",
      quote: "Como educadora, valorizo muito a qualidade das informações. A Conexão Ouro Branco mantém nossa comunidade bem informada com jornalismo responsável.",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    }
  ];

  const partnerships = [
    {
      name: "Prefeitura Municipal de Ouro Branco",
      type: "Parceria Institucional",
      description: "Colaboração para transparência e acesso à informação pública",
      logo: "Building"
    },
    {
      name: "Câmara de Dirigentes Lojistas",
      type: "Apoio Comercial",
      description: "Promoção do comércio local e eventos empresariais",
      logo: "Store"
    },
    {
      name: "Associação de Moradores",
      type: "Engajamento Comunitário",
      description: "Canal direto com as necessidades dos moradores",
      logo: "Users"
    },
    {
      name: "Universidade Federal de São João del-Rei",
      type: "Parceria Acadêmica",
      description: "Pesquisas e estudos sobre comunicação regional",
      logo: "GraduationCap"
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-accent/10 rounded-full px-4 py-2 mb-6">
            <Icon name="TrendingUp" size={16} className="text-primary" />
            <span className="text-sm font-medium text-primary">Impacto Comunitário</span>
          </div>
          
          <h2 className="font-headline text-3xl lg:text-4xl font-bold text-foreground mb-6">
            Resultados que Transformam Ouro Branco
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Medimos nosso sucesso pelo impacto positivo que geramos na comunidade. 
            Veja como nosso trabalho tem fortalecido o engajamento cívico e apoiado 
            o desenvolvimento local.
          </p>
        </div>

        {/* Impact Metrics */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {impactMetrics?.map((category, index) => (
            <div key={index} className="story-card p-6">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-accent to-primary rounded-lg flex items-center justify-center">
                  <Icon name={category?.icon} size={24} color="white" strokeWidth={2.5} />
                </div>
                <h3 className="font-headline text-lg font-semibold text-foreground">
                  {category?.category}
                </h3>
              </div>

              <div className="space-y-4">
                {category?.metrics?.map((metric, metricIndex) => (
                  <div key={metricIndex} className="border-l-4 border-accent/30 pl-4">
                    <div className="flex items-baseline justify-between mb-1">
                      <span className="text-2xl font-bold text-primary">{metric?.value}</span>
                      <span className="text-xs text-muted-foreground">{metric?.period}</span>
                    </div>
                    <p className="text-sm text-foreground font-medium">{metric?.label}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Community Testimonials */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="font-headline text-2xl font-semibold text-foreground mb-4">
              O que Nossa Comunidade Diz
            </h3>
            <p className="text-muted-foreground">
              Depoimentos de líderes e moradores sobre o impacto da Conexão Ouro Branco
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {communityTestimonials?.map((testimonial, index) => (
              <div key={index} className="story-card p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-accent/20">
                    <img 
                      src={testimonial?.avatar} 
                      alt={testimonial?.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground">{testimonial?.name}</h4>
                    <p className="text-sm text-primary">{testimonial?.role}</p>
                  </div>
                </div>
                
                <blockquote className="text-sm text-muted-foreground italic leading-relaxed">
                  "{testimonial?.quote}"
                </blockquote>
              </div>
            ))}
          </div>
        </div>

        {/* Partnerships */}
        <div className="bg-card rounded-2xl p-8 lg:p-12 border border-border">
          <div className="text-center mb-12">
            <h3 className="font-headline text-2xl font-semibold text-foreground mb-4">
              Parcerias Estratégicas
            </h3>
            <p className="text-muted-foreground">
              Colaborações que fortalecem nosso compromisso com a comunidade
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {partnerships?.map((partnership, index) => (
              <div key={index} className="text-center p-4 bg-muted/20 rounded-lg hover:bg-muted/30 transition-colors duration-200">
                <div className="w-16 h-16 bg-gradient-to-br from-accent to-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Icon name={partnership?.logo} size={24} color="white" strokeWidth={2.5} />
                </div>
                
                <h4 className="font-medium text-foreground mb-1 text-sm">
                  {partnership?.name}
                </h4>
                
                <p className="text-xs text-primary font-medium mb-2">
                  {partnership?.type}
                </p>
                
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {partnership?.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;