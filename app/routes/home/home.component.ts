import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { RequestService } from "../../RequestService/requests";

@Component({
  template:  `
    <h2>Home</h2>

    <div *ngFor="let student of test"> {{student.email}}</div>
  `,
  providers: [RequestService, CommonModule]
})

export class HomeComponent {

  //For testing purposes.
  test: any;
  constructor(requestService: RequestService) {
    requestService.test().then((data: any) => {this.test = data});
    requestService.get('/profile/1617/alexander.bauer', (data) => {console.log("data",data);},null);
    requestService.post('/login', 'hello', (data) => {console.log("postData",data);},null);
    console.log(this.test);
  }
}
