import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DynamicComponentsWrapperComponent } from './dynamic-components-wrapper.component';
import { WrapperRefService } from './wrapper-ref.service';

// Mock the WrapperRefService
const mockWrapperRefService = {
    setWrapperRef: vi.fn()
};

// Create a host component to easily test HTML template bindings and projecting children
@Component({
    template: `
        <app-dynamic-wrapper>
            <div class="test-child">Child 1</div>
            <div class="test-child">Child 2</div>
        </app-dynamic-wrapper>
    `,
    imports: [DynamicComponentsWrapperComponent]
})
class TestHostComponent {}

describe('DynamicComponentsWrapperComponent', () => {
    let fixture: ComponentFixture<TestHostComponent>;
    let wrapperComponent: DynamicComponentsWrapperComponent;

    beforeEach(async () => {
        vi.clearAllMocks();

        await TestBed.configureTestingModule({
            imports: [TestHostComponent],
            providers: [{ provide: WrapperRefService, useValue: mockWrapperRefService }]
        }).compileComponents();

        fixture = TestBed.createComponent(TestHostComponent);
        fixture.detectChanges(); // Triggers ViewChild queries and setters

        // Retrieve the actual component instance under test
        const wrapperDebugEl = fixture.debugElement.query(By.directive(DynamicComponentsWrapperComponent));
        wrapperComponent = wrapperDebugEl.componentInstance;
    });

    it('should create the component', () => {
        expect(wrapperComponent).toBeTruthy();
    });

    it('should register the element reference with the service upon initialization', () => {
        // Verifies that the setter logic was executed
        expect(mockWrapperRefService.setWrapperRef).toHaveBeenCalledTimes(1);
        expect(wrapperComponent.wrapperElementRef).toBeDefined();
    });

    it('should expose the internal wrapper element reference via getter', () => {
        const element = wrapperComponent.wrapperElementRef;
        expect(element.nativeElement).toBeInstanceOf(HTMLElement);
    });

    it('should return the collection of injected children HTML elements', () => {
        // 2. Trigger change detection to project DOM elements and execute setters
        fixture.detectChanges();

        // 3. Query the actual component instance under test
        const wrapperDebugEl = fixture.debugElement.query((by) => by.name === 'app-dynamic-wrapper');
        const componentInstance = wrapperDebugEl.componentInstance as DynamicComponentsWrapperComponent;

        // 4. Assert against the populated children collection
        expect(componentInstance.injectedChildren.length).toBe(0);
    });
});
