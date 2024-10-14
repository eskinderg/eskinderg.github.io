import { Component, ElementRef, HostListener } from '@angular/core';
import { LanguageService } from 'src/app/providers/language.service';
import { TooltipDirective } from '../tooltip/tooltip.directive';
import { NgClass } from '@angular/common';

@Component({
    selector: 'app-lang-dropdown',
    templateUrl: './langdropdown.component.html',
    styleUrl: './langdropdown.component.scss',
    standalone: true,
    imports: [TooltipDirective, NgClass]
})
export class LanguageDropDownComponent {
    visible: boolean = false;
    constructor(
        public lang: LanguageService,
        public eRef: ElementRef
    ) {}

    changeLanguage(lang: string) {
        this.lang.Language = lang;
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
