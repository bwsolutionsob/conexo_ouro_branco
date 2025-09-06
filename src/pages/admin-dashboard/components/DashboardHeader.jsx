import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const DashboardHeader = ({ user, onLogout }) => {
  return (
    <div className="bg-card border-b border-border p-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-headline text-2xl font-bold text-foreground">
            Painel Administrativo
          </h1>
          <p className="text-muted-foreground mt-1">
            Sistema de Gestão de Conteúdo - Conexão Ouro Branco
          </p>
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-accent to-primary rounded-full flex items-center justify-center">
              <Icon name="User" size={20} color="white" />
            </div>
            <div className="hidden sm:block">
              <p className="font-medium text-foreground">{user?.name}</p>
              <p className="text-sm text-muted-foreground">{user?.role}</p>
            </div>
          </div>
          
          <Button
            variant="outline"
            size="sm"
            onClick={onLogout}
            iconName="LogOut"
            iconPosition="left"
            className="text-muted-foreground hover:text-foreground"
          >
            Sair
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;