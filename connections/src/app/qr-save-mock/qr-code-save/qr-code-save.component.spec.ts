import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QrCodeSaveComponent } from './qr-code-save.component';

describe('QrCodeSaveComponent', () => {
  let component: QrCodeSaveComponent;
  let fixture: ComponentFixture<QrCodeSaveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QrCodeSaveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QrCodeSaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
