import { Component, OnInit } from '@angular/core';
import { CallingService } from '../.././service/calling.service';
import { TokenService } from '../.././service/token.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.sass']
})
export class SignupComponent implements OnInit {
  public form = {
    name: null,
    email: null,
    password: null,
    password_confirmation: null,
  };
  public error = [];
  constructor(
    private calling: CallingService,
    private token: TokenService,
    private router: Router
  ) { }

  ngOnInit() {
  }
  onSubmit(loginForm) {
    this.calling.signup(this.form).subscribe(
      data => this.handleResponse(data),
      error => this.haddleerror(error)
    );
  }
  handleResponse(data) {
    this.token.handle(data.access_token);
    this.router.navigateByUrl('/profile');
  }
  haddleerror(error) {
    this.error = error.error.errors;
  }

}
