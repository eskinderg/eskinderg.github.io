import { Input, Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { NgClass } from '@angular/common';
import { LanguageService } from '../../../providers/language.service';

@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [NgClass]
})
export class ListComponent {
    lang = inject(LanguageService);

    @Input() item: any;
    @Input() type: any;
}
