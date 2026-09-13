import { provideHttpClient } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LanguageService } from '../providers/language.service';
import { ThemeService } from '../theme/theme.service';

import { GoogleAnalyticsService } from '../providers/google-analytics.service';
import { EventEmitter, provideZonelessChangeDetection } from '@angular/core';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { of } from 'rxjs';
import en from '../../assets/json/lang/en.json';
import languageList from '../../assets/json/lang.json';
import { BaseComponent } from './base.component';

let testLanguageService: Partial<LanguageService>;

testLanguageService = {
    httpChange: new EventEmitter<boolean>(),
    languageChange: new EventEmitter<object>(),
    sections: {},
    texts: en,
    LanguageList: languageList,
    Language: 'en',
    loadLanguages: () => of({ en: 'English', am: 'እማ' })
    // setLanguage: (lang: string) => of()
};

describe('Base Component', () => {
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            providers: [
                { provide: LanguageService, useValue: testLanguageService },
                GoogleAnalyticsService,
                ThemeService,
                provideZonelessChangeDetection(),
                provideHttpClient(),
                provideHttpClientTesting()
            ]
        }).compileComponents();
    });

    it('should be created', () => {
        const fixture = TestBed.createComponent(BaseComponent);
        const component = fixture.componentInstance;
        expect(component).toBeTruthy();
    });

    it('should change language and detcect changes', () => {
        const fixture = TestBed.createComponent(BaseComponent);
        const component = fixture.componentInstance;
        //assert
        const detectChanges = vi.spyOn(component.ref, 'detectChanges');
        testLanguageService.languageChange.emit(en);
        expect(detectChanges).toHaveBeenCalledTimes(1);
    });

    it('should change http value and detcect changes', () => {
        const fixture = TestBed.createComponent(BaseComponent);
        const component = fixture.componentInstance;

        //assert
        const detectChanges = vi.spyOn(component.ref, 'detectChanges');
        testLanguageService.httpChange.emit(true);

        expect(detectChanges).toHaveBeenCalledTimes(1);
        expect(component.httpStatus).toBe(true);
    });
});
