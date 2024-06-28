import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TriggerLandingComponent } from './trigger-landing.component';

describe('TriggerLandingComponent', () => {
  let component: TriggerLandingComponent;
  let fixture: ComponentFixture<TriggerLandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TriggerLandingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TriggerLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
