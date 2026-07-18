import { isPlatformBrowser } from '@angular/common';
import { Directive, ElementRef, Renderer2, OnInit, inject, PLATFORM_ID } from '@angular/core';

@Directive({
    selector: '[appFadeIn]',
    standalone: true
})
export class FadeInDirective implements OnInit {
    private el = inject(ElementRef);
    private renderer = inject(Renderer2);
    private platformId = inject(PLATFORM_ID);
    ngOnInit() {
        if (isPlatformBrowser(this.platformId)) {
            this.renderer.addClass(this.el.nativeElement.querySelector('section'), 'component-fade-wrapper');

            const observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                            this.renderer.addClass(
                                this.el.nativeElement.querySelector('section'),
                                'component-fade-visible'
                            );
                            observer.unobserve(entry.target);
                        }
                    });
                },
                { threshold: 0 }
            );

            observer.observe(this.el.nativeElement.querySelector('section'));
        }
    }
}
