import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnectionsCrudLandingComponent } from './connections-crud-landing.component';

describe('ConnectionsCrudLandingComponent', () => {
  let component: ConnectionsCrudLandingComponent;
  let fixture: ComponentFixture<ConnectionsCrudLandingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConnectionsCrudLandingComponent]
    });
    fixture = TestBed.createComponent(ConnectionsCrudLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
