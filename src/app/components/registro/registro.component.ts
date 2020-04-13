import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  email: string;
  password: string;

  constructor(private router: Router, private flasMessages: FlashMessagesService, private loginService: LoginService) { }

  ngOnInit(): void {
    this.loginService.getAuth().subscribe(auth => {
      if (auth) {
        this.router.navigate(['/']);
      }
    });
  }

  registro() {
    this.loginService.createUser(this.email, this.password).then(response => {
      this.router.navigate(['/']);
    }).catch(error => {
      this.flasMessages.show(error.message, {
        cssClass: 'alert-danger', timeout: 4000
      });
    });
  }

}
