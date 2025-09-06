import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from '../AppIcon';
import Button from './Button';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navigationItems = [
    { name: 'Início', path: '/homepage', icon: 'Home' },
    { name: 'Notícias Locais', path: '/ouro-branco-local-news', icon: 'MapPin' },
    { name: 'Tecnologia', path: '/technology-insights-portal', icon: 'Cpu' },
    { name: 'Histórias', path: '/story-detail-pages', icon: 'FileText' },
  ];

  const secondaryItems = [
    { name: 'Painel Admin', path: '/admin-dashboard', icon: 'Settings' },
    { name: 'Sobre', path: '/about-editorial-standards', icon: 'Info' },
  ];

  const isActivePath = (path) => location?.pathname === path;

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card border-b border-border shadow-sm">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <Link to="/homepage" className="flex items-center space-x-3 flex-shrink-0">
            <div className="w-10 h-10 bg-gradient-to-br from-accent to-primary rounded-lg flex items-center justify-center">
              <Icon name="Zap" size={24} color="white" strokeWidth={2.5} />
            </div>
            <div className="hidden sm:block">
              <h1 className="font-headline text-xl font-bold text-foreground">
                Conexão Ouro Branco
              </h1>
              <p className="font-accent text-xs text-muted-foreground -mt-1">
                Comunidade & Inovação
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigationItems?.map((item) => (
              <Link
                key={item?.path}
                to={item?.path}
                className={`golden-thread px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                  isActivePath(item?.path)
                    ? 'text-primary bg-accent/10 active' :'text-foreground hover:text-primary hover:bg-accent/5'
                }`}
              >
                <div className="flex items-center space-x-2">
                  <Icon name={item?.icon} size={16} />
                  <span>{item?.name}</span>
                </div>
              </Link>
            ))}
            
            {/* More Menu */}
            <div className="relative group">
              <button className="golden-thread px-4 py-2 rounded-md text-sm font-medium text-foreground hover:text-primary hover:bg-accent/5 transition-colors duration-200">
                <div className="flex items-center space-x-2">
                  <Icon name="MoreHorizontal" size={16} />
                  <span>Mais</span>
                </div>
              </button>
              
              {/* Dropdown */}
              <div className="absolute right-0 top-full mt-1 w-48 bg-popover border border-border rounded-md shadow-editorial opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="py-1">
                  {secondaryItems?.map((item) => (
                    <Link
                      key={item?.path}
                      to={item?.path}
                      className={`flex items-center space-x-2 px-4 py-2 text-sm transition-colors duration-200 ${
                        isActivePath(item?.path)
                          ? 'text-primary bg-accent/10' :'text-popover-foreground hover:text-primary hover:bg-accent/5'
                      }`}
                    >
                      <Icon name={item?.icon} size={16} />
                      <span>{item?.name}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </nav>

          {/* Newsletter CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <Button 
              variant="outline" 
              size="sm"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              <Icon name="Bell" size={16} className="mr-2" />
              Newsletter
            </Button>
            <Button 
              variant="default" 
              size="sm"
              className="bg-accent text-accent-foreground hover:bg-accent/90"
            >
              <Icon name="PenTool" size={16} className="mr-2" />
              Enviar Dica
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="lg:hidden p-2 rounded-md text-foreground hover:text-primary hover:bg-accent/5 transition-colors duration-200"
            aria-label="Toggle mobile menu"
          >
            <Icon name={isMobileMenuOpen ? "X" : "Menu"} size={24} />
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-border bg-card">
            <div className="px-4 py-2 space-y-1">
              {navigationItems?.map((item) => (
                <Link
                  key={item?.path}
                  to={item?.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`flex items-center space-x-3 px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                    isActivePath(item?.path)
                      ? 'text-primary bg-accent/10' :'text-foreground hover:text-primary hover:bg-accent/5'
                  }`}
                >
                  <Icon name={item?.icon} size={20} />
                  <span>{item?.name}</span>
                </Link>
              ))}
              
              <div className="border-t border-border pt-2 mt-2">
                {secondaryItems?.map((item) => (
                  <Link
                    key={item?.path}
                    to={item?.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`flex items-center space-x-3 px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                      isActivePath(item?.path)
                        ? 'text-primary bg-accent/10' :'text-foreground hover:text-primary hover:bg-accent/5'
                    }`}
                  >
                    <Icon name={item?.icon} size={20} />
                    <span>{item?.name}</span>
                  </Link>
                ))}
              </div>
              
              <div className="border-t border-border pt-2 mt-2 space-y-2">
                <Button 
                  variant="outline" 
                  size="sm"
                  fullWidth
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                >
                  <Icon name="Bell" size={16} className="mr-2" />
                  Newsletter
                </Button>
                <Button 
                  variant="default" 
                  size="sm"
                  fullWidth
                  className="bg-accent text-accent-foreground hover:bg-accent/90"
                >
                  <Icon name="PenTool" size={16} className="mr-2" />
                  Enviar Dica
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;