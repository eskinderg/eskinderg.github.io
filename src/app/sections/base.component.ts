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

@Component({
    selector: 'app-base',
    template: '',
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: false
})
export class BaseComponent {
    protected appRef: ApplicationRef;
    protected eRef: ElementRef;
    protected httpStatus: boolean;

    constructor(
        public lang: LanguageService,
        public themeService: ThemeService,
        public ref: ChangeDetectorRef,
        public googleAnalyticsService: GoogleAnalyticsService
    ) {
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
