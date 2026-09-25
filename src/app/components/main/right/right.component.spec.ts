import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RightComponent } from './right.component';
import { ThemeService } from '../../../theme/theme.service';
import { provideHttpClient, withInterceptorsFromDi, withXhr } from '@angular/common/http';
import { LanguageService } from '../../../providers/language.service';
import { findComponent } from '../../../app.component.spec';
import { GoogleAnalyticsService } from '../../../providers/google-analytics.service';
import { EventEmitter, provideZonelessChangeDetection } from '@angular/core';
import en from '../../../../assets/json/lang/en.json';
import languageList from '../../../../assets/json/lang.json';
import { of } from 'rxjs';

describe('RightComponent', () => {
    let component: RightComponent;
    let fixture: ComponentFixture<RightComponent>;
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
            imports: [RightComponent],
            providers: [
                ThemeService,
                {
                    provide: LanguageService,
                    useValue: testLanguageService
                },
                GoogleAnalyticsService,
                provideZonelessChangeDetection(),
                provideHttpClient(withXhr(), withInterceptorsFromDi())
            ]
        }).compileComponents();

        fixture = TestBed.createComponent(RightComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('Should render langselect component', () => {
        const langSelectComponent = findComponent(fixture, 'app-lang-dropdown');
        expect(langSelectComponent).toBeTruthy();
    });

    it('Should render toggle component', () => {
        const toggleComponent = findComponent(fixture, 'app-toggle');
        expect(toggleComponent).toBeTruthy();
    });

    it('Should render color picker component', () => {
        const toggleComponent = findComponent(fixture, 'app-color-picker');
        expect(toggleComponent).toBeTruthy();
    });
});
