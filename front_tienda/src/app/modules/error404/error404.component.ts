import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-error404',
  templateUrl: './error404.component.html',
  styleUrls: ['./error404.component.scss']
})
export class Error404Component implements OnInit {

  countdown: number = 5;

  constructor(private router: Router) { }

  ngOnInit(): void {
    const preloader = document.querySelector('.preloader');
    
    if (preloader) {
      preloader.remove();
    }

    const interval = setInterval(() => {
      this.countdown--;

      if (this.countdown <= 0) {
        clearInterval(interval);
        this.router.navigate(['/']); // Esto redirige al usuario a la página principal.
      }
    }, 1000);
  }

}
