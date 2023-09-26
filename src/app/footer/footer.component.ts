import { Component } from '@angular/core';
import { LayoutComponent } from '../layout/layout.component';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss'],
    standalone: true,
    imports: [LayoutComponent],
})
export class FooterComponent {
  date: Date;

  ngOnInit() {
    this.date = new Date();
  }

  onLogoClick(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
