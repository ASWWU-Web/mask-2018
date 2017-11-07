import { Subscription } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    template:  `
        <div class="container">
            <h2>Today's Birthdays</h2>
            <search-results [query]='queryToday'></search-results>
            <h2>Tomorrow's Birthdays</h2>
            <search-results [query]='queryTomorrow'></search-results>
            <h2>This Week's Birthdays</h2>
            <search-results [query]='queryWeek'></search-results>
        </div>
    `,
})

export class BirthdayComponent implements OnInit {
    queryToday: String;
    queryTomorrow: String;
    queryWeek: String;
    private subscription: Subscription;

    constructor(private activatedRoute: ActivatedRoute) {}

    ngOnInit() {
        // today's birthdays
        let d = new Date();
        this.queryToday = "birthday=" + ("0"+(d.getMonth()+1)).substr(-2)+"-"+("0"+d.getDate()).substr(-2);

        // tomorrow's birthdays
        d.setDate(d.getDate() + 1);
        this.queryTomorrow = "birthday=" + ("0"+(d.getMonth()+1)).substr(-2)+"-"+("0"+d.getDate()).substr(-2);

        // rest of the week's birthdays
        this.queryWeek = "birthday=";
        for(let i = 0; i < 6; i++) {
            d.setDate(d.getDate() + 1);
            this.queryWeek += ("0"+(d.getMonth()+1)).substr(-2)+"-"+("0"+d.getDate()).substr(-2);
            if(i < 5) {
                this.queryWeek += ",";
            }
        }
    }
}
