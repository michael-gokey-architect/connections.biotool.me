import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-qr-user-profile',
  templateUrl: './qr-user-profile.component.html',
  styleUrls: ['./qr-user-profile.component.css']
})
export class QrUserProfileComponent {

  userDetails: any;
  isFollowing = false;
  userFullName = 'John Inc.'

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const profileId = params['profileId'];
      const action = params['action'];
      console.log(action, profileId)
      this.loadUserProfile(profileId);

      if (action) {
        this.handleAction(action, profileId);
      }
    });
  }

  loadUserProfile(profileId: string): void {
    this.http.get(`https://7cf7-205-254-171-6.ngrok-free.app/user-details?profileId=${profileId}`, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'ngrok-skip-browser-warning': 'true'
      })
    }).subscribe(
      (data) => {
        console.log(data)
        this.userDetails = data;
      },
      (error) => {
        console.error('Error loading user profile:', error);
      }
    );
  }

  handleAction(action: string, profileId: string): void {
    if (action === 'update') {
      this.sendUpdateRequest(profileId);
    }
    // Handle other actions if needed
  }

  sendUpdateRequest(profileId: string): void {
    const payload = {
      profileId,
      timestamp: new Date().toISOString(),
      action: 'updateProfileVisit'
    };

    this.http.post('https://7cf7-205-254-171-6.ngrok-free.app/update-profile-visit', payload,{
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'ngrok-skip-browser-warning': 'true'
      })
    }).subscribe(
      (response) => {
        console.log('Profile updated successfully:', response);
      },
      (error) => {
        console.error('Error updating profile:', error);
      }
    );
  }

  toggleFollow(): void {
    this.isFollowing = !this.isFollowing;
    alert("Followed/Unfollowed")
    // Optionally send follow/unfollow status to backend
  }
}
