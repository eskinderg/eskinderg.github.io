import {
    ElementRef,
    Component,
    ChangeDetectionStrategy,
    AfterViewInit,
    viewChild,
    ViewEncapsulation
} from '@angular/core';
import { BaseComponent } from 'src/app/sections/base.component';

@Component({
    selector: 'app-education',
    templateUrl: './education-conferences.component.html',
    styleUrls: ['./education-conferences.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.ShadowDom
})
export class EducationConferencesSectionComponent extends BaseComponent implements AfterViewInit {
    section = viewChild.required<ElementRef>('education');

    ngAfterViewInit(): void {
        this.lang.sections['education'] = this.section;
    }
}
