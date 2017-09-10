
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import 'rxjs/add/operator/filter';
import * as auth0 from 'auth0-js';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { UserProfile } from './profile.model';
@Injectable()
export class AuthService {

  auth0 = new auth0.WebAuth({
    clientID: 'rJT-pg3SSbQitZkrdFk4wuGbtc6eYWa8',
    domain: 'lioragnin.auth0.com',
    responseType: 'token id_token',
    audience: 'https://lioragnin.auth0.com/userinfo',
    redirectUri: 'http://localhost:4201/',
    scope: 'openid profile'
  });
  userProfile: UserProfile;
  
    // Create a stream of logged in status to communicate throughout app
    loggedIn: boolean;
    loggedIn$ = new BehaviorSubject<boolean>(this.loggedIn);
  constructor(public router: Router) { 
    if (this.isAuthenticated) {
      this.userProfile = JSON.parse(localStorage.getItem('profile'));
      this.setLoggedIn(true);
    }
  }

  public login(): void {
    this.auth0.authorize();
  }
  setLoggedIn(value: boolean) {
    // Update login status subject
    this.loggedIn$.next(value);
    this.loggedIn = value;
  }
  public getProfile(cb): void {
    const accessToken = localStorage.getItem('access_token');
    if (!accessToken) {
      throw new Error('Access token must exist to fetch profile');
    }
  
    const self = this;
    this.auth0.client.userInfo(accessToken, (err, profile) => {
      if (profile) {
        self.userProfile = profile;
      }
      cb(err, profile);
    });
  }
  private _setSession(authResult, profile) {
    // Save session data and update login status subject
    localStorage.setItem('access_token', authResult.accessToken);
    localStorage.setItem('id_token', authResult.idToken);
    localStorage.setItem('profile', JSON.stringify(profile));
    localStorage.setItem('expires_at', authResult.expiresAt);
    this.userProfile = profile;
    this.setLoggedIn(true);
  }
 
  public handleAuthentication(): void {
    this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        window.location.hash = '';
        this.setSession(authResult);
        console.log(authResult);
        this.router.navigate(['/profile']);
      } else if (err) {
        this.router.navigate(['/login']);
        console.log(err);
        alert(`Error: ${err.error}. Check the console for further details.`);
      }
    });
  }

  private setSession(authResult): void {
    // Set the time that the access token will expire at
    const expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
    localStorage.setItem('access_token', authResult.accessToken);
    localStorage.setItem('id_token', authResult.idToken);
    localStorage.setItem('expires_at', expiresAt);
  }

  public logout(): void {
    // Remove tokens and expiry time from localStorage
    // localStorage.removeItem('access_token');
    // localStorage.removeItem('id_token');
    // localStorage.removeItem('expires_at');
    // // Go back to the home route
    // this.router.navigate(['/']);
    localStorage.removeItem('access_token');
    localStorage.removeItem('id_token');
    localStorage.removeItem('profile');
    localStorage.removeItem('expires_at');
    this.userProfile = undefined;
    this.setLoggedIn(false);
  }

  public isAuthenticated(): boolean {
    // Check whether the current time is past the
    // access token's expiry time
    const expiresAt = JSON.parse(localStorage.getItem('expires_at'));
    return new Date().getTime() < expiresAt;
  }
}