import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RequestService } from '../../RequestService/request.service';
import { ProfileSmComponent } from '../shared';
import { CURRENT_YEAR } from '../../config';

@Component({
  selector: "search-results",
  templateUrl: "app/shared/search-results/search-results.component.html",
  providers: [ RequestService ],
})


export class SearchResultsComponent {
  @Input() query: string;
  @Input('year') year: String = undefined;
  @Input() noResultsPrompt: string;
  @Input() noResultsJust: string = "center";

  results: any[] = [];
  shownResults: any[] = [];
  shown: number = 0;

  constructor (private rs: RequestService) {}

  ngOnChanges() { 
    this.shownResults = [];
    this.shown = 0;
    this.update();
  }

  ngOnInit() {
    if(!this.query){
      this.query = "";
    }
  }

  update() {
    //Query the server and sort the results.
    //TODO: This should use observables so that we can cancel the previouse request if it exists.
    var query = this.query || "";
    if(this.year == undefined || this.year == CURRENT_YEAR) {
      this.rs.get('/search/'+ CURRENT_YEAR + "/" + query , (data) => {
        this.results = data.results.sort((p1,p2) => {
          if (p1.views == "None")
            p1.views = 0;
          if (p2.views == "None")
            p2.views = 0;
          return p2.views - p1.views;
        })
        this.showMore();
      }, undefined)

    }
    else {
      this.rs.get('/search/'+ this.year + "/" + query, (data) => {
        this.results = data.results.sort((p1,p2) => {
          if (p1.views == "None")
            p1.views = 0;
          if (p2.views == "None")
            p2.views = 0;
          return p2.views - p1.views;
        })
        this.showMore();
      }, undefined)

    }
  }

  showMore() {
    var cIndex = this.shown;
    var nIndex = cIndex + 24;
    this.shownResults = this.shownResults.concat(this.results.slice(cIndex,nIndex));
    this.shown = nIndex;


  }
}
