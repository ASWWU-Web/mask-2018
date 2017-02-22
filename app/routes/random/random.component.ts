/**
 * Created by ethan on 2/21/17.
 */
import { Subscription } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Params } from '@angular/router';
import { RequestService } from '../../RequestService/requests';

import { ProfileFullComponent, ProfileModel } from '../../shared/shared';
import { CURRENT_YEAR, DEFAULT_PHOTO } from '../../config';

@Component({
    template:  `
    <div class="container">
      <h2>Random</h2>
      <button (click)="getRandom()" class="btn btn-primary">Get new random profile</button>
      <profile-full [profile]='selectedProfile'></profile-full>
    </div>
  `,
    providers: [
        RequestService,
    ],
})

export class RandomComponent implements OnInit {
    allProfiles: any;
    selectedProfile: any;

    constructor(private requestService: RequestService) {}

    ngOnInit() {
        this.requestService.get("/search/all", (data) => {
            this.allProfiles = data['results'];
            this.getRandom();
        }, undefined);
    }

    getRandom(): any {
        this.selectedProfile = this.allProfiles[Math.floor((Math.random() * (this.allProfiles.length - 1)) + 1)];
        while(this.selectedProfile['photo'] == "images/mask_unknown.png" || this.selectedProfile['photo'] == "None" || !this.selectedProfile['photo']) {
            this.selectedProfile = this.allProfiles[Math.floor((Math.random() * (this.allProfiles.length - 1)) + 1)];
        }
        this.requestService.get("/profile/"+ CURRENT_YEAR + "/" + this.selectedProfile['username'], (data) => this.selectedProfile = new ProfileModel(data), undefined);
    }

}
