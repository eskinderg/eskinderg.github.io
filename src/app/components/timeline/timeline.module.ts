import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDividerModule } from '@angular/material/divider';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { TimelineComponent } from './timeline.component';


@NgModule({
  declarations: [TimelineComponent],
  imports: [
    CommonModule,
    MatDividerModule,
    FlexLayoutModule,
    MatIconModule,
    MatChipsModule
  ],
  exports: [TimelineComponent]
})
export class TimelineModule { }
