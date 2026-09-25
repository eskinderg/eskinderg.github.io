import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LanguageService } from '../../../providers/language.service';
import { ThemeService } from '../../../theme/theme.service';
import { GoogleAnalyticsService } from '../../../providers/google-analytics.service';
import { DebugElement, provideZonelessChangeDetection } from '@angular/core';
import { ColorPickerComponent } from './color-picker.component';
import { provideHttpClient } from '@angular/common/http';
import { By } from '@angular/platform-browser';
import { TooltipDirective } from '../../app/tooltip/tooltip.directive';
import { EventEmitter } from '@angular/core';
import en from '../../../../assets/json/lang/en.json';
import languageList from '../../../../assets/json/lang.json';
import { of } from 'rxjs';

describe('ColorPickerComponent', () => {
    let component: ColorPickerComponent;
    let fixture: ComponentFixture<ColorPickerComponent>;
    let mainButton: DebugElement;
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
            imports: [ColorPickerComponent, TooltipDirective],
            providers: [
                {
                    provide: LanguageService,
                    useValue: testLanguageService
                },
                GoogleAnalyticsService,
                ThemeService,
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
        component.buttons = [{ theme: 'red' }, { theme: 'blue' }];
        mainButton.triggerEventHandler('click', null);
        fixture.detectChanges();
        expect(component.open).toBe(true);
        const colorBtns = fixture.debugElement.queryAll(By.css('.mini-color-btn'));
        expect(colorBtns.length).toEqual(2);
    });

    it('should hide when clicking the mini-color-button', () => {
        component.buttons = [{ theme: 'red' }, { theme: 'blue' }];
        mainButton.triggerEventHandler('click', null);
        fixture.detectChanges();
        const colorBtns = fixture.debugElement.queryAll(By.css('.mini-color-btn'));
        colorBtns[1].triggerEventHandler('mouseover', null);
        colorBtns[1].triggerEventHandler('click', null);
        expect(component.open).toBe(false);
    });
});
