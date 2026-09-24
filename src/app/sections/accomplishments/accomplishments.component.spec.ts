import { provideHttpClient, withInterceptorsFromDi, withXhr } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LanguageService } from '../../providers/language.service';
import { ThemeService } from '../../theme/theme.service';
import { AccomplishmentsSectionComponent } from './accomplishments.component';
import { TitleComponent } from '../../components/app/title/title.component';
import { GoogleAnalyticsService } from '../../providers/google-analytics.service';
import { EventEmitter, provideZonelessChangeDetection } from '@angular/core';
import en from '../../../assets/json/lang/en.json';
import languageList from '../../../assets/json/lang.json';
import { of } from 'rxjs';

describe('AccomplishmentsSectionComponent', () => {
    let component: AccomplishmentsSectionComponent;
    let fixture: ComponentFixture<AccomplishmentsSectionComponent>;
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
            imports: [AccomplishmentsSectionComponent, TitleComponent],
            providers: [
                {
                    provide: LanguageService,
                    useValue: testLanguageService
                },
                ThemeService,
                GoogleAnalyticsService,
                provideZonelessChangeDetection(),
                provideHttpClient(withXhr(), withInterceptorsFromDi())
            ]
        }).compileComponents();

        fixture = TestBed.createComponent(AccomplishmentsSectionComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
