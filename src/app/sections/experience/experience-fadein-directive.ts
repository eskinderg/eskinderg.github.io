import { isPlatformBrowser } from '@angular/common';
import { Directive, ElementRef, Renderer2, OnInit, inject, PLATFORM_ID } from '@angular/core';

@Directive({
    selector: '[appExperienceFadeIn]',
    standalone: true
})
export class ExperienceFadeInDirective implements OnInit {
    private el = inject(ElementRef);
    private renderer = inject(Renderer2);
    private platformId = inject(PLATFORM_ID);
    ngOnInit() {
        if (isPlatformBrowser(this.platformId)) {
            this.renderer.addClass(this.el.nativeElement.querySelector('.outer'), 'experience-fade-wrapper');
            const observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                            this.renderer.addClass(
                                this.el.nativeElement.querySelector('.outer'),
                                'experience-fade-visible'
                            );
                            observer.unobserve(entry.target); // Stop observing once faded in
                        }
                    });
                },
                { threshold: 0 }
            );

            observer.observe(this.el.nativeElement.querySelector('.outer'));
        }
    }
}
