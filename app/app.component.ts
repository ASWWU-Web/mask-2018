import {Component, NgModule} from '@angular/core';

@Component({
  selector: 'my-app',
  template:  `
    <h1>Test Angular App</h1>
    <div style="width:800px;">
    <ngb-carousel>
  <template ngbSlide>
    <img src="http://lorempixel.com/900/500?r=1" alt="Random first slide">
    <div class="carousel-caption">
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </div>
  </template>
  <template ngbSlide>
    <img src="http://lorempixel.com/900/500?r=2" alt="Random second slide">
    <div class="carousel-caption">
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </div>
  </template>
  <template ngbSlide>
    <img src="http://lorempixel.com/900/500?r=3" alt="Random third slide">
    <div class="carousel-caption">
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </div>
  </template>
</ngb-carousel>
</div>
    <router-outlet></router-outlet>
  `
})

export class AppComponent {

}