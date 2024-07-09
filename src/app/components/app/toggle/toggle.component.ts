import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ThemeService } from 'src/app/theme/theme.service';

@Component({
    selector: 'app-toggle',
    templateUrl: './toggle.component.html',
    styleUrl: './toggle.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
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
