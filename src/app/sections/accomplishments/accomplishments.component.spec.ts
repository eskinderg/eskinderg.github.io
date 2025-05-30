import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LanguageService } from 'src/app/providers/language.service';
import { ThemeService } from 'src/app/theme/theme.service';
import { AccomplishmentsSectionComponent } from './accomplishments.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LanguageServiceMock } from 'src/app/language/language.mock';
import { GoogleAnalyticsService } from 'src/app/providers/google-analytics.service';
import { provideZonelessChangeDetection } from '@angular/core';

describe('AccomplishmentsSectionComponent', () => {
    let component: AccomplishmentsSectionComponent;
    let fixture: ComponentFixture<AccomplishmentsSectionComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [BrowserAnimationsModule, AccomplishmentsSectionComponent],
            providers: [
                {
                    provide: LanguageService,
                    useClass: LanguageServiceMock
                },
                ThemeService,
                GoogleAnalyticsService,
                provideZonelessChangeDetection(),
                provideHttpClient(withInterceptorsFromDi())
            ]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(AccomplishmentsSectionComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
