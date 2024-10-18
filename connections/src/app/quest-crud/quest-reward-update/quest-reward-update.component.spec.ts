import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestRewardUpdateComponent } from './quest-reward-update.component';

describe('QuestRewardUpdateComponent', () => {
  let component: QuestRewardUpdateComponent;
  let fixture: ComponentFixture<QuestRewardUpdateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuestRewardUpdateComponent]
    });
    fixture = TestBed.createComponent(QuestRewardUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
