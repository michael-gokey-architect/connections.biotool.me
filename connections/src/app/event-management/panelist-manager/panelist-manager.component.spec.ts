import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelistManagerComponent } from './panelist-manager.component';

describe('PanelistManagerComponent', () => {
  let component: PanelistManagerComponent;
  let fixture: ComponentFixture<PanelistManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PanelistManagerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PanelistManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
