import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { LanguageService } from 'src/app/providers/language.service';

@Component({
    selector: 'app-timeline',
    templateUrl: './timeline.component.html',
    styleUrls: ['./timeline.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TimelineComponent {
    @Input() job: any;
    @Input() index: any;
    @Input() reverse: boolean;

    constructor(public lang: LanguageService) {}
}
