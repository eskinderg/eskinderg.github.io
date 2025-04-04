/* eslint-disable @typescript-eslint/ban-types */
import { Injectable } from '@angular/core';

declare let gtag: Function;

@Injectable({
    providedIn: 'root'
})
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
