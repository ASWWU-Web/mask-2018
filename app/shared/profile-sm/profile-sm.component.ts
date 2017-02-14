import { Component } from '@angular/core';
import { MEDIA_SM } from '../../config';

@Component({
	selector: 'profile-sm',
	templateUrl: 'app/shared/profile-sm/profile-sm.component.html',
	styleUrls: [ 'app/shared/profile-sm/profile-sm.styles.css' ],
	inputs: ['searchResult']
})


export class ProfileSmComponent {
	mediaSM: string = MEDIA_SM;

}
