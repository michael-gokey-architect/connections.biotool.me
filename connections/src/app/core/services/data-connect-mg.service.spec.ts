import { TestBed } from '@angular/core/testing';

import { DataConnectMgService } from './data-connect-mg.service';

describe('DataConnectMgService', () => {
  let service: DataConnectMgService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataConnectMgService);
  });

  it('should be created, DataConnectMgService', () => {
    expect(service).toBeTruthy();
  });
});
