import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteMapComponent } from './SiteMap.component';

describe('TermsSevicesComponent', () => {
  let component: SiteMapComponent;
  let fixture: ComponentFixture<SiteMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SiteMapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SiteMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
