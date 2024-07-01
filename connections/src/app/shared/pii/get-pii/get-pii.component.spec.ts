import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { GetPiiComponent } from './get-pii.component';

describe('GetPiiComponent', () => {
  let component: GetPiiComponent;
  let fixture: ComponentFixture<GetPiiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [ GetPiiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetPiiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
