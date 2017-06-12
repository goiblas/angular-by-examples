import { Injectable } from '@angular/core';

import { Http } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Observable } from 'rxjs/Observable';

@Injectable()
export class ApiService {

  constructor(private http: Http) { }

  getDataJson(url: string){
    return this.http.get(url).map( res => this.transformData(res) );
  }

  transformData(data){
    console.log(data.json());
    return data.json();
  }
}
