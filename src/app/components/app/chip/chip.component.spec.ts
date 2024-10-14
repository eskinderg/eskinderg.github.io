import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChipComponent } from './chip.component';
import { LanguageService } from 'src/app/providers/language.service';
import { LanguageServiceMock } from 'src/app/language/language.mock';

describe('ChipComponent', () => {
    let component: ChipComponent;
    let fixture: ComponentFixture<ChipComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [ChipComponent],
            providers: [
                {
                    provide: LanguageService,
                    useClass: LanguageServiceMock
                }
            ]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(ChipComponent);
        component = fixture.componentInstance;
        component.technology = 'Angular';
        fixture.detectChanges();
    });

    it('should create ChipComponent', () => {
        expect(component).toBeTruthy();
    });
});
