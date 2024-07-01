import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetTriggerComponent } from './get-trigger.component';

describe('GetTriggerComponent', () => {
  let component: GetTriggerComponent;
  let fixture: ComponentFixture<GetTriggerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetTriggerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetTriggerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
