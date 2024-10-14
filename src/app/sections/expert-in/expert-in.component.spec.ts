import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LanguageService } from 'src/app/providers/language.service';
import { ThemeService } from 'src/app/theme/theme.service';
import { ExpertInSectionComponent } from './expert-in.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LanguageServiceMock } from 'src/app/language/language.mock';
import { GoogleAnalyticsService } from 'src/app/providers/google-analytics.service';

describe('ExpertInSectionComponent', () => {
    let component: ExpertInSectionComponent;
    let fixture: ComponentFixture<ExpertInSectionComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [BrowserAnimationsModule, ExpertInSectionComponent],
            providers: [
                {
                    provide: LanguageService,
                    useClass: LanguageServiceMock
                },
                GoogleAnalyticsService,
                ThemeService,
                provideHttpClient(withInterceptorsFromDi())
            ]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(ExpertInSectionComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
