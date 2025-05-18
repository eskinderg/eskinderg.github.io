import { ElementRef, Component, ChangeDetectionStrategy, AfterViewInit, viewChild } from '@angular/core';
import { BaseComponent } from 'src/app/sections/base.component';
import { TitleComponent } from '../../components/app/title/title.component';
import { TechnologyComponent } from '../../components/app/technology/technology.component';

@Component({
    selector: 'app-expertin',
    templateUrl: './expert-in.component.html',
    styleUrls: ['./expert-in.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [TitleComponent, TechnologyComponent]
})
export class ExpertInSectionComponent extends BaseComponent implements AfterViewInit {
    section = viewChild.required<ElementRef>('expertin');

    ngAfterViewInit(): void {
        this.lang.sections['expertin'] = this.section;
    }

    trackExpert(index: number, expert: any): any {
        return index + expert.title;
    }
}
