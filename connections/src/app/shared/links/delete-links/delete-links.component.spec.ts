import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DeleteLinksComponent } from './delete-links.component';

describe('DeleteLinksComponent', () => {
  let component: DeleteLinksComponent;
  let fixture: ComponentFixture<DeleteLinksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [ DeleteLinksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
