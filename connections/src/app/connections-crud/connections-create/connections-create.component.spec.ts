import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnectionsCreateComponent } from './connections-create.component';

describe('ConnectionsCreateComponent', () => {
  let component: ConnectionsCreateComponent;
  let fixture: ComponentFixture<ConnectionsCreateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConnectionsCreateComponent]
    });
    fixture = TestBed.createComponent(ConnectionsCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
