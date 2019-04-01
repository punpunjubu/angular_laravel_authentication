import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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
  constructor(private http: HttpClient) { }

  ngOnInit() {
  }
  onSubmit(loginForm) {
    console.log('loginForm', loginForm);
    console.log('form', this.form);
    return this.http.post('http://localhost:8000/api/auth/login', this.form).subscribe(
      data => console.log(data),
      error => console.log(error)
    );
  }

}
