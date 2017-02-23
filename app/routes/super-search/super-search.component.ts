import { Subscription } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';

import { FieldsInOrder, SelectFields, SearchableFields } from '../../shared/fields';

@Component({
    templateUrl: 'app/routes/super-search/super-search.component.html',
})

export class SuperSearchComponent implements OnInit {
    numOfQueries: number[] = [];
    queries: string[] = [];
    fields: string[] = [];
    query: string = '';
    fieldsInOrder: string[] = FieldsInOrder;
    selectables: any = SelectFields;
    searchables: any = SearchableFields;

    private subscription: Subscription;

    constructor(private activatedRoute: ActivatedRoute) {}

    ngOnInit() {
        // subscribe to router event
        this.subscription = this.activatedRoute.params.subscribe(
            (param: any) => {
                this.query = param['query'];
            });
        this.numOfQueries.push(0);
        this.numOfQueries.push(1);
        this.fields.push('year');
        this.queries.push('16-17');
    }

    updateQuery() {
        let tempstring = '';
        let tempindex = 0;
        for(let value of this.queries) {
            let field = this.fields[tempindex];
            if(field !== 'year' && field != ''){
                tempstring += this.fields[tempindex] + "=" + value + ";";
            }
            tempindex++;
        }
        tempstring.slice(0,-1);
        this.query = tempstring;
    }
}
