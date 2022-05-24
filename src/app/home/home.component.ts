import { Component, OnInit } from '@angular/core';
import { SurebetsService } from '../services/surebets.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
    model = {
        left: true,
        middle: false,
        right: false
    };

    focus;
    focus1;
    surebets = [];

    constructor(
        private _surebetsService: SurebetsService
    ) { }

    ngOnInit() {
        this.getBets()
    }

    getBets() {
        this._surebetsService.getSurebets().subscribe(result => {
            this.surebets = result;
            console.log(result);            
        });
    }
}
