import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, viewChild } from '@angular/core';
import { BaseComponent } from 'src/app/sections/base.component';
import { TitleComponent } from '../../components/app/title/title.component';
import { TimelineComponent } from '../../components/app/timeline/timeline.component';
import { ExperienceFadeInDirective } from './experience-fadein-directive';

@Component({
    selector: 'app-experience',
    templateUrl: './experience.component.html',
    styleUrls: ['./experience.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [TitleComponent, TimelineComponent, ExperienceFadeInDirective]
})
export class ExperienceSectionComponent extends BaseComponent implements AfterViewInit {
    section = viewChild.required<ElementRef>('experience');

    constructor() {
        super();
        this.separator.fillColor1 = 'var(--background2)';
        this.separator.fillColor2 = 'var(--background1)';
    }

    ngAfterViewInit(): void {
        this.languageService.sections['experience'] = this.section;
    }

    trackExperience(index: number, job: any): any {
        return index + job.elements;
    }
}
