import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDividerModule } from '@angular/material/divider';
import { MatLegacyCardModule as MatCardModule } from '@angular/material/legacy-card';
import { ContactComponent } from './contact.component';
import { SeparatorModule } from 'src/app/components/separator/separator.module';

@NgModule({
  declarations: [ContactComponent],
  imports: [
    CommonModule,
    MatDividerModule,
    MatCardModule,
    SeparatorModule
  ],
  exports: [ContactComponent]
})
export class ContactModule { }
