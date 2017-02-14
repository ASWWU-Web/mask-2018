/**
 * Created by ethan on 2/7/17.
 */
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Params } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { RequestService } from '../../RequestService/requests';
import { ProfileModel } from '../../shared/profile.model';
import { FieldsInOrder, SelectFields, SearchableFields } from '../../shared/fields';
import { CURRENT_YEAR, MEDIA_URI, DEFAULT_PHOTO } from '../../config'

@Component({
    selector: 'update-profile',
    templateUrl: 'app/routes/update/update.component.html',
    providers: [
        RequestService,
    ]
})

export class UpdateComponent implements OnInit {
    profile: ProfileModel = new ProfileModel("{}");
    fullProfile: ProfileModel = new ProfileModel("{}");
    fields: string[] = FieldsInOrder;
    selectables: any = SelectFields;
    searchables: any = SearchableFields;
    possiblePhotos: String[];

    constructor(private requestService: RequestService) { }
    ngOnInit() {
        this.requestService.verify((data) => { this.profile = data; this.requestService.get("/profile/1617/"+this.profile.username, (data) => {this.fullProfile = this.Decode(data);}, undefined);});
        // this.requestService.get(MEDIA_URI+"/listProfilePhotos.php?wwuid="+this.fullProfile.wwuid+"&year="+CURRENT_YEAR, (photos) => {
        //     this.possiblePhotos = photos;
        //     this.possiblePhotos.push(DEFAULT_PHOTO);
        //     if(this.profile.photo.indexOf(this.fullProfile.wwuid) > -1) this.possiblePhotos.push(this.profile.photo);
        // }, undefined);
    }

    Decode(data: any): any {
        if(data.hasOwnProperty('username')) {
            let key: string;
            for(key in data){
                if(data[key]) {
                    data[key] = decodeURIComponent(data[key]);
                    let div = document.createElement('div');
                    div.innerHTML = data[key];
                    data[key] = div.firstChild.nodeValue;
                }
            }
            return data;
        }
        else {
            return undefined;
        }
    }


    UploadProfile(): void {
        this.requestService.post("/update/"+this.fullProfile.username, this.fullProfile, (data) => {console.log(data);}, undefined);
    }


}