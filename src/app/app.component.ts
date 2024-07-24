import { Component, ElementRef, EventEmitter, Output, viewChild } from '@angular/core';
import { LanguageService } from './providers/language.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    @Output() public appScroll: EventEmitter<any> = new EventEmitter<any>();

    mainWrapper = viewChild.required<ElementRef>('mainWrapper');

    appComponentWrapper = viewChild.required<ElementRef>('componentWrapper');

    constructor(public lang: LanguageService) {}

    onScroll(event: WheelEvent) {
        this.mainWrapper().nativeElement.scrollTop += event.deltaY;
    }
}
