import { Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ServiceDetailComponent } from './components/service-detail/service-detail.component';

export const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'service/:id', component: ServiceDetailComponent },
  { path: '**', redirectTo: '' }
];