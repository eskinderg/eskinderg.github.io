import { Component, ElementRef, ChangeDetectionStrategy, AfterViewInit, signal, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { BaseComponent } from '../base.component';

@Component({
    selector: 'app-intro',
    templateUrl: './intro.component.html',
    styleUrls: ['./intro.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class IntroSectionComponent extends BaseComponent implements AfterViewInit {
    constructor() {
        super();
        this.separator.fillColor1 = 'var(--primary)';
        this.separator.fillColor2 = 'var(--background2)';
    }
    section = inject<ElementRef<HTMLElement>>(ElementRef);
    isAppLoaded = signal(false);

    ngAfterViewInit(): void {
        this.languageService.sections['intro'] = this.section;
        if (isPlatformBrowser(this.platformId)) {
            requestAnimationFrame(() => {
                this.isAppLoaded.set(true);
            });
        }
    }
}
