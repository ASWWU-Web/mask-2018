import { Component, Input } from '@angular/core';
import { RequestService } from '../../RequestService/request.service';

import { ProfileModel, FieldsInOrder } from '../shared';

@Component({
	selector: 'profile-full',
	templateUrl: 'app/shared/profile-full/profile-full.component.html',
	styleUrls: [ 'app/shared/profile-full/profile-full.styles.css' ]
})

export class ProfileFullComponent {
	@Input('User') username: string;
	@Input() profile: ProfileModel;

	fieldsInOrder: string[] = FieldsInOrder;

	displayKey(key: string): string { return key.replace(/_/g, ' '); }

}
