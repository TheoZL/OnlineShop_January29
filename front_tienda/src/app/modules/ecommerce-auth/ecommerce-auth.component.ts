import { Component, OnInit } from '@angular/core';

declare var $:any;
declare function initPageTienda([]):any;
declare var searchmovilesoff: any;

@Component({
  selector: 'app-ecommerce-auth',
  templateUrl: './ecommerce-auth.component.html',
  styleUrls: ['./ecommerce-auth.component.scss']
})
export class EcommerceAuthComponent implements OnInit {

  constructor() { }
  
  ngOnInit(): void {
    searchmovilesoff();
    setTimeout(() => {
      initPageTienda($);
    }, 50);
  }

}
