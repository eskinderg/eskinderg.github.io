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
    selector: 'app-accomplishments',
    templateUrl: './accomplishments.component.html',
    styleUrls: ['./accomplishments.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.ShadowDom
})
export class AccomplishmentsSectionComponent extends BaseComponent implements AfterViewInit {
    section = viewChild.required<ElementRef>('accomplishments');

    ngAfterViewInit(): void {
        this.lang.sections['accomplishments'] = this.section;
    }
}
