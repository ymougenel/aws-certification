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
  styleUrls: ['./dashboard.component.scss']
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