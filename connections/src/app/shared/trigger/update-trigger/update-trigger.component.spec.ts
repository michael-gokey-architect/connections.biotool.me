import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateTriggerComponent } from './update-trigger.component';

describe('UpdateTriggerComponent', () => {
  let component: UpdateTriggerComponent;
  let fixture: ComponentFixture<UpdateTriggerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateTriggerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateTriggerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
