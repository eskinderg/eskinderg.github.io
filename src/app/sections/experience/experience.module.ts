import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimelineModule } from 'src/app/components/timeline/timeline.module';
import { TitleModule } from 'src/app/components/title/title.module';
import { ExperienceComponent } from './experience.component';

@NgModule({
  declarations: [ExperienceComponent],
  imports: [
    CommonModule,
    TimelineModule,
    TitleModule
  ],
  exports: [ExperienceComponent]
})
export class ExperienceModule { }
