import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from '../AppIcon';
import Button from './Button';

const Sidebar = ({ isCollapsed = false, onToggle }) => {
  const [isHovered, setIsHovered] = useState(false);
  const location = useLocation();

  const navigationSections = [
    {
      title: 'Principal',
      items: [
        { name: 'Início', path: '/homepage', icon: 'Home', description: 'Página inicial' },
        { name: 'Notícias Locais', path: '/ouro-branco-local-news', icon: 'MapPin', description: 'Ouro Branco em foco' },
        { name: 'Tecnologia', path: '/technology-insights-portal', icon: 'Cpu', description: 'Insights tecnológicos' },
        { name: 'Histórias', path: '/story-detail-pages', icon: 'FileText', description: 'Reportagens detalhadas' },
      ]
    },
    {
      title: 'Gestão',
      items: [
        { name: 'Painel Admin', path: '/admin-dashboard', icon: 'Settings', description: 'Administração' },
        { name: 'Sobre', path: '/about-editorial-standards', icon: 'Info', description: 'Padrões editoriais' },
      ]
    }
  ];

  const communityStats = [
    { label: 'Leitores Ativos', value: '2.4K', icon: 'Users', trend: '+12%' },
    { label: 'Histórias Hoje', value: '8', icon: 'FileText', trend: '+3' },
    { label: 'Dicas Recebidas', value: '15', icon: 'MessageSquare', trend: '+5' },
  ];

  const isActivePath = (path) => location?.pathname === path;
  const shouldShowContent = !isCollapsed || isHovered;

  return (
    <aside 
      className={`fixed left-0 top-16 bottom-0 z-40 bg-card border-r border-border transition-all duration-300 ease-in-out ${
        isCollapsed ? 'w-16' : 'w-64'
      } lg:w-64 lg:translate-x-0`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex flex-col h-full">
        {/* Sidebar Header */}
        <div className="p-4 border-b border-border">
          <div className="flex items-center justify-between">
            {shouldShowContent && (
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-br from-accent to-primary rounded-md flex items-center justify-center">
                  <Icon name="Zap" size={16} color="white" strokeWidth={2.5} />
                </div>
                <div>
                  <h2 className="font-headline text-sm font-semibold text-foreground">
                    Conexão
                  </h2>
                  <p className="font-accent text-xs text-muted-foreground -mt-0.5">
                    Ouro Branco
                  </p>
                </div>
              </div>
            )}
            {onToggle && (
              <Button
                variant="ghost"
                size="icon"
                onClick={onToggle}
                className="h-8 w-8 text-muted-foreground hover:text-foreground"
              >
                <Icon name={isCollapsed ? "ChevronRight" : "ChevronLeft"} size={16} />
              </Button>
            )}
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto p-4 space-y-6">
          {navigationSections?.map((section) => (
            <div key={section?.title}>
              {shouldShowContent && (
                <h3 className="font-body text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                  {section?.title}
                </h3>
              )}
              <div className="space-y-1">
                {section?.items?.map((item) => (
                  <Link
                    key={item?.path}
                    to={item?.path}
                    className={`golden-thread group flex items-center px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                      isActivePath(item?.path)
                        ? 'text-primary bg-accent/10 active' :'text-foreground hover:text-primary hover:bg-accent/5'
                    }`}
                    title={!shouldShowContent ? item?.name : ''}
                  >
                    <Icon 
                      name={item?.icon} 
                      size={18} 
                      className={`flex-shrink-0 ${shouldShowContent ? 'mr-3' : ''}`}
                    />
                    {shouldShowContent && (
                      <div className="flex-1 min-w-0">
                        <div className="truncate">{item?.name}</div>
                        <div className="text-xs text-muted-foreground truncate">
                          {item?.description}
                        </div>
                      </div>
                    )}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </nav>

        {/* Community Stats */}
        {shouldShowContent && (
          <div className="p-4 border-t border-border">
            <h3 className="font-body text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
              Comunidade Hoje
            </h3>
            <div className="space-y-3">
              {communityStats?.map((stat) => (
                <div key={stat?.label} className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-6 h-6 bg-accent/10 rounded flex items-center justify-center">
                      <Icon name={stat?.icon} size={12} className="text-primary" />
                    </div>
                    <div>
                      <div className="text-xs font-medium text-foreground">
                        {stat?.value}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {stat?.label}
                      </div>
                    </div>
                  </div>
                  <div className="text-xs text-success font-medium">
                    {stat?.trend}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Quick Actions */}
        {shouldShowContent && (
          <div className="p-4 border-t border-border space-y-2">
            <Button 
              variant="outline" 
              size="sm"
              fullWidth
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              <Icon name="Bell" size={14} className="mr-2" />
              Newsletter
            </Button>
            <Button 
              variant="default" 
              size="sm"
              fullWidth
              className="bg-accent text-accent-foreground hover:bg-accent/90"
            >
              <Icon name="PenTool" size={14} className="mr-2" />
              Enviar Dica
            </Button>
          </div>
        )}

        {/* Collapsed Quick Actions */}
        {!shouldShowContent && (
          <div className="p-2 border-t border-border space-y-2">
            <Button 
              variant="ghost" 
              size="icon"
              className="w-full h-10 text-primary hover:bg-accent/10"
              title="Newsletter"
            >
              <Icon name="Bell" size={16} />
            </Button>
            <Button 
              variant="ghost" 
              size="icon"
              className="w-full h-10 text-accent-foreground hover:bg-accent/10"
              title="Enviar Dica"
            >
              <Icon name="PenTool" size={16} />
            </Button>
          </div>
        )}
      </div>
    </aside>
  );
};

export default Sidebar;