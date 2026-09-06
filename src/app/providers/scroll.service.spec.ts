import { provideHttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { ThemeService } from '../theme/theme.service';

import { GoogleAnalyticsService } from '../providers/google-analytics.service';
import { provideZonelessChangeDetection } from '@angular/core';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { ScrollService } from './scroll.service';

describe('Scroll Service', () => {
    let service: ScrollService;
    let httpController: HttpTestingController;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            providers: [
                GoogleAnalyticsService,
                ThemeService,
                provideZonelessChangeDetection(),
                provideHttpClient(),
                provideHttpClientTesting()
            ]
        }).compileComponents();

        service = TestBed.inject(ScrollService);
        httpController = TestBed.inject(HttpTestingController);
    });

    afterEach(() => {
        httpController.verify();
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('should work', () => {
        service.updateScroll({ target: HTMLElement });
    });
});
