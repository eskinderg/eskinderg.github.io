import { provideHttpClient, withInterceptorsFromDi, withXhr } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LanguageService } from '../../../providers/language.service';
import { ThemeService } from '../../../theme/theme.service';

import { GoogleAnalyticsService } from '../../../providers/google-analytics.service';
import { Component, DebugElement, EventEmitter, provideZonelessChangeDetection } from '@angular/core';
import { TooltipDirective } from './tooltip.directive';
import { By } from '@angular/platform-browser';
import en from '../../../../assets/json/lang/en.json';
import languageList from '../../../../assets/json/lang.json';
import { of } from 'rxjs';

@Component({
    imports: [TooltipDirective],
    template: `<div appTooltip="test"></div>`
})
class Test {}

describe('tooltip directive test', () => {
    let fixture: ComponentFixture<Test>;
    let buttonDebugElement: DebugElement;
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
            imports: [Test, TooltipDirective],
            providers: [
                {
                    provide: LanguageService,
                    useValue: testLanguageService
                },
                GoogleAnalyticsService,
                ThemeService,
                provideZonelessChangeDetection(),
                provideHttpClient(withXhr(), withInterceptorsFromDi())
            ]
        }).compileComponents();

        fixture = TestBed.createComponent(Test);
        buttonDebugElement = fixture.debugElement.query(By.directive(TooltipDirective));
        fixture.detectChanges();
    });

    afterEach(() => {
        const tooltips = document.querySelectorAll('app-tooltip');
        tooltips.forEach((t) => t.remove());
    });

    it('should create an instance', () => {
        const directive = buttonDebugElement.injector.get(TooltipDirective);
        expect(directive).toBeTruthy();
    });

    it('should create and append tooltip element on mouseenter', () => {
        // Trigger mouseenter event on the host element
        buttonDebugElement.triggerEventHandler('mouseenter', null);
        fixture.detectChanges();

        const tooltipEl = document.querySelector('app-tooltip');
        expect(tooltipEl).toBeTruthy();
        expect(tooltipEl?.textContent).toBe(` test\n`);
        buttonDebugElement.triggerEventHandler('mousemove', null);
        buttonDebugElement.triggerEventHandler('touchstart', null);
    });

    it('should remove tooltip element on mouseleave', () => {
        // Trigger mouseenter event on the host element
        buttonDebugElement.triggerEventHandler('mousemove', null);
        buttonDebugElement.triggerEventHandler('mouseleave', null);
        fixture.detectChanges();

        const tooltipEl = document.querySelector('app-tooltip');
        expect(tooltipEl).toBeFalsy();
    });
});
