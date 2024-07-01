import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { OrganizationService } from './organization.service';

describe('OrganizationService', () => {
  let service: OrganizationService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [OrganizationService],
    });
    service = TestBed.inject(OrganizationService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created, OrganizationService', () => {
    expect(service).toBeTruthy();
  });

  //mock jest test case
  //needs to be changed with real example
  it('should fetch organizations', () => {
    const dummyOrganizations = [
      { id: 1, name: 'Org1' },
      { id: 2, name: 'Org2' },
    ];

    service.getOrganizations().subscribe(orgs => {
      expect(orgs.length).toBe(2);
      expect(orgs).toEqual(dummyOrganizations);
    });

    const req = httpMock.expectOne('http://api.mozli.com/Biodata/GetOrganizations/');
    expect(req.request.method).toBe('GET');
    req.flush(dummyOrganizations);
  });
});
