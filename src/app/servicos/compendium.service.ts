import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CompendiumService {

  constructor(private http: HttpClient) { }
  apiLink:string='http://localhost:3000/personas?_page=1&_limit=5';
  getAllPersonas(){
    return this.http.get(this.apiLink);
  }
}
