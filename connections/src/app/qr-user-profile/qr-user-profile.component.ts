import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { PiiService } from '../core/services/pii.service';
import { UserService } from '../core/services/user.service';
import { LinksService } from '../core/services/links.service';

@Component({
  selector: 'app-qr-user-profile',
  templateUrl: './qr-user-profile.component.html',
  styleUrls: ['./qr-user-profile.component.css']
})
export class QrUserProfileComponent {

  userDetails: any;
  isFollowing = false;
  userFullName = 'John Inc.'

  profileId!: any;
  bio!: string;
  firstName!: any;
  lastName!: any;
  links: any;
  linksS: any;
  instaLink: any;
  linkedinLink: any;
  twitterLink: any;

  constructor(private route: ActivatedRoute, private http: HttpClient, private piiService: PiiService, private userService: UserService, private linkService: LinksService) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.profileId = params['profileId'];
      const action = params['action'];
      console.log(action, this.profileId)
      this.loadUserProfile(this.profileId);

      //any action needs to be performed on backend when profile page loads

      // if (action) {
      //   this.handleAction(action, this.profileId);
      // }
    });

    this.piiService.getUserPii(this.profileId).subscribe({
      next: response => {
        setTimeout(() => this.bio = response.biography.split('[2]'), 1500)
      },
      error: error => {
        console.error('Error:', error);
      }
    })

    this.userService.getUserProfile(this.profileId).subscribe({
      next: response => {
        console.log(response)
        this.firstName = response.first_name;
        this.lastName = response.last_name;
      }
    })

    this.linkService.getLink(this.profileId).subscribe({
      next: response => {
        this.links = response;
        this.sortLinks();
      },
      error: error => {
        console.error('Error:', error);
      }
    })
  }

  sortLinks(): void {
    this.linksS = this.links.filter((link: { link_type: string; }) => link.link_type == 'S');
    this.linksS.forEach((el: {
      url_link: any; url_label: string;
    }) => {
      if (el.url_label == "Instagram") {
        this.instaLink = el.url_link;
      }
      else if (el.url_label == "LinkedIn") {
        this.linkedinLink = el.url_link;

      }
      else if (el.url_label == "Twitter X") {
        this.twitterLink = el.url_link;
      }
    })
  }


  loadUserProfile(profileId: string): void {
    this.http.get(`https://7cf7-205-254-171-6.ngrok-free.app/user-details?this.profileId=${profileId}`,).subscribe({
      next: response => {
        console.log(response)
      },
      error: error => {
        console.error('Error loading user profile:', error);
      }
    });
  }

  //header reuired for ngrok

  // {
  //   headers: new HttpHeaders({
  //     'Content-Type': 'application/json',
  //     'ngrok-skip-browser-warning': 'true'
  //   })
  // }

  // loadUserProfile(this.profileId: string): void {
  //   this.http.get(`https://7cf7-205-254-171-6.ngrok-free.app/user-details?this.profileId=${this.profileId}`, {
  //     headers: new HttpHeaders({
  //       'Content-Type': 'application/json',
  //       'ngrok-skip-browser-warning': 'true'
  //     })
  //   }).subscribe(
  //     (data) => {
  //       console.log(data)
  //       this.userDetails = data;
  //     },
  //     (error) => {
  //       console.error('Error loading user profile:', error);
  //     }
  //   );
  // }

  // handleAction(action: string, this.profileId: string): void {
  //   if (action === 'update') {
  //     this.sendUpdateRequest(this.profileId);
  //   }
  //   // Handle other actions if needed
  // }

  // sendUpdateRequest(this.profileId: string): void {
  //   const payload = {
  //     this.profileId,
  //     timestamp: new Date().toISOString(),
  //     action: 'updateProfileVisit'
  //   };

  //   this.http.post('https://7cf7-205-254-171-6.ngrok-free.app/update-profile-visit', payload,{
  //     headers: new HttpHeaders({
  //       'Content-Type': 'application/json',
  //       'ngrok-skip-browser-warning': 'true'
  //     })
  //   }).subscribe(
  //     (response) => {
  //       console.log('Profile updated successfully:', response);
  //     },
  //     (error) => {
  //       console.error('Error updating profile:', error);
  //     }
  //   );
  // }

  toggleFollow(): void {
    this.isFollowing = !this.isFollowing;
    setTimeout(() => this.isFollowing ? alert('Followed') : alert('Unfollowed'), 500)
    // this.isFollowing ? alert('Followed') : alert('Unfollowed')
    // send follow/unfollow status to backend
  }
}
