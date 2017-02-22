import { Subscription } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    template:  `
    <div class="container">
      <h2>Today's Birthdays</h2>
      <search-results [query]='query'></search-results>
    </div>
  `,
})

export class BirthdayComponent implements OnInit {
    query: String;
    private subscription: Subscription;

    constructor(private activatedRoute: ActivatedRoute) {}

    ngOnInit() {
        let d = new Date();
        this.query = "birthday=" + ("0"+(d.getMonth()+1)).substr(-2)+"-"+("0"+d.getDate()).substr(-2);
    }
}
