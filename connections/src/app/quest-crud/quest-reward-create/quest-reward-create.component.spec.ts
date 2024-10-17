import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestRewardCreateComponent } from './quest-reward-create.component';

describe('QuestRewardCreateComponent', () => {
  let component: QuestRewardCreateComponent;
  let fixture: ComponentFixture<QuestRewardCreateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuestRewardCreateComponent]
    });
    fixture = TestBed.createComponent(QuestRewardCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
