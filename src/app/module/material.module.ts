import { NgModule } from '@angular/core';
import { MatChipsModule } from '@angular/material/chips';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [
        CommonModule,
        MatButtonModule,
        MatMenuModule,
        MatTooltipModule,
        MatChipsModule,
        MatDividerModule,
        MatCardModule
    ],
    exports: [
        CommonModule,
        MatButtonModule,
        MatMenuModule,
        MatTooltipModule,
        MatChipsModule,
        MatDividerModule,
        MatCardModule
    ]
})
export class MatModule {}
