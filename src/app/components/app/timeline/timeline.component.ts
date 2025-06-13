import { Component, Input, ChangeDetectionStrategy, inject } from '@angular/core';
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
    lang = inject(LanguageService);

    @Input() job: any;
    @Input() index: any;
    @Input() reverse: boolean;

    trackList(index: number, list: any): any {
        return index + list.list;
    }
}
