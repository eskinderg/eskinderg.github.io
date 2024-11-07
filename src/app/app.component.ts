import {
    ChangeDetectionStrategy,
    Component,
    ElementRef,
    EventEmitter,
    Output,
    viewChild
} from '@angular/core';
import { ColorPickerComponent } from './components/main/color-picker/color-picker.component';
import { RightComponent } from './components/main/right/right.component';
import { LoaderComponent } from './components/main/loader/loader';
import { OutlineComponent } from './components/main/outline/outline';
import { BaBackTopComponent } from './components/main/babacktop/babacktop.component';
import { BaseComponent } from './sections/base.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    standalone: true,
    imports: [ColorPickerComponent, RightComponent, LoaderComponent, OutlineComponent, BaBackTopComponent],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent extends BaseComponent {
    @Output() public appWindowScroll: EventEmitter<any> = new EventEmitter<any>();

    mainWrapper = viewChild.required<ElementRef>('mainWrapper');

    colorPickerComponent = viewChild.required<ColorPickerComponent>(ColorPickerComponent);

    appComponentWrapper = viewChild.required<ElementRef>('componentWrapper');

    onScroll(event: WheelEvent) {
        this.mainWrapper().nativeElement.scrollTop += event.deltaY;
    }
}
