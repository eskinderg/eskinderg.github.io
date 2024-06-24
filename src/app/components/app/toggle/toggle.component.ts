import { Component } from '@angular/core';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { ThemeService } from 'src/app/theme/theme.service';

@Component({
    selector: 'app-toggle',
    templateUrl: './toggle.component.html',
    styleUrl: './toggle.component.scss'
})
export class ToggleComponent {
    constructor(public themeService: ThemeService) {}
    public onToggleChange(event: MatSlideToggleChange) {
        this.themeService.SetTheme(this.themeService.Theme, event.checked);
    }
}
