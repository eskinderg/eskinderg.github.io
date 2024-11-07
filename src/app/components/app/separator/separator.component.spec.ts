import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SeparatorComponent } from './separator.component';
import { provideExperimentalZonelessChangeDetection } from '@angular/core';

describe('SeparatorComponent', () => {
    let component: SeparatorComponent;
    let fixture: ComponentFixture<SeparatorComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [SeparatorComponent],
            providers: [provideExperimentalZonelessChangeDetection()]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(SeparatorComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
