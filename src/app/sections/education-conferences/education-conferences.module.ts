import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListModule } from 'src/app/components/list/list.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { TitleModule } from 'src/app/components/title/title.module';
import { EducationConferencesComponent } from './education-conferences.component';
import { SeparatorModule } from 'src/app/components/separator/separator.module';

@NgModule({
  declarations: [EducationConferencesComponent],
  imports: [
    CommonModule, ListModule, FlexLayoutModule, TitleModule, SeparatorModule
  ],
  exports: [EducationConferencesComponent]
})
export class EducationConferencesModule { }
