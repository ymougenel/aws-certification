import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AwsServicesService } from '../../services/aws-services.service';
import { ServiceCategory, AwsService } from '../../models/aws-service.model';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="container mt-4">
      <div class="row" *ngFor="let category of categories">
        <div class="col-12">
          <h2 class="category-header">
            {{ category.name }}
          </h2>
        </div>
        
        <div class="col-lg-3 col-md-4 col-sm-6 col-12 mb-4" 
             *ngFor="let service of category.services">
          <div class="card aws-card h-100" (click)="navigateToService(service.id)">
            <div class="card-body">
              <div class="service-icon">
                <i [class]="service.icon"></i>
              </div>
              <h5 class="service-title">{{ service.name }}</h5>
              <p class="service-description">{{ service.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .container {
      max-width: 1200px;
    }
    
    .card {
      transition: all 0.3s ease;
    }
    
    .card:hover {
      transform: translateY(-5px);
      box-shadow: 0 8px 25px rgba(0,0,0,0.15) !important;
    }
    
    @media (max-width: 768px) {
      .container {
        padding-left: 10px;
        padding-right: 10px;
      }
    }
  `]
})
export class DashboardComponent implements OnInit {
  categories: ServiceCategory[] = [];

  constructor(
    private awsServicesService: AwsServicesService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.awsServicesService.getServiceCategories().subscribe(
      categories => this.categories = categories
    );
  }

  navigateToService(serviceId: string): void {
    this.router.navigate(['/service', serviceId]);
  }
}