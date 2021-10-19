import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GithubNavComponent } from './github-nav/github-nav.component';
import { GithubUserProfileComponent } from './github-user-profile/github-user-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    GithubNavComponent,
    GithubUserProfileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
