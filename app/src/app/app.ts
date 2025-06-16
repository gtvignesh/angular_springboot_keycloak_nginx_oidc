import { Component, inject } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';
import { NgIf } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  imports: [ NgIf],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'app';

  constructor(private http: HttpClient, private oauthService: OAuthService) {
    // The APP_INITIALIZER ensures OAuth is ready before the app starts
    if (this.oauthService.hasValidAccessToken()) {
      this.getUser();
    }
  }

  getUser() {
    console.log("resty api is triggered");
    this.http.get('/api/user').subscribe({
      next: (result) => {
        console.log('Secure API result', result);
      },
      error: (error) => {
        console.error('Error calling secure API:', error);
        console.error('Error status:', error.status);
        console.error('Error message:', error.message);
      }
    });
  }

  get user() {
    console.log('User claims:', this.oauthService.getIdentityClaims());
    return this.oauthService.getIdentityClaims() as { name?: string; email?: string };
  }

  get isLoggedIn() {
    return this.oauthService.hasValidAccessToken();
  }

  logout() {
    this.oauthService.logOut();
  }
}
