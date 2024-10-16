import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { URL_SERVICIOS } from 'src/app/config/config';
import { AuthService } from '../../auth';

@Injectable({
  providedIn: 'root'
})
export class CuponesService {

  //codigo base para funcionamient de metronic
  isLoading$: Observable<boolean>;
  isLoadingSubject: BehaviorSubject<boolean>;
  
  constructor(
    private http: HttpClient,
    public authservice: AuthService,
  ) {
    this.isLoadingSubject = new BehaviorSubject<boolean>(false);
    this.isLoading$ = this.isLoadingSubject.asObservable();
  }
  
  //devuleva todos los cupones en la api
  allCupones(page=1,search=''){
    this.isLoadingSubject.next(true);
    //encabezado para la autorizacion del api por medio de token
    let headers = new HttpHeaders({'Authorization' : 'Bearer '+this.authservice.token});
    let LINK = "";
    if(search){
      LINK = "&search="+search;
    }
    let URL = URL_SERVICIOS + "/cupones/all?page="+page+LINK;
    return this.http.get(URL,{headers: headers}).pipe(
      finalize(() => this.isLoadingSubject.next(false))
    );
  }

  //
  configAll(){
    this.isLoadingSubject.next(true);
    //encabezado para la autorizacion del api por medio de token
    let headers = new HttpHeaders({'Authorization' : 'Bearer '+this.authservice.token});
    let URL = URL_SERVICIOS + "/cupones/config_all";
    return this.http.get(URL,{headers: headers}).pipe(
      finalize(() => this.isLoadingSubject.next(false))
    );
  }

  //devuelve un cupon por medio del id
  showCupon(cupon_id){
    this.isLoadingSubject.next(true);
    //encabezado para la autorizacion del api por medio de token
    let headers = new HttpHeaders({'Authorization' : 'Bearer '+this.authservice.token});
    let URL = URL_SERVICIOS + "/cupones/show/"+cupon_id;
    return this.http.get(URL,{headers: headers}).pipe(
      finalize(() => this.isLoadingSubject.next(false))
    );
  }

  //crear un nuevo cupon
  createCupones(data:any){
    this.isLoadingSubject.next(true);
    //encabezado para la autorizacion del api por medio de token
    let headers = new HttpHeaders({'Authorization' : 'Bearer '+this.authservice.token});
    let URL = URL_SERVICIOS + "/cupones/add";
    return this.http.post(URL,data,{headers: headers}).pipe(
      finalize(() => this.isLoadingSubject.next(false))
    );
  }

  //actualizar cupon por medio de id
  updateCupones(cupon_id:any, data:any){
    this.isLoadingSubject.next(true);
    //encabezado para la autorizacion del api por medio de token
    let headers = new HttpHeaders({'Authorization' : 'Bearer '+this.authservice.token});
    let URL = URL_SERVICIOS + "/cupones/update/"+cupon_id;
    return this.http.post(URL,data,{headers: headers}).pipe(
      finalize(() => this.isLoadingSubject.next(false))
    );
  }

  //eliminar un cupon mediante id enviado
  deleteCupones(cupon_id:any){
    this.isLoadingSubject.next(true);
    //encabezado para la autorizacion del api por medio de token
    let headers = new HttpHeaders({'Authorization' : 'Bearer '+this.authservice.token});
    let URL = URL_SERVICIOS + "/cupones/delete/"+cupon_id;
    return this.http.delete(URL,{headers: headers}).pipe(
      finalize(() => this.isLoadingSubject.next(false))
    );
  }

}
