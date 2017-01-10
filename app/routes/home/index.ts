import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { RequestService } from "../../RequestService/index";

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
    console.log(this.test);
  }
}
