import { Component, Input, OnChanges } from '@angular/core';
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
  results: any;
  constructor (private rs: RequestService) {}

  ngOnChanges() {
    //Query the server and sort the results.
    this.rs.get('/search/'+ CURRENT_YEAR + "/" + this.query, (data) => {
      this.results = data.results.sort((p1,p2) => {
        if (p1.views == "None")
          p1.views = 0;
        if (p2.views == "None")
          p2.views = 0;
        return p2.views - p1.views;
      })
    }, undefined)
  }
}
