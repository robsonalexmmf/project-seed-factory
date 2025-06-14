
import React from "react";
import LeadsList from "@/components/crm/LeadsList";
import { useAuth } from "@/hooks/useAuth";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const CRMMain: React.FC = () => {
  const { userProfile } = useAuth();

  if (!userProfile) {
    return (
      <div className="max-w-screen-lg mx-auto p-8">
        <Card>
          <CardContent>
            <p className="text-center">Faça login para acessar o CRM.</p>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="max-w-screen-lg mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">CRM Leads e Dashboard</h1>
      <LeadsList />
    </div>
  );
};

export default CRMMain;
