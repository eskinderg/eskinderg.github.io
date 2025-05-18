import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToggleComponent } from './toggle.component';
import { ThemeService } from 'src/app/theme/theme.service';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { provideExperimentalZonelessChangeDetection } from '@angular/core';

describe('ToggleComponent', () => {
    let component: ToggleComponent;
    let fixture: ComponentFixture<ToggleComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [ToggleComponent],
            providers: [
                ThemeService,
                provideExperimentalZonelessChangeDetection(),
                provideHttpClient(withInterceptorsFromDi())
            ]
        }).compileComponents();

        fixture = TestBed.createComponent(ToggleComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        component.toggleOpen();
        component.setMode('system');
        expect(component).toBeTruthy();
    });
});
