import { ChangeDetectionStrategy, Component, ElementRef, HostListener } from '@angular/core';
import { ThemeService } from 'src/app/theme/theme.service';
import { TooltipDirective } from '../tooltip/tooltip.directive';

import { ThemeMode } from 'src/app/theme/theme.mode';

@Component({
    selector: 'app-toggle',
    templateUrl: './toggle.component.html',
    styleUrl: './toggle.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [TooltipDirective]
})
export class ToggleComponent {
    open = false;

    constructor(
        public themeService: ThemeService,
        private el: ElementRef
    ) {}

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
