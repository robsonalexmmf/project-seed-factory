
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface PlanDistribution {
  pro: number;
  business: number;
}

interface RevenueCardsProps {
  planDistribution: PlanDistribution;
  totalRevenue: number;
}

const RevenueCards = ({ planDistribution, totalRevenue }: RevenueCardsProps) => {
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(value);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <Card>
        <CardHeader>
          <CardTitle>Receita Pro</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-3xl font-bold text-blue-600">
            {formatCurrency(planDistribution.pro * 29.90)}
          </div>
          <p className="text-sm text-gray-500">
            {planDistribution.pro} assinantes Pro
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Receita Business</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-3xl font-bold text-purple-600">
            {formatCurrency(planDistribution.business * 79.90)}
          </div>
          <p className="text-sm text-gray-500">
            {planDistribution.business} assinantes Business
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Receita Total</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-3xl font-bold text-green-600">
            {formatCurrency(totalRevenue)}
          </div>
          <p className="text-sm text-gray-500">
            Receita mensal total
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default RevenueCards;
