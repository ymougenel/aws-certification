import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AwsServicesService } from '../../services/aws-services.service';
import { ServiceCategory, AwsService } from '../../models/aws-service.model';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
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