export type TechStackKey = 'frontend' | 'backend' | 'database';
export type AdditionalToolKey = 'git' | 'cicd' | 'testing' | 'agile' | 'uiux' | 'performance';

export interface TechStack {
  key: TechStackKey;
  icon: React.ReactNode;
}

export interface AdditionalTool {
  key: AdditionalToolKey;
  level: number;
  color: string;
}