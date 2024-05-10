import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MealAnalysisScreenComponent } from './meal-analysis-screen.component';

describe('MealAnalysisScreenComponent', () => {
  let component: MealAnalysisScreenComponent;
  let fixture: ComponentFixture<MealAnalysisScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MealAnalysisScreenComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MealAnalysisScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
