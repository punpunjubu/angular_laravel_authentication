import { Component, OnInit } from '@angular/core';
import { CallingService } from '../.././service/calling.service';
import { TokenService } from '../.././service/token.service';
import { Router } from '@angular/router';
import { AuthService } from '../.././service/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
  public form = {
    email: null,
    password: null
  };
  public error = null;
  constructor(
    private calling: CallingService,
    private token: TokenService,
    private router: Router,
    private auth: AuthService
  ) { }

  ngOnInit() {
  }
  onSubmit(loginForm) {
    this.calling.login(this.form).subscribe(
      data => this.handleResponse(data),
      error => this.handleerror(error)
    );
  }
  handleResponse(data) {
    this.token.handle(data.access_token);
    this.auth.changeAuthStatus(true);
    this.router.navigateByUrl('/profile');
  }
  handleerror(error) {
    this.error = error.error.error;
  }

}
