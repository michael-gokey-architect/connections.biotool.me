import { Component } from '@angular/core';
import { ImageCropperComponent } from '../image-cropper/image-cropper.component';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-image-avatar',
  templateUrl: './image-avatar.component.html',
  styleUrls: ['./image-avatar.component.css']
})
export class ImageAvatarComponent {
  file: string = '';

  constructor(private _dialog: MatDialog){}

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
      const _file = URL.createObjectURL(files[0]);
      this.resetInput();
      this.openAvatarEditor(_file)
       .subscribe(
         (result) => {
           if(result){
             this.file = result;
           }
         }
       )
    }

  }

 openAvatarEditor(image: string): Observable<any> {
    const dialogRef = this._dialog?.open(ImageCropperComponent, {
      maxWidth: '80vw',
      maxHeight: '80vh',
      data: image,
    });

    return dialogRef.afterClosed();
  }
}

// TODO: SID
