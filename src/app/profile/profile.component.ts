import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth-service.service';
import { UserServiceService } from '../services/user-service.service';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss']
})

export class ProfileComponent implements OnInit {
    userInfo;

    constructor(
        private _authService: AuthService,
        private _userService: UserServiceService
    ) { }

    ngOnInit() {
        this.getUserInfo();
    }

    getUserInfo() {
        this.userInfo = JSON.parse(localStorage.getItem('user'));
        console.log(this.userInfo);
        
        let users;
        this._userService.getUserData(this.userInfo.uid).subscribe(result => {
            users = result;
            console.log(result);
            
            console.log(users.find(user => user.id == this.userInfo.uid));
            
            this.userInfo = {
                ...this.userInfo,
                ...users.find(user => user.id == this.userInfo.uid)
            };

            console.log(this.userInfo);
            
        });
    }
}
