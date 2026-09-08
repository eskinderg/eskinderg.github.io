import { provideHttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { LanguageService } from '../providers/language.service';
import { ThemeService } from '../theme/theme.service';
import { GoogleAnalyticsService } from '../providers/google-analytics.service';
import { provideZonelessChangeDetection } from '@angular/core';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import en from '../../assets/json/lang/en.json';
import languageList from '../../assets/json/lang.json';

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
        service.loadLanguages().subscribe(() => {
            service.setLanguage('en').subscribe(() => {
                expect(service.Language).toBe('en');
                expect(localStorage.getItem('language')).toBe('en');
                expect(service.translateColor('red')).toBe('red');
            });
        });
        const req1 = httpController.expectOne('assets/json/lang.json');
        expect(req1.request.method).toBe('GET');
        req1.flush(languageList);

        const req2 = httpController.expectOne('assets/json/lang/en.json');
        expect(req2.request.method).toBe('GET');
        req2.flush(en);
    });

    it('Should set property language', () => {
        service.loadLanguages().subscribe(() => {
            service.Language = 'en';
            expect(service.Language).toBe('en');
        });
        const req1 = httpController.expectOne('assets/json/lang.json');
        expect(req1.request.method).toBe('GET');
        req1.flush(languageList);

        const req2 = httpController.expectOne('assets/json/lang/en.json');
        expect(req2.request.method).toBe('GET');
        req2.flush(en);
    });

    it('should return the default lang when not found (404 error occurs)', () => {
        service.loadLanguages().subscribe(() => {
            service.setLanguage('xx').subscribe(() => {
                expect(service.Language).toBe('en');
            });
        });

        const req1 = httpController.expectOne('assets/json/lang.json');
        expect(req1.request.method).toBe('GET');
        req1.flush(languageList);

        const req2 = httpController.expectOne('assets/json/lang/xx.json');
        expect(req2.request.method).toBe('GET');
        req2.flush('Not Found', { status: 404, statusText: 'Not Found' });

        const defaultRequest = httpController.expectOne('assets/json/lang/en.json');
        expect(req2.request.method).toBe('GET');
        defaultRequest.flush(en);
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
        service.loadLanguages().subscribe(() => {
            expect(service.LanguageList.length).toBe(2);
        });

        const req = httpController.expectOne('assets/json/lang.json');
        expect(req.request.method).toBe('GET');
        req.flush(languageList);
    });

    it('Should language path for a specific language selected', () => {
        expect(service.getLangPath('en')).toBe('assets/json/lang/en.json');
        expect(service.getLangPath('am')).toBe('assets/json/lang/am.json');
    });

    it('Check if its browser', () => {
        expect(service.isBrowser).toBe(true);
    });
});
