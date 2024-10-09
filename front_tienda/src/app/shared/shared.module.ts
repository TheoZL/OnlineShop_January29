import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { CDetailProductComponent } from './c-detail-product/c-detail-product.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    CDetailProductComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    RouterModule
  ],
  //Exportar el header y footer para visualizar
  exports: [
    HeaderComponent,
    FooterComponent,
    CDetailProductComponent
  ]
})
export class SharedModule { }
