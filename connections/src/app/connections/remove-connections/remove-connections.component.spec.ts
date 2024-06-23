import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveConnectionsComponent } from './remove-connections.component';

describe('RemoveConnectionsComponent', () => {
  let component: RemoveConnectionsComponent;
  let fixture: ComponentFixture<RemoveConnectionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemoveConnectionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RemoveConnectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
