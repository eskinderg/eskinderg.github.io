import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LanguageService } from '../../../providers/language.service';
import { ThemeService } from '../../../theme/theme.service';

import { LanguageServiceMock } from '../../../language/language.mock';
import { GoogleAnalyticsService } from '../../../providers/google-analytics.service';
import { DebugElement, provideZonelessChangeDetection } from '@angular/core';
import { describe, beforeEach, it, expect } from 'vitest';
import { ColorPickerComponent } from './color-picker.component';
import { provideHttpClient } from '@angular/common/http';
import { By } from '@angular/platform-browser';
import { TooltipDirective } from '../../app/tooltip/tooltip.directive';

describe('ColorPickerComponent', () => {
    let component: ColorPickerComponent;
    let fixture: ComponentFixture<ColorPickerComponent>;
    let mainButton: DebugElement;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [ColorPickerComponent, TooltipDirective],
            providers: [
                {
                    provide: LanguageService,
                    useClass: LanguageServiceMock
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
