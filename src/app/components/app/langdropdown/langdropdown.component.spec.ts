import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LanguageDropDownComponent } from './langdropdown.component';
import { LanguageService } from '../../../providers/language.service';
import { LanguageServiceMock } from '../../../language/language.mock';
import { By } from '@angular/platform-browser';
import { ThemeService } from '../../../theme/theme.service';
import { provideHttpClient, withInterceptorsFromDi, withXhr } from '@angular/common/http';
import { GoogleAnalyticsService } from '../../../providers/google-analytics.service';
import { provideZonelessChangeDetection } from '@angular/core';
import { beforeEach, describe, expect, it } from 'vitest';

describe('LangdropdownComponent', () => {
    let component: LanguageDropDownComponent;
    let fixture: ComponentFixture<LanguageDropDownComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [LanguageDropDownComponent],
            providers: [
                {
                    provide: LanguageService,
                    useClass: LanguageServiceMock
                },
                ThemeService,
                GoogleAnalyticsService,
                provideZonelessChangeDetection(),
                provideHttpClient(withXhr(), withInterceptorsFromDi())
            ]
        }).compileComponents();

        fixture = TestBed.createComponent(LanguageDropDownComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should render two languages of English and Amhric', () => {
        expect(component).toBeTruthy();
        expect(fixture.debugElement.queryAll(By.css('.lang-menu-item')).length).toEqual(2);
        expect(
            fixture.debugElement.queryAll(By.css('.lang-menu-item'))[0].nativeElement.textContent.trim()
        ).toBe('English');
        expect(
            fixture.debugElement.queryAll(By.css('.lang-menu-item'))[1].nativeElement.textContent.trim()
        ).toBe('አማርኛ');
    });

    it('should hide the menu after selecting language', () => {
        component.changeLanguage('am');
        expect(component.visible).toBe(false);
    });

    it('should menu after click', () => {
        component.onClick();
        expect(component.visible).toBe(true);
    });

    it('should hide menu after clicking outside', () => {
        component.clickout({ target: null });
        expect(component.visible).toBe(false);
    });
});
