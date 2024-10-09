import { Component, OnInit } from '@angular/core';


declare var $: any;
declare function initPageTienda([]): any;

@Component({
  selector: 'app-auth-profile',
  templateUrl: './auth-profile.component.html',
  styleUrls: ['./auth-profile.component.css']
})
export class AuthProfileComponent implements OnInit {

  constructor() { }

  resolved(captchaResponse: string) {
    console.log(`Resolved captcha with response: ${captchaResponse}`);
  }

  ngOnInit(): void {
    setTimeout(() => {
      initPageTienda($);
    }, 50)
  }

}
