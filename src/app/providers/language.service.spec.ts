import { HttpErrorResponse, provideHttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { LanguageService } from '../providers/language.service';
import { ThemeService } from '../theme/theme.service';
import { GoogleAnalyticsService } from '../providers/google-analytics.service';
import { PLATFORM_ID, provideZonelessChangeDetection } from '@angular/core';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import en from '../../assets/json/lang/en.json';
import am from '../../assets/json/lang/am.json';
import languageList from '../../assets/json/lang.json';
import colors from '../../assets/json/colors.json';
import { LocalStorageService } from './local-storage.service';
import { firstValueFrom } from 'rxjs';

describe('Language Service', () => {
    let service: LanguageService;
    let httpController: HttpTestingController;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            providers: [
                LanguageService,
                GoogleAnalyticsService,
                ThemeService,
                LocalStorageService,
                provideZonelessChangeDetection(),
                provideHttpClient(),
                provideHttpClientTesting(),
                { provide: PLATFORM_ID, useValue: 'browser' }
            ]
        }).compileComponents();

        service = TestBed.inject(LanguageService);
        httpController = TestBed.inject(HttpTestingController);
    });

    afterEach(() => {
        httpController.verify();
        vi.restoreAllMocks();
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

    it('Should translate colors if translation exists', () => {
        service.loadLanguages().subscribe(() => {
            service.setLanguage('am').subscribe(() => {
                expect(service.Language).toBe('am');
                expect(localStorage.getItem('language')).toBe('am');
                expect(service.translateColor('red')).toBe('ቀይ');
                // console.log(service.texts.colors)
            });
        });
        const req1 = httpController.expectOne('assets/json/lang.json');
        expect(req1.request.method).toBe('GET');
        req1.flush(languageList);

        const req2 = httpController.expectOne('assets/json/lang/am.json');
        expect(req2.request.method).toBe('GET');
        req2.flush(am);
    });

    it('Should translate to default when translation does not exist', () => {
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
            service.setLanguage('en').subscribe(() => {
                expect(service.Language).toBe('en');
            });
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

    it('Should trigger an alert and throw an error when HTTP request fails with 500 status', async () => {
        const alert = vi.spyOn(window, 'alert').mockImplementation(() => {});
        const languagePromise = firstValueFrom(service.setLanguage('tt'));

        const req2 = httpController.expectOne('assets/json/lang/tt.json');
        expect(req2.request.method).toBe('GET');
        req2.flush('Internal Server Error', {
            status: 500,
            statusText: 'Internal Server Error'
        });

        // 3. Verify the observable threw the expected HttpErrorResponse
        await expect(languagePromise).rejects.toThrow(HttpErrorResponse);

        expect(window.alert).toHaveBeenCalledTimes(1);
        expect(alert).toHaveBeenCalledTimes(1);

        // Optional: Assert it was called with specific arguments
        expect(alert).toHaveBeenCalledWith(
            `Unable to set language\nHttp failure response for assets/json/lang/tt.json: 500 Internal Server Error`
        );

        alert.mockRestore();
    });

    it('Should get color list', () => {
        const response = colors.colors;
        service.getColorList().subscribe((colors) => {
            expect(colors.length).toBe(12);
        });
        const req = httpController.expectOne('assets/json/colors.json');
        expect(req.request.method).toBe('GET');
        req.flush(response);
    });

    it('Should pickup navigators language when there is no language set', () => {
        vi.spyOn(service.localStorageService, 'getItem').mockReturnValue(null);
        expect(service.Language).toBe('en-US');
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

    it('Should return the correct json path in production and dev for EN', () => {
        vi.spyOn(service, 'getIsDevMode').mockReturnValue(false);
        expect(service.getLangPath('en')).toBe('assets/json/lang/en.min.json');
        expect(service.getLangPath(null)).toBe('assets/json/lang/en.min.json');

        vi.spyOn(service, 'getIsDevMode').mockReturnValue(true);
        expect(service.getLangPath('en')).toBe('assets/json/lang/en.json');
        expect(service.getLangPath(null)).toBe('assets/json/lang/en.json');
    });
});

describe('Language Service NONE Browser', () => {
    let service: LanguageService;
    let httpController: HttpTestingController;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            providers: [
                LanguageService,
                GoogleAnalyticsService,
                ThemeService,
                LocalStorageService,
                provideZonelessChangeDetection(),
                provideHttpClient(),
                provideHttpClientTesting(),
                { provide: PLATFORM_ID, useValue: 'server' }
            ]
        }).compileComponents();

        service = TestBed.inject(LanguageService);
        httpController = TestBed.inject(HttpTestingController);
    });

    afterEach(() => {
        httpController.verify();
        vi.restoreAllMocks();
    });

    it('Check if its browser', () => {
        expect(service.isBrowser).toBe(false);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('Default language should be English', () => {
        expect(service.Language).toBe('en');
    });

    it('Should return the correct json path for NONE  BROWSERS in production and dev for EN', () => {
        vi.spyOn(service, 'getIsDevMode').mockReturnValue(false);
        expect(service.getLangPath('en')).toBe('assets/json/lang/en.json');
        vi.spyOn(service, 'getIsDevMode').mockReturnValue(false);
        expect(service.getLangPath(null)).toBe('assets/json/lang/en.json');

        vi.spyOn(service, 'getIsDevMode').mockReturnValue(true);
        expect(service.getLangPath('en')).toBe('assets/json/lang/en.json');
        expect(service.getLangPath(null)).toBe('assets/json/lang/en.json');
    });
});
