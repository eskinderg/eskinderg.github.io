import { Component, DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { TooltipDirective, TooltipContentComponent, TooltipPosition } from './tooltip.directive';

@Component({
    standalone: true,
    imports: [TooltipDirective],
    template: `
        <button
            [appTooltip]="tooltipText"
            [position]="position"
            [margin]="margin"
            style="position: absolute; top: 100px; left: 100px; width: 100px; height: 50px;">
            Hover Me
        </button>
    `
})
class TestHostComponent {
    tooltipText: string = 'Test Tooltip';
    position: TooltipPosition = 'top';
    margin: number = 8;
}

describe('TooltipDirective (Vitest + Zoneless)', () => {
    let fixture: ComponentFixture<TestHostComponent>;
    let hostEl: DebugElement;

    beforeEach(async () => {
        vi.useFakeTimers();

        TestBed.resetTestingModule();

        await TestBed.configureTestingModule({
            imports: [TestHostComponent, TooltipDirective, TooltipContentComponent]
        }).compileComponents();

        fixture = TestBed.createComponent(TestHostComponent);
        fixture.detectChanges();
        hostEl = fixture.debugElement.query(By.css('button'));
    });

    afterEach(() => {
        const tooltips = document.querySelectorAll('.tooltip-box');
        tooltips.forEach((el) => el.parentElement?.remove());

        vi.restoreAllMocks();
        vi.useRealTimers();
    });

    it('should create an instance', () => {
        const directive = hostEl.injector.get(TooltipDirective);
        expect(directive).toBeTruthy();
    });

    describe('Mouse Events & Lifecycle', () => {
        it('should attach tooltip to body on mouseenter', async () => {
            fixture.componentInstance.position = 'auto';
            hostEl.triggerEventHandler('mouseenter', null);

            vi.advanceTimersByTime(0);

            const tooltipElement = document.querySelector('.tooltip-box');
            expect(tooltipElement).not.toBeNull();
            expect(tooltipElement?.textContent?.trim()).toBe('Test Tooltip');
        });

        it('should not show tooltip when tooltiptext is empty', async () => {
            const directive = hostEl.injector.get(TooltipDirective);
            fixture.componentInstance.position = 'auto';
            directive.tooltipText = '';
            hostEl.triggerEventHandler('mouseenter', null);
            vi.advanceTimersByTime(0);

            expect(document.querySelector('.tooltip-box')).toBeNull();
        });

        it('should not show tooltip when there is no hostEl', async () => {
            const directive = hostEl.injector.get(TooltipDirective);
            fixture.componentInstance.position = 'auto';
            directive.tooltipText = '';
            hostEl.triggerEventHandler('mouseenter', null);
            vi.advanceTimersByTime(0);

            expect(document.querySelector('.tooltip-box')).toBeNull();
        });

        it('should remove tooltip from body on mouseleave', async () => {
            hostEl.triggerEventHandler('mouseenter', null);
            vi.advanceTimersByTime(0);
            expect(document.querySelector('.tooltip-box')).not.toBeNull();

            hostEl.triggerEventHandler('mouseleave', null);
            expect(document.querySelector('.tooltip-box')).toBeNull();
        });

        it('should remove tooltip from body after mouseeneter and click', async () => {
            hostEl.triggerEventHandler('mouseenter', null);
            vi.advanceTimersByTime(0);
            expect(document.querySelector('.tooltip-box')).not.toBeNull();

            hostEl.triggerEventHandler('click', null);
            expect(document.querySelector('.tooltip-box')).toBeNull();
        });

        it('should clean up tooltip when host component is destroyed', async () => {
            hostEl.triggerEventHandler('mouseenter', null);
            vi.advanceTimersByTime(0);
            expect(document.querySelector('.tooltip-box')).not.toBeNull();

            fixture.destroy();
            expect(document.querySelector('.tooltip-box')).toBeNull();
        });
    });

    describe('Positioning Calculations', () => {
        let hostNativeEl: HTMLElement;

        beforeEach(() => {
            hostNativeEl = hostEl.nativeElement;

            vi.spyOn(hostNativeEl, 'getBoundingClientRect').mockReturnValue({
                top: 100,
                bottom: 150,
                left: 100,
                right: 200,
                width: 100,
                height: 50,
                x: 100,
                y: 100,
                toJSON: () => {}
            });

            vi.spyOn(window, 'innerWidth', 'get').mockReturnValue(1000);
            vi.spyOn(window, 'innerHeight', 'get').mockReturnValue(1000);
        });

        function triggerHoverAndGetTooltip(): HTMLElement {
            hostEl.triggerEventHandler('mouseenter', null);
            vi.advanceTimersByTime(0);

            const tooltipContent = document.querySelector('.tooltip-box');
            const tooltipWrapper = tooltipContent?.parentElement as HTMLElement;

            vi.spyOn(tooltipWrapper, 'getBoundingClientRect').mockReturnValue({
                top: 0,
                bottom: 20,
                left: 0,
                right: 60,
                width: 60,
                height: 20,
                x: 0,
                y: 0,
                toJSON: () => {}
            });

            const directive = hostEl.injector.get(TooltipDirective);
            (directive as any).calculatePosition(tooltipWrapper);

            return tooltipWrapper;
        }

        it('should position top correctly', async () => {
            fixture.componentInstance.position = 'top';
            fixture.detectChanges();

            const tooltipWrapper = triggerHoverAndGetTooltip();

            expect(tooltipWrapper.style.top).toBe('72px');
            expect(tooltipWrapper.style.left).toBe('120px');
        });

        it('should position bottom correctly', async () => {
            fixture.componentInstance.position = 'bottom';
            fixture.detectChanges();

            const tooltipWrapper = triggerHoverAndGetTooltip();

            expect(tooltipWrapper.style.top).toBe('158px');
            expect(tooltipWrapper.style.left).toBe('120px');
        });

        it('should position left correctly', async () => {
            fixture.componentInstance.position = 'left';
            fixture.detectChanges();

            const tooltipWrapper = triggerHoverAndGetTooltip();

            expect(tooltipWrapper.style.top).toBe('115px');
            expect(tooltipWrapper.style.left).toBe('32px');
        });

        it('should position right correctly', async () => {
            fixture.componentInstance.position = 'right';
            fixture.detectChanges();

            const tooltipWrapper = triggerHoverAndGetTooltip();

            expect(tooltipWrapper.style.top).toBe('115px');
            expect(tooltipWrapper.style.left).toBe('208px');
        });
    });

    describe('Positioning Calculations', () => {
        let hostNativeEl: HTMLElement;

        beforeEach(() => {
            hostNativeEl = hostEl.nativeElement;

            vi.spyOn(hostNativeEl, 'getBoundingClientRect').mockReturnValue({
                top: 100,
                bottom: 150,
                left: 100,
                right: 200,
                width: 100,
                height: 50,
                x: 100,
                y: 100,
                toJSON: () => {}
            });

            vi.spyOn(window, 'innerWidth', 'get').mockReturnValue(1000);
            vi.spyOn(window, 'innerHeight', 'get').mockReturnValue(1000);
        });

        function triggerHoverAndGetTooltip(): HTMLElement {
            const tooltipContent = document.querySelector('.tooltip-box');
            const tooltipWrapper = tooltipContent?.parentElement as HTMLElement;

            vi.spyOn(tooltipWrapper, 'getBoundingClientRect').mockReturnValue({
                top: 500,
                bottom: 20,
                left: 0,
                right: 60,
                width: 60,
                height: 20,
                x: 0,
                y: 0,
                toJSON: () => {}
            });

            const directive = hostEl.injector.get(TooltipDirective);
            (directive as any).calculatePosition(tooltipWrapper);

            return tooltipWrapper;
        }

        it('should position top correctly', async () => {
            fixture.componentInstance.position = 'auto';
            fixture.detectChanges();
            hostEl.triggerEventHandler('mouseenter', null);
            vi.advanceTimersByTime(0);

            const tooltipWrapper = triggerHoverAndGetTooltip();

            const directive = hostEl.injector.get(TooltipDirective);

            expect(directive.position).toBe('auto');
            expect(tooltipWrapper.style.top).toBe('72px');
            expect(tooltipWrapper.style.left).toBe('120px');
        });

        it('should position right correctly', async () => {
            fixture.componentInstance.position = 'right';
            fixture.detectChanges();
            hostEl.triggerEventHandler('mouseenter', null);
            vi.advanceTimersByTime(0);

            const tooltipWrapper = triggerHoverAndGetTooltip();

            const directive = hostEl.injector.get(TooltipDirective);

            expect(directive.position).toBe('right');
            expect(tooltipWrapper.style.top).toBe('115px');
            expect(tooltipWrapper.style.left).toBe('208px');
        });

        it('should position left correctly', async () => {
            fixture.componentInstance.position = 'left';
            fixture.detectChanges();
            hostEl.triggerEventHandler('mouseenter', null);
            vi.advanceTimersByTime(0);

            const tooltipWrapper = triggerHoverAndGetTooltip();

            const directive = hostEl.injector.get(TooltipDirective);

            expect(directive.position).toBe('left');
            expect(tooltipWrapper.style.top).toBe('115px');
            expect(tooltipWrapper.style.left).toBe('32px');
        });

        it('should position top correctly', async () => {
            fixture.componentInstance.position = 'top';
            fixture.detectChanges();
            hostEl.triggerEventHandler('mouseenter', null);
            vi.advanceTimersByTime(0);

            const tooltipWrapper = triggerHoverAndGetTooltip();

            const directive = hostEl.injector.get(TooltipDirective);

            expect(directive.position).toBe('top');
            expect(tooltipWrapper.style.top).toBe('72px');
            expect(tooltipWrapper.style.left).toBe('120px');
        });

        it('should position correctly', async () => {
            vi.spyOn(hostNativeEl, 'getBoundingClientRect').mockReturnValue({
                top: -500,
                bottom: 150,
                left: 100,
                right: 200,
                width: -500,
                height: 50,
                x: 100,
                y: 100,
                toJSON: () => {}
            });
            fixture.componentInstance.position = 'top';
            fixture.detectChanges();
            hostEl.triggerEventHandler('mouseenter', null);
            vi.advanceTimersByTime(0);

            const tooltipWrapper = triggerHoverAndGetTooltip();

            const directive = hostEl.injector.get(TooltipDirective);

            expect(directive.position).toBe('top');
            expect(tooltipWrapper.style.top).toBe('8px');
            expect(tooltipWrapper.style.left).toBe('8px');
        });
    });
});
