import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CreateLinksComponent } from './create-links.component';

describe('CreateLinksComponent', () => {
  let component: CreateLinksComponent;
  let fixture: ComponentFixture<CreateLinksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [ CreateLinksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
