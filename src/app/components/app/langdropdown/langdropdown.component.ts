import { ChangeDetectionStrategy, Component, HostListener } from '@angular/core';
import { TooltipDirective } from '../tooltip/tooltip.directive';
import { NgClass } from '@angular/common';
import { BaseComponent } from 'src/app/sections/base.component';

@Component({
    selector: 'app-lang-dropdown',
    templateUrl: './langdropdown.component.html',
    styleUrl: './langdropdown.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [TooltipDirective, NgClass]
})
export class LanguageDropDownComponent extends BaseComponent {
    visible: boolean = false;

    changeLanguage(lang: string) {
        this.languageService.Language = lang;
        this.visible = false;
    }

    onClick() {
        this.visible = !this.visible;
    }

    @HostListener('document:mousedown', ['$event'])
    clickout(event: any) {
        if (!this.eRef.nativeElement.contains(event.target)) {
            this.visible = false;
        }
    }
}
