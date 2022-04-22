
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { LangSelectComponent } from './langselect';

@NgModule({
  imports: [
    CommonModule,
    MatIconModule,
    MatMenuModule
  ],
  declarations: [LangSelectComponent],
  exports: [LangSelectComponent]
})

export class LangSelectModule { }
