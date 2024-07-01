import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GetOrganizationComponent } from './get-organization.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('GetOrganizationComponent', () => {
  let component: GetOrganizationComponent;
  let fixture: ComponentFixture<GetOrganizationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [ GetOrganizationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetOrganizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
