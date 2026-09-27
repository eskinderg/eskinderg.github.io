import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LanguageDropDownComponent } from './langdropdown.component';
import { LanguageService } from '../../../providers/language.service';
import { By } from '@angular/platform-browser';
import { ThemeService } from '../../../theme/theme.service';
import { provideHttpClient, withInterceptorsFromDi, withXhr } from '@angular/common/http';
import { GoogleAnalyticsService } from '../../../providers/google-analytics.service';
import { DebugElement, EventEmitter, provideZonelessChangeDetection } from '@angular/core';
import en from '../../../../assets/json/lang/en.json';
import languageList from '../../../../assets/json/lang.json';
import { of, throwError } from 'rxjs';

describe('LangdropdownComponent', () => {
    let component: LanguageDropDownComponent;
    let fixture: ComponentFixture<LanguageDropDownComponent>;
    let testLanguageService: Partial<LanguageService>;

    testLanguageService = {
        httpChange: new EventEmitter<boolean>(),
        languageChange: new EventEmitter<object>(),
        sections: {},
        texts: en,
        LanguageList: languageList,
        Language: 'en',
        loadLanguages: () => of(en),
        setLanguage: vi.fn()
    };

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [LanguageDropDownComponent],
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

        fixture = TestBed.createComponent(LanguageDropDownComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create LangdropdownComponent', () => {
        expect(component).toBeTruthy();
    });

    it('should render two languages of English and Amhric', () => {
        expect(component).toBeTruthy();
        expect(fixture.debugElement.queryAll(By.css('.lang-menu-item')).length).toEqual(2);
        expect(
            fixture.debugElement.queryAll(By.css('.lang-menu-item'))[0].nativeElement.textContent.trim()
        ).toBe('አማርኛ');
        expect(
            fixture.debugElement.queryAll(By.css('.lang-menu-item'))[1].nativeElement.textContent.trim()
        ).toBe('English');
    });

    it('should hide the menu after selecting the am language', () => {
        let amButton: DebugElement;
        let mainButton: DebugElement;
        let langMenu: DebugElement;
        const onClick = vi.spyOn(component, 'onClick');
        mainButton = fixture.debugElement.query(By.css('.lang-select'));
        langMenu = fixture.debugElement.query(By.css('.lang-menu'));
        vi.spyOn(testLanguageService, 'setLanguage').mockReturnValue(of(null));

        mainButton.triggerEventHandler('click', null);
        fixture.detectChanges();

        expect(langMenu.nativeElement.classList.contains('show-lang-drop-menu')).toBe(true);
        expect(onClick).toHaveBeenCalled();
        expect(component.visible).toBe(true);

        amButton = fixture.debugElement.query(By.css('.lang-menu .lang-menu-item:nth-child(1)'));
        amButton.triggerEventHandler('click', null);

        expect(testLanguageService.setLanguage).toHaveBeenCalledWith('am');
        expect(component.visible).toBe(false);
    });

    it('should log an error and keep visible as true when setLanguage fails', async () => {
        let amButton: DebugElement;
        let mainButton: DebugElement;
        let langMenu: DebugElement;
        const onClick = vi.spyOn(component, 'onClick');
        mainButton = fixture.debugElement.query(By.css('.lang-select'));
        langMenu = fixture.debugElement.query(By.css('.lang-menu'));
        const consoleSpy = vi.spyOn(console, 'error').mockImplementation(() => {});
        const error = new Error('Network error');
        vi.spyOn(testLanguageService, 'setLanguage').mockReturnValue(throwError(() => error));

        mainButton.triggerEventHandler('click', null);
        fixture.detectChanges();

        expect(langMenu.nativeElement.classList.contains('show-lang-drop-menu')).toBe(true);
        expect(onClick).toHaveBeenCalled();
        expect(component.visible).toBe(true);

        amButton = fixture.debugElement.query(By.css('.lang-menu .lang-menu-item:nth-child(1)'));
        amButton.triggerEventHandler('click', null);

        // Assert: Verify state remains unchanged and console.error was triggered
        expect(testLanguageService.setLanguage).toHaveBeenCalledWith('am');
        expect(component.visible).toBe(true);
        expect(consoleSpy).toHaveBeenCalledWith('Error changing language:', error);

        // Cleanup spy
        consoleSpy.mockRestore();
    });

    it('should display menu after clicking the main button', () => {
        let mainButton: DebugElement;
        let langMenu: DebugElement;
        const onClick = vi.spyOn(component, 'onClick');
        mainButton = fixture.debugElement.query(By.css('.lang-menu-wrapper>div'));
        langMenu = fixture.debugElement.query(By.css('.lang-menu'));
        mainButton.triggerEventHandler('click', null);

        fixture.detectChanges();

        expect(langMenu.nativeElement.classList.contains('show-lang-drop-menu')).toBe(true);
        expect(onClick).toHaveBeenCalled();
        expect(component.visible).toBe(true);
    });

    it('should hide menu when clicking outside', () => {
        fixture.detectChanges();
        let mainButton: DebugElement;
        let langMenu: DebugElement;

        const onClick = vi.spyOn(component, 'onClick');
        const clickout = vi.spyOn(component, 'clickout');
        mainButton = fixture.debugElement.query(By.css('.lang-menu-wrapper>div'));
        langMenu = fixture.debugElement.query(By.css('.lang-menu'));
        mainButton.triggerEventHandler('click', null);

        fixture.detectChanges();

        expect(onClick).toHaveBeenCalled();
        expect(langMenu.nativeElement.classList.contains('show-lang-drop-menu')).toBe(true);

        // Act: Trigger a global document click event
        document.dispatchEvent(new MouseEvent('mousedown', { bubbles: true }));
        fixture.detectChanges();

        // langMenu = fixture.debugElement.query(By.css('.lang-menu'));

        expect(clickout).toHaveBeenCalled();
        expect(langMenu.nativeElement.classList.contains('show-lang-drop-menu')).toBe(false);
        expect(component.visible).toBe(false);
    });
});
