import { Component, Input } from '@angular/core';
import { ButtonComponent } from '../button/button.component';

@Component({
    selector: 'card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.scss'],
    standalone: true,
    imports: [ButtonComponent],
})
export class CardComponent {
  @Input() title: string;
  @Input() body: string;
  @Input() href: string;

  onLinkClick(href: string) {
    const link = window.open(href, '_blank');
    link?.focus();
  }
}
