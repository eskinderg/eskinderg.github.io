import { NgModule } from '@angular/core';
import { MenuComponent } from './menu/menu.component';
import { BaBackTopComponent } from './babacktop/babacktop.component';
import { OutlineComponent } from './outline/outline';
import { ColorPickerComponent } from './color-picker/color-picker.component';
import { LoaderComponent } from './loader/loader';
import { RightComponent } from './right/right.component';
import { ComponentsModule } from '../app/components.module';

@NgModule({
    imports: [ComponentsModule],
    declarations: [
        MenuComponent,
        BaBackTopComponent,
        OutlineComponent,
        ColorPickerComponent,
        LoaderComponent,
        RightComponent
    ],
    exports: [
        MenuComponent,
        BaBackTopComponent,
        OutlineComponent,
        ColorPickerComponent,
        LoaderComponent,
        RightComponent
    ]
})
export class FrontModule {}
