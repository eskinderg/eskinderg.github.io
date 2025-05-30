import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GoogleAnalyticsService } from 'src/app/providers/google-analytics.service';
import { LanguageService } from 'src/app/providers/language.service';
import { ThemeService } from 'src/app/theme/theme.service';
import { AboutSectionComponent } from './about.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LanguageServiceMock } from 'src/app/language/language.mock';
import { provideZonelessChangeDetection } from '@angular/core';

describe('AboutSectionComponent', () => {
    let component: AboutSectionComponent;
    let fixture: ComponentFixture<AboutSectionComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [BrowserAnimationsModule, AboutSectionComponent],
            providers: [
                {
                    provide: LanguageService,
                    useClass: LanguageServiceMock
                },
                GoogleAnalyticsService,
                ThemeService,
                provideZonelessChangeDetection(),
                provideHttpClient(withInterceptorsFromDi())
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
