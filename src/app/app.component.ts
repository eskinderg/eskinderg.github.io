import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { LanguageService } from './providers/language.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    @Output() public appScroll: EventEmitter<any> = new EventEmitter<any>();
    @ViewChild('mainWrapper', { read: ElementRef }) public mainWrapper: ElementRef<HTMLElement>;

    constructor(public lang: LanguageService) {}

    onScroll(winEvent: any) {
        this.appScroll.emit(winEvent);
    }
}
