import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LanguageService } from 'src/app/providers/language.service';
import { ThemeService } from 'src/app/providers/theme.service';

import { IntroSectionComponent } from './intro.component';
import { AppModule } from 'src/app/app.module';

describe('IntroSectionComponent', () => {
  let component: IntroSectionComponent;
  let fixture: ComponentFixture<IntroSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IntroSectionComponent],
      providers: [LanguageService, ThemeService],
      imports: [HttpClientModule, AppModule]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IntroSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
