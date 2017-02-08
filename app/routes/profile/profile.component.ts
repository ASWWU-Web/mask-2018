/**
 * Created by ethan on 1/18/17.
 */
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Params } from '@angular/router';
import { RequestService } from '../../RequestService/requests';

import { ProfileFullComponent } from '../../shared/profile-full/index';
import { ProfileSmComponent } from '../../shared/profile-sm/index';

@Component({
    selector: 'test-profile',
    template: `
        <h2> Name: {{profile?.full_name}}</h2>
        <p> Majors: {{profile?.majors}}</p>
        <profile-full></profile-full>
        <profile-sm></profile-sm>
    `,
    providers: [
        RequestService
    ],
})

export class ProfileComponent {
    username: String;
    profile: any;
    constructor(requestService: RequestService) {
        requestService.get("/profile/1617/ryan.rabello", (data) => this.profile = data, undefined);
    }

}