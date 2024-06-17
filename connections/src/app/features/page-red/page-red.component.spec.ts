import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageRedComponent } from './page-red.component';

describe('PageRedComponent', () => {
  let component: PageRedComponent;
  let fixture: ComponentFixture<PageRedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageRedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageRedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
