import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DomSanitizer } from '@angular/platform-browser';
import Cropper from 'cropperjs';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-image-cropper',
  templateUrl: './image-cropper.component.html',
  styleUrls: ['./image-cropper.component.css']
})
export class ImageCropperComponent {
  sanitizedUrl: any;
  cropper!: Cropper;

  constructor(
    public dialogRef: MatDialogRef<ImageCropperComponent>,
    @Inject(MAT_DIALOG_DATA) public image: string,
    private sanitizer: DomSanitizer,
    private httpClient: HttpClient
  ) {}

  ngOnInit(): void {
    this.sanitizedUrl = this.sanitizer.bypassSecurityTrustUrl(this.image);
  }

  ngAfterViewInit() {
    this.initCropper();
  }

  initCropper() {
    const image = document.getElementById('image') as HTMLImageElement;
    this.cropper = new Cropper(image, {
      aspectRatio: 1,
      viewMode: 1,
      guides: false,
      
    });
  }

  getRoundedCanvas(sourceCanvas: any) {
    var canvas = document.createElement('canvas');
    var context: any = canvas.getContext('2d');
    var width = sourceCanvas.width;
    var height = sourceCanvas.height;

    canvas.width = width;
    canvas.height = height;
    context.imageSmoothingEnabled = true;
    context.drawImage(sourceCanvas, 0, 0, width, height);
    context.globalCompositeOperation = 'destination-in';
    context.beginPath();
    context.arc(
      width / 2,
      height / 2,
      Math.min(width, height) / 2,
      0,
      2 * Math.PI,
      true
    );
    context.fill();
    return canvas;
  }
  
//get the cropped image and closes the dialog 
//returning an url or null if no image

  crop() {
    const croppedCanvas = this.cropper.getCroppedCanvas();
    const roundedCanvas = this.getRoundedCanvas(croppedCanvas);

    let roundedImage = document.createElement('img');
    //base64 image
    console.log(roundedImage);
    if (roundedImage) {
      // need to check this with dennis 
      // need to save image as base64
      this.addAvatar(roundedCanvas.toDataURL()).subscribe({
        next: response=>console.log(response.status)
      });
      this.dialogRef.close(roundedCanvas.toDataURL());
    } else {
      return this.dialogRef.close(null);
    }
  }

// resets the cropper
  reset(){
    this.cropper.clear();
    this.cropper.crop();
  }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'image/jpeg'
    })
  }

  // sample api call need to add these to services
  // save avatar api
  addAvatar(baseImage: string):Observable<any> {

    return this.httpClient.post('http://api.mozli.com/Picture/AddAvatar/' + baseImage, this.httpOptions)

  }
}

// TODO: SID
