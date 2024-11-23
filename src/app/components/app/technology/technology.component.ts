import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
    selector: 'app-technology',
    templateUrl: './technology.component.html',
    styleUrls: ['./technology.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [NgClass]
})
export class TechnologyComponent {
    @Input() item: any;

    constructor() {}
}
