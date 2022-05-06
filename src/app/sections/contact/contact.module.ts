import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ContactComponent } from './contact.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SeparatorModule } from 'src/app/components/separator/separator.module';

@NgModule({
  declarations: [ContactComponent],
  imports: [
    CommonModule,
    FormsModule,
    MatIconModule,
    MatDividerModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    FlexLayoutModule,
    SeparatorModule
  ],
  exports: [ContactComponent]
})
export class ContactModule { }
