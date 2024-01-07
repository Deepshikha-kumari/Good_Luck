import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialServicesComponent } from './special-services.component';

describe('TermsSevicesComponent', () => {
  let component: SpecialServicesComponent;
  let fixture: ComponentFixture<SpecialServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpecialServicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecialServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
