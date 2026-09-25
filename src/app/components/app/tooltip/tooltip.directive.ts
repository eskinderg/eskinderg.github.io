import {
    Directive,
    Input,
    ElementRef,
    Renderer2,
    HostListener,
    ComponentRef,
    ViewContainerRef,
    Component,
    OnDestroy,
    inject
} from '@angular/core';

export type TooltipPosition = 'auto' | 'top' | 'bottom' | 'left' | 'right';

@Component({
    selector: 'app-tooltip-content',
    standalone: true,
    template: `
        <div class="tooltip-box">
            {{ text }}
        </div>
    `,
    styleUrls: ['./tooltip.component.scss']
})
export class TooltipContentComponent {
    text = '';
}

@Directive({
    selector: '[appTooltip]',
    standalone: true
})
export class TooltipDirective implements OnDestroy {
    private elementRef = inject(ElementRef);
    private renderer = inject(Renderer2);
    private viewContainerRef = inject(ViewContainerRef);

    @Input('appTooltip') tooltipText = '';
    @Input() position: TooltipPosition = 'auto';
    @Input() margin = 8;

    private componentRef: ComponentRef<TooltipContentComponent> | null = null;

    @HostListener('mouseenter')
    onMouseEnter(): void {
        if (!this.tooltipText) return;
        this.show();
    }

    @HostListener('mouseleave')
    onMouseLeave(): void {
        this.hide();
    }

    ngOnDestroy(): void {
        this.hide();
    }

    private show(): void {
        // 1. Dynamically instantiate the tooltip component
        this.componentRef = this.viewContainerRef.createComponent(TooltipContentComponent);
        this.componentRef.instance.text = this.tooltipText;

        const tooltipElement = this.componentRef.location.nativeElement as HTMLElement;

        // 2. Set base styles & hide initial render to prevent visual flicker
        this.renderer.setStyle(tooltipElement, 'position', 'fixed');
        this.renderer.setStyle(tooltipElement, 'z-index', '1060');
        this.renderer.setStyle(tooltipElement, 'visibility', 'hidden');

        // Attach to DOM (hidden)
        this.renderer.appendChild(document.body, tooltipElement);

        // 3. Calculate position and make visible in the next macro task once rendered
        setTimeout(() => {
            this.calculatePosition(tooltipElement);
            this.renderer.setStyle(tooltipElement, 'visibility', 'visible');
        });
    }

    private hide(): void {
        if (this.componentRef) {
            this.componentRef.destroy();
            this.componentRef = null;
        }
    }

    private calculatePosition(tooltip: HTMLElement): void {
        if (!this.componentRef) return;

        const hostRect = this.elementRef.nativeElement.getBoundingClientRect();
        const tooltipRect = tooltip.getBoundingClientRect();

        let targetPosition = this.position;

        // Handle "auto" positioning logic based on viewport constraints
        if (targetPosition === 'auto') {
            const spaceTop = hostRect.top - tooltipRect.height - this.margin;
            const spaceBottom = window.innerHeight - hostRect.bottom - tooltipRect.height - this.margin;
            const spaceLeft = hostRect.left - tooltipRect.width - this.margin;
            const spaceRight = window.innerWidth - hostRect.right - tooltipRect.width - this.margin;

            // Prioritize Top -> Bottom -> Right -> Left depending on space availability
            if (spaceTop > 0) targetPosition = 'top';
            else if (spaceBottom > 0) targetPosition = 'bottom';
            else if (spaceRight > 0) targetPosition = 'right';
            else if (spaceLeft > 0) targetPosition = 'left';
            else targetPosition = 'top'; // Fallback
        }

        let top = 0;
        let left = 0;

        // Calculate absolute coordinates relative to viewport bounds
        switch (targetPosition) {
            case 'top':
                top = hostRect.top - tooltipRect.height - this.margin;
                left = hostRect.left + (hostRect.width - tooltipRect.width) / 2;
                break;
            case 'bottom':
                top = hostRect.bottom + this.margin;
                left = hostRect.left + (hostRect.width - tooltipRect.width) / 2;
                break;
            case 'left':
                top = hostRect.top + (hostRect.height - tooltipRect.height) / 2;
                left = hostRect.left - tooltipRect.width - this.margin;
                break;
            case 'right':
                top = hostRect.top + (hostRect.height - tooltipRect.height) / 2;
                left = hostRect.right + this.margin;
                break;
        }

        // Screen Edge Protection: Prevent tooltip from clipping outside horizontal viewport boundaries
        if (left < 0) {
            left = this.margin; // Shift right if clipping left edge
        } else if (left + tooltipRect.width > window.innerWidth) {
            left = window.innerWidth - tooltipRect.width - this.margin; // Shift left if clipping right edge
        }

        // Screen Edge Protection: Prevent tooltip from clipping outside vertical viewport boundaries
        if (top < 0) {
            top = this.margin;
        } else if (top + tooltipRect.height > window.innerHeight) {
            top = window.innerHeight - tooltipRect.height - this.margin;
        }

        // Apply calculated coordinates
        this.renderer.setStyle(tooltip, 'top', `${top}px`);
        this.renderer.setStyle(tooltip, 'left', `${left}px`);
    }
}
