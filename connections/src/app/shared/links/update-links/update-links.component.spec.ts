import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { UpdateLinksComponent } from './update-links.component';

describe('UpdateLinksComponent', () => {
  let component: UpdateLinksComponent;
  let fixture: ComponentFixture<UpdateLinksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [ UpdateLinksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
