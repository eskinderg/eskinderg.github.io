import { ChangeDetectionStrategy, Component, ElementRef, HostListener, inject } from '@angular/core';
import { TooltipDirective } from '../tooltip/tooltip.directive';
import { TooltipPosition } from '../../app/tooltip/tooltip.enums';

import { CommonModule } from '@angular/common';
import { ThemeService } from '../../../theme/theme.service';
import { ThemeMode } from '../../../theme/theme.mode';

@Component({
    selector: 'app-toggle',
    templateUrl: './toggle.component.html',
    styleUrl: './toggle.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [TooltipDirective, CommonModule]
})
export class ToggleComponent {
    public TOOLTIP_POSITION = TooltipPosition;
    themeService = inject(ThemeService);
    private el = inject(ElementRef);

    open = false;

    setMode(mode: ThemeMode) {
        this.themeService.SetAppTheme(this.themeService.Theme, mode);
    }

    toggleOpen() {
        this.open = !this.open;
    }

    close() {
        this.open = false;
    }

    @HostListener('document:click', ['$event'])
    onDocumentClick(event: MouseEvent) {
        if (this.open && !this.el.nativeElement.contains(event.target)) {
            this.close();
        }
    }
}
