import { NgModule } from '@angular/core';
import { ListComponent } from './list/list.component';
import { TechnologyComponent } from './technology/technology.component';
import { SeparatorComponent } from './separator/separator.component';
import { TimelineComponent } from './timeline/timeline.component';
import { TitleComponent } from './title/title.component';
import { MatModule } from '../../module/material.module';
import { ToggleComponent } from './toggle/toggle.component';
import { ChipComponent } from './chip/chip.component';
import { DropDownMenuComponent } from './dropdown/dropdown.component';
import { LanguageDropDownComponent } from './langdropdown/langdropdown.component';

@NgModule({
    imports: [MatModule],
    declarations: [
        TitleComponent,
        ChipComponent,
        ListComponent,
        TimelineComponent,
        TechnologyComponent,
        SeparatorComponent,
        ToggleComponent,
        DropDownMenuComponent,
        LanguageDropDownComponent
    ],
    exports: [
        TitleComponent,
        ChipComponent,
        ListComponent,
        TimelineComponent,
        TechnologyComponent,
        SeparatorComponent,
        MatModule,
        ToggleComponent,
        DropDownMenuComponent,
        LanguageDropDownComponent
    ]
})
export class ComponentsModule {}
