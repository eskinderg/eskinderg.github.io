import { provideHttpClient, withInterceptorsFromDi, withXhr } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LanguageService } from '../../providers/language.service';
import { ThemeService } from '../../theme/theme.service';

import { IntroSectionComponent } from './intro.component';
import { GoogleAnalyticsService } from '../../providers/google-analytics.service';
import { EventEmitter, provideZonelessChangeDetection } from '@angular/core';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import en from '../../../assets/json/lang/en.json';
import languageList from '../../../assets/json/lang.json';
import { of } from 'rxjs';
describe('IntroSectionComponent', () => {
    let component: IntroSectionComponent;
    let fixture: ComponentFixture<IntroSectionComponent>;
    let testLanguageService: Partial<LanguageService>;

    testLanguageService = {
        httpChange: new EventEmitter<boolean>(),
        languageChange: new EventEmitter<object>(),
        sections: {},
        texts: en,
        LanguageList: languageList,
        Language: 'en',
        loadLanguages: () => of({ en: 'English', es: 'Spanish' })
        // setLanguage: (lang: string) => of()
    };

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [IntroSectionComponent],
            providers: [
                { provide: LanguageService, useValue: testLanguageService },
                GoogleAnalyticsService,
                ThemeService,
                provideZonelessChangeDetection(),
                provideHttpClient(),
                provideHttpClient(withXhr(), withInterceptorsFromDi()),
                provideHttpClientTesting()
            ]
        }).compileComponents();

        fixture = TestBed.createComponent(IntroSectionComponent);
        component = fixture.componentInstance;
        testLanguageService.sections['intro'] = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('Should create IntroSectionComponent', () => {
        // const spy = vi.spyOn(testLanguageService, 'setLanguage');
        // testLanguageService.setLanguage('en');
        // expect(spy).toHaveBeenCalled();
        expect(component).toBeDefined();
    });

    it('Should render name Eskinder Getahun', () => {
        const compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('.intro>.main>.intro-title').textContent.trim()).toBe(
            'Eskinder Getahun'
        );
    });

    it('Should render subtitle Full-Stack Developer ', () => {
        const compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('.intro>.main>.intro-sub-title').textContent.trim()).toBe(
            'Full-Stack Developer'
        );
    });
});
