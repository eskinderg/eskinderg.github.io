import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-technology',
    templateUrl: './technology.component.html',
    styleUrls: ['./technology.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TechnologyComponent {
    @Input() item: any;

    constructor() {}
}
