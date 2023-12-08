import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LanguageService } from 'src/app/providers/language.service';
import { ThemeService } from 'src/app/providers/theme.service';
import { AccomplishmentsSectionComponent } from './accomplishments.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppModule } from 'src/app/app.module';

describe('AccomplishmentsSectionComponent', () => {
  let component: AccomplishmentsSectionComponent;
  let fixture: ComponentFixture<AccomplishmentsSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AccomplishmentsSectionComponent],
      providers: [LanguageService, ThemeService],
      imports: [HttpClientModule, AppModule, BrowserAnimationsModule],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccomplishmentsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
