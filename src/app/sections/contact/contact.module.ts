import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { ContactComponent } from './contact.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SeparatorModule } from 'src/app/components/separator/separator.module';

@NgModule({
  declarations: [ContactComponent],
  imports: [
    CommonModule,
    MatDividerModule,
    MatCardModule,
    FlexLayoutModule,
    SeparatorModule
  ],
  exports: [ContactComponent]
})
export class ContactModule { }
