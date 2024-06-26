import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { GetTagsComponent } from './get-tags.component';

describe('GetTagsComponent', () => {
  let component: GetTagsComponent;
  let fixture: ComponentFixture<GetTagsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [ GetTagsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetTagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
