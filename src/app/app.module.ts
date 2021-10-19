import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { GithubService } from './githubs/github.service';
import { HttpClientModule } from '@angular/common/http';
import { RoutingModule } from './routing/routing.module';

import { AppComponent } from './app.component';
import { GithubNavComponent } from './github-nav/github-nav.component';
import { GithubUserProfileComponent } from './github-user-profile/github-user-profile.component';
import { DayCountPipe } from './day-count.pipe';
import { NotFoundComponent } from './not-found/not-found.component';
import { UnderlineDirective } from './underline.directive';

@NgModule({
  declarations: [
    AppComponent,
    GithubNavComponent,
    GithubUserProfileComponent,
    DayCountPipe,
    NotFoundComponent,
    UnderlineDirective
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RoutingModule,
  ],
  providers: [GithubService],
  bootstrap: [AppComponent]
})
export class AppModule { }
