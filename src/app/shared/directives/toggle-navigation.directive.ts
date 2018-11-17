import {
  Directive,
  ElementRef,
  HostListener
} from '@angular/core';

const COLLAPSE_BUTTON = 'button.navbar-toggler';
const COLLAPSE_MENU = 'div.navbar-collapse';

@Directive({
  selector: '[appToggleNavigation]'
})
export class ToggleNavigationDirective {
  show = false;

  constructor(
    private el: ElementRef
  ) {}

  @HostListener('click', ['$event'])
  hostClick(event) {
    if (event.target.matches(COLLAPSE_BUTTON) ||
        event.target.closest(COLLAPSE_BUTTON)) {
      this.changeMenuState();
    }
  }

  changeMenuState() {
    this.show = !this.show;
    this.el.nativeElement
      .querySelector(COLLAPSE_MENU)
      .classList
      .toggle('show');
  }
}
