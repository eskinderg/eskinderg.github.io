
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { LangSelectComponent } from './langselect';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
  imports: [
    CommonModule,
    MatIconModule,
    MatMenuModule,
    MatTooltipModule
  ],
  declarations: [LangSelectComponent],
  exports: [LangSelectComponent]
})

export class LangSelectModule { }
