import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AuthService } from '../../auth-profile/_services/auth.service';
import { URL_SERVICES } from 'src/app/config/config';

@Injectable({
  providedIn: 'root'
})
export class CartShopsService {

  public cart = new BehaviorSubject<Array<any>>([]);
  public currentDataCart$ = this.cart.asObservable();
  public wishlist = new BehaviorSubject<Array<any>>([]);
  public currentDataWish$ = this.wishlist.asObservable();
  constructor(
    public _authServices: AuthService,
    public http: HttpClient,
  ) { }
  //agregar articulo al carrito
  changeCart(DATACART: any) {
    //lista de los valores actuales
    let listCart = this.cart.getValue();
    //articulo nuevo
    let objIndex = listCart.findIndex(item => item.id == DATACART.id);
    //si el item existe ya en el carrito
    if (objIndex != -1) {
      listCart[objIndex] = DATACART;
      //si no existe el articulo
    } else {
      listCart.unshift(DATACART);
    }
    this.cart.next(listCart);
  }
  //reiniciar el carrito de compras en su totalidad
  resetCart() {
    let listCart: any = [];
    this.cart.next(listCart);
  }
  //eliminar articulo del carrito
  removeItemCart(DATACART: any) {
    let listCart = this.cart.getValue();
    let objIndex = listCart.findIndex(item => item.id == DATACART.id);
    if (objIndex != -1) {
      listCart.splice(objIndex, 1);
    }
    this.cart.next(listCart);
  }

  //agregar producto a la lista de deseados
  changeWish(DATAWISH:any){
    let listWish = this.wishlist.getValue();
    let objIndex = listWish.findIndex(item => item.id == DATAWISH.id);
    if(objIndex != -1){
      listWish[objIndex] = DATAWISH;
    }else{
      listWish.unshift(DATAWISH);
    }
    this.wishlist.next(listWish);
  }

  //borrar productos de la lista de deseados
  removeItemWish(DATAWISH:any){
    let listWish = this.wishlist.getValue();
    let objIndex = listWish.findIndex(item => item.id == DATAWISH.id);
    if(objIndex != -1){
      listWish.splice(objIndex,1);
    }
    this.wishlist.next(listWish);
  }

  //lista de deseados
  listWish(){
    let headers = new HttpHeaders({'Authorization': 'Bearer ' + this._authServices.token});
    let URL = URL_SERVICES + "/ecommerce/wishlist";
    return this.http.get(URL,{headers: headers});
  }
  
  listCartShop() {
    let headers = new HttpHeaders({ 'Authorization': 'Bearer ' + this._authServices.token });
    let URL = URL_SERVICES + "/ecommerce/cart/add";
    return this.http.get(URL, { headers: headers });
  }

  applyCupon(cupon: any) {
    let headers = new HttpHeaders({ 'Authorization': 'Bearer ' + this._authServices.token });
    let URL = URL_SERVICES + "/ecommerce/cart/applycupon/" + cupon;
    return this.http.get(URL, { headers: headers });
  }

  addCartShop(data: any) {
    let headers = new HttpHeaders({ 'Authorization': 'Bearer ' + this._authServices.token });
    let URL = URL_SERVICES + "/ecommerce/cart/add";
    return this.http.post(URL, data, { headers: headers });
  }

  //añadir a la lista de deseados
  addWishList(data: any) {
    let headers = new HttpHeaders({ 'Authorization': 'Bearer ' + this._authServices.token });
    let URL = URL_SERVICES + "/ecommerce/wishlist";
    return this.http.post(URL, data, { headers: headers });
  }

  updateCartShop(cart_id: any, data: any) {
    let headers = new HttpHeaders({ 'Authorization': 'Bearer ' + this._authServices.token });
    let URL = URL_SERVICES + "/ecommerce/cart/add/" + cart_id;
    return this.http.put(URL, data, { headers: headers });
  }

  deleteCartShop(cart_id: any) {
    let headers = new HttpHeaders({ 'Authorization': 'Bearer ' + this._authServices.token });
    let URL = URL_SERVICES + "/ecommerce/cart/add/" + cart_id;
    return this.http.delete(URL, { headers: headers });
  }

  //borrar lista de deseados
  deleteWishList(wish_id:any){
    let headers = new HttpHeaders({'Authorization': 'Bearer ' + this._authServices.token});
    let URL = URL_SERVICES + "/ecommerce/wishlist/"+wish_id;
    return this.http.delete(URL,{headers: headers});
  }

  ToDolar() {
    return this.http.get("https://apis.gometa.org/tdc/tdc.json");
  }
}

