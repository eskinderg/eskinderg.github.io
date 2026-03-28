import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { BaseComponent } from 'src/app/sections/base.component';

@Component({
    selector: 'app-tracker',
    templateUrl: './tracker.component.html',
    styleUrls: ['./tracker.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TrackerComponent extends BaseComponent {
    @Input() position: number;
}
