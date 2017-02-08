import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { RouterModule }  from '@angular/router';
import { HttpModule }    from '@angular/http';
import { NgbModule }     from '@ng-bootstrap/ng-bootstrap';

import { AppComponent }  from './app.component';

import { ProfileComponent } from './routes/profile/profile.component'

import { HomeComponent, SearchComponent } from './routes/routes';

import { ProfileFullComponent } from './shared/profile-full/index'

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot(),
    RouterModule.forRoot([
      {
        "path": '',
        component: HomeComponent
      },
      {
        "path": 'search/:query',
        component: SearchComponent
      },
      {
        "path": 'profile/:username',
        component: ProfileComponent
      }
    ])
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    ProfileComponent,
    ProfileFullComponent,
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
