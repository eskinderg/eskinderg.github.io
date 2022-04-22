import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListModule } from 'src/app/components/list/list.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { TitleModule } from 'src/app/components/title/title.module';
import { EducationConferencesComponent } from './education-conferences.component';

@NgModule({
  declarations: [EducationConferencesComponent],
  imports: [
    CommonModule, ListModule, FlexLayoutModule, TitleModule
  ],
  exports: [EducationConferencesComponent]
})
export class EducationConferencesModule { }
