import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoalSettingScreenComponent } from './goal-setting-screen.component';

describe('GoalSettingScreenComponent', () => {
  let component: GoalSettingScreenComponent;
  let fixture: ComponentFixture<GoalSettingScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GoalSettingScreenComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GoalSettingScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
