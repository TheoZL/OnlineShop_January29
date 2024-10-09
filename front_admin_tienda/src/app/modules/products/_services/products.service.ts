import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { AuthService } from '../../auth';
import { finalize } from 'rxjs/operators';
import { URL_SERVICIOS } from 'src/app/config/config';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

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

  getInfo(){
    this.isLoadingSubject.next(true);
    //se declara la autenticacion del token y se envia en la cabecera del url
    let headers = new HttpHeaders({'Authorization' : 'Bearer' + this.authservice.token});
    //se declara la url con el /admin para distingir de los registros en jwt token
    let URL = URL_SERVICIOS + "/products/get_info";
    return this.http.get(URL,{headers: headers}).pipe(
      finalize(() => this.isLoadingSubject.next(false))
    );
  }

  allProducts(page=1,LINK=''){
    this.isLoadingSubject.next(true);
    //se declara la autenticacion del token y se envia en la cabecera del url
    let headers = new HttpHeaders({'Authorization' : 'Bearer' + this.authservice.token});
    //se declara la url con el /admin para distingir de los registros en jwt token
    let URL = URL_SERVICIOS + "/products/all?page="+page+LINK;
    return this.http.get(URL,{headers: headers}).pipe(
      finalize(() => this.isLoadingSubject.next(false))
    );
  }

  createProduct(data:any){
    //esto va al inicio de las funciones de servicio, realiza un tiempo de respuesta entre la consulta y respuesta del api
    this.isLoadingSubject.next(true);
    //se declara la autenticacion del token y se envia en la cabecera del url
    let headers = new HttpHeaders({'Authorization' : 'Bearer' + this.authservice.token});
    //se declara la url con el /admin para distingir de los registros en jwt token
    let URL = URL_SERVICIOS + "/products/add";
    //se envia la informacion al url con la información y en la cabecera el token
    return this.http.post(URL,data,{headers: headers}).pipe(
      finalize(() => this.isLoadingSubject.next(false))
    );
  }

  showProduct(product_id){
  this.isLoadingSubject.next(true);
    let headers = new HttpHeaders({'Authorization' : 'Bearer '+this.authservice.token});
    let URL = URL_SERVICIOS + "/products/show_product/"+product_id;
    return this.http.get(URL,{headers: headers}).pipe(
      finalize(() => this.isLoadingSubject.next(false))
    );
  }

  updateProduct(product_id:string,data:any){
    this.isLoadingSubject.next(true);
    let headers = new HttpHeaders({'Authorization' : 'Bearer '+this.authservice.token});
    let URL = URL_SERVICIOS + "/products/update/"+product_id;
    return this.http.post(URL,data,{headers: headers}).pipe(
      finalize(() => this.isLoadingSubject.next(false))
    );
  }

  // GALERIA DE IMAGENES DEL PRODUCTO

  addImagenProduct(data:any){
    this.isLoadingSubject.next(true);
    let headers = new HttpHeaders({'Authorization' : 'Bearer '+this.authservice.token});
    let URL = URL_SERVICIOS + "/products/imgs/add";
    return this.http.post(URL,data,{headers: headers}).pipe(
      finalize(() => this.isLoadingSubject.next(false))
    );
  }

  deleteImagenProduct(imagen_id:any){
    this.isLoadingSubject.next(true);
    let headers = new HttpHeaders({'Authorization' : 'Bearer '+this.authservice.token});
    let URL = URL_SERVICIOS + "/products/imgs/delete/"+imagen_id;
    return this.http.delete(URL,{headers: headers}).pipe(
      finalize(() => this.isLoadingSubject.next(false))
    );
  }

   // INVENTARIO DE PRODUCTO
  addInvetario(data:any) {
    this.isLoadingSubject.next(true);
    let headers = new HttpHeaders({'Authorization' : 'Bearer '+this.authservice.token});
    let URL = URL_SERVICIOS + "/products/inventario/add";
    return this.http.post(URL,data,{headers: headers}).pipe(
      finalize(() => this.isLoadingSubject.next(false))
    );
  }

  updateInventario(inventario_id,data){
    this.isLoadingSubject.next(true);
    let headers = new HttpHeaders({'Authorization' : 'Bearer '+this.authservice.token});
    let URL = URL_SERVICIOS + "/products/inventario/update_size/"+inventario_id;
    return this.http.put(URL,data,{headers: headers}).pipe(
      finalize(() => this.isLoadingSubject.next(false))
    );
  }

  deleteInventario(inventario_id){
    this.isLoadingSubject.next(true);
    let headers = new HttpHeaders({'Authorization' : 'Bearer '+this.authservice.token});
    let URL = URL_SERVICIOS + "/products/inventario/delete_size/"+inventario_id;
    return this.http.delete(URL,{headers: headers}).pipe(
      finalize(() => this.isLoadingSubject.next(false))
    );
  }

  updateSubInventario(sub_inventario_id,data){
    this.isLoadingSubject.next(true);
    let headers = new HttpHeaders({'Authorization' : 'Bearer '+this.authservice.token});
    let URL = URL_SERVICIOS + "/products/inventario/update/"+sub_inventario_id;
    return this.http.put(URL,data,{headers: headers}).pipe(
      finalize(() => this.isLoadingSubject.next(false))
    );
  }

  deleteSubInventario(sub_inventario_id){
    this.isLoadingSubject.next(true);
    let headers = new HttpHeaders({'Authorization' : 'Bearer '+this.authservice.token});
    let URL = URL_SERVICIOS + "/products/inventario/delete/"+sub_inventario_id;
    return this.http.delete(URL,{headers: headers}).pipe(
      finalize(() => this.isLoadingSubject.next(false))
    );
  }

}
