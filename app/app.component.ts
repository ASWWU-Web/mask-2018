import {Component, NgModule} from '@angular/core';

@Component({
  selector: 'my-app',
  template:  `
    <h1>Test Angular App</h1>
	<test-profile></test-profile>
    <router-outlet></router-outlet>
  `
})

export class AppComponent {

}