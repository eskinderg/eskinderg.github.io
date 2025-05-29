import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ScrollService {
    private scrollSubject = new BehaviorSubject<any>(0);
    scroll$ = this.scrollSubject.asObservable();

    updateScroll(event: any) {
        this.scrollSubject.next(event);
    }
}
