import { Directive, HostListener, ElementRef, Renderer2 } from '@angular/core';

@Directive({
    selector: '[scrollOpacity]',
    standalone: true,
})
export class ScrollOpacityDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  current: number;
  previous: number = 0;

  private opacityHandler(): void {
    if (this.current > this.previous && this.previous !== 0) {
      this.renderer.removeClass(this.el.nativeElement, 'opacity-100');
      this.renderer.addClass(this.el.nativeElement, 'opacity-40');
    } else {
      this.renderer.removeClass(this.el.nativeElement, 'opacity-40');
      this.renderer.addClass(this.el.nativeElement, 'opacity-100');
    }
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event) {
    // Calculate the scroll position
    const scrollY = window.scrollY || window.pageYOffset;

    this.current = scrollY ?? -1;
    this.opacityHandler();
    this.previous = scrollY ?? 0;
  }

  @HostListener('mouseenter')
  onMouseEnter() {
    this.renderer.removeClass(this.el.nativeElement, 'opacity-40');
    this.renderer.addClass(this.el.nativeElement, 'opacity-100');
    this.renderer.addClass(this.el.nativeElement, 'transition');
    this.renderer.addClass(this.el.nativeElement, 'duration-300');
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.renderer.removeClass(this.el.nativeElement, 'transition');
    this.renderer.removeClass(this.el.nativeElement, 'duration-300');
  }
}
