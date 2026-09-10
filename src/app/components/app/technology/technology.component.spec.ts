import { ComponentFixture, TestBed } from '@angular/core/testing';
import { beforeEach, describe, expect, it } from 'vitest';

import { TechnologyComponent } from './technology.component';
import { provideZonelessChangeDetection } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';

describe('TechnologyComponent', () => {
    let component: TechnologyComponent;
    let fixture: ComponentFixture<TechnologyComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [TechnologyComponent],
            providers: [provideZonelessChangeDetection(), provideHttpClient()]
        }).compileComponents();

        fixture = TestBed.createComponent(TechnologyComponent);
        component = fixture.componentInstance;
        component.item = {
            title: 'Angular',
            img: 'bg-angular'
        };
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeDefined();
    });
});
