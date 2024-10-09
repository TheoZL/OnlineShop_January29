import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { InfoComponent } from './info.component';
import { InfoRoutingModule } from './info-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ReturnPolicyComponent } from './return-policy/return-policy.component';
import { TermsConditionsComponent } from './terms-conditions/terms-conditions.component';
import { AboutUsComponent } from './about-us/about-us.component';


@NgModule({
  declarations: [
    InfoComponent,
    ReturnPolicyComponent,
    TermsConditionsComponent,
    AboutUsComponent,
  ],
  imports: [
    CommonModule,
    InfoRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
  ]
})
export class InfoModule { }
