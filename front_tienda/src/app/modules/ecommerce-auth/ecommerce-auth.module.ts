import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EcommerceAuthRoutingModule } from './ecommerce-auth-routing.module';
import { EcommerceAuthComponent } from './ecommerce-auth.component';
import { ShoppingCartsComponent } from './shopping-carts/shopping-carts.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ProfileInformationComponent } from './profile-client/profile-information/profile-information.component';
import { ProfileAddressComponent } from './profile-client/profile-address/profile-address.component';
import { ProfilePasswordsComponent } from './profile-client/profile-passwords/profile-passwords.component';
import { OrdersClientsComponent } from './profile-client/orders-clients/orders-clients.component';
import { OrdersReviewClientsComponent } from './profile-client/orders-review-clients/orders-review-clients.component';
import { OrdersReviewAddClientsComponent } from './profile-client/orders-review-add-clients/orders-review-add-clients.component';
import { WishlistClientsComponent } from './profile-client/wishlist-clients/wishlist-clients.component';
import { ProfileClientHomeComponent } from './profile-client/profile-client-home/profile-client-home.component';
import { CheckoutPaymentComponent } from './checkout-payment/checkout-payment.component';


@NgModule({
  declarations: [
    EcommerceAuthComponent,
    ShoppingCartsComponent,
    ProfileInformationComponent,
    ProfileAddressComponent,
    ProfilePasswordsComponent,
    OrdersClientsComponent,
    OrdersReviewClientsComponent,
    OrdersReviewAddClientsComponent,
    WishlistClientsComponent,
    ProfileClientHomeComponent,
    CheckoutPaymentComponent,
  ],
  imports: [
    CommonModule,
    EcommerceAuthRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
  ]
})
export class EcommerceAuthModule { }
