
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatLegacyMenuModule as MatMenuModule } from '@angular/material/legacy-menu';
import { LangSelectComponent } from './langselect';
import { MatLegacyTooltipModule as MatTooltipModule } from '@angular/material/legacy-tooltip';

@NgModule({
  imports: [
    CommonModule,
    MatMenuModule,
    MatTooltipModule
  ],
  declarations: [LangSelectComponent],
  exports: [LangSelectComponent]
})

export class LangSelectModule { }
