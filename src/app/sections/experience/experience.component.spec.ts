import { provideHttpClient, withInterceptorsFromDi, withXhr } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LanguageService } from '../../providers/language.service';
import { ThemeService } from '../../theme/theme.service';
import { ExperienceSectionComponent } from './experience.component';
import { GoogleAnalyticsService } from '../../providers/google-analytics.service';
import en from '../../../assets/json/lang/en.json';
import languageList from '../../../assets/json/lang.json';
import { of } from 'rxjs';
import { EventEmitter } from '@angular/core';

describe('ExperienceSectionComponent', () => {
    let component: ExperienceSectionComponent;
    let fixture: ComponentFixture<ExperienceSectionComponent>;
    let testLanguageService: Partial<LanguageService>;

    testLanguageService = {
        httpChange: new EventEmitter<boolean>(),
        languageChange: new EventEmitter<object>(),
        menu: new EventEmitter<any>(),
        sections: {},
        toggleMenu: vi.fn(),
        texts: en,
        LanguageList: languageList,
        Language: 'en',
        loadLanguages: () => of(languageList),
        translateColor: vi.fn()
    };

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
