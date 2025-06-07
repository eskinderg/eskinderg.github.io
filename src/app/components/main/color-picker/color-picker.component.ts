import {
    ChangeDetectionStrategy,
    Component,
    ElementRef,
    HostListener,
    Input,
    OnInit,
    viewChild
} from '@angular/core';
import { TooltipPosition } from '../../app/tooltip/tooltip.enums';
import { TooltipDirective } from '../../app/tooltip/tooltip.directive';
import { NgClass } from '@angular/common';
import { BaseComponent } from 'src/app/sections/base.component';

export enum ButtonState {
    Opened = 'opened',
    Closed = 'closed'
}

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'app-color-picker',
    templateUrl: './color-picker.component.html',
    styleUrls: ['./color-picker.component.scss'],
    imports: [TooltipDirective, NgClass]
})
export class ColorPickerComponent extends BaseComponent implements OnInit {
    @Input() reverseColumnDirection: boolean = false;

    button = viewChild.required<ElementRef>('button');
    public atTop = true;
    public buttons = [];
    public colorTogglerState: ButtonState = ButtonState.Closed;
    public STATE = ButtonState;
    public TOOLTIP_POSITION = TooltipPosition;
    public currentTheme: any;
    public open: boolean = false;

    ngOnInit(): void {
        this.buttons = this.themeService.Colors;
        this.scrollService.scroll$.subscribe((e) => {
            if (e.srcElement) {
                const scrollTop = e.srcElement.scrollTop;
                this.button().nativeElement.classList.toggle('shadowButton', scrollTop >= 50);
            }
        });
    }

    public mouseOver(btn: { icon: string; theme: string }) {
        this.currentTheme = this.themeService.Theme;
        if (this.open) {
            this.themeService.SetAppTheme(btn.theme, this.themeService.ThemeMode);
        }
    }

    public mouseLeave(btn: { icon: string; theme: string }) {
        if (this.open) {
            this.themeService.SetAppTheme(this.currentTheme, this.themeService.ThemeMode);
        } else {
            this.themeService.SetAppTheme(btn.theme, this.themeService.ThemeMode);
        }
    }

    public onToggleButton() {
        this.open = !this.open;
    }

    public onClickColor(btn: { icon: string; theme: string }) {
        this.open = false;
        this.themeService.SetAppTheme(btn.theme, this.themeService.ThemeMode);
    }

    @HostListener('document:mousedown', ['$event'])
    clickout(event: any) {
        if (!this.eRef.nativeElement.contains(event.target)) {
            // this.hideItems();
            this.open = false;
        }
    }
}
