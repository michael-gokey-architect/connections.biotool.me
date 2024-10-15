import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketsGetComponent } from './tickets-get.component';

describe('TicketsGetComponent', () => {
  let component: TicketsGetComponent;
  let fixture: ComponentFixture<TicketsGetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TicketsGetComponent]
    });
    fixture = TestBed.createComponent(TicketsGetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
