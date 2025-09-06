import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';

import Button from '../../../components/ui/Button';

const AnalyticsChart = ({ data, chartType, onChartTypeChange }) => {
  const chartTypes = [
    { type: 'line', label: 'Linha', icon: 'TrendingUp' },
    { type: 'bar', label: 'Barras', icon: 'BarChart3' }
  ];

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload?.length) {
      return (
        <div className="bg-popover border border-border rounded-lg p-3 shadow-lg">
          <p className="text-sm font-medium text-popover-foreground mb-2">{label}</p>
          {payload?.map((entry, index) => (
            <p key={index} className="text-sm" style={{ color: entry?.color }}>
              {entry?.name}: {entry?.value}
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <div className="story-card p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="font-headline text-xl font-semibold text-foreground">
          Análise de Engajamento
        </h2>
        
        <div className="flex items-center space-x-2">
          {chartTypes?.map((type) => (
            <Button
              key={type?.type}
              variant={chartType === type?.type ? 'default' : 'outline'}
              size="sm"
              onClick={() => onChartTypeChange(type?.type)}
              iconName={type?.icon}
              iconPosition="left"
            >
              {type?.label}
            </Button>
          ))}
        </div>
      </div>
      <div className="h-80 w-full" aria-label="Analytics Chart">
        <ResponsiveContainer width="100%" height="100%">
          {chartType === 'line' ? (
            <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
              <XAxis 
                dataKey="date" 
                stroke="var(--color-muted-foreground)"
                fontSize={12}
              />
              <YAxis 
                stroke="var(--color-muted-foreground)"
                fontSize={12}
              />
              <Tooltip content={<CustomTooltip />} />
              <Line 
                type="monotone" 
                dataKey="views" 
                stroke="var(--color-primary)" 
                strokeWidth={2}
                name="Visualizações"
                dot={{ fill: 'var(--color-primary)', strokeWidth: 2, r: 4 }}
                activeDot={{ r: 6, stroke: 'var(--color-primary)', strokeWidth: 2 }}
              />
              <Line 
                type="monotone" 
                dataKey="engagement" 
                stroke="var(--color-secondary)" 
                strokeWidth={2}
                name="Engajamento"
                dot={{ fill: 'var(--color-secondary)', strokeWidth: 2, r: 4 }}
                activeDot={{ r: 6, stroke: 'var(--color-secondary)', strokeWidth: 2 }}
              />
            </LineChart>
          ) : (
            <BarChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
              <XAxis 
                dataKey="date" 
                stroke="var(--color-muted-foreground)"
                fontSize={12}
              />
              <YAxis 
                stroke="var(--color-muted-foreground)"
                fontSize={12}
              />
              <Tooltip content={<CustomTooltip />} />
              <Bar 
                dataKey="views" 
                fill="var(--color-primary)" 
                name="Visualizações"
                radius={[2, 2, 0, 0]}
              />
              <Bar 
                dataKey="engagement" 
                fill="var(--color-secondary)" 
                name="Engajamento"
                radius={[2, 2, 0, 0]}
              />
            </BarChart>
          )}
        </ResponsiveContainer>
      </div>
      <div className="mt-6 grid grid-cols-2 gap-4">
        <div className="text-center">
          <div className="text-2xl font-bold text-primary mb-1">
            {data?.reduce((sum, item) => sum + item?.views, 0)?.toLocaleString('pt-BR')}
          </div>
          <div className="text-sm text-muted-foreground">Total de Visualizações</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-secondary mb-1">
            {data?.reduce((sum, item) => sum + item?.engagement, 0)?.toLocaleString('pt-BR')}
          </div>
          <div className="text-sm text-muted-foreground">Total de Engajamento</div>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsChart;