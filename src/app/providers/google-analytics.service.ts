import { Service } from '@angular/core';

// @typescript-eslint/no-unsafe-function-type
declare let gtag: Function;

@Service()
export class GoogleAnalyticsService {
    public eventEmitter(
        eventName: string,
        eventCategory: string,
        eventAction: string,
        eventLabel: string = null,
        eventValue: number = null
    ) {
        gtag('event', eventName, {
            eventCategory: eventCategory,
            eventLabel: eventLabel,
            eventAction: eventAction,
            eventValue: eventValue
        });
    }
}
