import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { AuthService } from '../../auth';
import { finalize } from 'rxjs/operators';
import { URL_SERVICIOS } from 'src/app/config/config';

@Injectable({
  providedIn: 'root'
})
export class CategorieService {

  //Esta es la base principal para todos los servicios, este codigo
  //debe estar igual en todos.
  isLoading$: Observable<boolean>;
  isLoadingSubject: BehaviorSubject<boolean>;
  
  constructor(
    private http: HttpClient,
    public authservice: AuthService,
  ) {
    //esta instancia crea una pausa cuando se esta llamando datos al api, pasa a true luego se declara a false de nuevo 
    //para dar paso a la siguiente consulta
    this.isLoadingSubject = new BehaviorSubject<boolean>(false);
    this.isLoading$ = this.isLoadingSubject.asObservable();
  }

  createCategoria(data:any){
        //esto va al inicio de las funciones de servicio, realiza un tiempo de respuesta entre la consulta y respuesta del api
        this.isLoadingSubject.next(true);
        //se declara la autenticacion del token y se envia en la cabecera del url
        let headers = new HttpHeaders({'Authorization' : 'Bearer' + this.authservice.token});
        //se declara la url con el /admin para distingir de los registros en jwt token
        let URL = URL_SERVICIOS + "/products/categories/add";
        //se envia la informacion al url con la información y en la cabecera el token
        return this.http.post(URL,data,{headers: headers}).pipe(
          finalize(() => this.isLoadingSubject.next(false))
        );
  }

  allCategories(page=1,search=''){ //para poder filtrar las categorias por nombre
    //esto va al inicio de las funciones de servicio, realiza un tiempo de respuesta entre la consulta y respuesta del api
    this.isLoadingSubject.next(true);
    //se declara la autenticacion del token y se envia en la cabecera del url
    let headers = new HttpHeaders({'Authorization' : 'Bearer' + this.authservice.token});
    //parametros para los filtros de busqueda de usuarios
    let LINK="";
    if (search) {
    LINK = LINK + "&search="+search;
    }
    //se declara la url con el /admin para distingir de los usuarios en jwt token
    let URL = URL_SERVICIOS + "/products/categories/all?page="+page+LINK;
    //se envia la informacion al url con la informacion y en la cabecera el token
    return this.http.get(URL,{headers: headers}).pipe(
      finalize(() => this.isLoadingSubject.next(false))
    );
  }

  updateCategoria(categorie_id:any, data:any){
    //esto va al inicio de las funciones de servicio, realiza un tiempo de respuesta entre la consulta y respuesta del api
    this.isLoadingSubject.next(true);
    //se declara la autenticacion del token y se envia en la cabecera del url
    let headers = new HttpHeaders({'Authorization' : 'Bearer' + this.authservice.token});
    //se declara la url con el /admin para distingir de los registros en jwt token
    let URL = URL_SERVICIOS + "/products/categories/update/"+categorie_id;
    //se envia la informacion al url con la información y en la cabecera el token
    return this.http.post(URL,data,{headers: headers}).pipe(
      finalize(() => this.isLoadingSubject.next(false))
    );
  }

  deleteCategoria(categorie_id:any){
    //esto va al inicio de las funciones de servicio, realiza un tiempo de respuesta entre la consulta y respuesta del api
    this.isLoadingSubject.next(true);
    //se declara la autenticacion del token y se envia en la cabecera del url
    let headers = new HttpHeaders({'Authorization' : 'Bearer' + this.authservice.token});
    //se declara la url con el /admin para distingir de los registros en jwt token
    let URL = URL_SERVICIOS + "/products/categories/delete/"+categorie_id;
    //se envia la informacion al url con la información y en la cabecera el token
    return this.http.delete(URL,{headers: headers}).pipe(
      finalize(() => this.isLoadingSubject.next(false))
    );
  }

}

