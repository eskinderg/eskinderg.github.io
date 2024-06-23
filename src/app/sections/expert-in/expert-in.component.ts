import { ViewChild, ElementRef, Component, ChangeDetectionStrategy, AfterViewInit } from '@angular/core';
import { BaseComponent } from 'src/app/sections/base.component';

@Component({
    selector: 'app-expert-in',
    templateUrl: './expert-in.component.html',
    styleUrls: ['./expert-in.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExpertInSectionComponent extends BaseComponent implements AfterViewInit {
    @ViewChild('expertin') section: ElementRef;

    ngAfterViewInit(): void {
        this.lang.sections['expertin'] = this.section;
    }
}
