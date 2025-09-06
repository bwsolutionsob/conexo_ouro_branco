import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';
import Button from '../../../components/ui/Button';

const SearchAndSort = ({ 
  searchQuery, 
  onSearchChange, 
  sortBy, 
  onSortChange, 
  viewMode, 
  onViewModeChange,
  totalResults 
}) => {
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  const sortOptions = [
    { value: 'relevance', label: 'Mais Relevantes' },
    { value: 'date', label: 'Mais Recentes' },
    { value: 'impact', label: 'Maior Impacto Local' },
    { value: 'popularity', label: 'Mais Populares' },
    { value: 'alphabetical', label: 'Ordem Alfabética' }
  ];

  const viewModeOptions = [
    { value: 'grid', icon: 'Grid3X3', label: 'Grade' },
    { value: 'list', icon: 'List', label: 'Lista' },
    { value: 'compact', icon: 'Menu', label: 'Compacto' }
  ];

  const handleSearchSubmit = (e) => {
    e?.preventDefault();
    // Search is handled by onChange, but we can add analytics here
  };

  return (
    <div className="bg-card border border-border rounded-lg p-4 mb-6">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0 lg:space-x-4">
        {/* Search Section */}
        <div className="flex-1 max-w-md">
          <form onSubmit={handleSearchSubmit} className="relative">
            <div className={`relative transition-all duration-200 ${
              isSearchFocused ? 'transform scale-105' : ''
            }`}>
              <Icon 
                name="Search" 
                size={18} 
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" 
              />
              <Input
                type="search"
                placeholder="Buscar tecnologias, empresas, tendências..."
                value={searchQuery}
                onChange={(e) => onSearchChange(e?.target?.value)}
                onFocus={() => setIsSearchFocused(true)}
                onBlur={() => setIsSearchFocused(false)}
                className="pl-10 pr-10"
              />
              {searchQuery && (
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => onSearchChange('')}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 w-6 h-6 text-muted-foreground hover:text-foreground"
                >
                  <Icon name="X" size={14} />
                </Button>
              )}
            </div>
          </form>
        </div>

        {/* Sort and View Controls */}
        <div className="flex items-center space-x-4">
          {/* Results Count */}
          <div className="hidden sm:flex items-center text-sm text-muted-foreground">
            <Icon name="FileText" size={14} className="mr-1" />
            {totalResults} {totalResults === 1 ? 'artigo' : 'artigos'}
          </div>

          {/* Sort Dropdown */}
          <div className="min-w-[180px]">
            <Select
              options={sortOptions}
              value={sortBy}
              onChange={onSortChange}
              placeholder="Ordenar por..."
            />
          </div>

          {/* View Mode Toggle */}
          <div className="flex items-center bg-muted rounded-lg p-1">
            {viewModeOptions?.map((mode) => (
              <Button
                key={mode?.value}
                variant={viewMode === mode?.value ? "default" : "ghost"}
                size="sm"
                onClick={() => onViewModeChange(mode?.value)}
                className={`px-3 py-2 ${
                  viewMode === mode?.value 
                    ? 'bg-background text-foreground shadow-sm' 
                    : 'text-muted-foreground hover:text-foreground'
                }`}
                title={mode?.label}
              >
                <Icon name={mode?.icon} size={16} />
              </Button>
            ))}
          </div>
        </div>
      </div>
      {/* Search Suggestions */}
      {isSearchFocused && !searchQuery && (
        <div className="mt-4 pt-4 border-t border-border">
          <p className="text-xs text-muted-foreground mb-2">Sugestões populares:</p>
          <div className="flex flex-wrap gap-2">
            {[
              'Inteligência Artificial',
              'Blockchain',
              'Telemedicina',
              'Educação Digital',
              'Sustentabilidade Tech',
              'Startups MG'
            ]?.map((suggestion) => (
              <Button
                key={suggestion}
                variant="ghost"
                size="sm"
                onClick={() => onSearchChange(suggestion)}
                className="text-xs text-primary hover:bg-primary/10"
              >
                {suggestion}
              </Button>
            ))}
          </div>
        </div>
      )}
      {/* Active Search Info */}
      {searchQuery && (
        <div className="mt-4 pt-4 border-t border-border">
          <div className="flex items-center justify-between">
            <p className="text-sm text-foreground">
              Resultados para: <span className="font-medium text-primary">"{searchQuery}"</span>
            </p>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => onSearchChange('')}
              className="text-muted-foreground hover:text-foreground"
            >
              <Icon name="X" size={14} className="mr-1" />
              Limpar busca
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchAndSort;