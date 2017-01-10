import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { RouterModule }  from '@angular/router';
import { HttpModule }    from '@angular/http';

import { AppComponent }  from './app.component';

import { HomeComponent, SearchComponent } from './routes/index';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        "path": '',
        component: HomeComponent
      },
      {
        "path": 'search/:query',
        component: SearchComponent
      }
    ])
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
