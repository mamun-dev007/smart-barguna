export type ServiceCategory =
  | "information"
  | "application"
  | "certificate"
  | "utility";

export interface ServiceItem {
  id: string;
  name: string;
  slug: string;
  description: string;
  category: ServiceCategory;
  icon?: string;
  isActive: boolean;
}
