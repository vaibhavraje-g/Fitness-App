import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MealPlanningScreenComponent } from './meal-planning-screen.component';

describe('MealPlanningScreenComponent', () => {
  let component: MealPlanningScreenComponent;
  let fixture: ComponentFixture<MealPlanningScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MealPlanningScreenComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MealPlanningScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
