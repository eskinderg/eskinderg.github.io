import { NgModule } from '@angular/core';
import { ListComponent } from './list/list.component';
import { TechnologyComponent } from './technology/technology.component';
import { SeparatorComponent } from './separator/separator.component';
import { TimelineComponent } from './timeline/timeline.component';
import { TitleComponent } from './title/title.component';
import { MatModule } from '../../module/material.module';

@NgModule({
  imports: [MatModule],
  declarations: [TitleComponent, ListComponent, TimelineComponent, TechnologyComponent, SeparatorComponent],
  exports: [
    TitleComponent,
    ListComponent,
    TimelineComponent,
    TechnologyComponent,
    SeparatorComponent,
    MatModule
  ]
})
export class ComponentsModule {}
