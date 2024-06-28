import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DeleteOrganizationComponent } from './delete-organization.component';

describe('DeleteOrganizationComponent', () => {
  let component: DeleteOrganizationComponent;
  let fixture: ComponentFixture<DeleteOrganizationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [ DeleteOrganizationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteOrganizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
