//This is here just for testing. It should eventually be put in a separate git repo
//or be bundled with a base ASWWU project.

import { Injectable } from '@angular/core';

import { Headers, Http, RequestOptions } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

import { SERVER_URL, COOKIE_DOMAIN } from '../config';
import {User} from "./user.model";

@Injectable()
export class RequestService {
  private authUser: User;

  private setCurrentUser(user: any): void {
    try {
      user=JSON.parse(user);
    } catch(e) { }
    if(user.wwuid) {
      this.authUser = new User(user);
    } else if(user.user.wwuid) {
      this.authUser = new User(user.user);
    } else {
      this.authUser = undefined;
    }
  }

  private verify(cb: any): void {
    if(this.getToken().length) {
      this.get("verify", data => {
        this.setAuth(data);
      }, err => {
          this.setAuth({});
          if(typeof cb == "function") cb({});
      });
    } else {
      this.setAuth({});
      if(typeof cb == "function") cb({});
    }
  }


  constructor(private http: Http) { }

  //This is a test function that I'm pretty sure isn't the right way to do this but it works.
  test(): any{
    /*console.log(http);*/
    return this.http.get(SERVER_URL + '/search/all').toPromise().then(response => response.json().results);
  }

  private createRequest(uri: string): any {
    let url = uri;
    if (url.indexOf("http")) {
      url = SERVER_URL;
      if (url.split('').pop() != '/' && uri[0] != '/') url += '/';
      url += uri;
    }

    let headers = new Headers({
      'Content-Type': 'application/json',
      'Authorization': 'HMAC '+this.getToken()
    });
    let options = new RequestOptions({ headers: headers });

    return { url: url, options: options };
  }

  //TODO: Make these two functions use cookies to store the token.
  private setAuth(data): void {
    let token = data.token || '';
    document.cookie = "token=" + token + "; domain= " + COOKIE_DOMAIN + "; max-age=1209600; path=/";
    this.setCurrentUser(data.user);
  }

  private getToken(): string {
    let cookieArr = document.cookie.split(';').filter(function(value) {return value.indexOf("token=") == 0})
    let cookie;
    if(cookieArr && "length" in cookieArr && cookieArr.length == 1){
      cookie = cookieArr[0].split('=')[1]
    }
    let token = cookie || '';
    return token;
  }

  get(uri: string, afterRequest, catchError): void {
    let req = this.createRequest(uri);
    this.http.get(req.url,req.options)
      .map(res => res.json())
      .subscribe(
        data => afterRequest(data),
        err => (catchError ? catchError(err) : console.error(err))
      );
  }
}