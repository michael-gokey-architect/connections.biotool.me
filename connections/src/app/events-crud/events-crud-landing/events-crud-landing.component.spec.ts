import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsCrudLandingComponent } from './events-crud-landing.component';

describe('EventsCrudLandingComponent', () => {
  let component: EventsCrudLandingComponent;
  let fixture: ComponentFixture<EventsCrudLandingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventsCrudLandingComponent]
    });
    fixture = TestBed.createComponent(EventsCrudLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
