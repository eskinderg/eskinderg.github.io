import { Component, HostListener, Input } from '@angular/core';
import { LanguageService } from 'src/app/providers/language.service';
import { ThemeService } from 'src/app/theme/theme.service';
import { colorPickerAnimations } from './color-picker.animations';
import { TooltipPosition } from '../../app/tooltip/tooltip.enums';

export interface ColorPickerButton {
    icon: string;
    tooltip: string;
}

export enum ColorPickerPosition {
    Top = 'top',
    Bottom = 'bottom',
    Left = 'left',
    Right = 'right'
}

@Component({
    selector: 'app-color-picker',
    templateUrl: './color-picker.component.html',
    styleUrls: ['./color-picker.component.scss'],
    animations: colorPickerAnimations
})
export class ColorPickerComponent {
    TooltipPosition: typeof TooltipPosition = TooltipPosition;
    @Input() reverseColumnDirection: boolean = false;
    @Input() colorButtons: ColorPickerButton[];

    public buttons = [];
    public colorTogglerState = 'inactive';
    public atTop = true;

    constructor(
        public themeService: ThemeService,
        public lang: LanguageService
    ) {}

    private showItems() {
        this.colorTogglerState = 'active';
        this.buttons = this.themeService.Colors;
    }

    private hideItems() {
        this.colorTogglerState = 'inactive';
        this.buttons = [];
    }

    public onToggleButton() {
        this.buttons.length ? this.hideItems() : this.showItems();
    }

    public onClickColor(btn: { icon: string; theme: string }) {
        this.hideItems();
        this.themeService.SetTheme(btn.theme, this.themeService.DarkMode);
    }

    // public onToggleChange(event: MatSlideToggleChange) {
    //     this.hideItems();
    //     this.themeService.SetTheme(this.themeService.Theme, event.checked);
    // }

    @HostListener('window:scroll', ['$event'])
    onScroll(event: any) {
        const scrollTop = event.srcElement.documentElement.scrollTop;
        if (scrollTop === 0) {
            this.atTop = true;
        } else {
            this.atTop = false;
        }
    }
}
