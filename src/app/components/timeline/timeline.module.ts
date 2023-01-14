import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDividerModule } from '@angular/material/divider';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatLegacyChipsModule as MatChipsModule } from '@angular/material/legacy-chips';
import { TimelineComponent } from './timeline.component';
import { TitleModule } from '../title/title.module';

@NgModule({
  declarations: [TimelineComponent],
  imports: [
    CommonModule,
    MatDividerModule,
    FlexLayoutModule,
    MatChipsModule,
    TitleModule
  ],
  exports: [TimelineComponent]
})
export class TimelineModule { }
