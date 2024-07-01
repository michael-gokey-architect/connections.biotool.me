import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CreateTagsComponent } from './create-tags.component';

describe('CreateTagsComponent', () => {
  let component: CreateTagsComponent;
  let fixture: ComponentFixture<CreateTagsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [ CreateTagsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateTagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
