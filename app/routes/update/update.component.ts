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
    styleUrls: [ 'app/routes/update/update.component.css' ],
    providers: [
        RequestService,
    ],
})

export class UpdateComponent implements OnInit {
    constructor(private requestService: RequestService) { }

    profile: ProfileModel = new ProfileModel("{}");
    fullProfile: ProfileModel = new ProfileModel("{}");
    fields: string[] = FieldsInOrder;
    selectables: any = SelectFields;
    searchables: any = SearchableFields;
    possiblePhotos: string[];

    ngOnInit() {
        this.requestService.verify((data) => {
            this.profile = data; this.requestService.get("/profile/1617/"+this.profile.username, (data) => {
                this.fullProfile = this.Decode(data);
                this.getPhotos();
            }, undefined);
        });
    }

    getPhotos(): any {
        this.requestService.get(MEDIA_URI+"/listProfilePhotos.php?wwuid="+this.fullProfile.wwuid+"&year="+CURRENT_YEAR, (photos) => {
            this.possiblePhotos = photos;
            this.possiblePhotos.push(DEFAULT_PHOTO);
            //TODO: Fix how we get photos so we get all, not just this year's.
        }, undefined);
    }

    changePhoto(url: string): void {
        this.fullProfile.photo = url;
    }

    getPhotoLink(uri: string): string {
        if (!uri || uri == '') uri = this.fullProfile.photo || DEFAULT_PHOTO;
        let photo = MEDIA_URI + "/img-sm/" + uri.replace(MEDIA_URI, "");
        photo = photo.replace("//","/");
        return photo;
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