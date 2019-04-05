import { Injectable } from '@angular/core';
import { Http,Headers,Response,RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Rx';
import { map,catchError } from 'rxjs/operators';
//import 'rxjs/add/operator/map';
//import 'rxjs/add/operator/catch';



@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http:Http) { }


  createstamp(documenthash){
  console.log("Document hash is ",documenthash);
  

  }


}
