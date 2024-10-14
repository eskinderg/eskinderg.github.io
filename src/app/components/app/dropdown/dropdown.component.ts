import { Component, ElementRef, HostListener } from '@angular/core';
import { GoogleAnalyticsService } from 'src/app/providers/google-analytics.service';
import { LanguageService } from 'src/app/providers/language.service';
import { TooltipDirective } from '../tooltip/tooltip.directive';
import { NgClass } from '@angular/common';

@Component({
    selector: 'app-dropdown',
    templateUrl: './dropdown.component.html',
    styleUrl: './dropdown.component.scss',
    standalone: true,
    imports: [TooltipDirective, NgClass]
})
export class DropDownMenuComponent {
    visible: boolean = false;

    constructor(
        private eRef: ElementRef,
        private googleAnalyticsService: GoogleAnalyticsService,
        public lang: LanguageService
    ) {}

    onClick() {
        this.visible = !this.visible;
    }

    onPdfDownload() {
        this.googleAnalyticsService.eventEmitter('download_pdf', 'about', 'download', 'click', 10);
        this.visible = false;
    }

    onDocxDownload() {
        this.googleAnalyticsService.eventEmitter('download_docx', 'about', 'download', 'click', 10);
        this.visible = false;
    }

    @HostListener('document:mousedown', ['$event'])
    clickout(event: any) {
        if (!this.eRef.nativeElement.contains(event.target)) {
            this.visible = false;
        }
    }
}
