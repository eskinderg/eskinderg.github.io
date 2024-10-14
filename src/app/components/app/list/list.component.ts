import { Input, Component, ChangeDetectionStrategy } from '@angular/core';
import { LanguageService } from 'src/app/providers/language.service';
import { NgClass } from '@angular/common';

@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [NgClass]
})
export class ListComponent {
    @Input() item: any;
    @Input() type: any;

    constructor(public lang: LanguageService) {}
}
