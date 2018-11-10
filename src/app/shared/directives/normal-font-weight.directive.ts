import { Directive, ElementRef, OnInit, Renderer2, HostListener, Input } from '@angular/core';

@Directive({
    selector: '[appNormalFontWeight]'
})
export class NormalFontWeightDirective implements OnInit {
    defaultColor = 'yellow';

    // tslint:disable-next-line:no-input-rename
    @Input('appNormalFontWeight') highlightColor: string;

    @HostListener('mouseenter')
    onMouseEnter() {
        this.highlight(this.highlightColor);
    }

    @HostListener('mouseleave')
    onMouseLeave() {
        this.highlight('initial');
    }

    constructor(
        private el: ElementRef,
        private renderer: Renderer2
    ) {}

    ngOnInit() {
        this.renderer.setStyle(this.el.nativeElement, 'font-weight', 'normal');
    }

    private highlight(color: string) {
        this.renderer.setStyle(this.el.nativeElement, 'background-color', color || this.defaultColor);
    }
}
