import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';

const StoryTipForm = ({ onSubmit }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    category: '',
    title: '',
    description: '',
    location: '',
    urgency: 'normal'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const categories = [
    { value: 'politics', label: 'Política Municipal', icon: 'Building' },
    { value: 'business', label: 'Negócios Locais', icon: 'Store' },
    { value: 'community', label: 'Eventos Comunitários', icon: 'Users' },
    { value: 'infrastructure', label: 'Infraestrutura', icon: 'Construction' },
    { value: 'education', label: 'Educação', icon: 'GraduationCap' },
    { value: 'health', label: 'Saúde', icon: 'Heart' },
    { value: 'environment', label: 'Meio Ambiente', icon: 'Leaf' },
    { value: 'other', label: 'Outros', icon: 'MessageSquare' }
  ];

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
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      if (onSubmit) {
        onSubmit(formData);
      }
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        category: '',
        title: '',
        description: '',
        location: '',
        urgency: 'normal'
      });
      
      setIsExpanded(false);
      
      // Show success message (in real app, use toast/notification)
      alert('Dica enviada com sucesso! Nossa equipe analisará e entrará em contato se necessário.');
      
    } catch (error) {
      alert('Erro ao enviar dica. Tente novamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isExpanded) {
    return (
      <section className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-lg border border-primary/20 p-6">
        <div className="text-center">
          <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <Icon name="PenTool" size={24} className="text-primary" />
          </div>
          <h3 className="font-headline text-xl font-semibold text-foreground mb-2">
            Tem uma Dica de Notícia?
          </h3>
          <p className="text-muted-foreground mb-6">
            Ajude-nos a cobrir o que acontece em Ouro Branco. Sua dica pode virar uma matéria importante para a comunidade.
          </p>
          <Button 
            variant="default"
            onClick={() => setIsExpanded(true)}
            className="bg-primary hover:bg-primary/90"
          >
            <Icon name="Plus" size={16} className="mr-2" />
            Enviar Dica de Notícia
          </Button>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-card rounded-lg border border-border p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
            <Icon name="PenTool" size={18} className="text-primary" />
          </div>
          <div>
            <h3 className="font-headline text-lg font-semibold text-foreground">
              Enviar Dica de Notícia
            </h3>
            <p className="text-sm text-muted-foreground">
              Compartilhe informações relevantes para a comunidade
            </p>
          </div>
        </div>
        
        <Button 
          variant="ghost" 
          size="icon"
          onClick={() => setIsExpanded(false)}
          className="text-muted-foreground hover:text-foreground"
        >
          <Icon name="X" size={20} />
        </Button>
      </div>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid md:grid-cols-2 gap-4">
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

        <div className="grid md:grid-cols-2 gap-4">
          <Input
            label="Telefone (Opcional)"
            type="tel"
            name="phone"
            value={formData?.phone}
            onChange={handleInputChange}
            placeholder="(31) 99999-9999"
          />
          
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Categoria
            </label>
            <select
              name="category"
              value={formData?.category}
              onChange={handleInputChange}
              required
              className="w-full px-3 py-2 border border-border rounded-md bg-input text-foreground focus:ring-2 focus:ring-primary focus:border-transparent"
            >
              <option value="">Selecione uma categoria</option>
              {categories?.map((cat) => (
                <option key={cat?.value} value={cat?.value}>
                  {cat?.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        <Input
          label="Título da Dica"
          type="text"
          name="title"
          value={formData?.title}
          onChange={handleInputChange}
          placeholder="Resumo do que aconteceu ou vai acontecer"
          required
        />

        <div>
          <label className="block text-sm font-medium text-foreground mb-2">
            Descrição Detalhada
          </label>
          <textarea
            name="description"
            value={formData?.description}
            onChange={handleInputChange}
            rows={4}
            placeholder="Conte-nos mais detalhes sobre o que aconteceu, quando, onde, quem esteve envolvido..."
            required
            className="w-full px-3 py-2 border border-border rounded-md bg-input text-foreground focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <Input
            label="Local (Opcional)"
            type="text"
            name="location"
            value={formData?.location}
            onChange={handleInputChange}
            placeholder="Bairro, rua, estabelecimento..."
          />
          
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Urgência
            </label>
            <select
              name="urgency"
              value={formData?.urgency}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-border rounded-md bg-input text-foreground focus:ring-2 focus:ring-primary focus:border-transparent"
            >
              <option value="normal">Normal</option>
              <option value="urgent">Urgente</option>
              <option value="breaking">Última Hora</option>
            </select>
          </div>
        </div>

        <div className="bg-muted/50 rounded-lg p-4">
          <div className="flex items-start space-x-3">
            <Icon name="Info" size={16} className="text-primary mt-0.5" />
            <div className="text-sm text-muted-foreground">
              <p className="mb-2">
                <strong>Importante:</strong> Todas as dicas são verificadas por nossa equipe editorial antes da publicação.
              </p>
              <p>
                Mantenha o anonimato se necessário - não publicaremos seus dados pessoais sem autorização.
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between pt-4">
          <Button 
            type="button"
            variant="outline"
            onClick={() => setIsExpanded(false)}
            disabled={isSubmitting}
          >
            Cancelar
          </Button>
          
          <Button 
            type="submit"
            variant="default"
            loading={isSubmitting}
            className="bg-primary hover:bg-primary/90"
          >
            <Icon name="Send" size={16} className="mr-2" />
            Enviar Dica
          </Button>
        </div>
      </form>
    </section>
  );
};

export default StoryTipForm;