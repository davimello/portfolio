import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../button/button.component';
import { LayoutComponent } from '../layout/layout.component';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, ButtonComponent, LayoutComponent],
  templateUrl: './hero.component.html'
})
export class HeroComponent {
  scrollToAbout(): void {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  }
}
