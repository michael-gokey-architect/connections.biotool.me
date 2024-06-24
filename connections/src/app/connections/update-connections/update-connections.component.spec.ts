import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateConnectionsComponent } from './update-connections.component';

describe('UpdateConnectionsComponent', () => {
  let component: UpdateConnectionsComponent;
  let fixture: ComponentFixture<UpdateConnectionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateConnectionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateConnectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
