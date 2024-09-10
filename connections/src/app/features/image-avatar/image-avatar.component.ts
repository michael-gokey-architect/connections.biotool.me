import { Component } from '@angular/core';
import { ImageCropperComponent } from '../image-cropper/image-cropper.component';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-image-avatar',
  templateUrl: './image-avatar.component.html',
  styleUrls: ['./image-avatar.component.css']
})
export class ImageAvatarComponent {
  file: string = '';
  fileArray = [];
  fileIdFlag = false;
  avatarId!: number;

  constructor(private _dialog: MatDialog, private httpClient: HttpClient
  ) {
    // shift this to ngOninit
    this.getAvatar(63).subscribe({
      next: response => {
        this.file = `data:image/png;base64,${response.picture}`;
        console.log("file from backend", this.file)
      }
    })
  }

  // sample api call need to add these to services
  // fetch avatar through id
  getAvatarId() {
    this.fileIdFlag = true;
    this.getAvatar(this.avatarId).subscribe({
      next: response => {
        this.file = `data:image/png;base64,${response.picture}`;
        console.log("file from backend", this.file)
      }
    })
  }

  // sample api call need to add these to services
  // get all avatars
  getAllAvatars() {
    this.getAvatars().subscribe({
      next: response => {
        this.fileArray = response.map((el: { picture: any; }) => `data:image/png;base64,${el.picture}`)
        console.log("file from backend", this.fileArray)
      }
    })
  }

  // onFileChange(event: any) {
  //   const files = event.target.files as FileList;

  //   if (files.length > 0) {
  //     const _file = URL.createObjectURL(files[0]);
  //     this.file = _file;
  //     this.resetInput();
  //   }

  // }
  resetInput() {
    const input = document.getElementById('avatar-input-file') as HTMLInputElement;
    if (input) {
      input.value = "";
    }
  }

  onFileChange(event: any) {
    const files = event.target.files as FileList;

    if (files.length > 0) {
      // converted to blob so that i can load and get cropped in cropper
      const _file = URL.createObjectURL(files[0]);
      this.resetInput();
      this.openAvatarEditor(_file)
        .subscribe(
          (result) => {
            if (result) {
              this.file = result;
              // after cropper image is in base64
              console.log("Image from cropper", this.file);
            }
          }
        )
    }

  }

  // mat dialog gets cropper component height can be adjusted here
  openAvatarEditor(image: string): Observable<any> {
    const dialogRef = this._dialog?.open(ImageCropperComponent, {
      maxWidth: '80vw',
      maxHeight: '80vh',
      data: image,
    });

    return dialogRef.afterClosed();
  }

  getAvatar(id: number): Observable<any> {

    return this.httpClient.get('http://api.mozli.com/Picture/GetAvatar/' + id)

  }

  getAvatars(): Observable<any> {

    return this.httpClient.get('http://api.mozli.com/Picture/GetAvatars/')

  }
}

// TODO: SID
