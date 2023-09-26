import { Component } from '@angular/core';
import {
  Theme,
  ThemeService,
} from '../services/theme-service/theme-service.service';
import { NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ScrollOpacityDirective } from '../directives/scroll-opacity.directive';

@Component({
  selector: 'app-floating-nav',
  templateUrl: './floating-nav.component.html',
  standalone: true,
  imports: [ScrollOpacityDirective, RouterLink, NgIf],
})
export class FloatingNavComponent {
  theme: Theme;

  constructor(private themeService: ThemeService) {}

  ngOnInit() {
    this.getCurrentTheme();
    this.themeService.setTheme(this.theme);
  }

  getCurrentTheme(): void {
    this.theme = this.themeService.getCurrentTheme();
  }

  onLightModeClick(): void {
    this.themeService.setTheme('light');
    this.getCurrentTheme();
  }

  onDarkModeClick(): void {
    this.themeService.setTheme('dark');
    this.getCurrentTheme();
  }

  onOSPreferenceClick(): void {
    this.themeService.setTheme(null);
    this.getCurrentTheme();
  }

  onLogoClick(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
