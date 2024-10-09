import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthProfileComponent } from './auth-profile.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';


const routes: Routes = [
  {
    
    path: '',
    component: AuthProfileComponent,
    children: [
      {
        path: 'reset-password',
        component: ResetPasswordComponent,
      },
      {
      path: 'login',
      component: LoginComponent,
    },
    {
      path: 'registro',
      component: RegisterComponent,
    },
    {
      path: 'forgot-password',
      component: ForgotPasswordComponent,
    },
  ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthProfileRoutingModule { }
