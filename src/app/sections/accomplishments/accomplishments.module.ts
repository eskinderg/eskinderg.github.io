import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccomplishmentsComponent } from './accomplishments.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { TitleModule } from 'src/app/components/title/title.module';



@NgModule({
  declarations: [AccomplishmentsComponent],
  imports: [CommonModule, FlexLayoutModule, TitleModule],
  exports: [AccomplishmentsComponent]
})
export class AccomplishmentsModule { }
