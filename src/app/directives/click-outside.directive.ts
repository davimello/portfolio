import {
  Directive,
  ElementRef,
  Output,
  EventEmitter,
  HostListener,
  Input,
} from '@angular/core';

@Directive({
    selector: '[clickOutside]',
    standalone: true,
})
export class ClickOutsideDirective {
  constructor(private elementRef: ElementRef) {}

  @Input() additionalElementClick?: string;
  @Output() clickOutside = new EventEmitter<void>();

  @HostListener('document:click', ['$event'])
  handleClick(event: MouseEvent) {
    const clickedInside = this.elementRef.nativeElement.contains(
      event.target as HTMLElement
    );

    if (
      !clickedInside &&
      (!this.additionalElementClick || !this.isInsideAdditionalElement(event))
    ) {
      this.clickOutside.emit();
    }
  }

  private isInsideAdditionalElement(event: MouseEvent): boolean {
    if (!this.additionalElementClick) {
      return false;
    }

    const optionalDiv = document.querySelector(this.additionalElementClick);

    if (!optionalDiv) {
      return false;
    }

    return optionalDiv.contains(event.target as HTMLElement);
  }
}
