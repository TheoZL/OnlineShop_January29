import { Component, OnInit } from '@angular/core';
import { CartShopsService } from '../../home/_services/cart-shops.service';

declare function alertDanger([]):any;
declare function alertSuccess([]):any;
declare var searchmovilesoff: any;

@Component({
  selector: 'app-shopping-carts',
  templateUrl: './shopping-carts.component.html',
  styleUrls: ['./shopping-carts.component.scss']
})
export class ShoppingCartsComponent implements OnInit {

  listCarts:any = [];
  TotalPrice:any = 0;
  TotalPriceEnv:any = 0;
  ConversationDolar:any = 800;
  cupones:any = null;

  constructor(
    public _cartService: CartShopsService,
  ) { }

  ngOnInit(): void {
    //obtener precio del dolar
    searchmovilesoff();
    this._cartService.ToDolar().subscribe((resp:any) => {
      this.ConversationDolar = resp.venta;
      console.log(this.ConversationDolar);
    })
    this._cartService.currentDataCart$.subscribe((resp:any) => {
      console.log(resp);
      this.listCarts = resp;
      this.TotalPrice = this.listCarts.reduce((sum:any, item:any) => sum + item.total, 0);
      this.TotalPriceEnv = this.TotalPrice
      if (this.TotalPrice < 25001 && this.TotalPrice > 0){
        this.TotalPriceEnv += 2000;
      }
    })
    
  }

  deleteItem(cart:any){
    this._cartService.deleteCartShop(cart.id).subscribe();
    this._cartService.removeItemCart(cart);
  }
  //reducir al carrito
  reduceQ(cart:any){
    if(cart.cantidad > 1){
      cart.cantidad --;
    }
    cart.total = cart.subtotal*cart.cantidad;
    this._cartService.updateCartShop(cart.id,cart).subscribe((resp:any) => {
      console.log(resp);
      if(resp.message == 403){
        alertDanger(resp.message_text);
        return;
      }else{
        this._cartService.changeCart(resp.cart_shop);
      }
    })
  }
  //añadir al carriot
  addQ(cart:any){
    cart.cantidad ++;
    cart.total = cart.subtotal*cart.cantidad;
    this._cartService.updateCartShop(cart.id,cart).subscribe((resp:any) => {
      console.log(resp);
      if(resp.message == 403){
        alertDanger(resp.message_text);
        return;
      }else{
        this._cartService.changeCart(resp.cart_shop);
      }
    })
  }

  applyCupon(){
    if(!this.cupones){
      alertDanger("NECESITAS INGRESAR UN CUPON");
      return;
    }
    this._cartService.applyCupon(this.cupones).subscribe((resp:any) => {
      console.log(resp);
      if(resp.message == 403){
        //alert(resp.message_text);
        alertDanger(resp.message_text);
        return;
      }
      resp.carts.data.forEach((element:any) => {
        this._cartService.changeCart(element);
      });
      //alert("SE PROCESO EL CUPON DE MANERA CORRECTA");
      alertSuccess("SE PROCESO EL CUPON DE MANERA CORRECTA");
    });
  }
}
