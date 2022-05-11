import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccomplishmentsComponent } from './accomplishments.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { TitleModule } from 'src/app/components/title/title.module';
import { SeparatorModule } from 'src/app/components/separator/separator.module';

@NgModule({
  declarations: [AccomplishmentsComponent],
  imports: [CommonModule, FlexLayoutModule, TitleModule, SeparatorModule],
  exports: [AccomplishmentsComponent]
})
export class AccomplishmentsModule { }
