import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestRewardGetComponent } from './quest-reward-get.component';

describe('QuestRewardGetComponent', () => {
  let component: QuestRewardGetComponent;
  let fixture: ComponentFixture<QuestRewardGetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuestRewardGetComponent]
    });
    fixture = TestBed.createComponent(QuestRewardGetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
