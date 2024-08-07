import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { response } from 'express';
import { Links } from 'src/app/core/models/links';
import { InitialsPipe } from 'src/app/core/pipes/initials.pipe';
import { LinksService } from 'src/app/core/services/links.service';
import { OrganizationService } from 'src/app/core/services/organization.service';
import { PiiService } from 'src/app/core/services/pii.service';
import { ThemeService } from 'src/app/core/services/theme.service';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-profile-loader',
  templateUrl: './profile-loader.component.html',
  styleUrls: ['./profile-loader.component.css'],
  providers: [InitialsPipe]
})
export class ProfileLoaderComponent {
  inputForm: FormGroup;
  id: number = 0;
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
  theme: string = '';
  givenName: string = '';
  orgId: number = 0;
  themeId: number = 0;

  qrData: string | null = null;
  qrResultString!: string;

  public config: any = {
    constraints: {
      video: {
        width: window.innerWidth
      },
    }
  }
  constructor(private fb: FormBuilder, private piiService: PiiService, private linkService: LinksService, private initialPipe: InitialsPipe, private userService: UserService, private orgService: OrganizationService, private themeService: ThemeService) {
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
    this.id = this.inputForm.value.userId;
    this.piiService.getUserPii(this.id).subscribe({
      next: response => {
        this.bio = response.biography;
        console.log('Bio get successfully:', this.bio);
        this.inputForm.reset();
      },
      error: error => {
        console.error('Error:', error);
      }
    })
    this.linkService.getLink(this.id).subscribe({
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
    this.userService.getUserProfile(this.id).subscribe({
      next: response => {
        console.log(response)
        this.firstName = response.first_name;
        this.lastName = response.last_name;
        this.theme = response.user_theme.theme_name ? (response.user_theme.theme_name + ", P") : '';
        this.orgId = response.org.organization_id;
        this.givenName = this.firstName + " " + this.lastName;
        this.profileInitials = this.initialPipe.transform(this.givenName);
        console.log(this.givenName);
        console.log(this.theme)
        console.log(this.orgId)
        console.log("User theme " + response.user_theme.theme_name);
        if (this.theme == '' && this.orgId > 0) {
          this.GetOrgTheme();
        }
        else if (this.theme == '' && this.orgId == 0) {
          this.theme = "patchWrk, D";
        }
      }
    })
  }

  GetOrgTheme(): void {
    this.orgService.getOrganization(this.orgId).subscribe({
      next: response => {
        this.themeId = response.theme_id
        if (this.themeId != 0) {
          this.GetThemes();
        }
        else {
          this.theme = "patchWrk, D";
        }
        console.log(response.theme_id);
      }
    })

  }

  GetThemes(): void {
    this.themeService.getThemes().subscribe({
      next: response => {
        if (response.theme_id == this.themeId) {
          this.theme = response.theme_name + ', O'
        }
        else {
          this.theme = "patchWrk, D";
        }
      }
    })
  }

  sortLinks(): void {
    this.linksS = this.links.filter((link) => link.link_type == 'S');
    this.linksW = this.links.filter((link) => link.link_type == 'W');
    this.linksSAdjusted = this.linksS.length - 4;
    this.linksWAdjusted = this.linksW.length - 3;
  }

  showImage(url_label: string): String {
    switch (url_label) {
      case "Classmates":
        return '/assets/images/social-logos/classmates.png';
      case "Discord":
        return '/assets/images/social-logos/discord.png';
      case "Facebook":
        return '/assets/images/social-logos/facebook.png';
      case "Flikr":
        return '/assets/images/social-logos/flikr.png';
      case "Goodreads":
        return '/assets/images/social-logos/goodreads.png';
      case "Instagram":
        return '/assets/images/social-logos/instagram.png';
      case "Kuaishou":
        return '/assets/images/social-logos/kuaishou.png';
      case "LinkedIn":
        return '/assets/images/social-logos/linkedin.png';
      case "Mastodon":
        return '/assets/images/social-logos/mastodon.png';
      case "Medium":
        return '/assets/images/social-logos/medium.png';
      case "Myspace":
        return '/assets/images/social-logos/myspace.png';
      case "Pinterest":
        return '/assets/images/social-logos/pinterest.png';
      case "QQ ~??":
        return '/assets/images/social-logos/qq.png';
      case "Quora":
        return '/assets/images/social-logos/quora.png';
      case "Reddit":
        return '/assets/images/social-logos/reddit.png';
      case "Sina Weibo":
        return '/assets/images/social-logos/sina-weibo.png';
      case "Snapchat":
        return '/assets/images/social-logos/snapchat.png';
      case "Telegram":
        return '/assets/images/social-logos/telegram.png';
      case "TikTok":
        return '/assets/images/social-logos/tiktok.png';
      case "Tumblr":
        return '/assets/images/social-logos/tumblr.png';
      case "Twitch":
        return '/assets/images/social-logos/twitch.png';
      case "Twitter X":
        return '/assets/images/social-logos/twitter-x.png';
      case "WeChat":
        return '/assets/images/social-logos/wechat.png';
      case "Whatsapp":
        return '/assets/images/social-logos/whats-app.png';
      case "Youtube":
        return '/assets/images/social-logos/youtube.png';
      default:
        return '';
    }
  }

  generateQrCode() {
    // const urlHandle = `https://${this.urlHandle}/`;

    // need to edit this url as per environment
    this.qrData = `https://e439-205-254-171-106.ngrok-free.app/qr-user-profile?profileId=${this.id}&action=update`;
    // this.qrData = 'www.google.com'
    // setTimeout(() => this.captureQrCode(), 100); // Wait for QR code to render
  }

  //zxing scanner function

  // onCodeResult(resultString: string) {
  //   this.qrResultString = resultString;
  //   // window.open(this.qrResultString,'_self');
  // }
  
  public onEvent(e: any, action?: any): void {
    // e && action && action.pause();
    console.log(e[0].value);
    window.open(e[0].value, '_self');
  }

  public handle(action: any, fn: string): void {
    const playDeviceFacingBack = (devices: any[]) => {
      // front camera or back camera check here!
      const device = devices.find(f => (/back|rear|environment/gi.test(f.label))); // Default Back Facing Camera
      action.playDevice(device ? device.deviceId : devices[0].deviceId);
    }

    if (fn === 'start') {
      action[fn](playDeviceFacingBack).subscribe((r: any) => console.log(fn, r), alert);
    } else {
      action[fn]().subscribe((r: any) => console.log(fn, r), alert);
    }
  }

  // This method is called when the QR code is successfully scanned
  onCodeResult(resultString: string) {
    console.log(resultString); // For debugging
    if (resultString.startsWith('http://') || resultString.startsWith('https://')) {
      window.open(resultString, '_blank');
    } else {
      // Handle non-URL QR codes if necessary
      console.error('Scanned data is not a URL:', resultString);
    }
  }

}
