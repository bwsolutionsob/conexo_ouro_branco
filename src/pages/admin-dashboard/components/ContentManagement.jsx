import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';

const ContentManagement = ({ stories, onEditStory, onDeleteStory, onPublishStory }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');

  const filteredStories = stories?.filter(story => {
    const matchesSearch = story?.title?.toLowerCase()?.includes(searchTerm?.toLowerCase()) ||
                         story?.author?.toLowerCase()?.includes(searchTerm?.toLowerCase());
    const matchesStatus = statusFilter === 'all' || story?.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const getStatusColor = (status) => {
    switch (status) {
      case 'published': return 'text-success bg-success/10';
      case 'draft': return 'text-warning bg-warning/10';
      case 'scheduled': return 'text-secondary bg-secondary/10';
      case 'archived': return 'text-muted-foreground bg-muted/50';
      default: return 'text-muted-foreground bg-muted/50';
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case 'published': return 'Publicado';
      case 'draft': return 'Rascunho';
      case 'scheduled': return 'Agendado';
      case 'archived': return 'Arquivado';
      default: return status;
    }
  };

  return (
    <div className="story-card p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="font-headline text-xl font-semibold text-foreground">
          Gestão de Conteúdo
        </h2>
        <Button variant="default" iconName="Plus" iconPosition="left">
          Nova História
        </Button>
      </div>
      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <div className="flex-1">
          <Input
            type="search"
            placeholder="Buscar histórias..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e?.target?.value)}
          />
        </div>
        
        <div className="flex space-x-2">
          {['all', 'published', 'draft', 'scheduled']?.map((status) => (
            <Button
              key={status}
              variant={statusFilter === status ? 'default' : 'outline'}
              size="sm"
              onClick={() => setStatusFilter(status)}
            >
              {status === 'all' ? 'Todos' : getStatusText(status)}
            </Button>
          ))}
        </div>
      </div>
      {/* Stories List */}
      <div className="space-y-4">
        {filteredStories?.map((story) => (
          <div key={story?.id} className="border border-border rounded-lg p-4 hover:bg-muted/30 transition-colors">
            <div className="flex items-start justify-between">
              <div className="flex-1 min-w-0">
                <div className="flex items-center space-x-3 mb-2">
                  <h3 className="font-medium text-foreground truncate">
                    {story?.title}
                  </h3>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(story?.status)}`}>
                    {getStatusText(story?.status)}
                  </span>
                </div>
                
                <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                  <span className="flex items-center space-x-1">
                    <Icon name="User" size={14} />
                    <span>{story?.author}</span>
                  </span>
                  <span className="flex items-center space-x-1">
                    <Icon name="Calendar" size={14} />
                    <span>{new Date(story.createdAt)?.toLocaleDateString('pt-BR')}</span>
                  </span>
                  <span className="flex items-center space-x-1">
                    <Icon name="Eye" size={14} />
                    <span>{story?.views} visualizações</span>
                  </span>
                </div>
              </div>
              
              <div className="flex items-center space-x-2 ml-4">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => onEditStory(story?.id)}
                  className="text-muted-foreground hover:text-foreground"
                >
                  <Icon name="Edit" size={16} />
                </Button>
                
                {story?.status === 'draft' && (
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => onPublishStory(story?.id)}
                    className="text-success hover:text-success/80"
                  >
                    <Icon name="Send" size={16} />
                  </Button>
                )}
                
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => onDeleteStory(story?.id)}
                  className="text-error hover:text-error/80"
                >
                  <Icon name="Trash2" size={16} />
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {filteredStories?.length === 0 && (
        <div className="text-center py-8">
          <Icon name="FileText" size={48} className="text-muted-foreground mx-auto mb-4" />
          <p className="text-muted-foreground">
            {searchTerm || statusFilter !== 'all' ?'Nenhuma história encontrada com os filtros aplicados.' :'Nenhuma história encontrada. Crie sua primeira história!'
            }
          </p>
        </div>
      )}
    </div>
  );
};

export default ContentManagement;