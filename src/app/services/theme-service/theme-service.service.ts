import { Injectable } from '@angular/core';

export type Theme = 'light' | 'dark' | null;

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private readonly THEME_KEY = 'theme';

  setTheme(theme: Theme) {
    if (theme === 'light' || theme === 'dark') {
      localStorage.setItem(this.THEME_KEY, theme);
    } else {
      localStorage.removeItem(this.THEME_KEY);
    }

    this.applyTheme();
  }

  getCurrentTheme(): Theme {
    const currentTheme = localStorage.getItem(this.THEME_KEY);

    if (
      currentTheme === 'dark' ||
      (!currentTheme &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      return 'dark';
    } else {
      return 'light';
    }
  }

  private applyTheme() {
    const currentTheme = localStorage.getItem(this.THEME_KEY);

    if (
      currentTheme === 'dark' ||
      (!currentTheme &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }
}
