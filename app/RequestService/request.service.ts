//This is here just for testing. It should eventually be put in a separate git repo
//or be bundled with a base ASWWU project.

import { Injectable } from '@angular/core';

import { Headers, Http, RequestOptions } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

import { SERVER_URL, COOKIE_DOMAIN } from '../config';

@Injectable()
export class RequestService {
  //TODO: Add current user object (see older request service)

  constructor(private http: Http) { }

  //This is a test function that I'm pretty sure isn't the right way to do this but it works.
  test(): any{
    /*console.log(http);*/
    return this.http.get(SERVER_URL + '/search/all').toPromise().then(response => response.json().results);
  }

  private createRequest(uri: string): any {
    let url = uri;
    if (url.indexOf("http") != 0) {
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
    window.localStorage.setItem('token', token);
    //this.setUser(data.user);
  }

  private getToken(): string {
    let token = window.localStorage.getItem('token') || '';
    // let token = this.cookie.get('token');
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
