import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';

const SearchAndFilters = ({ onSearch, onFilterChange, totalResults = 0 }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isAdvancedOpen, setIsAdvancedOpen] = useState(false);
  const [filters, setFilters] = useState({
    dateRange: 'all',
    sortBy: 'newest',
    author: '',
    hasImages: false,
    hasVideo: false
  });

  const dateRangeOptions = [
    { value: 'all', label: 'Todas as datas' },
    { value: 'today', label: 'Hoje' },
    { value: 'week', label: 'Esta semana' },
    { value: 'month', label: 'Este mês' },
    { value: 'year', label: 'Este ano' }
  ];

  const sortOptions = [
    { value: 'newest', label: 'Mais recentes' },
    { value: 'oldest', label: 'Mais antigas' },
    { value: 'popular', label: 'Mais populares' },
    { value: 'relevant', label: 'Mais relevantes' }
  ];

  const handleSearch = (e) => {
    e?.preventDefault();
    if (onSearch) {
      onSearch(searchTerm, filters);
    }
  };

  const handleFilterChange = (key, value) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);
    if (onFilterChange) {
      onFilterChange(newFilters);
    }
  };

  const clearFilters = () => {
    const resetFilters = {
      dateRange: 'all',
      sortBy: 'newest',
      author: '',
      hasImages: false,
      hasVideo: false
    };
    setFilters(resetFilters);
    setSearchTerm('');
    if (onFilterChange) {
      onFilterChange(resetFilters);
    }
    if (onSearch) {
      onSearch('', resetFilters);
    }
  };

  return (
    <section className="bg-card rounded-lg border border-border p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-secondary/10 rounded-lg flex items-center justify-center">
            <Icon name="Search" size={18} className="text-secondary" />
          </div>
          <div>
            <h3 className="font-headline text-lg font-semibold text-foreground">
              Buscar Notícias
            </h3>
            <p className="text-sm text-muted-foreground">
              {totalResults > 0 ? `${totalResults} resultados encontrados` : 'Encontre matérias específicas'}
            </p>
          </div>
        </div>
        
        <Button
          variant="outline"
          size="sm"
          onClick={() => setIsAdvancedOpen(!isAdvancedOpen)}
          className="border-secondary text-secondary hover:bg-secondary hover:text-white"
        >
          <Icon name="SlidersHorizontal" size={16} className="mr-2" />
          {isAdvancedOpen ? 'Ocultar' : 'Filtros'}
        </Button>
      </div>
      {/* Search Form */}
      <form onSubmit={handleSearch} className="mb-6">
        <div className="flex gap-3">
          <div className="flex-1">
            <Input
              type="search"
              placeholder="Buscar por título, conteúdo, autor..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e?.target?.value)}
              className="w-full"
            />
          </div>
          <Button 
            type="submit"
            variant="default"
            className="bg-secondary hover:bg-secondary/90"
          >
            <Icon name="Search" size={16} className="mr-2" />
            Buscar
          </Button>
        </div>
      </form>
      {/* Advanced Filters */}
      {isAdvancedOpen && (
        <div className="border-t border-border pt-6 space-y-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Date Range */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Período
              </label>
              <select
                value={filters?.dateRange}
                onChange={(e) => handleFilterChange('dateRange', e?.target?.value)}
                className="w-full px-3 py-2 border border-border rounded-md bg-input text-foreground focus:ring-2 focus:ring-secondary focus:border-transparent"
              >
                {dateRangeOptions?.map((option) => (
                  <option key={option?.value} value={option?.value}>
                    {option?.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Sort By */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Ordenar por
              </label>
              <select
                value={filters?.sortBy}
                onChange={(e) => handleFilterChange('sortBy', e?.target?.value)}
                className="w-full px-3 py-2 border border-border rounded-md bg-input text-foreground focus:ring-2 focus:ring-secondary focus:border-transparent"
              >
                {sortOptions?.map((option) => (
                  <option key={option?.value} value={option?.value}>
                    {option?.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Author */}
            <div>
              <Input
                label="Autor"
                type="text"
                placeholder="Nome do jornalista"
                value={filters?.author}
                onChange={(e) => handleFilterChange('author', e?.target?.value)}
              />
            </div>

            {/* Media Filters */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Conteúdo
              </label>
              <div className="space-y-2">
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={filters?.hasImages}
                    onChange={(e) => handleFilterChange('hasImages', e?.target?.checked)}
                    className="rounded border-border text-secondary focus:ring-secondary"
                  />
                  <span className="text-sm text-foreground">Com imagens</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={filters?.hasVideo}
                    onChange={(e) => handleFilterChange('hasVideo', e?.target?.checked)}
                    className="rounded border-border text-secondary focus:ring-secondary"
                  />
                  <span className="text-sm text-foreground">Com vídeo</span>
                </label>
              </div>
            </div>
          </div>

          {/* Quick Search Tags */}
          <div>
            <label className="block text-sm font-medium text-foreground mb-3">
              Buscas populares
            </label>
            <div className="flex flex-wrap gap-2">
              {[
                'Prefeitura',
                'Obras públicas',
                'Educação',
                'Saúde',
                'Trânsito',
                'Meio ambiente',
                'Cultura',
                'Esportes'
              ]?.map((tag) => (
                <Button
                  key={tag}
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    setSearchTerm(tag);
                    if (onSearch) {
                      onSearch(tag, filters);
                    }
                  }}
                  className="text-xs border-muted-foreground/30 text-muted-foreground hover:border-secondary hover:text-secondary"
                >
                  {tag}
                </Button>
              ))}
            </div>
          </div>

          {/* Clear Filters */}
          <div className="flex justify-end pt-4 border-t border-border">
            <Button
              variant="ghost"
              onClick={clearFilters}
              className="text-muted-foreground hover:text-foreground"
            >
              <Icon name="RotateCcw" size={16} className="mr-2" />
              Limpar Filtros
            </Button>
          </div>
        </div>
      )}
    </section>
  );
};

export default SearchAndFilters;