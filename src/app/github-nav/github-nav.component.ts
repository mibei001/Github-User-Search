import { Component, OnInit } from '@angular/core';
import { GithubService } from '../Services/github.service';

@Component({
  selector: 'app-github-nav',
  templateUrl: './github-nav.component.html',
  styleUrls: ['./github-nav.component.css'],
  providers: [GithubService]
})
export class GithubNavComponent implements OnInit {

  constructor(public githubservice: GithubService) { }

  searchUser($input:any) {
    if ($input.target.value === '') {

    } else {
      this.githubservice.searchGithubUser($input.target.value);
      this.githubservice.searchGithubRepos($input.target.value);
    }
    console.log($input.target.value);
  }
  ngOnInit(): void {
  }

}
