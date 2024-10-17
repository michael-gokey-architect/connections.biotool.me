import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestRewardLandingComponent } from './quest-reward-landing.component';

describe('QuestRewardLandingComponent', () => {
  let component: QuestRewardLandingComponent;
  let fixture: ComponentFixture<QuestRewardLandingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuestRewardLandingComponent]
    });
    fixture = TestBed.createComponent(QuestRewardLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
