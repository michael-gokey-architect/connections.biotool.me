import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UpdateOrganizationComponent } from './update-organization.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('UpdateOrganizationComponent', () => {
  let component: UpdateOrganizationComponent;
  let fixture: ComponentFixture<UpdateOrganizationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [ UpdateOrganizationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateOrganizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
