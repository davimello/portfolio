import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { NgSwitch, NgSwitchCase, NgIf } from '@angular/common';

type buttonType = 'primary' | 'secondary';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  standalone: true,
  imports: [NgSwitch, NgSwitchCase, NgIf],
})
export class ButtonComponent {
  @Input() text: string;
  @Input() icon: string;
  @Input() type: buttonType = 'primary';
  @Input() href: string = '/';
  @Input() disabled: boolean = false;
  @Input() buttonType: string = 'text';
  @Input() loading: boolean = false;
  @Input() isFullWidth: boolean = false;

  @Output() buttonClick = new EventEmitter<Event>();
  constructor(public router: Router) {}

  onClick(e: Event): void {
    if (!this.disabled) {
      this.buttonClick.emit(e);
    }
  }
}
