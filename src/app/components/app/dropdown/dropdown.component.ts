import { ChangeDetectionStrategy, Component, HostListener } from '@angular/core';
import { TooltipDirective } from '../tooltip/tooltip.directive';
import { NgClass } from '@angular/common';
import { BaseComponent } from 'src/app/sections/base.component';

@Component({
    selector: 'app-dropdown',
    templateUrl: './dropdown.component.html',
    styleUrl: './dropdown.component.scss',
    imports: [TooltipDirective, NgClass],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DropDownMenuComponent extends BaseComponent {
    visible: boolean = false;

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
