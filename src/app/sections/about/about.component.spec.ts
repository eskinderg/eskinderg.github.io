import { provideHttpClient, withInterceptorsFromDi, withXhr } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GoogleAnalyticsService } from '../../providers/google-analytics.service';
import { LanguageService } from '../../providers/language.service';
import { ThemeService } from '../../theme/theme.service';
import { AboutSectionComponent } from './about.component';
import { provideZonelessChangeDetection } from '@angular/core';
import { TitleComponent } from '../../components/app/title/title.component';
import { testLanguageService } from '../../../test';

describe('AboutSectionComponent', () => {
    let component: AboutSectionComponent;
    let fixture: ComponentFixture<AboutSectionComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [AboutSectionComponent, TitleComponent],
            providers: [
                {
                    provide: LanguageService,
                    useValue: testLanguageService
                },
                GoogleAnalyticsService,
                ThemeService,
                provideZonelessChangeDetection(),
                provideHttpClient(withXhr(), withInterceptorsFromDi())
            ]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(AboutSectionComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
