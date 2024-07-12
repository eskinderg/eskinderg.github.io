import {
    ChangeDetectionStrategy,
    Component,
    ElementRef,
    EventEmitter,
    Output,
    ViewEncapsulation,
    viewChild
} from '@angular/core';
import { LanguageService } from './providers/language.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
    @Output() public appScroll: EventEmitter<any> = new EventEmitter<any>();

    mainWrapper = viewChild.required<ElementRef>('mainWrapper');
    appComponentWrapper = viewChild.required<ElementRef>('componentWrapper');

    constructor(public lang: LanguageService) {}
}
