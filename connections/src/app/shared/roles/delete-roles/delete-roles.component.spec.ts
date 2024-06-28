import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DeleteRolesComponent } from './delete-roles.component';

describe('DeleteRolesComponent', () => {
  let component: DeleteRolesComponent;
  let fixture: ComponentFixture<DeleteRolesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [ DeleteRolesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteRolesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
