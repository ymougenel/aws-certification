import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {FooterComponent} from "./components/shell/footer/footer.component";
import {HeaderComponent} from "./components/shell/header/header.component";
import {ThemeService} from "./services/theme.service";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FooterComponent, HeaderComponent],
  template: `
    <div [class.dark]="themeService.isDark()">
      <div class="min-h-screen bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
        <app-header></app-header>
        <main>
          <router-outlet></router-outlet>
        </main>
        <app-footer></app-footer>
      </div>
    </div>
  `,
  styles: [`
    :host {
      display: block;
    }
  `]
})
export class AppComponent {
  title = 'AWS Services Dashboard';
  themeService = inject(ThemeService);
}