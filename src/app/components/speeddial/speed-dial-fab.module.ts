import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { MatLegacyTooltipModule as MatTooltipModule } from '@angular/material/legacy-tooltip';
import { SpeedDialFabComponent } from './speed-dial-fab.component';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [SpeedDialFabComponent],
  imports: [
    FlexLayoutModule, CommonModule, MatButtonModule, MatTooltipModule
  ],
  exports: [SpeedDialFabComponent]
})
export class SpeedDialFabModule { }
