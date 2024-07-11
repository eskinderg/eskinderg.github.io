import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

@NgModule({
    imports: [
        CommonModule,
        MatButtonModule,
        MatMenuModule,
        MatTooltipModule,
        MatDividerModule,
        MatCardModule
    ],
    exports: [
        CommonModule,
        MatButtonModule,
        MatMenuModule,
        MatTooltipModule,
        MatDividerModule,
        MatCardModule
    ],
    providers: [provideAnimationsAsync()]
})
export class MatModule {}
