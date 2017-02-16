/**
 * Created by ethan on 1/18/17.
 */
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Params } from '@angular/router';
import { RequestService } from '../../RequestService/requests';

import { ProfileFullComponent, ProfileSmComponent, ProfileModel } from '../../shared/shared';


@Component({
    selector: 'test-profile',
    template: `
        <h2> Name: {{profile?.full_name}}</h2>
        <p> Majors: {{profile?.majors}}</p>
        <profile-full [profile] = 'profile'></profile-full>
        <profile-sm [searchResult]='{username:"ryan.rabello",photo:"profiles/1516/02209-2000528.jpg",full_name:"Ryan Rabello"}'></profile-sm>
    `,
    providers: [
        RequestService
    ],
})

export class ProfileComponent {
    username: String;
    profile: ProfileModel;
    constructor(requestService: RequestService) {
        requestService.get("/profile/1617/ryan.rabello", (data) => this.profile = data, undefined);
    }

}
