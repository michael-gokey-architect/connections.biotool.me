import { Component } from '@angular/core';

@Component({
  selector: 'app-image-avatar',
  templateUrl: './image-avatar.component.html',
  styleUrls: ['./image-avatar.component.css']
})
export class ImageAvatarComponent {
  file: string = '';

  onFileChange(event: any) {
    const files = event.target.files as FileList;

    if (files.length > 0) {
      const _file = URL.createObjectURL(files[0]);
      this.file = _file;
      this.resetInput();
    }

  }
  resetInput() {
    const input = document.getElementById('avatar-input-file') as HTMLInputElement;
    if (input) {
      input.value = "";
    }
  }
}

// TODO: SID
