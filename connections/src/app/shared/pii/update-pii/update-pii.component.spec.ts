import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { UpdatePiiComponent } from './update-pii.component';

describe('UpdatePiiComponent', () => {
  let component: UpdatePiiComponent;
  let fixture: ComponentFixture<UpdatePiiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [ UpdatePiiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdatePiiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
