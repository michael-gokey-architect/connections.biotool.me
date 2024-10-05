import { TestBed } from '@angular/core/testing';

import { QuestRewardService } from './quest-reward.service';

describe('QuestRewardService', () => {
  let service: QuestRewardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuestRewardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
