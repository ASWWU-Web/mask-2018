import { Component, Input } from '@angular/core';
import { ProfileSmComponent } from '../index';

@Component({
  selector: "search-results",
  templateUrl: "./search.component.html",
  inputs: ['profile-sm','query']
})



export class SearchResultsComponent {
  @Input() query: string;

}
