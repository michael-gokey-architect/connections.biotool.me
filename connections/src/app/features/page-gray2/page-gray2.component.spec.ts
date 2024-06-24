import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageGray2Component } from './page-gray2.component';

describe('PageGray2Component', () => {
  let component: PageGray2Component;
  let fixture: ComponentFixture<PageGray2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageGray2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageGray2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
