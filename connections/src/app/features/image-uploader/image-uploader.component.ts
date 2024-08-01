import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-image-uploader',
  templateUrl: './image-uploader.component.html',
  styleUrls: ['./image-uploader.component.css']
})
export class ImageUploaderComponent implements OnInit {
  selectedFiles?: FileList;
  currentFile?: File;
  message = '';
  preview = '';
  strImage = '';

  imageInfos?: Observable<any>;

  constructor(){}

  ngOnInit(): void {
    //this will run a get from the api
  }

  selectFile(event: any): void {
    this.message = '';
    this.preview = '';
    this.selectedFiles = event.target.files;

    if(this.selectedFiles) {
      const file: File | null = this.selectedFiles.item(0);

      if (file) {
        this.preview = '';
        this.currentFile = file;

        const reader = new FileReader();

        reader.onload = (e: any) => {
          this.preview = e.target.result;
        
          //Michael this is removing the header from the image file so we can JUST have base64. This header needs to go back in to show the image
          this.strImage = e.target.result.replace(/^data:image\/[a-z]+;base64,/, "");
          
          console.log(this.strImage);
        };
        reader.readAsDataURL(this.currentFile);
      }
    }
  }



  upload(): void {
    if(this.selectedFiles){
      const file: File | null = this.selectedFiles.item(0);

      if(file){
        this.currentFile = file;
        console.log('clicked!')

        //This is where we will call the api to do the actual upload :)
      }
    }
  }

  
}
