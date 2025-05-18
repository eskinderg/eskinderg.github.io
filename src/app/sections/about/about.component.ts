import { Component, ElementRef, ChangeDetectionStrategy, AfterViewInit, viewChild } from '@angular/core';
import { BaseComponent } from 'src/app/sections/base.component';
import { TitleComponent } from '../../components/app/title/title.component';
import { DropDownMenuComponent } from '../../components/app/dropdown/dropdown.component';

@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [TitleComponent, DropDownMenuComponent]
})
export class AboutSectionComponent extends BaseComponent implements AfterViewInit {
    section = viewChild.required<ElementRef>('about');

    ngAfterViewInit(): void {
        this.lang.sections['about'] = this.section;
    }

    onPdfDownload() {
        this.googleAnalyticsService.eventEmitter('download_pdf', 'about', 'download', 'click', 10);
    }

    onDocxDownload() {
        this.googleAnalyticsService.eventEmitter('download_docx', 'about', 'download', 'click', 10);
    }

    trackAbout(index: number, paragraph: any): any {
        return index + paragraph;
    }
}
