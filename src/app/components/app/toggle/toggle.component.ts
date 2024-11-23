import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ThemeService } from 'src/app/theme/theme.service';
import { TooltipDirective } from '../tooltip/tooltip.directive';
import { NgClass } from '@angular/common';

@Component({
    selector: 'app-toggle',
    templateUrl: './toggle.component.html',
    styleUrl: './toggle.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [TooltipDirective, NgClass]
})
export class ToggleComponent {
    toggleValue: boolean;

    constructor(public themeService: ThemeService) {
        this.toggleValue = themeService.DarkMode;
    }

    public onClickToggle() {
        this.toggleValue = !this.toggleValue;
        this.themeService.SetTheme(this.themeService.Theme, this.toggleValue);
    }
}
