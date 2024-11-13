import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CompendiumService {

  constructor(private http: HttpClient) { }
  apiLink:string='http://localhost:3000?_embed=Alice';
  getAllPersonas(){
    return this.http.get(this.apiLink);
  }
}
