import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAvatarUploaderComponent } from './user-avatar-uploader.component';

describe('UserAvatarUploaderComponent', () => {
  let component: UserAvatarUploaderComponent;
  let fixture: ComponentFixture<UserAvatarUploaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserAvatarUploaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserAvatarUploaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
