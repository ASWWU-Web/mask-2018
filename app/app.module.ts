import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { RouterModule }  from '@angular/router';
import { HttpModule }    from '@angular/http';
import { NgbModule }     from '@ng-bootstrap/ng-bootstrap';

import { AppComponent }  from './app.component';

import { ProfileComponent } from './routes/profile/profile.component'

import { HomeComponent, SearchComponent, UpdateComponent, RandomComponent } from './routes/routes';

import { ProfileFullComponent, ProfileSmComponent, SearchResultsComponent } from './shared/shared';

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
        "path":'search',
        component: SearchComponent
      },
      {
        "path": 'update',
        component: UpdateComponent
      },
      {
        "path": 'profile',
        component: ProfileComponent
      },
      {
        "path": 'profile/:username',
        component: ProfileComponent
      },
      {
        "path": 'profile/:username/:year',
        component: ProfileComponent
      },
      {
        "path": 'random',
        component: RandomComponent
      }
    ])
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    ProfileComponent,
    ProfileFullComponent,
    ProfileSmComponent,
    UpdateComponent,
    SearchResultsComponent,
    RandomComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
