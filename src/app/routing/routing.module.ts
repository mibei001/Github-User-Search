import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';


import { GithubUserProfileComponent } from '../github-user-profile/github-user-profile.component';
import { NotFoundComponent } from '../not-found/not-found.component';


// Defining routes
const routes: Routes = [
  { path: 'github user-profile', component: GithubUserProfileComponent },
  { path: '', redirectTo: '/github-user-profile/github-user-profile.component',
    pathMatch: 'full'},
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class RoutingModule { }

