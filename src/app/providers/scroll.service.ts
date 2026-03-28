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
        const clientHeight = event.target.clientHeight;
        const scrollTop = event.target.scrollTop;
        const scrollHeight = event.target.scrollHeight;
        let position = 0;

        if (scrollTop < clientHeight) {
            position = Math.floor((scrollTop * 100) / scrollHeight);
        } else {
            position = Math.floor(((clientHeight + scrollTop) * 100) / scrollHeight);
        }
        this.scrollPosition.next(position);
    }
}
