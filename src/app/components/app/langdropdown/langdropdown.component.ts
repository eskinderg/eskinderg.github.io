import { Component, ElementRef, HostListener } from '@angular/core';
import { LanguageService } from 'src/app/providers/language.service';

@Component({
    selector: 'app-lang-dropdown',
    templateUrl: './langdropdown.component.html',
    styleUrl: './langdropdown.component.scss'
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

    @HostListener('document:click', ['$event'])
    clickout(event: any) {
        if (!this.eRef.nativeElement.contains(event.target)) {
            this.visible = false;
        }
    }
}
