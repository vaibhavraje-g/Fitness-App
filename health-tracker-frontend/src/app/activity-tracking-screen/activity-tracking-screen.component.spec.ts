import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityTrackingScreenComponent } from './activity-tracking-screen.component';

describe('ActivityTrackingScreenComponent', () => {
  let component: ActivityTrackingScreenComponent;
  let fixture: ComponentFixture<ActivityTrackingScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActivityTrackingScreenComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ActivityTrackingScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
