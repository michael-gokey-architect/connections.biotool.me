import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JourneyLandingComponent } from './journey-landing.component';

describe('JourneyLandingComponent', () => {
  let component: JourneyLandingComponent;
  let fixture: ComponentFixture<JourneyLandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JourneyLandingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JourneyLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
