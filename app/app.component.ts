import {Component, NgModule, OnInit} from '@angular/core';
import { Routes, Router } from "@angular/router";
import { Location } from "@angular/common";

@Component({
  selector: 'my-app',
  template:  `
  	<nav-bar></nav-bar>
    <router-outlet></router-outlet>
    <div id="background" [class.hash]="backgroundHash"></div>
  `,
    styles: ['#background {\n' +
    '  position: fixed;\n' +
    '  top: 0;\n' +
    '  left: 0;\n' +
    '  right: 0;\n' +
    '  bottom: 0;\n' +
    '  background-color: #222;\n' +
    '  z-index: -1;\n' +
    '  overflow: hidden;\n' +
    '  background-position: center;\n' +
    '  background-size: cover;\n' +
    '  background-image: url(https://aswwu.com/media/background.php);' +
    '  -webkit-transition: -webkit-filter 300ms;\n' +
    '  -moz-transition: -moz-filter 300ms;\n' +
    '  -o-transition: -o-filter 300ms;\n' +
    '  transition: -webkit-filter 500ms, filter 500ms;' +
    '}\n' +
    '#background.hash {\n' +
    '  -webkit-filter: saturate(0%) brightness(10%);\n' +
    '  -moz-filter: saturate(0%) brightness(10%);\n' +
    '  -o-filter: saturate(0%) brightness(10%);\n' +
    '  filter: saturate(0%) brightness(10%);\n' +
    '}']
})

export class AppComponent {
  backgroundHash: boolean = true;

  constructor(
      private loc: Location,
      private router: Router,
  ) {
      this.router.events.subscribe(() => {
        // fade in/out background for profiles
        this.backgroundHash = this.loc.path().search('profile') != -1;
    });
  }
}
