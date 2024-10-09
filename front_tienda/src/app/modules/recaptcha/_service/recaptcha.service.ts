import { Injectable} from '@angular/core';

import { Observable, throwError} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {catchError, map} from "rxjs/operators";


@Injectable({
  providedIn: 'root'
})
export class RecaptchaService {



  constructor( private http: HttpClient) {

  }

  /*
  Modo de comunicación con el servidor síncrono
  parametro token: string
  return string
   */
  getToken(token: string): string {
      const xhr = new XMLHttpRequest();
      xhr.open('POST', 'http://127.0.0.1:8000/api/v1/verificar/'+token+'/', false);
      xhr.send();
      return  xhr.responseText ;

  }


  /*
  Modo de comunicación con el servidor asíncrono
  parametro token: string
  return Observable<any>
   */
  getTokenClientModule(token: string): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      })
    };
      return this.http.post<any>( 'http://127.0.0.1:8000/api/v1/verificar/' + token +'/', httpOptions)
        .pipe(
          map((response) => response),
          catchError((err) => {
            console.log('error caught in service')
            console.error(err);
            return throwError(err);
          })
        );
  }

}
