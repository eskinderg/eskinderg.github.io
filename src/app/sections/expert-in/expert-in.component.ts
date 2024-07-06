import { ElementRef, Component, ChangeDetectionStrategy, AfterViewInit, viewChild } from '@angular/core';
import { BaseComponent } from 'src/app/sections/base.component';

@Component({
    selector: 'app-expertin',
    templateUrl: './expert-in.component.html',
    styleUrls: ['./expert-in.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExpertInSectionComponent extends BaseComponent implements AfterViewInit {
    section = viewChild.required<ElementRef>('expertin');

    ngAfterViewInit(): void {
        this.lang.sections['expertin'] = this.section;
    }
}
