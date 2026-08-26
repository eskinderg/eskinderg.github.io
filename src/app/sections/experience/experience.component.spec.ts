import { HttpClientModule, provideHttpClient, withInterceptorsFromDi, withXhr } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LanguageService } from '../../providers/language.service';
import { ThemeService } from '../../theme/theme.service';
import { ExperienceSectionComponent } from './experience.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { describe, beforeEach, it, expect } from 'vitest';
import { GoogleAnalyticsService } from '../../providers/google-analytics.service';
import { LanguageServiceMock } from '../../language/language.mock';

describe('ExperienceSectionComponent', () => {
    let component: ExperienceSectionComponent;
    let fixture: ComponentFixture<ExperienceSectionComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            providers: [
                {
                    provide: LanguageService,
                    useClass: LanguageServiceMock
                },
                GoogleAnalyticsService,
                ThemeService,
                provideHttpClient(withXhr(), withInterceptorsFromDi())
            ],
            imports: [HttpClientModule, BrowserAnimationsModule, ExperienceSectionComponent]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(ExperienceSectionComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
