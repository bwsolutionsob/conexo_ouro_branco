import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import { Checkbox } from '../../../components/ui/Checkbox';

const NewsletterSection = () => {
  const [email, setEmail] = useState('');
  const [preferences, setPreferences] = useState({
    local: true,
    tech: true,
    breaking: true,
    weekly: false
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e?.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitted(true);
    setIsLoading(false);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setEmail('');
      setPreferences({
        local: true,
        tech: true,
        breaking: true,
        weekly: false
      });
    }, 3000);
  };

  const handlePreferenceChange = (key, checked) => {
    setPreferences(prev => ({
      ...prev,
      [key]: checked
    }));
  };

  const subscriptionStats = [
    { label: 'Assinantes Ativos', value: '3.2K', icon: 'Users', growth: '+15%' },
    { label: 'Taxa de Abertura', value: '68%', icon: 'Mail', growth: '+8%' },
    { label: 'Newsletters Enviadas', value: '156', icon: 'Send', growth: '+12' }
  ];

  if (isSubmitted) {
    return (
      <section className="py-16 bg-gradient-to-br from-accent/5 via-primary/5 to-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="story-card p-12">
            <div className="w-20 h-20 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Icon name="CheckCircle" size={40} className="text-success" />
            </div>
            <h3 className="font-headline text-2xl font-bold text-foreground mb-4">
              Inscrição Confirmada!
            </h3>
            <p className="font-body text-lg text-muted-foreground mb-6">
              Obrigado por se juntar à nossa comunidade. Você receberá nossa primeira newsletter em breve.
            </p>
            <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
              <Icon name="Shield" size={16} />
              <span>Seus dados estão seguros conosco</span>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-gradient-to-br from-accent/5 via-primary/5 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
                <Icon name="Mail" size={18} className="text-accent-foreground" />
              </div>
              <span className="font-accent text-sm font-medium text-primary uppercase tracking-wider">
                Newsletter Exclusiva
              </span>
            </div>

            <h2 className="font-headline text-3xl md:text-4xl font-bold text-foreground mb-6">
              Receba as Melhores Notícias Diretamente no seu Email
            </h2>
            
            <p className="font-body text-lg text-muted-foreground mb-8 leading-relaxed">
              Mantenha-se informado com nossa curadoria especial de notícias locais e insights tecnológicos. 
              Personalize suas preferências e receba apenas o conteúdo que mais importa para você.
            </p>

            {/* Benefits */}
            <div className="space-y-4 mb-8">
              {[
                { icon: 'MapPin', text: 'Notícias exclusivas de Ouro Branco' },
                { icon: 'Cpu', text: 'Insights tecnológicos com contexto brasileiro' },
                { icon: 'Zap', text: 'Alertas de notícias urgentes' },
                { icon: 'Calendar', text: 'Resumo semanal personalizado' }
              ]?.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name={benefit?.icon} size={14} className="text-primary" />
                  </div>
                  <span className="font-body text-foreground">{benefit?.text}</span>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              {subscriptionStats?.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-2">
                    <Icon name={stat?.icon} size={18} className="text-primary" />
                  </div>
                  <div className="text-xl font-bold text-foreground">{stat?.value}</div>
                  <div className="text-xs text-muted-foreground mb-1">{stat?.label}</div>
                  <div className="text-xs text-success font-medium">{stat?.growth}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Newsletter Form */}
          <div className="story-card p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <h3 className="font-headline text-xl font-semibold text-foreground mb-4">
                  Inscreva-se Gratuitamente
                </h3>
                
                <Input
                  type="email"
                  label="Seu melhor email"
                  placeholder="exemplo@email.com"
                  value={email}
                  onChange={(e) => setEmail(e?.target?.value)}
                  required
                  className="mb-6"
                />
              </div>

              {/* Preferences */}
              <div>
                <h4 className="font-body text-sm font-medium text-foreground mb-4">
                  Personalize suas preferências:
                </h4>
                <div className="space-y-3">
                  <Checkbox
                    label="Notícias Locais de Ouro Branco"
                    description="Receba as principais notícias da nossa cidade"
                    checked={preferences?.local}
                    onChange={(e) => handlePreferenceChange('local', e?.target?.checked)}
                  />
                  <Checkbox
                    label="Insights Tecnológicos"
                    description="Tendências tech com contexto brasileiro"
                    checked={preferences?.tech}
                    onChange={(e) => handlePreferenceChange('tech', e?.target?.checked)}
                  />
                  <Checkbox
                    label="Alertas de Notícias Urgentes"
                    description="Seja o primeiro a saber de notícias importantes"
                    checked={preferences?.breaking}
                    onChange={(e) => handlePreferenceChange('breaking', e?.target?.checked)}
                  />
                  <Checkbox
                    label="Resumo Semanal"
                    description="Compilado das principais notícias da semana"
                    checked={preferences?.weekly}
                    onChange={(e) => handlePreferenceChange('weekly', e?.target?.checked)}
                  />
                </div>
              </div>

              <Button
                type="submit"
                variant="default"
                size="lg"
                fullWidth
                loading={isLoading}
                disabled={!email || (!preferences?.local && !preferences?.tech && !preferences?.breaking && !preferences?.weekly)}
                className="bg-accent text-accent-foreground hover:bg-accent/90"
              >
                {isLoading ? 'Processando...' : 'Inscrever-se Gratuitamente'}
                {!isLoading && <Icon name="ArrowRight" size={18} className="ml-2" />}
              </Button>

              <div className="flex items-center justify-center space-x-2 text-xs text-muted-foreground">
                <Icon name="Shield" size={14} />
                <span>Seus dados estão protegidos. Cancele a qualquer momento.</span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;