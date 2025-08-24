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
  template: `
    <div class="container mt-4" *ngIf="service">
      <div class="row">
        <div class="col-12">
          <button class="btn back-button mb-4" (click)="goBack()">
            <i class="fas fa-arrow-left me-2"></i>
            Back to Dashboard
          </button>
        </div>
      </div>
      
      <div class="row">
        <div class="col-12">
          <div class="card border-0 shadow-lg">
            <div class="card-header bg-white border-0 pt-4 pb-3">
              <div class="d-flex align-items-center">
                <div class="service-icon me-3">
                  <i [class]="service.icon"></i>
                </div>
                <div>
                  <h1 class="mb-1">{{ service.name }}</h1>
                  <p class="text-muted mb-0">{{ service.description }}</p>
                </div>
              </div>
            </div>
            
            <div class="card-body pt-0">
              <div class="markdown-content" [innerHTML]="markdownContent">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container mt-4" *ngIf="!service && !loading">
      <div class="row">
        <div class="col-12 text-center">
          <h2>Service Not Found</h2>
          <p>The requested AWS service could not be found.</p>
          <button class="btn back-button" (click)="goBack()">
            <i class="fas fa-arrow-left me-2"></i>
            Back to Dashboard
          </button>
        </div>
      </div>
    </div>

    <div class="container mt-4" *ngIf="loading">
      <div class="row">
        <div class="col-12 text-center">
          <div class="spinner-border text-primary" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
          <p class="mt-3">Loading service details...</p>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .service-icon {
      font-size: 4rem;
      color: var(--aws-orange);
    }
    
    .card {
      border-radius: 15px;
    }
    
    .card-header {
      border-radius: 15px 15px 0 0 !important;
    }
    
    @media (max-width: 768px) {
      .service-icon {
        font-size: 3rem;
      }
      
      .container {
        padding-left: 10px;
        padding-right: 10px;
      }
      
      .d-flex {
        flex-direction: column;
        text-align: center;
      }
      
      .d-flex .me-3 {
        margin-right: 0 !important;
        margin-bottom: 1rem;
      }
    }
  `]
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