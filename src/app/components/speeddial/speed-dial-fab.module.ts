import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { SpeedDialFabComponent } from './speed-dial-fab.component';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [SpeedDialFabComponent],
  imports: [
    FlexLayoutModule, CommonModule, MatButtonModule, MatIconModule, MatTooltipModule
  ],
  exports: [SpeedDialFabComponent]
})
export class SpeedDialFabModule { }
