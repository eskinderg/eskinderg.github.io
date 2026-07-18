import { ElementRef, Component, ChangeDetectionStrategy, AfterViewInit, viewChild } from '@angular/core';
import { BaseComponent } from 'src/app/sections/base.component';
import { TitleComponent } from '../../components/app/title/title.component';
import { ListComponent } from '../../components/app/list/list.component';

@Component({
    selector: 'app-education',
    templateUrl: './education-conferences.component.html',
    styleUrls: ['./education-conferences.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [TitleComponent, ListComponent]
})
export class EducationConferencesSectionComponent extends BaseComponent implements AfterViewInit {
    section = viewChild.required<ElementRef>('education');

    constructor() {
        super();
        this.separator.fillColor1 = 'var(--background1)';
        this.separator.fillColor2 = 'var(--background2)';
    }

    ngAfterViewInit(): void {
        this.languageService.sections['education'] = this.section;
    }

    trackEducation(index: number, item: any): any {
        return index + item.title;
    }
}
