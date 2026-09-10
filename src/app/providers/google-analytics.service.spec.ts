import { beforeEach, describe, expect, it, vi } from 'vitest';
import { GoogleAnalyticsService } from './google-analytics.service'; // Adjust path as needed

describe('GoogleAnalyticsService', () => {
    let service: GoogleAnalyticsService;

    beforeEach(() => {
        // 1. Initialize the service before each test
        service = new GoogleAnalyticsService();

        // 2. Define and mock the global gtag function
        (globalThis as any).gtag = vi.fn();
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('should call gtag with the correct arguments', () => {
        // Act
        service.eventEmitter('login', 'engagement', 'click', 'submit_btn', 1);

        // Assert
        expect(globalThis.gtag).toHaveBeenCalledWith('event', 'login', {
            eventCategory: 'engagement',
            eventLabel: 'submit_btn',
            eventAction: 'click',
            eventValue: 1
        });
    });

    it('should handle optional parameters with default null values', () => {
        // Act
        service.eventEmitter('page_view', 'navigation', 'route_change');

        // Assert
        expect(globalThis.gtag).toHaveBeenCalledWith('event', 'page_view', {
            eventCategory: 'navigation',
            eventLabel: null,
            eventAction: 'route_change',
            eventValue: null
        });
    });
});
