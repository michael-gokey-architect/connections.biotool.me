import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LinksService } from 'src/app/core/services/links.service';

interface SocialMediaType {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-update-links',
  templateUrl: './update-links.component.html',
  styleUrls: ['./update-links.component.css']
})
export class UpdateLinksComponent {
  linkForm: FormGroup;

  socialMediaTypes: SocialMediaType[] = [
    {value: 'Facebook', viewValue: 'Facebook'},
    {value: 'Whatsapp', viewValue: 'Whatsapp'},
    {value: 'Youtube', viewValue: 'Youtube'},
    {value: 'Instagram', viewValue: 'Instagram'},
    {value: 'TikTok', viewValue: 'Tiktok'},
    {value: 'Telegram', viewValue: 'Telegram'},
    {value: 'WeChat', viewValue: 'WeChat'},
    {value: 'Snapchat', viewValue: 'Snapchat'},
    {value: 'Twitter X', viewValue: 'Twitter X'},
    {value: 'Pinterest', viewValue: 'Pinterest'},
    {value: 'Reddit', viewValue: 'Reddit'},
    {value: 'LinkedIn', viewValue: 'LinkedIn'},
    {value: 'Quora', viewValue: 'Quora'},
    {value: 'Discord', viewValue: 'Discord'},
    {value: 'Twitch', viewValue: 'Twitch'},
    {value: 'Tumblr', viewValue: 'Tumblr'},
    {value: 'Mastodon', viewValue: 'Mastodon'},
    {value: 'Medium', viewValue: 'Medium'},
    {value: 'Flickr', viewValue: 'Flickr'},
    {value: 'Goodreads', viewValue: 'Goodreads'},
    {value: 'Myspace', viewValue: 'Myspace'},
    {value: 'Classmates', viewValue: 'Classmates'},
    {value: 'WeChat', viewValue: 'WeChat'},
    {value: 'Kuaishou', viewValue: 'Kuaishou'},
    {value: 'Sina Weibo', viewValue: 'Sina Weibo'},
    {value: 'QQ ~??', viewValue: 'QQ ~??'},
    {value: 'Meetup', viewValue: 'Meetup'},
  ];

  selectedValue = "";

  constructor(private linkService: LinksService, private fb: FormBuilder) {
    //basic validators need to put check in UI
    this.linkForm = this.fb.group({
      key_id: ['', Validators.required],
      user_id: ['', Validators.required],
      link_type: ['', Validators.required],
      link_active: ['', Validators.required],
      url_label: ['', Validators.required],
      url_link: ['', Validators.required]
    });
  }

  onDropdownChange($event: any){
    console.log("Changes Detected")
    this.selectedValue = $event.value
    this.linkForm.get('url_label')?.setValue(this.selectedValue);
    console.log(this.selectedValue + " dropdown")
    
  }  


  onSubmit(event: Event): void {
    //keep validation check for form
    // if (this.linkform.valid) {
    event.preventDefault();

    console.log("Link Form Value", this.linkForm.value);

    //create link call 
    //use subscribe with next and error object as per new standard
    this.linkService.updateLink(this.linkForm.value).subscribe({
      next: response => {
        console.log('Form upated successfully:', response);
        this.linkForm.reset();
      },
      error: error => {
        console.error('Error updating form:', error);
      },
      complete: () => {
        console.log('Update link completed');
      }
    });
  }
}
