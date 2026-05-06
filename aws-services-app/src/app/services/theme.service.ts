import { Injectable, signal, effect, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

export type Theme = 'light' | 'dark';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private platformId = inject(PLATFORM_ID);
  theme = signal<Theme>(ThemeService.getBrowserPreferredTheme());

  constructor() {
    if (isPlatformBrowser(this.platformId)) {
      this.setLastSelectedTheme();
    }

    effect(() => {
      this.rememberSelectedTheme();
    });
  }

  private rememberSelectedTheme() {
    const currentTheme = this.theme();
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('theme', currentTheme);
      if (currentTheme === 'dark') {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }
  }

  private setLastSelectedTheme() {
    const storedTheme = localStorage.getItem('theme') as Theme;
    if (storedTheme) {
      this.theme.set(storedTheme);
    } else if (ThemeService.isDarkModePreferred()) {
      this.theme.set('dark');
    }
  }

  toggleTheme() {
    this.theme.update(t => t === 'light' ? 'dark' : 'light');
  }

  isDark(): boolean {
    return this.theme() === 'dark';
  }

  private static isDarkModePreferred(): boolean {
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  }

  private static getBrowserPreferredTheme(): Theme {
    return ThemeService.isDarkModePreferred() ? 'dark' : 'light';
  }

}
