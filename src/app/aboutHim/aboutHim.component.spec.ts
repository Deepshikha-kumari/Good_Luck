import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutHimComponent } from './aboutHim.component';

describe('AboutHimComponent', () => {
  let component: AboutHimComponent;
  let fixture: ComponentFixture<AboutHimComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutHimComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutHimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
