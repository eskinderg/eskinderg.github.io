import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { LanguageService } from '../providers/language.service';
import { ThemeService } from '../theme/theme.service';
import { GoogleAnalyticsService } from '../providers/google-analytics.service';

@Component({
    selector: 'app-base',
    template: '',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class BaseComponent {
    constructor(
        public lang: LanguageService,
        public themeService: ThemeService,
        public ref: ChangeDetectorRef,
        public googleAnalyticsService: GoogleAnalyticsService
    ) {
        this.lang.languageChange.subscribe(() => {
            this.ref.detectChanges();
        });
    }
}
