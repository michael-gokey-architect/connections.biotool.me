import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreateOrganizationComponent } from './create-organization.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('CreateOrganizationComponent', () => {
  let component: CreateOrganizationComponent;
  let fixture: ComponentFixture<CreateOrganizationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [ CreateOrganizationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateOrganizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
