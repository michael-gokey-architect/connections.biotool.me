import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Links } from 'src/app/core/models/links';
import { InitialsPipe } from 'src/app/core/pipes/initials.pipe';
import { LinksService } from 'src/app/core/services/links.service';
import { PiiService } from 'src/app/core/services/pii.service';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-profile-loader',
  templateUrl: './profile-loader.component.html',
  styleUrls: ['./profile-loader.component.css'],
  providers: [InitialsPipe]
})
export class ProfileLoaderComponent {
  inputForm: FormGroup;
  bio: string;
  links: Links[] = [];
  linksS: Links[] = []
  linksW: Links[] = [];
  linksSAdjusted: number;
  linksWAdjusted: number;
  profileInitials: string = '';
  firstName: string;
  lastName: string;
  imgSrc: string = '';

  constructor(private fb: FormBuilder, private piiService: PiiService, private linkService: LinksService, private initialPipe: InitialsPipe, private userService: UserService){
    this.inputForm = this.fb.group({
      userId: ['', Validators.required]
    });
    this.bio = '';
    this.linksSAdjusted = 0;
    this.linksWAdjusted = 0;
    this.firstName = '';
    this.lastName = '';
  }

  onSubmit(event: Event): void {
    //keep validation check for form
    // if (this.piiform.valid) {
    event.preventDefault();

    console.log("User Id Value", this.inputForm.value);
    const id = this.inputForm.value.userId;
    this.piiService.getUserPii(id).subscribe({
      next: response => {
        this.bio = response.biography;
        console.log('Bio get successfully:', this.bio);
        this.inputForm.reset();
      },
      error: error => {
        console.error('Error:', error);
      }
    })
    this.linkService.getLink(id).subscribe({
      next: response => {
        this.links = response;
        console.log('Links get successfully:', this.links);
        this.sortLinks();
        this.inputForm.reset();
      },
      error: error => {
        console.error('Error:', error);
      }
    })
    this.userService.getUserProfile(id).subscribe({
      next: response => {
        this.firstName = response.first_name;
        this.lastName = response.last_name
        const givenName = this.firstName + " " + this.lastName;
        this.profileInitials = this.initialPipe.transform(givenName);
        console.log(givenName);
      }
    })

    
  }

  sortLinks(): void{
      this.linksS = this.links.filter((link) => link.link_type == 'S');
      this.linksW = this.links.filter((link) => link.link_type == 'W');
      this.linksSAdjusted = this.linksS.length - 4;
      this.linksWAdjusted = this.linksW.length - 3;
  }

  showImage(url_label: string): String{
    if(url_label == "Facebook"){
      return '/assets/images/onboarding-images/Facebook.png'
    }
    if(url_label == "Instagram")
    {
      return '/assets/images/onboarding-images/Instagram.tif.png'
    }
    if(url_label == "LinkedIn")
      {
        return '/assets/images/onboarding-images/Linkedin.tif.png'
      }
    if(url_label == "Twitter X")
      {
        return '/assets/images/onboarding-images/X.tif.png'
      }
    return ''
  }
}
