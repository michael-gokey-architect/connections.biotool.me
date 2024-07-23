import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnectionLandingComponent } from './connection-landing.component';

describe('ConnectionLandingComponent', () => {
  let component: ConnectionLandingComponent;
  let fixture: ComponentFixture<ConnectionLandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConnectionLandingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConnectionLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
