import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestLandingComponent } from './quest-landing.component';

describe('QuestLandingComponent', () => {
  let component: QuestLandingComponent;
  let fixture: ComponentFixture<QuestLandingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuestLandingComponent]
    });
    fixture = TestBed.createComponent(QuestLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
