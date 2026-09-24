import { provideHttpClient, withInterceptorsFromDi, withXhr } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LanguageService } from '../../providers/language.service';
import { ThemeService } from '../../theme/theme.service';
import { ExperienceSectionComponent } from './experience.component';
import { GoogleAnalyticsService } from '../../providers/google-analytics.service';
import { testLanguageService } from '../../../test';

describe('ExperienceSectionComponent', () => {
    let component: ExperienceSectionComponent;
    let fixture: ComponentFixture<ExperienceSectionComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            providers: [
                {
                    provide: LanguageService,
                    useValue: testLanguageService
                },
                GoogleAnalyticsService,
                ThemeService,
                provideHttpClient(withXhr(), withInterceptorsFromDi())
            ],
            imports: [ExperienceSectionComponent]
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
