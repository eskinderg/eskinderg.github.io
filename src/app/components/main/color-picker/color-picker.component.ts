import { Component, ElementRef, EventEmitter, HostListener, Input, OnInit } from '@angular/core';
import { LanguageService } from 'src/app/providers/language.service';
import { ThemeService } from 'src/app/theme/theme.service';
import { TooltipPosition } from '../../app/tooltip/tooltip.enums';
import { TooltipDirective } from '../../app/tooltip/tooltip.directive';
import { NgClass } from '@angular/common';

export enum ButtonState {
    Opened = 'opened',
    Closed = 'closed'
}

@Component({
    selector: 'app-color-picker',
    templateUrl: './color-picker.component.html',
    styleUrls: ['./color-picker.component.scss'],
    standalone: true,
    imports: [TooltipDirective, NgClass]
})
export class ColorPickerComponent implements OnInit {
    @Input() reverseColumnDirection: boolean = false;
    @Input() public onWindowScroll: EventEmitter<any>;

    public atTop = false;
    public buttons = [];
    public colorTogglerState: ButtonState = ButtonState.Closed;
    public STATE = ButtonState;
    public TOOLTIP_POSITION = TooltipPosition;
    public currentTheme: any;

    constructor(
        public themeService: ThemeService,
        public lang: LanguageService,
        public eRef: ElementRef
    ) {}

    ngOnInit(): void {
        this.onWindowScroll.subscribe((e) => {
            const scrollTop = e.srcElement.scrollTop;
            if (scrollTop === 0) {
                this.atTop = false;
            } else {
                this.atTop = true;
            }
        });
    }

    public mouseOver(btn: { icon: string; theme: string }) {
        this.currentTheme = this.themeService.Theme;
        this.themeService.SetTheme(btn.theme, this.themeService.DarkMode);
    }

    public mouseLeave() {
        this.themeService.SetTheme(this.currentTheme, this.themeService.DarkMode);
    }

    private showItems() {
        this.colorTogglerState = ButtonState.Opened;
        this.buttons = this.themeService.Colors;
    }

    private hideItems() {
        this.colorTogglerState = ButtonState.Closed;
        this.buttons = [];
    }

    public onToggleButton() {
        this.buttons.length ? this.hideItems() : this.showItems();
    }

    public onClickColor(btn: { icon: string; theme: string }) {
        this.hideItems();
        this.themeService.SetTheme(btn.theme, this.themeService.DarkMode);
    }

    @HostListener('document:mousedown', ['$event'])
    clickout(event: any) {
        if (!this.eRef.nativeElement.contains(event.target)) {
            this.hideItems();
        }
    }
}
