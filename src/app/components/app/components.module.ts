import { NgModule } from '@angular/core';
import { ListComponent } from './list/list.component';
import { TechnologyComponent } from './technology/technology.component';
import { SeparatorComponent } from './separator/separator.component';
import { TimelineComponent } from './timeline/timeline.component';
import { TitleComponent } from './title/title.component';
import { MatModule } from '../../module/material.module';
import { ToggleComponent } from './toggle/toggle.component';
import { LangSelectComponent } from './langselect/langselect';

@NgModule({
    imports: [MatModule],
    declarations: [
        TitleComponent,
        ListComponent,
        TimelineComponent,
        TechnologyComponent,
        SeparatorComponent,
        ToggleComponent,
        LangSelectComponent
    ],
    exports: [
        TitleComponent,
        ListComponent,
        TimelineComponent,
        TechnologyComponent,
        SeparatorComponent,
        MatModule,
        ToggleComponent,
        LangSelectComponent
    ]
})
export class ComponentsModule {}
