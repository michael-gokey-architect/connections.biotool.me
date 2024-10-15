import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketsCrudLandingComponent } from './tickets-crud-landing.component';

describe('TicketsCrudLandingComponent', () => {
  let component: TicketsCrudLandingComponent;
  let fixture: ComponentFixture<TicketsCrudLandingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TicketsCrudLandingComponent]
    });
    fixture = TestBed.createComponent(TicketsCrudLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
