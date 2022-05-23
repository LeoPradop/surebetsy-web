import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  focus;
  focus1;
  constructor(
    public _authService: AuthService,
    private _formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.loginForm = this._formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  login() {
    this._authService.SignIn(this.loginForm.controls.email.value, this.loginForm.controls.password.value).then((result) => {
      this._authService.SignInSuccess(result);
      console.log(result);
      console.log(this._authService.userData);
    }).catch((error) => {
      console.log(error);
    });
  }

}
