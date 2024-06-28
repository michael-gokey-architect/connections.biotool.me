import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DeleteTagsComponent } from './delete-tags.component';

describe('DeleteTagsComponent', () => {
  let component: DeleteTagsComponent;
  let fixture: ComponentFixture<DeleteTagsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [ DeleteTagsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteTagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
