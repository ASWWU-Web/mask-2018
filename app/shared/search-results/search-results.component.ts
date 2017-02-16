import { Component, Input } from '@angular/core';
import { ProfileSmComponent } from '../shared';

@Component({
  selector: "search-results",
  templateUrl: "app/shared/search-results/search-results.component.html",
})


export class SearchResultsComponent {
  @Input() query: string;
}
