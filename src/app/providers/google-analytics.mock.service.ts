import { Injectable } from '@angular/core';

@Injectable()
export class GoogleAnalyticsServiceMock {
    /* eslint-disable @typescript-eslint/no-unused-vars */
    public eventEmitter(
        eventName: string,
        eventCategory: string,
        eventAction: string,
        eventLabel: string = null,
        eventValue: number = null
    ) {}
}
