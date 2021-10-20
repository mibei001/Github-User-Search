import { Injectable } from '@angular/core';
import { Users } from '../users';
import { Repos } from '../repos';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  user!: Users;
  

// tslint:disable-next-line: variable-name
  api_Url: string = environment.apiUrl;
  repos$:any;
  constructor(private http: HttpClient) { }
  searchGithubUser(username: string) {
    // tslint:disable-next-line:class-name
    interface userInfo {
      login: string;
      location: string;
      followers: number;
      following: number;
      created_at: Date;
      email: string;
      avatar_url: any;
      public_repos: number;
    }
    const promise = new Promise<void>(
      (resolve, reject) => {
        this.http
          .get<userInfo>(environment.apiUrl + username + '/repos')
          .toPromise()
          .then(
            response => {
              this.user = new Users(
                response.login,
                response.location,
                response.followers,
                response.following,
                response.created_at,
                response.email,
                response.avatar_url,
                response.public_repos
              );

              // console.log(this.user)
              console.log(response);

              resolve();
            },
            error => {
              console.log(error);
            }
          );
      }
    );
    return promise;
  }
  searchGithubRepos(username: string) {

    // tslint:disable-next-line:class-name
    interface userInfo {
       name: string;
       forks: number;
       watcher: number;
    }

    const promise = new Promise<void>(
      (resolve, reject) => {
        this.http.get<userInfo>(this.api_Url + username + '/repos')
        .toPromise()
        .then(
          githubData => {
            console.log(githubData);
            this.repos$ = githubData;
            console.log(this.repos$);

            resolve();
          },
          error => {
            console.log(error);
          }
        );
      }
    );
    return promise;
  }
}

