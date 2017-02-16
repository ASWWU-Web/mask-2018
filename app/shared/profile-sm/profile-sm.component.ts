import { Component, Input } from '@angular/core';
import { MEDIA_SM, DEFAULT_PHOTO } from '../../config';

@Component({
	selector: 'profile-sm',
	templateUrl: 'app/shared/profile-sm/profile-sm.component.html',
	styleUrls: [ 'app/shared/profile-sm/profile-sm.styles.css' ],
	inputs: ['searchResult']
})


export class ProfileSmComponent {
	@Input() searchResults: any;
	//Photourl to link funciton returns proper url and BLANK photo if photo == "None"
	getPhotoLink(url: string){
		if(url && url != "None"){
			return MEDIA_SM + "/" + url;
		} else {
			return MEDIA_SM + "/" + DEFAULT_PHOTO;
		}
	}

}
