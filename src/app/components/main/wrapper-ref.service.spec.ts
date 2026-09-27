import { TestBed } from '@angular/core/testing';
import { ElementRef, provideZonelessChangeDetection } from '@angular/core';
import { WrapperRefService } from './wrapper-ref.service';

describe('Language Service', () => {
    let service: WrapperRefService;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            providers: [WrapperRefService, provideZonelessChangeDetection()]
        }).compileComponents();

        service = TestBed.inject(WrapperRefService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('should initially return null for getChildren', () => {
        expect(service.getChildren()).toBeNull();
    });

    it('should set the wrapper element reference', () => {
        const element = document.createElement('div');
        const elementRef = new ElementRef(element);

        service.setWrapperRef(elementRef);

        expect(service.wrapperElementRef).toBe(elementRef);
    });

    it('should return HTMLCollection of children when ref is set', () => {
        // 1. Create a mock DOM structure
        const parentElement = document.createElement('div');
        const child1 = document.createElement('p');
        const child2 = document.createElement('span');
        parentElement.appendChild(child1);
        parentElement.appendChild(child2);

        const elementRef = new ElementRef(parentElement);

        // 2. Act
        service.setWrapperRef(elementRef);
        const children = service.getChildren();

        // 3. Assert
        expect(children).not.toBeNull();
        expect(children?.length).toBe(2);
        expect(children?.[0]).toBe(child1);
    });
});
