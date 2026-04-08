import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
    selector: 'app-separator',
    templateUrl: './separator.component.html',
    styleUrls: ['./separator.component.scss'],
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SeparatorComponent {
    @Input() fillColor1: string = '';
    @Input() fillColor2: string = '';
    @Input() backgroundColor: string = '';

    constructor() {}
}
