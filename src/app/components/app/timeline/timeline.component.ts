import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { LanguageService } from 'src/app/providers/language.service';
import { NgClass } from '@angular/common';
import { ChipComponent } from '../chip/chip.component';

@Component({
    selector: 'app-timeline',
    templateUrl: './timeline.component.html',
    styleUrls: ['./timeline.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [NgClass, ChipComponent]
})
export class TimelineComponent {
    @Input() job: any;
    @Input() index: any;
    @Input() reverse: boolean;

    constructor(public lang: LanguageService) {}
}
