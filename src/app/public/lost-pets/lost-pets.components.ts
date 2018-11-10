import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-lost-pets',
    templateUrl: 'lost-pets.component.html',
    // styleUrls: ['lost-pets.component.scss']
})
export class LostPetsComponent implements OnInit {
    lostPets = [];

    constructor(
        private router: ActivatedRoute
    ) {
    }

    ngOnInit() {
        console.log(this.router.snapshot.data);
    }
}
