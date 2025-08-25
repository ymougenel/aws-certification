import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <div class="aws-header">
      <div class="container">
        <h1 class="mb-0">
          <i class="fab fa-aws me-3"></i>
          AWS Services Dashboard
        </h1>
        
      </div>
    </div>
    <router-outlet></router-outlet>
  `,
  styles: [`
    .aws-header h1 {
      font-size: 2rem;
      font-weight: 600;
    }
    
    @media (max-width: 768px) {
      .aws-header h1 {
        font-size: 1.5rem;
      }
    }
  `]
})
export class AppComponent {
  title = 'AWS Services Dashboard';
}