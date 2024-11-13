import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CompendiumService {

  constructor(private http: HttpClient) { }
  apiLink:string='';
  getAllPersonas(){
    return this.http.get(this.apiLink);
  }
}
