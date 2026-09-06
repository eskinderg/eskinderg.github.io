import { provideHttpClient, withInterceptorsFromDi, withXhr } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { LanguageService } from '../providers/language.service';
import { ThemeService } from '../theme/theme.service';

import { GoogleAnalyticsService } from '../providers/google-analytics.service';
import { provideZonelessChangeDetection } from '@angular/core';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';

describe('Language Service', () => {
    let service: LanguageService;
    let httpController: HttpTestingController;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            providers: [
                LanguageService,
                GoogleAnalyticsService,
                ThemeService,
                provideZonelessChangeDetection(),
                provideHttpClient(),
                provideHttpClientTesting()
            ]
        }).compileComponents();

        service = TestBed.inject(LanguageService);
        httpController = TestBed.inject(HttpTestingController);
    });

    afterEach(() => {
        httpController.verify();
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('Default language should be English', () => {
        expect(service.DefaultLanguage).toBe('en');
    });

    it('Should show menu', () => {
        service.toggleMenu(true);
        expect(service.menuVisible).toBe(true);
    });

    it('Should hide menu', () => {
        service.toggleMenu(false);
        expect(service.menuVisible).toBe(false);
    });

    it('Should get language path', () => {
        expect(service.getLangPath('en')).toBe('assets/json/lang/en.json');
    });

    it('Should set language', () => {
        const mockResponse = { id: 1, name: 'EN' };
        service.setLanguage('en').subscribe();
        const req = httpController.expectOne('assets/json/lang/en.json');
        expect(req.request.method).toBe('GET');
        req.flush(mockResponse);
        expect(service.texts.name).toBe('EN');
    });

    it('Should get color list', () => {
        const response = TestBed.inject(ThemeService).getColors();
        service.getColorList().subscribe((colors) => {
            expect(colors.length).toBe(12);
        });
        const req = httpController.expectOne('assets/json/colors.json');
        expect(req.request.method).toBe('GET');
        req.flush(response);
    });

    it('Should load language list', () => {
        const response = [
            {
                CountryCode: 'ET',
                title: 'አማርኛ',
                code: 'am',
                icon: '',
                font: 'wookianos'
            },
            {
                CountryCode: 'GB',
                title: 'English',
                code: 'en',
                icon: '',
                font: 'Raleway'
            }
        ];

        service.loadLanguages().subscribe((langs) => {
            expect(langs).toBeUndefined();
        });

        // service.loadLanguages().subscribe();
        const req = httpController.expectOne('assets/json/lang.json');
        expect(req.request.method).toBe('GET');
        req.flush(response);
    });
});
