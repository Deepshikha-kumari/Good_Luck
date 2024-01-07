import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventPlannerGuideComponent } from './event-planner-guide.component';

describe('EventPlannerGuideComponent', () => {
  let component: EventPlannerGuideComponent;
  let fixture: ComponentFixture<EventPlannerGuideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventPlannerGuideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventPlannerGuideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
