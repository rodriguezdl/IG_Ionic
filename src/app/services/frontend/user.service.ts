import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private _user: string;
  private _bio: string;
  private _url: string;

  constructor() { }

  get user() {
    return this._user;
  }

  set user(user: string) {
    this._user = user;
  }

  get bio() {
    return this._bio;
  }

  set bio(bio:string) {
    this._bio = bio;
  }

  get url() {
    return this._url;
  }

  set url(url:string) {
    this._url = url;
  }
}
