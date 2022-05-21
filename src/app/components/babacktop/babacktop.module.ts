import { NgModule           }from '@angular/core';
import { CommonModule       }from '@angular/common';
import { BaBackTopComponent }from './babacktop.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ BaBackTopComponent ],
  exports:      [ BaBackTopComponent ]
})

export class BaBackTopModule {}
