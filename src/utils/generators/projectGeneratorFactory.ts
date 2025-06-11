
import { ProjectTemplate } from '../projectTemplates';
import { generateDeliveryProject } from './specific/deliveryGenerator';
import { generateCRMProject } from './specific/crmGenerator';
import { generateEcommerceProject } from './specific/ecommerceGenerator';
import { generateRealEstateProject } from './specific/realEstateGenerator';
import { generateHealthProject } from './specific/healthGenerator';
import { generateEducationProject } from './specific/educationGenerator';
import { generateEntertainmentProject } from './specific/entertainmentGenerator';
import { generateFinanceProject } from './specific/financeGenerator';
import { generateMarketingProject } from './specific/marketingGenerator';
import { generateHRProject } from './specific/hrGenerator';
import { generateInventoryProject } from './specific/inventoryGenerator';
import { generateUtilityProject } from './specific/utilityGenerator';

export interface ProjectFile {
  path: string;
  content: string;
}

export interface GeneratedProject {
  files: ProjectFile[];
  name: string;
  description: string;
  features: string[];
}

export const generateProjectByTemplate = (
  template: ProjectTemplate,
  projectName: string,
  projectDescription: string,
  customFeatures: string
): GeneratedProject => {
  const baseConfig = {
    projectName,
    projectDescription,
    customFeatures,
    template
  };

  // Mapeamento por ID específico do template
  switch (template.id) {
    // Delivery & Food
    case 'food-delivery':
    case 'restaurant-pos':
    case 'grocery-delivery':
      return generateDeliveryProject(baseConfig);

    // CRM & Sales
    case 'enterprise-crm':
    case 'sales-crm':
    case 'lead-management':
      return generateCRMProject(baseConfig);

    // E-commerce
    case 'ecommerce-platform':
    case 'marketplace':
    case 'dropshipping':
      return generateEcommerceProject(baseConfig);

    // Real Estate
    case 'real-estate':
    case 'property-management':
    case 'rental-platform':
      return generateRealEstateProject(baseConfig);

    // Health & Medical
    case 'health-tracker':
    case 'telemedicine':
    case 'medical-records':
      return generateHealthProject(baseConfig);

    // Education
    case 'lms-platform':
    case 'online-classroom':
    case 'student-portal':
      return generateEducationProject(baseConfig);

    // Entertainment
    case 'streaming-platform':
    case 'music-streaming':
    case 'gaming-platform':
      return generateEntertainmentProject(baseConfig);

    // Finance
    case 'expense-tracker':
    case 'financial-erp':
    case 'budget-planner':
      return generateFinanceProject(baseConfig);

    // Marketing
    case 'marketing-automation':
    case 'social-media-manager':
    case 'email-marketing':
      return generateMarketingProject(baseConfig);

    // HR
    case 'hr-management-platform':
    case 'recruitment-system':
    case 'employee-portal':
      return generateHRProject(baseConfig);

    // Inventory
    case 'inventory-management':
    case 'warehouse-management':
    case 'supply-chain-management':
      return generateInventoryProject(baseConfig);

    // Utilities e outros
    default:
      return generateUtilityProject(baseConfig);
  }
};
