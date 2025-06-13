import {
    ApplicationRef,
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    ElementRef,
    inject
} from '@angular/core';
import { LanguageService } from '../providers/language.service';
import { ThemeService } from '../theme/theme.service';
import { GoogleAnalyticsService } from '../providers/google-analytics.service';
import { ScrollService } from '../providers/scroll.service';

@Component({
    selector: 'app-base',
    template: '',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class BaseComponent {
    lang = inject(LanguageService);
    themeService = inject(ThemeService);
    ref = inject(ChangeDetectorRef);
    googleAnalyticsService = inject(GoogleAnalyticsService);
    scrollService = inject(ScrollService);

    protected appRef: ApplicationRef;
    protected eRef: ElementRef;
    protected httpStatus: boolean;

    constructor() {
        this.appRef = inject(ApplicationRef);
        this.eRef = inject(ElementRef);
        this.lang.languageChange.subscribe(() => {
            this.ref.detectChanges();
        });

        this.lang.httpChange.subscribe((value) => {
            this.httpStatus = value;
            this.ref.detectChanges();
        });
    }
}
