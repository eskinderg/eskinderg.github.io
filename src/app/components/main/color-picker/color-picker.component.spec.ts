import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LanguageService } from '../../../providers/language.service';
import { ThemeService } from '../../../theme/theme.service';

import { GoogleAnalyticsService } from '../../../providers/google-analytics.service';
import { DebugElement, EventEmitter, provideZonelessChangeDetection } from '@angular/core';
import { ColorPickerComponent } from './color-picker.component';
import { provideHttpClient } from '@angular/common/http';
import { By } from '@angular/platform-browser';
import { TooltipDirective } from '../../app/tooltip/tooltip.directive';
import colors from '../../../../assets/json/colors.json';
import { of } from 'rxjs';
import en from '../../../../assets/json/lang/en.json';
import languageList from '../../../../assets/json/lang.json';

describe('ColorPickerComponent', () => {
    let component: ColorPickerComponent;
    let fixture: ComponentFixture<ColorPickerComponent>;
    let mainButton: DebugElement;
    let testThemeService: Partial<ThemeService>;
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

    testThemeService = {
        Colors: colors.colors,
        LoadTheme: () => of(colors.colors),
        SetAppTheme: vi.fn(),
        ThemeMode: 'system',
        Theme: 'indigo'
    };

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [ColorPickerComponent, TooltipDirective],
            providers: [
                { provide: LanguageService, useValue: testLanguageService },
                GoogleAnalyticsService,
                { provide: ThemeService, useValue: testThemeService },
                provideZonelessChangeDetection(),
                provideHttpClient()
            ]
        }).compileComponents();

        fixture = TestBed.createComponent(ColorPickerComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
        mainButton = fixture.debugElement.query(By.css('.main-button'));
    });

    it('Should create ColorPickerComponent', () => {
        expect(component).toBeDefined();
    });

    it('Should show color list', () => {
        mainButton.triggerEventHandler('click', null);
        fixture.detectChanges();
        expect(component.open).toBe(true);
        const colorBtns = fixture.debugElement.queryAll(By.css('.mini-color-btn'));
        expect(colorBtns.length).toEqual(12);
    });

    it('should hide when clicking the mini-color-button', () => {
        mainButton.triggerEventHandler('click', null);
        fixture.detectChanges();
        const colorBtns = fixture.debugElement.queryAll(By.css('.mini-color-btn'));
        colorBtns[1].triggerEventHandler('mouseover', null);
        colorBtns[1].triggerEventHandler('click', null);
        expect(component.open).toBe(false);
    });

    it('should change the theme color to previous color when mouseleave', () => {
        const setAppTheme = vi.spyOn(component.themeService, 'SetAppTheme');
        mainButton.triggerEventHandler('click', null);
        fixture.detectChanges();
        const colorBtns = fixture.debugElement.queryAll(By.css('.mini-color-btn'));
        colorBtns[0].triggerEventHandler('mouseover', null);
        expect(setAppTheme).toHaveBeenCalledWith('red', 'system');
        colorBtns[0].triggerEventHandler('mouseleave', null);
        expect(setAppTheme).toHaveBeenCalledWith('indigo', 'system');
        colorBtns[0].triggerEventHandler('mouseover', null);
        component.open = false;
        colorBtns[0].triggerEventHandler('mouseleave', null);
        expect(setAppTheme).toHaveBeenCalledWith('indigo', 'system');
    });

    it('should close (open = false) when clicking outside the component', () => {
        mainButton.triggerEventHandler('click', null);
        fixture.detectChanges();
        // 2. Act: Dispatch a mousedown event on the document body (outside the component)
        const event = new MouseEvent('mousedown', {
            bubbles: true,
            cancelable: true
        });

        document.body.dispatchEvent(event);
        expect(component.open).toBe(false);
    });
});
