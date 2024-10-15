import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnectionsGetComponent } from './connections-get.component';

describe('ConnectionsGetComponent', () => {
  let component: ConnectionsGetComponent;
  let fixture: ComponentFixture<ConnectionsGetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConnectionsGetComponent]
    });
    fixture = TestBed.createComponent(ConnectionsGetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
