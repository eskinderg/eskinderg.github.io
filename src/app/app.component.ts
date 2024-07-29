import { Component, ElementRef, EventEmitter, Output, viewChild } from '@angular/core';
import { LanguageService } from './providers/language.service';
import { ColorPickerComponent } from './components/main/color-picker/color-picker.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    @Output() public appWindowScroll: EventEmitter<any> = new EventEmitter<any>();

    mainWrapper = viewChild.required<ElementRef>('mainWrapper');

    colorPickerComponent = viewChild.required<ColorPickerComponent>(ColorPickerComponent);

    appComponentWrapper = viewChild.required<ElementRef>('componentWrapper');

    constructor(public lang: LanguageService) {}

    onScroll(event: WheelEvent) {
        this.mainWrapper().nativeElement.scrollTop += event.deltaY;
    }
}
