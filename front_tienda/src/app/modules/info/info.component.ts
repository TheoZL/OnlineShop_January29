import { Component, OnInit } from '@angular/core';

declare var $: any;
declare function initPageTienda([]): any;
declare function hero_slider_active(): any;
declare function loadModalDetailProduct(): any;

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  constructor(
  ) { }

  ngOnInit(): void {
    setTimeout(() => {
      initPageTienda($);
    }, 50);
  }


}

