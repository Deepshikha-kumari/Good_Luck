import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeddingVenueComponent } from './wedding-venue.component';

describe('WeddingVenueComponent', () => {
  let component: WeddingVenueComponent;
  let fixture: ComponentFixture<WeddingVenueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeddingVenueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeddingVenueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
