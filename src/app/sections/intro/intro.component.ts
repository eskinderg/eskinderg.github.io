import {
    Component,
    ElementRef,
    ChangeDetectionStrategy,
    AfterViewInit,
    viewChild,
    ViewEncapsulation
} from '@angular/core';
import { BaseComponent } from 'src/app/sections/base.component';

@Component({
    selector: 'app-intro',
    templateUrl: './intro.component.html',
    styleUrls: ['./intro.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.ShadowDom
})
export class IntroSectionComponent extends BaseComponent implements AfterViewInit {
    section = viewChild.required<ElementRef>('intro');

    ngAfterViewInit(): void {
        this.lang.sections['intro'] = this.section;
    }
}
