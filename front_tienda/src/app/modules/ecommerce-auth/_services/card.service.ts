import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  constructor(
    public http: HttpClient,
  ) { }

  GETTOKEN(data:any){
    let headers = new HttpHeaders({"Authorization": "Bearer pk_test_"});//KEY PUBLICO
    //return this.http.post("https:",data,{headers:headers});
  }
  SENDDATA(data:any){
    let headers = new HttpHeaders({"Authorization": "Bearer sk_test_"});//KEY PUBLICO
    //return this.http.post("https:",data,{headers:headers});
  }
}
