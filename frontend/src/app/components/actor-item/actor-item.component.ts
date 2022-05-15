import { Component, OnInit, Input } from '@angular/core';
import { Actor } from 'src/app/Models';

@Component({
    selector: 'app-actor-item',
    templateUrl: './actor-item.component.html',
    styleUrls: ['./actor-item.component.css']
})
export class ActorItemComponent implements OnInit {
    @Input() actor!: Actor;

    constructor() { }

    ngOnInit(): void {
    }

}
