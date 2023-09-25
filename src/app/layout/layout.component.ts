import { Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
    selector: 'layout',
    templateUrl: './layout.component.html',
    standalone: true,
    imports: [NgClass],
})
export class LayoutComponent {
  @Input() cols: string = '3';
  @Input() class: string;
}
