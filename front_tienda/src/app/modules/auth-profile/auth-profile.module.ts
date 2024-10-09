import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthProfileRoutingModule } from './auth-profile-routing.module';
import { AuthProfileComponent } from './auth-profile.component';
import { LoginComponent } from './login/login.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { RecaptchaModule } from 'ng-recaptcha';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';

@NgModule({
  declarations: [
    AuthProfileComponent,
    LoginComponent,
    RegisterComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent
  ],
  imports: [
    CommonModule,
    AuthProfileRoutingModule,
    //se exporta el shared, header y footer
    SharedModule,
    //estas importaciones son requeridas para utilizar en angular durante la navegacion de html
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    RecaptchaModule,
    
  ]
})
export class AuthProfileModule { }
