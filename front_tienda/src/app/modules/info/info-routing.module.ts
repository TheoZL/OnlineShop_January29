import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InfoComponent } from './info.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ReturnPolicyComponent } from './return-policy/return-policy.component';
import { TermsConditionsComponent } from './terms-conditions/terms-conditions.component';

const routes: Routes = [
  {
    path: '',
    component: InfoComponent,
    children: [
      {
        path: 'PrivacyPolicy',
        component: PrivacyPolicyComponent,
      },
      {
        path: 'AboutUs',
        component: AboutUsComponent
      },
      {
        path: 'ReturnPolicy',
        component: ReturnPolicyComponent,
      },
      {
          path: 'TermsConditions',
          component: TermsConditionsComponent,
        },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InfoRoutingModule { }
