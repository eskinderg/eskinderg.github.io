import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ScrollService {
    private scrollSubject = new BehaviorSubject<any>(0);
    scrollPosition = new BehaviorSubject<any>(0);
    scroll$ = this.scrollSubject.asObservable();

    updateScroll(event: any) {
        this.scrollSubject.next(event);
        this.calcPosition(event);
    }

    private calcPosition(event: any) {
        const element = event.target;
        const scrollTop = element.scrollTop;
        const maxScroll = element.scrollHeight - element.clientHeight;
        const scrollPercent = maxScroll > 0 ? (scrollTop / maxScroll) * 100 : 0;
        this.scrollPosition.next(scrollPercent);
    }
}
