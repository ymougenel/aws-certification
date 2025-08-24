export interface AwsService {
  id: string;
  name: string;
  description: string;
  icon: string;
  category: string;
  markdownFile: string;
}

export interface ServiceCategory {
  name: string;
  services: AwsService[];
}