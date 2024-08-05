import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QrUserProfileComponent } from './qr-user-profile.component';

describe('QrUserProfileComponent', () => {
  let component: QrUserProfileComponent;
  let fixture: ComponentFixture<QrUserProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QrUserProfileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QrUserProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
