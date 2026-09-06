import { provideHttpClient, withInterceptorsFromDi, withXhr } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LanguageService } from '../../../providers/language.service';
import { ThemeService } from '../../../theme/theme.service';

// import { IntroSectionComponent } from './intro.component';
import { LanguageServiceMock } from '../../../language/language.mock';
import { GoogleAnalyticsService } from '../../../providers/google-analytics.service';
import { Component, DebugElement, provideZonelessChangeDetection } from '@angular/core';
import { describe, beforeEach, it, expect } from 'vitest';
import { TooltipDirective } from './tooltip.directive';
import { By } from '@angular/platform-browser';

@Component({
    imports: [TooltipDirective],
    template: `<div appTooltip="test"></div>`
})
class Test {}

describe('IntroSectionComponent', () => {
    let fixture: ComponentFixture<Test>;
    let buttonDebugElement: DebugElement;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [Test, TooltipDirective],
            providers: [
                {
                    provide: LanguageService,
                    useClass: LanguageServiceMock
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
