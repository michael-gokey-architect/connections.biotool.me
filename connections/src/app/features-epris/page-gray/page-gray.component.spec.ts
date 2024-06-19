import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageGrayComponent } from './page-gray.component';

describe('PageGrayComponent', () => {
  let component: PageGrayComponent;
  let fixture: ComponentFixture<PageGrayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageGrayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageGrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
