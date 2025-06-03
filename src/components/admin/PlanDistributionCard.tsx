
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface PlanDistribution {
  freemium: number;
  pro: number;
  business: number;
  admin: number;
}

interface PlanDistributionCardProps {
  planDistribution: PlanDistribution;
  totalUsers: number;
}

const PlanDistributionCard = ({ planDistribution, totalUsers }: PlanDistributionCardProps) => {
  const getPlanBadgeVariant = (plan: string) => {
    switch (plan) {
      case 'business': return 'default';
      case 'pro': return 'secondary';
      case 'admin': return 'destructive';
      default: return 'outline';
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Distribuição de Planos</CardTitle>
        <CardDescription>Análise dos tipos de assinatura (dados de exemplo)</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {Object.entries(planDistribution).map(([plan, count]) => (
            <div key={plan} className="text-center p-4 border rounded-lg">
              <div className="text-3xl font-bold mb-2 text-gray-700">{count}</div>
              <Badge variant={getPlanBadgeVariant(plan)} className="mb-2">
                {plan.charAt(0).toUpperCase() + plan.slice(1)}
              </Badge>
              <div className="text-sm text-gray-500">
                {totalUsers > 0 ? ((count / totalUsers) * 100).toFixed(1) : 0}%
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default PlanDistributionCard;
