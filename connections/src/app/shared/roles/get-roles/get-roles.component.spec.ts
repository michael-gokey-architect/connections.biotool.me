import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { GetRolesComponent } from './get-roles.component';

describe('GetRolesComponent', () => {
  let component: GetRolesComponent;
  let fixture: ComponentFixture<GetRolesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [ GetRolesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetRolesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
