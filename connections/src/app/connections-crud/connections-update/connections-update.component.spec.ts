import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnectionsUpdateComponent } from './connections-update.component';

describe('ConnectionsUpdateComponent', () => {
  let component: ConnectionsUpdateComponent;
  let fixture: ComponentFixture<ConnectionsUpdateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConnectionsUpdateComponent]
    });
    fixture = TestBed.createComponent(ConnectionsUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
