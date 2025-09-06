import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';

const StoryTipForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    anonymous: false
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e?.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e?.preventDefault();
    // Simulate form submission
    console.log('Story tip submitted:', formData);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        anonymous: false
      });
    }, 3000);
  };

  if (isSubmitted) {
    return (
      <div className="bg-success/10 border border-success/20 rounded-lg p-8 text-center">
        <div className="w-16 h-16 bg-success/20 rounded-full flex items-center justify-center mx-auto mb-4">
          <Icon name="CheckCircle" size={32} className="text-success" />
        </div>
        <h3 className="font-headline text-xl font-semibold text-foreground mb-2">
          Dica enviada com sucesso!
        </h3>
        <p className="text-muted-foreground mb-4">
          Obrigado por contribuir com nossa comunidade. Nossa equipe analisará sua dica e entrará em contato se necessário.
        </p>
        <div className="flex items-center justify-center space-x-4 text-sm text-muted-foreground">
          <div className="flex items-center space-x-1">
            <Icon name="Clock" size={16} />
            <span>Resposta em até 24h</span>
          </div>
          <div className="flex items-center space-x-1">
            <Icon name="Shield" size={16} />
            <span>Informações protegidas</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-card border border-border rounded-lg p-6">
      <div className="mb-6">
        <h3 className="font-headline text-xl font-semibold text-foreground mb-2">
          Tem uma dica de história?
        </h3>
        <p className="text-muted-foreground">
          Compartilhe informações sobre eventos, problemas ou histórias interessantes em Ouro Branco. 
          Sua contribuição ajuda a manter nossa comunidade informada.
        </p>
      </div>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Contact Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input
            label="Nome completo"
            type="text"
            name="name"
            value={formData?.name}
            onChange={handleInputChange}
            placeholder="Seu nome"
            required={!formData?.anonymous}
            disabled={formData?.anonymous}
          />
          
          <Input
            label="E-mail"
            type="email"
            name="email"
            value={formData?.email}
            onChange={handleInputChange}
            placeholder="seu@email.com"
            required={!formData?.anonymous}
            disabled={formData?.anonymous}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input
            label="Telefone (opcional)"
            type="tel"
            name="phone"
            value={formData?.phone}
            onChange={handleInputChange}
            placeholder="(31) 99999-9999"
            disabled={formData?.anonymous}
          />
          
          <Input
            label="Assunto"
            type="text"
            name="subject"
            value={formData?.subject}
            onChange={handleInputChange}
            placeholder="Resumo da sua dica"
            required
          />
        </div>

        {/* Anonymous Option */}
        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            id="anonymous"
            name="anonymous"
            checked={formData?.anonymous}
            onChange={handleInputChange}
            className="w-4 h-4 text-accent border-border rounded focus:ring-accent"
          />
          <label htmlFor="anonymous" className="text-sm text-foreground">
            Enviar anonimamente (seus dados não serão salvos)
          </label>
        </div>

        {/* Message */}
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">
            Detalhes da história *
          </label>
          <textarea
            name="message"
            value={formData?.message}
            onChange={handleInputChange}
            placeholder="Descreva os detalhes da história, incluindo quando e onde aconteceu, pessoas envolvidas e por que é importante para a comunidade..."
            className="w-full p-3 border border-border rounded-lg resize-none focus:ring-2 focus:ring-accent focus:border-transparent"
            rows={6}
            required
          />
          <p className="text-xs text-muted-foreground mt-1">
            Quanto mais detalhes você fornecer, melhor poderemos investigar a história.
          </p>
        </div>

        {/* Privacy Notice */}
        <div className="bg-muted/30 rounded-lg p-4">
          <div className="flex items-start space-x-2">
            <Icon name="Shield" size={16} className="text-primary mt-0.5 flex-shrink-0" />
            <div className="text-sm text-muted-foreground">
              <p className="font-medium text-foreground mb-1">Sua privacidade é protegida</p>
              <p>
                Suas informações são tratadas com confidencialidade. Não compartilhamos dados pessoais 
                e você pode solicitar anonimato na publicação da história.
              </p>
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <Button
          type="submit"
          variant="default"
          fullWidth
          className="bg-accent text-accent-foreground hover:bg-accent/90"
          disabled={!formData?.subject || !formData?.message}
        >
          <Icon name="Send" size={16} className="mr-2" />
          Enviar dica de história
        </Button>
      </form>
      {/* Contact Alternatives */}
      <div className="mt-6 pt-6 border-t border-border">
        <p className="text-sm text-muted-foreground mb-3">Outras formas de contato:</p>
        <div className="flex flex-wrap gap-4 text-sm">
          <div className="flex items-center space-x-1 text-muted-foreground">
            <Icon name="Phone" size={14} />
            <span>(31) 3741-1234</span>
          </div>
          <div className="flex items-center space-x-1 text-muted-foreground">
            <Icon name="MessageCircle" size={14} />
            <span>(31) 99999-8888</span>
          </div>
          <div className="flex items-center space-x-1 text-muted-foreground">
            <Icon name="Mail" size={14} />
            <span>dicas@conexaoob.com.br</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoryTipForm;