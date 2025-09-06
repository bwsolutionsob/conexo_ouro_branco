import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    type: 'tip'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const contactMethods = [
    {
      title: "Dicas de Notícias",
      description: "Tem uma história importante para compartilhar?",
      icon: "MessageSquare",
      contact: "dicas@conexaoourobranco.com.br",
      phone: "(31) 3741-2580"
    },
    {
      title: "Contato Editorial",
      description: "Questões sobre conteúdo ou correções",
      icon: "Edit",
      contact: "redacao@conexaoourobranco.com.br",
      phone: "(31) 3741-2581"
    },
    {
      title: "Parcerias",
      description: "Interessado em colaborar conosco?",
      icon: "Handshake",
      contact: "parcerias@conexaoourobranco.com.br",
      phone: "(31) 3741-2582"
    },
    {
      title: "Suporte Técnico",
      description: "Problemas com o site ou newsletter?",
      icon: "Settings",
      contact: "suporte@conexaoourobranco.com.br",
      phone: "(31) 3741-2583"
    }
  ];

  const officeInfo = {
    address: "Rua das Flores, 123 - Centro\nOuro Branco, MG - CEP: 36420-000",
    hours: "Segunda a Sexta: 8h às 18h\nSábado: 9h às 13h",
    coordinates: { lat: -20.5217, lng: -43.6947 }
  };

  const handleInputChange = (e) => {
    const { name, value } = e?.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e?.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
      type: 'tip'
    });
    setIsSubmitting(false);
  };

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-accent/10 rounded-full px-4 py-2 mb-6">
            <Icon name="MessageCircle" size={16} className="text-primary" />
            <span className="text-sm font-medium text-primary">Fale Conosco</span>
          </div>
          
          <h2 className="font-headline text-3xl lg:text-4xl font-bold text-foreground mb-6">
            Estamos Aqui para Ouvir Você
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Sua participação é fundamental para mantermos Ouro Branco bem informada. 
            Entre em contato para enviar dicas, fazer perguntas ou colaborar conosco.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Methods */}
          <div className="lg:col-span-1 space-y-6">
            <h3 className="font-headline text-xl font-semibold text-foreground mb-6">
              Como Podemos Ajudar
            </h3>
            
            {contactMethods?.map((method, index) => (
              <div key={index} className="story-card p-4 hover:shadow-lg transition-all duration-300">
                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-accent to-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name={method?.icon} size={18} color="white" strokeWidth={2.5} />
                  </div>
                  
                  <div className="flex-1">
                    <h4 className="font-medium text-foreground mb-1">{method?.title}</h4>
                    <p className="text-sm text-muted-foreground mb-3">{method?.description}</p>
                    
                    <div className="space-y-1">
                      <a 
                        href={`mailto:${method?.contact}`}
                        className="flex items-center space-x-2 text-xs text-primary hover:text-primary/80 transition-colors"
                      >
                        <Icon name="Mail" size={12} />
                        <span>{method?.contact}</span>
                      </a>
                      <a 
                        href={`tel:${method?.phone}`}
                        className="flex items-center space-x-2 text-xs text-primary hover:text-primary/80 transition-colors"
                      >
                        <Icon name="Phone" size={12} />
                        <span>{method?.phone}</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Office Information */}
            <div className="story-card p-6">
              <h4 className="font-headline text-lg font-semibold text-foreground mb-4">
                Nossa Redação
              </h4>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Icon name="MapPin" size={16} className="text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-foreground font-medium mb-1">Endereço</p>
                    <p className="text-sm text-muted-foreground whitespace-pre-line">
                      {officeInfo?.address}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Icon name="Clock" size={16} className="text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-foreground font-medium mb-1">Horário de Funcionamento</p>
                    <p className="text-sm text-muted-foreground whitespace-pre-line">
                      {officeInfo?.hours}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="story-card p-8">
              <h3 className="font-headline text-xl font-semibold text-foreground mb-6">
                Envie sua Mensagem
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <Input
                    label="Nome Completo"
                    type="text"
                    name="name"
                    value={formData?.name}
                    onChange={handleInputChange}
                    placeholder="Seu nome"
                    required
                  />
                  
                  <Input
                    label="Email"
                    type="email"
                    name="email"
                    value={formData?.email}
                    onChange={handleInputChange}
                    placeholder="seu@email.com"
                    required
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Tipo de Contato
                    </label>
                    <select
                      name="type"
                      value={formData?.type}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-border rounded-md bg-input text-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent"
                      required
                    >
                      <option value="tip">Dica de Notícia</option>
                      <option value="editorial">Questão Editorial</option>
                      <option value="partnership">Parceria</option>
                      <option value="support">Suporte Técnico</option>
                      <option value="other">Outro</option>
                    </select>
                  </div>
                  
                  <Input
                    label="Assunto"
                    type="text"
                    name="subject"
                    value={formData?.subject}
                    onChange={handleInputChange}
                    placeholder="Assunto da mensagem"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Mensagem
                  </label>
                  <textarea
                    name="message"
                    value={formData?.message}
                    onChange={handleInputChange}
                    rows={6}
                    className="w-full px-3 py-2 border border-border rounded-md bg-input text-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent resize-none"
                    placeholder="Descreva sua mensagem, dica ou questão..."
                    required
                  />
                </div>

                <div className="flex items-center justify-between pt-4">
                  <p className="text-xs text-muted-foreground">
                    Responderemos em até 24 horas úteis
                  </p>
                  
                  <Button
                    type="submit"
                    loading={isSubmitting}
                    iconName="Send"
                    iconPosition="right"
                    className="min-w-32"
                  >
                    {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
                  </Button>
                </div>
              </form>
            </div>

            {/* Map */}
            <div className="mt-8 story-card p-6">
              <h4 className="font-headline text-lg font-semibold text-foreground mb-4">
                Nossa Localização
              </h4>
              
              <div className="w-full h-64 rounded-lg overflow-hidden border border-border">
                <iframe
                  width="100%"
                  height="100%"
                  loading="lazy"
                  title="Conexão Ouro Branco - Redação"
                  referrerPolicy="no-referrer-when-downgrade"
                  src={`https://www.google.com/maps?q=${officeInfo?.coordinates?.lat},${officeInfo?.coordinates?.lng}&z=16&output=embed`}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;