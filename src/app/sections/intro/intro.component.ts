import { Component, ViewChild, ElementRef, ChangeDetectionStrategy, AfterViewInit } from '@angular/core';
import { BaseComponent } from 'src/app/sections/base.component';

@Component({
    selector: 'app-intro',
    templateUrl: './intro.component.html',
    styleUrls: ['./intro.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class IntroSectionComponent extends BaseComponent implements AfterViewInit {
    @ViewChild('intro') section: ElementRef;

    ngAfterViewInit(): void {
        this.lang.sections['intro'] = this.section;
    }
}
