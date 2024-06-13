import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnectionCentralComponent } from './connection-central.component';

describe('ConnectionCentralComponent', () => {
  let component: ConnectionCentralComponent;
  let fixture: ComponentFixture<ConnectionCentralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConnectionCentralComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConnectionCentralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
