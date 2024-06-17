import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagePurpleComponent } from './page-purple.component';

describe('PagePurpleComponent', () => {
  let component: PagePurpleComponent;
  let fixture: ComponentFixture<PagePurpleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagePurpleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PagePurpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
