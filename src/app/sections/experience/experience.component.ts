import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, viewChild } from '@angular/core';
import { BaseComponent } from 'src/app/sections/base.component';
import { TitleComponent } from '../../components/app/title/title.component';
import { TimelineComponent } from '../../components/app/timeline/timeline.component';

@Component({
    selector: 'app-experience',
    templateUrl: './experience.component.html',
    styleUrls: ['./experience.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [TitleComponent, TimelineComponent]
})
export class ExperienceSectionComponent extends BaseComponent implements AfterViewInit {
    section = viewChild.required<ElementRef>('experience');

    ngAfterViewInit(): void {
        this.languageService.sections['experience'] = this.section;
    }

    trackExperience(index: number, job: any): any {
        return index + job.elements;
    }
}
