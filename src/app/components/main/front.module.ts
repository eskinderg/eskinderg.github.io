import { NgModule } from '@angular/core';
import { LangSelectComponent } from './langselect/langselect';
import { MenuComponent } from './menu/menu.component';
import { BaBackTopComponent } from './babacktop/babacktop.component';
import { OutlineComponent } from './outline/outline';
import { SpeedDialFabComponent } from './speeddial/speed-dial-fab.component';
import { MatModule } from 'src/app/module/material.module';
import { ScrollSpyDirective } from 'src/app/providers/scroll-spy-directive';
import { LoaderComponent } from './loader/loader';

@NgModule({
  imports: [MatModule],
  declarations: [
    LangSelectComponent,
    MenuComponent,
    BaBackTopComponent,
    OutlineComponent,
    SpeedDialFabComponent,
    ScrollSpyDirective,
    LoaderComponent
  ],
  exports: [
    LangSelectComponent,
    MenuComponent,
    BaBackTopComponent,
    OutlineComponent,
    SpeedDialFabComponent,
    ScrollSpyDirective,
    LoaderComponent
  ]
})
export class FrontModule {}
