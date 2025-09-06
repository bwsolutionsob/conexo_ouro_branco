import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const TeamSection = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Maria Santos Silva",
      role: "Editora-Chefe",
      bio: "Jornalista com 15 anos de experiência em mídia regional. Especialista em política local e desenvolvimento comunitário. Moradora de Ouro Branco há 20 anos.",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      credentials: ["Graduação em Jornalismo - UFMG", "Pós-graduação em Comunicação Digital", "Membro da Associação Mineira de Imprensa"],
      contact: {
        email: "maria.silva@conexaoourobranco.com.br",
        linkedin: "maria-santos-silva"
      }
    },
    {
      id: 2,
      name: "João Carlos Oliveira",
      role: "Repórter de Tecnologia",
      bio: "Especialista em tecnologia e inovação com foco no cenário brasileiro. Engenheiro de software que migrou para o jornalismo tecnológico.",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      credentials: ["Engenharia de Software - PUC Minas", "Certificação em Jornalismo Digital", "Colaborador em veículos tech nacionais"],
      contact: {
        email: "joao.oliveira@conexaoourobranco.com.br",
        linkedin: "joao-carlos-tech"
      }
    },
    {
      id: 3,
      name: "Ana Paula Rodrigues",
      role: "Repórter Comunitária",
      bio: "Nascida e criada em Ouro Branco, conhece profundamente a comunidade local. Especializada em histórias humanas e eventos comunitários.",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      credentials: ["Comunicação Social - UFSJ", "Curso de Fotojornalismo", "Voluntária em ONGs locais"],
      contact: {
        email: "ana.rodrigues@conexaoourobranco.com.br",
        linkedin: "ana-paula-comunidade"
      }
    },
    {
      id: 4,
      name: "Carlos Eduardo Lima",
      role: "Editor de Conteúdo Digital",
      bio: "Especialista em SEO e marketing de conteúdo. Responsável pela estratégia digital e engajamento nas redes sociais da plataforma.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      credentials: ["Marketing Digital - Universidade Estácio", "Certificação Google Analytics", "Especialização em Mídias Sociais"],
      contact: {
        email: "carlos.lima@conexaoourobranco.com.br",
        linkedin: "carlos-eduardo-digital"
      }
    }
  ];

  const advisors = [
    {
      name: "Dr. Roberto Mendes",
      role: "Consultor Editorial",
      organization: "Ex-editor do Estado de Minas"
    },
    {
      name: "Profª. Lucia Fernandes",
      role: "Consultora de Ética Jornalística",
      organization: "UFMG - Faculdade de Comunicação"
    },
    {
      name: "Marcos Antônio Costa",
      role: "Consultor Comunitário",
      organization: "Presidente da Câmara de Dirigentes Lojistas"
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-accent/10 rounded-full px-4 py-2 mb-6">
            <Icon name="Users" size={16} className="text-primary" />
            <span className="text-sm font-medium text-primary">Nossa Equipe</span>
          </div>
          
          <h2 className="font-headline text-3xl lg:text-4xl font-bold text-foreground mb-6">
            Profissionais Comprometidos com Ouro Branco
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Conheça os jornalistas e profissionais que trabalham diariamente para trazer 
            informação de qualidade e manter nossa comunidade conectada e informada.
          </p>
        </div>

        {/* Team Members */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
          {teamMembers?.map((member) => (
            <div key={member?.id} className="story-card p-6 lg:p-8">
              <div className="flex flex-col sm:flex-row gap-6">
                {/* Avatar */}
                <div className="flex-shrink-0">
                  <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-accent/20">
                    <Image 
                      src={member?.avatar} 
                      alt={member?.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 space-y-4">
                  <div>
                    <h3 className="font-headline text-xl font-semibold text-foreground mb-1">
                      {member?.name}
                    </h3>
                    <p className="text-primary font-medium text-sm mb-3">
                      {member?.role}
                    </p>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {member?.bio}
                    </p>
                  </div>

                  {/* Credentials */}
                  <div>
                    <h4 className="text-xs font-semibold text-foreground uppercase tracking-wider mb-2">
                      Credenciais
                    </h4>
                    <ul className="space-y-1">
                      {member?.credentials?.map((credential, index) => (
                        <li key={index} className="flex items-start space-x-2">
                          <Icon name="CheckCircle" size={12} className="text-success mt-0.5 flex-shrink-0" />
                          <span className="text-xs text-muted-foreground">{credential}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Contact */}
                  <div className="flex items-center space-x-4 pt-2">
                    <a 
                      href={`mailto:${member?.contact?.email}`}
                      className="flex items-center space-x-1 text-xs text-primary hover:text-primary/80 transition-colors"
                    >
                      <Icon name="Mail" size={12} />
                      <span>Email</span>
                    </a>
                    <a 
                      href={`https://linkedin.com/in/${member?.contact?.linkedin}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-1 text-xs text-primary hover:text-primary/80 transition-colors"
                    >
                      <Icon name="Linkedin" size={12} />
                      <span>LinkedIn</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Advisory Board */}
        <div className="bg-card rounded-2xl p-8 lg:p-12 border border-border">
          <div className="text-center mb-8">
            <h3 className="font-headline text-2xl font-semibold text-foreground mb-4">
              Conselho Consultivo
            </h3>
            <p className="text-muted-foreground">
              Profissionais experientes que orientam nossas práticas editoriais e éticas
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {advisors?.map((advisor, index) => (
              <div key={index} className="text-center p-4 bg-muted/20 rounded-lg">
                <h4 className="font-headline text-lg font-semibold text-foreground mb-1">
                  {advisor?.name}
                </h4>
                <p className="text-sm text-primary font-medium mb-2">
                  {advisor?.role}
                </p>
                <p className="text-xs text-muted-foreground">
                  {advisor?.organization}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;