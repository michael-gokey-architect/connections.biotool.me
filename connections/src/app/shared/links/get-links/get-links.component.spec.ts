import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { GetLinksComponent } from './get-links.component';

describe('GetLinksComponent', () => {
  let component: GetLinksComponent;
  let fixture: ComponentFixture<GetLinksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [ GetLinksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
