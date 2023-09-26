import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ScrollOpacityDirective } from '../directives/scroll-opacity.directive';
import {
  Theme,
  ThemeService,
} from '../services/theme-service/theme-service.service';

@Component({
  selector: 'app-floating-nav',
  templateUrl: './floating-nav.component.html',
  standalone: true,
  imports: [ScrollOpacityDirective, RouterLink, NgIf],
})
export class FloatingNavComponent {
  theme: Theme = 'dark';

  constructor(private themeService: ThemeService) {}

  ngOnInit() {
    this.getCurrentTheme();
    this.themeService.applyTheme();
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
