import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { AwsService, ServiceCategory } from '../models/aws-service.model';

@Injectable({
  providedIn: 'root'
})
export class AwsServicesService {
  private services: AwsService[] = [
    // Compute Services
    {
      id: 'ec2',
      name: 'Amazon EC2',
      description: 'Scalable virtual servers in the cloud',
      icon: 'fas fa-server',
      category: 'Compute',
      markdownFile: 'ec2.md'
    },
    {
      id: 'lambda',
      name: 'AWS Lambda',
      description: 'Run code without thinking about servers',
      icon: 'fas fa-bolt',
      category: 'Compute',
      markdownFile: 'lambda.md'
    },
    {
      id: 'ecs',
      name: 'Amazon Container',
      description: 'ECS,Fargate, ECR & EKS',
      icon: 'fas fa-cube',
      category: 'Compute',
      markdownFile: 'container.md'
    },

    // Storage Services
    {
      id: 's3',
      name: 'Amazon S3',
      description: 'Object storage built to store and retrieve any amount of data',
      icon: 'fas fa-hdd',
      category: 'Storage',
      markdownFile: 's3.md'
    },
    {
      id: 'ebs',
      name: 'Amazon EBS',
      description: 'High performance block storage',
      icon: 'fas fa-database',
      category: 'Storage',
      markdownFile: 'ebs.md'
    },

    // Database Services
    {
      id: 'aurora',
      name: 'Amazon Aurora',
      description: 'High-performance managed relational database',
      icon: 'fas fa-table',
      category: 'Databases',
      markdownFile: 'aurora.md'
    },
    {
      id: 'rds',
      name: 'Amazon RDS',
      description: 'Managed relational database service',
      icon: 'fas fa-database',
      category: 'Databases',
      markdownFile: 'rds.md'
    },
    {
      id: 'dynamodb',
      name: 'Amazon DynamoDB',
      description: 'Fast and flexible NoSQL database',
      icon: 'fas fa-th',
      category: 'Databases',
      markdownFile: 'dynamodb.md'
    },

    // Networking Services
    {
      id: 'route53',
      name: 'Amazon Route 53',
      description: 'Scalable domain name system (DNS)',
      icon: 'fas fa-route',
      category: 'Networking',
      markdownFile: 'route53.md'
    },
    {
      id: 'cloudfront',
      name: 'Amazon CloudFront',
      description: 'Global content delivery network',
      icon: 'fas fa-globe',
      category: 'Networking',
      markdownFile: 'cloudfront.md'
    },
    {
      id: 'load_balancing',
      name: 'Amazon  Load Balancing',
      description: 'Amazon  Load Balancing types',
      icon: 'fas fa-diagram-project',
      category: 'Networking',
      markdownFile: 'load_balancing.md'
    },
    {
      id: 'vpc',
      name: 'Amazon VPC',
      description: 'Isolated cloud resources',
      icon: 'fas fa-network-wired',
      category: 'Networking',
      markdownFile: 'vpc.md'
    },
    // AI/Big DATA Services
    {
      id: 'AI',
      name: 'Machine Learning',
      description: 'AWS Machine Learning Services',
      icon: 'fas fa-comment-nodes',
      category: 'Data, AI & Analytics',
      markdownFile: 'machine_learning.md'
    },
    //   // TODO
    // {
    //   id: 'athena',
    //   name: 'Athena',
    //   description: 'Identity management for your apps',
    //   icon: 'fas fa-user-shield',
    //   category: 'Security',
    //   markdownFile: 'cognito.md'
    // },
    // Security Services
    {
      id: 'iam',
      name: 'AWS IAM',
      description: 'Identity and access management',
      icon: 'fas fa-shield-alt',
      category: 'Security',
      markdownFile: 'iam.md'
    },
    {
      id: 'cognito',
      name: 'Amazon Cognito',
      description: 'Identity management for your apps',
      icon: 'fas fa-user-shield',
      category: 'Security',
      markdownFile: 'cognito.md'
    },
    {
      id: 'audit_monitoring',
      name: 'Audit & Monitoring',
      description: 'AWS Audit & Monitoring',
      icon: 'fas fa-cloud-meatball',
      category: 'Security',
      markdownFile: 'audit_monitoring.md'
    },
    {
      id: 'encryption_security',
      name: 'Encryption & Security',
      description: 'Encryption & Security',
      icon: 'fas fa-key',
      category: 'Security',
      markdownFile: 'encryption_security.md'
    }
  ];

  constructor(private http: HttpClient) {}

  getServiceCategories(): Observable<ServiceCategory[]> {
    const categories: ServiceCategory[] = [];
    const categoryMap = new Map<string, AwsService[]>();

    // Group services by category
    this.services.forEach(service => {
      if (!categoryMap.has(service.category)) {
        categoryMap.set(service.category, []);
      }
      categoryMap.get(service.category)!.push(service);
    });

    // Convert to array
    categoryMap.forEach((services, categoryName) => {
      categories.push({
        name: categoryName,
        services: services
      });
    });

    return of(categories);
  }

  getServiceById(id: string): Observable<AwsService | undefined> {
    const service = this.services.find(s => s.id === id);
    return of(service);
  }

  getMarkdownContent(filename: string): Observable<string> {
    return this.http.get(`/assets/markdown/${filename}`, { responseType: 'text' });
  }
}
