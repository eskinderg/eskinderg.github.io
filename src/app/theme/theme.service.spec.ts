import { provideHttpClient, withInterceptorsFromDi, withXhr } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { LanguageService } from '../providers/language.service';
import { ThemeService } from '../theme/theme.service';
import { ThemeMode } from './theme.mode';

import { GoogleAnalyticsService } from '../providers/google-analytics.service';
import { provideZonelessChangeDetection } from '@angular/core';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import colorList from '../../assets/json/colors.json';

describe('Theme Service', () => {
    let service: ThemeService;
    let httpController: HttpTestingController;
    const darkMode: ThemeMode = 'dark';
    const lightMode: ThemeMode = 'light';
    // const systemMode: ThemeMode = 'system';

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

        service = TestBed.inject(ThemeService);
        httpController = TestBed.inject(HttpTestingController);
    });

    afterEach(() => {
        httpController.verify();
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('should set dark mode and save the theme correctly', () => {
        service.SetAppTheme('red', darkMode);
        expect(localStorage.getItem('thememode') as ThemeMode).toBe(darkMode);
        expect(localStorage.getItem('theme')).toBe('red');
        expect(service.IsDarkMode).toBe(true);
        expect(service.ThemeMode).toBe(darkMode);
    });

    it('should set light mode and save the theme correctly', () => {
        service.SetAppTheme('blue', lightMode);
        expect(localStorage.getItem('theme')).toBe('blue');
        expect(localStorage.getItem('thememode') as ThemeMode).toBe(lightMode);
        expect(service.IsDarkMode).toBe(false);
        expect(service.ThemeMode).toBe(lightMode);
        expect(service).toBeTruthy();
    });

    it('should return is dark mode', () => {
        service.SetAppTheme('red', darkMode);
        expect(service.IsDarkMode).toBe(true);
    });

    it('should toggle dark mode', () => {
        service.SetAppTheme('green', darkMode);
        expect(service.IsDarkMode).toBe(true);
    });

    it('should get the current theme HEX code', () => {
        service.SetAppTheme('indigo', darkMode);
        expect(service.getThemeInHex()).toBe('#3f51b5');
        service.SetAppTheme('orange', darkMode);
        expect(service.getThemeInHex()).toBe('#a56831');
        service.SetAppTheme('teal', darkMode);
        expect(service.getThemeInHex()).toBe('#24736b');
        service.SetAppTheme('cyan', darkMode);
        expect(service.getThemeInHex()).toBe('#0b8494');
        service.SetAppTheme('pink', darkMode);
        expect(service.getThemeInHex()).toBe('#9f2e54');
        service.SetAppTheme('deeppurple', darkMode);
        expect(service.getThemeInHex()).toBe('#503b77');
        service.SetAppTheme('lightblue', darkMode);
        expect(service.getThemeInHex()).toBe('#5087bf');
        service.SetAppTheme('brown', darkMode);
        expect(service.getThemeInHex()).toBe('#744c3e');
        service.SetAppTheme('bluegrey', darkMode);
        expect(service.getThemeInHex()).toBe('#607d8b');
    });

    it('Should load color list', () => {
        service.LoadTheme().subscribe(() => {
            expect(service.Colors.length).toBe(12);
        });

        const req = httpController.expectOne('assets/json/colors.json');
        expect(req.request.method).toBe('GET');
        req.flush(colorList);
    });
});
