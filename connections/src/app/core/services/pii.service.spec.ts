import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { PiiService } from './pii.service';

describe('PiiService', () => {
  let service: PiiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(PiiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
