import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-separator',
    templateUrl: './separator.component.html',
    styleUrls: ['./separator.component.scss'],
    standalone: true
})
export class SeparatorComponent {
    @Input() fillColor: string = '';
    @Input() backgroundColor: string = '';
    @Input() Inverted: boolean = false;

    constructor() {}
}
