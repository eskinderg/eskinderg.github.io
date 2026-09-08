import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LanguageService } from '../../../providers/language.service';
import { provideHttpClient, withInterceptorsFromDi, withXhr } from '@angular/common/http';
import { DebugElement, provideZonelessChangeDetection } from '@angular/core';
import { beforeEach, describe, expect, it } from 'vitest';
import { LanguageServiceMock } from '../../../language/language.mock';
import { OutlineComponent } from './outline';
import { ThemeService } from '../../../theme/theme.service';
import { By } from '@angular/platform-browser';

describe('ListComponent', () => {
    let component: OutlineComponent;
    let fixture: ComponentFixture<OutlineComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [OutlineComponent],
            providers: [
                {
                    provide: LanguageService,
                    useClass: LanguageServiceMock
                },
                ThemeService,
                provideHttpClient(withXhr(), withInterceptorsFromDi()),
                provideZonelessChangeDetection()
            ]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(OutlineComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('click', () => {
        let menuItem: DebugElement;
        menuItem = fixture.debugElement.query(By.css('svg'));
        // menuItem.triggerEventHandler('click', null);
        // console.log(menuItem.children);
    });
});
