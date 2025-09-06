import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const CategoryFilter = ({ categories, activeCategory, onCategoryChange }) => {
  return (
    <section className="bg-card border-b border-border sticky top-16 z-30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-headline text-xl font-semibold text-foreground">
            Categorias de Notícias
          </h2>
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <Icon name="Filter" size={16} />
            <span>Filtrar por categoria</span>
          </div>
        </div>
        
        <div className="flex flex-wrap gap-2 lg:gap-3">
          {categories?.map((category) => (
            <Button
              key={category?.id}
              variant={activeCategory === category?.id ? "default" : "outline"}
              size="sm"
              onClick={() => onCategoryChange(category?.id)}
              className={`golden-thread transition-all duration-200 ${
                activeCategory === category?.id
                  ? 'bg-primary text-primary-foreground active'
                  : 'border-border hover:border-primary hover:text-primary'
              }`}
            >
              <Icon 
                name={category?.icon} 
                size={14} 
                className="mr-2"
                style={{ color: activeCategory === category?.id ? 'white' : category?.color }}
              />
              <span className="font-medium">{category?.name}</span>
              <span className="ml-2 px-2 py-0.5 bg-white/20 rounded-full text-xs">
                {category?.count}
              </span>
            </Button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryFilter;