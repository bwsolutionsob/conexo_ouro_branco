import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import { Checkbox } from '../../../components/ui/Checkbox';

const FilterPanel = ({ 
  filters, 
  onFilterChange, 
  onClearFilters, 
  isCollapsed, 
  onToggleCollapse 
}) => {
  const filterCategories = [
    {
      id: 'relevance',
      label: 'Relevância Local',
      icon: 'MapPin',
      options: [
        { value: 'high', label: 'Alta Relevância', count: 12 },
        { value: 'medium', label: 'Média Relevância', count: 8 },
        { value: 'low', label: 'Baixa Relevância', count: 5 }
      ]
    },
    {
      id: 'category',
      label: 'Setor Tecnológico',
      icon: 'Cpu',
      options: [
        { value: 'health', label: 'Saúde Digital', count: 15 },
        { value: 'education', label: 'Educação Tech', count: 10 },
        { value: 'business', label: 'Negócios', count: 18 },
        { value: 'infrastructure', label: 'Infraestrutura', count: 7 },
        { value: 'environment', label: 'Sustentabilidade', count: 9 }
      ]
    },
    {
      id: 'timeline',
      label: 'Prazo de Implementação',
      icon: 'Clock',
      options: [
        { value: 'immediate', label: 'Imediato (0-6 meses)', count: 6 },
        { value: 'short', label: 'Curto prazo (6-18 meses)', count: 12 },
        { value: 'medium', label: 'Médio prazo (1-3 anos)', count: 8 },
        { value: 'long', label: 'Longo prazo (3+ anos)', count: 4 }
      ]
    },
    {
      id: 'source',
      label: 'Fonte da Notícia',
      icon: 'Globe',
      options: [
        { value: 'national', label: 'Mídia Nacional', count: 20 },
        { value: 'international', label: 'Mídia Internacional', count: 15 },
        { value: 'startup', label: 'Ecossistema Startup', count: 10 },
        { value: 'government', label: 'Governo/Órgãos', count: 5 }
      ]
    }
  ];

  const handleFilterToggle = (categoryId, optionValue) => {
    const currentFilters = filters?.[categoryId] || [];
    const newFilters = currentFilters?.includes(optionValue)
      ? currentFilters?.filter(f => f !== optionValue)
      : [...currentFilters, optionValue];
    
    onFilterChange(categoryId, newFilters);
  };

  const getActiveFilterCount = () => {
    return Object.values(filters)?.reduce((count, filterArray) => count + filterArray?.length, 0);
  };

  return (
    <div className={`bg-card border border-border rounded-lg transition-all duration-300 ${
      isCollapsed ? 'h-16' : 'h-auto'
    }`}>
      {/* Filter Header */}
      <div className="flex items-center justify-between p-4 border-b border-border">
        <div className="flex items-center space-x-2">
          <Icon name="Filter" size={18} className="text-primary" />
          <h3 className="font-headline text-lg font-semibold text-foreground">
            Filtros Avançados
          </h3>
          {getActiveFilterCount() > 0 && (
            <span className="inline-flex items-center justify-center w-6 h-6 bg-primary text-primary-foreground text-xs font-medium rounded-full">
              {getActiveFilterCount()}
            </span>
          )}
        </div>
        
        <div className="flex items-center space-x-2">
          {getActiveFilterCount() > 0 && (
            <Button
              variant="ghost"
              size="sm"
              onClick={onClearFilters}
              className="text-muted-foreground hover:text-foreground"
            >
              <Icon name="X" size={14} className="mr-1" />
              Limpar
            </Button>
          )}
          <Button
            variant="ghost"
            size="icon"
            onClick={onToggleCollapse}
            className="text-muted-foreground hover:text-foreground"
          >
            <Icon name={isCollapsed ? "ChevronDown" : "ChevronUp"} size={16} />
          </Button>
        </div>
      </div>
      {/* Filter Content */}
      {!isCollapsed && (
        <div className="p-4 space-y-6">
          {filterCategories?.map((category) => (
            <div key={category?.id}>
              <div className="flex items-center space-x-2 mb-3">
                <Icon name={category?.icon} size={16} className="text-primary" />
                <h4 className="font-body text-sm font-semibold text-foreground">
                  {category?.label}
                </h4>
              </div>
              
              <div className="space-y-2 pl-6">
                {category?.options?.map((option) => (
                  <div key={option?.value} className="flex items-center justify-between">
                    <Checkbox
                      label={option?.label}
                      checked={(filters?.[category?.id] || [])?.includes(option?.value)}
                      onChange={() => handleFilterToggle(category?.id, option?.value)}
                      size="sm"
                    />
                    <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded">
                      {option?.count}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
          
          {/* Quick Filter Presets */}
          <div className="pt-4 border-t border-border">
            <h4 className="font-body text-sm font-semibold text-foreground mb-3">
              Filtros Rápidos
            </h4>
            <div className="flex flex-wrap gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => onFilterChange('relevance', ['high'])}
                className="text-xs"
              >
                <Icon name="TrendingUp" size={12} className="mr-1" />
                Alta Relevância
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => onFilterChange('category', ['health'])}
                className="text-xs"
              >
                <Icon name="Heart" size={12} className="mr-1" />
                Saúde Tech
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => onFilterChange('timeline', ['immediate', 'short'])}
                className="text-xs"
              >
                <Icon name="Zap" size={12} className="mr-1" />
                Implementação Rápida
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FilterPanel;