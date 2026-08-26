import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RightComponent } from './right.component';
import { ThemeService } from '../../../theme/theme.service';
import { provideHttpClient, withInterceptorsFromDi, withXhr } from '@angular/common/http';
import { LanguageService } from '../../../providers/language.service';
import { LanguageServiceMock } from '../../../language/language.mock';
import { findComponent } from '../../../app.component.spec';
import { MenuComponent } from '../menu/menu.component';
import { GoogleAnalyticsService } from '../../../providers/google-analytics.service';
import { provideZonelessChangeDetection } from '@angular/core';
import { beforeEach, describe, expect, it } from 'vitest';

describe('RightComponent', () => {
    let component: RightComponent;
    let fixture: ComponentFixture<RightComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [RightComponent, MenuComponent],
            providers: [
                ThemeService,
                {
                    provide: LanguageService,
                    useClass: LanguageServiceMock
                },
                GoogleAnalyticsService,
                provideZonelessChangeDetection(),
                provideHttpClient(withXhr(), withInterceptorsFromDi())
            ]
        }).compileComponents();

        fixture = TestBed.createComponent(RightComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('Should render langselect component', () => {
        const langSelectComponent = findComponent(fixture, 'app-lang-dropdown');
        expect(langSelectComponent).toBeTruthy();
    });

    it('Should render toggle component', () => {
        const toggleComponent = findComponent(fixture, 'app-toggle');
        expect(toggleComponent).toBeTruthy();
    });

    it('Should render color picker component', () => {
        const toggleComponent = findComponent(fixture, 'app-color-picker');
        expect(toggleComponent).toBeTruthy();
    });
});
