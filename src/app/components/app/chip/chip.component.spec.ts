import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChipComponent } from './chip.component';
import { LanguageService } from '../../../providers/language.service';
import { LanguageServiceMock } from '../../../language/language.mock';
import { provideZonelessChangeDetection } from '@angular/core';
import { beforeEach, describe, it, expect } from 'vitest';

describe('ChipComponent', () => {
    let component: ChipComponent;
    let fixture: ComponentFixture<ChipComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [ChipComponent],
            providers: [
                {
                    provide: LanguageService,
                    useClass: LanguageServiceMock
                },
                provideZonelessChangeDetection()
            ]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(ChipComponent);
        component = fixture.componentInstance;
        component.technology = 'Angular';
        fixture.detectChanges();
    });

    it('should create ChipComponent', () => {
        expect(component).toBeTruthy();
    });
});
