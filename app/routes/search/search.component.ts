import {Subscription } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  template:  `
    <h2>Search</h2>
    <p> Query: '{{query}}'</p>
  `
})

export class SearchComponent implements OnInit {
  query: String;
  private subscription: Subscription;

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    // subscribe to router event
    this.subscription = this.activatedRoute.params.subscribe(
      (param: any) => {
        this.query = param['query'];
    });
  }
}
