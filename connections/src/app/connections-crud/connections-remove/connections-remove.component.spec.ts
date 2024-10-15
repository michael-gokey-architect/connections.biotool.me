import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnectionsRemoveComponent } from './connections-remove.component';

describe('ConnectionsRemoveComponent', () => {
  let component: ConnectionsRemoveComponent;
  let fixture: ComponentFixture<ConnectionsRemoveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConnectionsRemoveComponent]
    });
    fixture = TestBed.createComponent(ConnectionsRemoveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
