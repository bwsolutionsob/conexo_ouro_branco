import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const LocalBusinessSpotlight = ({ businesses }) => {
  return (
    <section className="bg-card rounded-lg border border-border p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-success/10 rounded-lg flex items-center justify-center">
            <Icon name="Store" size={18} className="text-success" />
          </div>
          <div>
            <h3 className="font-headline text-lg font-semibold text-foreground">
              Destaque Empresarial
            </h3>
            <p className="text-sm text-muted-foreground">
              Negócios locais em evidência
            </p>
          </div>
        </div>
        
        <Button 
          variant="outline" 
          size="sm"
          className="border-success text-success hover:bg-success hover:text-white"
          asChild
        >
          <Link to="/story-detail-pages">
            Ver Todos
          </Link>
        </Button>
      </div>
      <div className="space-y-4">
        {businesses?.map((business) => (
          <div key={business?.id} className="flex items-start space-x-4 p-4 rounded-lg heritage-gradient hover:bg-success/5 transition-colors group">
            <div className="flex-shrink-0">
              <div className="w-16 h-16 rounded-lg overflow-hidden">
                <Image
                  src={business?.logo}
                  alt={business?.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between mb-2">
                <h4 className="font-medium text-foreground group-hover:text-success transition-colors">
                  {business?.name}
                </h4>
                <div className="flex items-center space-x-1 text-xs">
                  {[...Array(5)]?.map((_, i) => (
                    <Icon
                      key={i}
                      name="Star"
                      size={12}
                      className={i < business?.rating ? 'text-accent fill-current' : 'text-muted-foreground'}
                    />
                  ))}
                  <span className="text-muted-foreground ml-1">({business?.reviews})</span>
                </div>
              </div>
              
              <p className="text-sm text-muted-foreground mb-2 line-clamp-2">
                {business?.description}
              </p>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                  <div className="flex items-center space-x-1">
                    <Icon name="MapPin" size={12} />
                    <span>{business?.location}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Icon name="Phone" size={12} />
                    <span>{business?.phone}</span>
                  </div>
                  <span className="px-2 py-0.5 bg-success/20 text-success rounded-full">
                    {business?.category}
                  </span>
                </div>
                
                <div className="flex items-center space-x-2">
                  <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-success">
                    <Icon name="ExternalLink" size={14} />
                  </Button>
                  <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-success">
                    <Icon name="Share2" size={14} />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 pt-4 border-t border-border">
        <div className="flex items-center justify-between text-sm">
          <span className="text-muted-foreground">
            Quer destacar seu negócio?
          </span>
          <Button 
            variant="ghost" 
            size="sm"
            className="text-success hover:text-success hover:bg-success/10"
          >
            <Icon name="Plus" size={14} className="mr-1" />
            Cadastrar Empresa
          </Button>
        </div>
      </div>
    </section>
  );
};

export default LocalBusinessSpotlight;