import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { AuthService } from '../../auth';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { URL_SERVICIOS } from 'src/app/config/config';
import { finalize } from 'rxjs/operators';
import { DeleteUserComponent } from '../components/delete-user/delete-user.component';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

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

    //función para listar a los usuarios
  allUsers(page=1,state='',search=''){ //para poder filtrar los usuarios por estados y nombre
    //esto va al inicio de las funciones de servicio, realiza un tiempo de respuesta entre la consulta y respuesta del api
    this.isLoadingSubject.next(true);
    //se declara la autenticacion del token y se envia en la cabecera del url
    let headers = new HttpHeaders({'Authorization' : 'Bearer' + this.authservice.token});
    //parametros para los filtros de busqueda de usuarios
    let LINK="";
    if(state){
      LINK = LINK + "&state="+state;
    }
    if (search) {
    LINK = LINK + "&search="+search;
    }
    //se declara la url con el /my para distingir de los usuarios en jwt token
    let URL = URL_SERVICIOS + "/users/admin/all?page="+page+LINK;
    //se envia la informacion al url con la informacion y en la cabecera el token
    return this.http.get(URL,{headers: headers}).pipe(
      finalize(() => this.isLoadingSubject.next(false))
    );
  }

  //función para registrar usuario
  register(data:any){
    //esto va al inicio de las funciones de servicio, realiza un tiempo de respuesta entre la consulta y respuesta del api
    this.isLoadingSubject.next(true);
    //se declara la autenticacion del token y se envia en la cabecera del url
    let headers = new HttpHeaders({'Authorization' : 'Bearer' + this.authservice.token});
    //se declara la url con el /my para distingir de los registros en jwt token
    let URL = URL_SERVICIOS + "/users/admin/register";
    //se envia la informacion al url con la información y en la cabecera el token
    return this.http.post(URL,data,{headers: headers}).pipe(
      finalize(() => this.isLoadingSubject.next(false))
    );
  }

  //función para actualizar un usuario
  update(user_Id,data){
    //esto va al inicio de las funciones de servicio, realiza un tiempo de respuesta entre la consulta y respuesta del api
    this.isLoadingSubject.next(true);
    //se declara la autenticacion del token y se envia en la cabecera del url
    let headers = new HttpHeaders({'Authorization' : 'Bearer' + this.authservice.token});
    //se declara la url con el /my para distingir de los registros en jwt token
    let URL = URL_SERVICIOS + "/users/admin/update/"+user_Id;
    //se envia la informacion al url con la informacion y en la cabecera el token
    return this.http.put(URL,data,{headers: headers}).pipe(
      finalize(() => this.isLoadingSubject.next(false))
    );

  }
  
  //función para eliminar un usuario
  deleteUser(user_Id){
    //esto va al inicio de las funciones de servicio, realiza un tiempo de respuesta entre la consulta y respuesta del api
    this.isLoadingSubject.next(true);
    //se declara la autenticacion del token y se envia en la cabecera del url
    let headers = new HttpHeaders({'Authorization' : 'Bearer' + this.authservice.token});
    //se declara la url con el /my para distingir de los registros en jwt token
    let URL = URL_SERVICIOS + "/users/admin/delete/"+user_Id;
    //se envia la informacion al url con la informacion y en la cabecera el token
    return this.http.delete(URL,{headers: headers}).pipe(
      finalize(() => this.isLoadingSubject.next(false))
    );
  }

}
