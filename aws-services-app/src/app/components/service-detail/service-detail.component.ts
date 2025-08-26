import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { AwsServicesService } from '../../services/aws-services.service';
import { AwsService } from '../../models/aws-service.model';
import { marked } from 'marked';

@Component({
  selector: 'app-service-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './service-detail.component.html',
  styleUrl: './service-detail.component.scss',
})
export class ServiceDetailComponent implements OnInit {
  service: AwsService | undefined;
  markdownContent: string = '';
  loading: boolean = true;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private awsServicesService: AwsServicesService
  ) {}

  ngOnInit(): void {
    const serviceId = this.route.snapshot.paramMap.get('id');
    if (serviceId) {
      this.loadService(serviceId);
    } else {
      this.loading = false;
    }
  }

  private loadService(serviceId: string): void {
    this.awsServicesService.getServiceById(serviceId).subscribe(
      service => {
        this.service = service;
        if (service) {
          this.loadMarkdownContent(service.markdownFile);
        } else {
          this.loading = false;
        }
      }
    );
  }

  private loadMarkdownContent(filename: string): void {
    this.awsServicesService.getMarkdownContent(filename).subscribe({
      next: (content) => {
        this.markdownContent = marked(content) as string;
        this.loading = false;
      },
      error: (error) => {
        console.error('Error loading markdown content:', error);
        this.markdownContent = '<p>Error loading content. Please try again later.</p>';
        this.loading = false;
      }
    });
  }

  goBack(): void {
    this.router.navigate(['/']);
  }
}