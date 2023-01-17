import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDividerModule } from '@angular/material/divider';
import { MatLegacyChipsModule as MatChipsModule } from '@angular/material/legacy-chips';
import { TimelineComponent } from './timeline.component';
import { TitleModule } from '../title/title.module';

@NgModule({
  declarations: [TimelineComponent],
  imports: [
    CommonModule,
    MatDividerModule,
    MatChipsModule,
    TitleModule
  ],
  exports: [TimelineComponent]
})
export class TimelineModule { }
