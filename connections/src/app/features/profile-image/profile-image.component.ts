import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { ProfileImageEditorComponent } from '../profile-image-editor/profile-image-editor.component';
import { ProfileImageService } from 'src/app/core/services/profile-image.service';

@Component({
  selector: 'app-profile-image',
  templateUrl: './profile-image.component.html',
  styleUrls: ['./profile-image.component.css']
})
export class ProfileImageComponent {
  file: string = '';

  constructor(private _dialog: MatDialog, private profileImage: ProfileImageService) { }

  ngOnInit(){
    //need to talk to dennis about fetch profile
    //right now temp we have a workaround

    this.profileImage.getProfileImage(148).subscribe({
      next: response=>{
        console.log(response);
        const lastIndex = response.profile_pics.length - 1;
        const reponsePicture = response.profile_pics[lastIndex].picture;
        this.file = `data:image/png;base64,${reponsePicture}`;
      },
      error: error=>console.log(error)
    });
  }

  resetInput() {
    const input = document.getElementById('image-input-file') as HTMLInputElement;
    if (input) {
      input.value = "";
    }
  }

  onFileChange(event: any) {
    const files = event.target.files as FileList;

    if (files.length > 0) {
      const _file = URL.createObjectURL(files[0]);
      this.resetInput();
      this.openImageEditor(_file)
        .subscribe(
          (result) => {
            if (result) {
              this.file = result;
            }
          }
        )
    }

  }

  openImageEditor(image: string): Observable<any> {
    const dialogRef = this._dialog?.open(ProfileImageEditorComponent, {
      maxWidth: '80vw',
      maxHeight: '80vh',
      data: image,
    });

    return dialogRef.afterClosed();
  }

}
