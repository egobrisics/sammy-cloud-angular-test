import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { Router } from '@angular/router';
import { AuthToken } from '../../models/auth-token';

@Component({
  selector: 'app-client-login',
  templateUrl: './client-login.component.html',
  styleUrls: ['./client-login.component.css']
})
export class ClientLoginComponent implements OnInit {

  public username: string;
  public password: string;
  public error: string;

  constructor(public router: Router, private authService: AuthenticationService) { }

  ngOnInit() {
  }

  onLogin() {
    this.error = '';

    this.authService.login(this.username, this.password).
      subscribe((data: AuthToken) => {

        if (data != null) {
            this.router.navigate(['/client']);
        } else {
            this.error = 'Invalid username or password';
        }
      },
          error => this.error = 'Invalid username or password'
    );
  }
}
