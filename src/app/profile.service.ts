import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { map } from  "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
private username:string;

  constructor(private http:HttpClient) { 
console.log("service is active");
this.username = "ro0tkit";
  }
  getProfileInfo(){
    return this.http.get("https://api.github.com/users/" + this.username)
.map(res => res.json());
  }
}
   