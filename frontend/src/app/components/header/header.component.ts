import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
    title = 'Movie Maintenance';

    constructor(private router: Router) { }

    ngOnInit(): void {
    }

    hasRoute(route: string) {
        return this.router.url === route;
    }
}