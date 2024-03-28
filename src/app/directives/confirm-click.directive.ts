import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: 'app-child',
  standalone: true,
  template: `
  <h2>{{ counter }}</h2>
  `
})
export class ChildComponent {
  @Input({ required: true }) counter: number;
  @Output() displayText: EventEmitter<string> = new EventEmitter<string>();

  ngOnChanges(): void {
    this.displayText.emit(`Total count: ${this.counter}`) // changes when counter is updated
  }
}


@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [ChildComponent],
  template: `
  <app-child [counter]="counter" (displayText)="text" />
  <p>{{text}}</p>
  <button type="button" (click)="countUp($event)"></button>
  `
})

export class ParentComponent {
  counter: number = 0;
  text: string;

  countUp(event: Event): void {
    event.preventDefault();
    this.counter++;
  }
}