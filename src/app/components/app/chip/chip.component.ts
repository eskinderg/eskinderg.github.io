import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-chip',
    templateUrl: './chip.component.html',
    styleUrls: ['./chip.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true
})
export class ChipComponent {
    @Input() technology: string;

    constructor() {}
}
