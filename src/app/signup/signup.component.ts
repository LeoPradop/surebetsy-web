import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth-service.service';
import { UserServiceService } from '../services/user-service.service';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
    test: Date = new Date();
    registerForm: FormGroup;
    focus;
    focus1;
    focus2;
    focus3;
    focus4;
    focus5;

    constructor(
        private _authServive: AuthService,
        private _userService: UserServiceService,
        private _formBuilder: FormBuilder,
        private router: Router
    ) { }

    ngOnInit() {
        this.registerForm = this._formBuilder.group({
            name: ['', [Validators.required]],
            lastName: ['', [Validators.required]],
            secondName: ['', [Validators.required]],
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(8)]],
            confirmPassword: ['', [Validators.required, Validators.minLength(8)]]
        });
    }

    register() {
        this._authServive.SignUp(this.registerForm.controls.email.value, this.registerForm.controls.password.value).then((result) => {
            this._authServive.SetUserData(result.user);
            this._userService.addUserData({
                id: result.user.uid,
                isPremium: false,
                name: this.registerForm.controls.name.value,
                lastName: this.registerForm.controls.lastName.value,
                secondName: this.registerForm.controls.secondName.value,
            }).then((result) => {
                console.log(result);
                this.router.navigateByUrl('/login');
            }).catch((error) => {
                console.log(error);
                
            });
        }).catch((error) => {
            console.log(error);
        });
    }

    testId() {
        let users;
        this._userService.getUserData('w2MrgbHl0Fa5figo7n7gnM7bfYB2').subscribe(result => {
            users = result;
            console.log(users.find(user => user.id == 'w2MrgbHl0Fa5figo7n7gnM7bfYB2'));
        });
    }
}
