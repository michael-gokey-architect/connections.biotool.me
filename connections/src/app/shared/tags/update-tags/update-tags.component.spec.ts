import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { UpdateTagsComponent } from './update-tags.component';

describe('UpdateTagsComponent', () => {
  let component: UpdateTagsComponent;
  let fixture: ComponentFixture<UpdateTagsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [ UpdateTagsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateTagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
