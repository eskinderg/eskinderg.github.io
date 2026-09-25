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
    let buttonEl: DebugElement;

    beforeEach(async () => {
        // Enable Vitest fake timers to replace zone.js fakeAsync/tick
        vi.useFakeTimers();

        // Reset TestBed to wipe dynamic component compiler ID registry (fixes NG0912)
        TestBed.resetTestingModule();

        await TestBed.configureTestingModule({
            imports: [TestHostComponent, TooltipDirective, TooltipContentComponent]
        }).compileComponents();

        fixture = TestBed.createComponent(TestHostComponent);
        fixture.detectChanges();
        buttonEl = fixture.debugElement.query(By.css('button'));
    });

    afterEach(() => {
        // Cleanup any lingering tooltip elements on document.body
        const tooltips = document.querySelectorAll('.tooltip-box');
        tooltips.forEach((el) => el.parentElement?.remove());

        vi.restoreAllMocks();
        vi.useRealTimers();
    });

    it('should create an instance', () => {
        const directive = buttonEl.injector.get(TooltipDirective);
        expect(directive).toBeTruthy();
    });

    describe('Mouse Events & Lifecycle', () => {
        it('should attach tooltip to body on mouseenter', async () => {
            buttonEl.triggerEventHandler('mouseenter', null);

            // Fast-forward the setTimeout inside show()
            vi.advanceTimersByTime(0);

            const tooltipElement = document.querySelector('.tooltip-box');
            expect(tooltipElement).not.toBeNull();
            expect(tooltipElement?.textContent?.trim()).toBe('Test Tooltip');
        });

        it('should remove tooltip from body on mouseleave', async () => {
            buttonEl.triggerEventHandler('mouseenter', null);
            vi.advanceTimersByTime(0);
            expect(document.querySelector('.tooltip-box')).not.toBeNull();

            buttonEl.triggerEventHandler('mouseleave', null);
            expect(document.querySelector('.tooltip-box')).toBeNull();
        });

        it('should clean up tooltip when host component is destroyed', async () => {
            buttonEl.triggerEventHandler('mouseenter', null);
            vi.advanceTimersByTime(0);
            expect(document.querySelector('.tooltip-box')).not.toBeNull();

            fixture.destroy();
            expect(document.querySelector('.tooltip-box')).toBeNull();
        });
    });

    describe('Positioning Calculations', () => {
        let hostNativeEl: HTMLElement;

        beforeEach(() => {
            hostNativeEl = buttonEl.nativeElement;

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
            buttonEl.triggerEventHandler('mouseenter', null);
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

            const directive = buttonEl.injector.get(TooltipDirective);
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
});
