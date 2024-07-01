import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteConnectionsComponent } from './delete-connections.component';

describe('DeleteConnectionsComponent', () => {
  let component: DeleteConnectionsComponent;
  let fixture: ComponentFixture<DeleteConnectionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteConnectionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteConnectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
