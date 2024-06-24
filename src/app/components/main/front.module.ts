import { NgModule } from '@angular/core';
import { MenuComponent } from './menu/menu.component';
import { BaBackTopComponent } from './babacktop/babacktop.component';
import { OutlineComponent } from './outline/outline';
import { SpeedDialFabComponent } from './speeddial/speed-dial-fab.component';
import { MatModule } from 'src/app/module/material.module';
import { LoaderComponent } from './loader/loader';
import { RightComponent } from './right/right.component';
import { ComponentsModule } from '../app/components.module';

@NgModule({
    imports: [MatModule, ComponentsModule],
    declarations: [
        MenuComponent,
        BaBackTopComponent,
        OutlineComponent,
        SpeedDialFabComponent,
        LoaderComponent,
        RightComponent
    ],
    exports: [
        MenuComponent,
        BaBackTopComponent,
        OutlineComponent,
        SpeedDialFabComponent,
        LoaderComponent,
        RightComponent
    ]
})
export class FrontModule {}
