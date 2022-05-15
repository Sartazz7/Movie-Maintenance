import { Component, OnInit } from '@angular/core';
import { RequestsService } from 'src/app/services/requests.service';
import { Actor, Relation } from 'src/app/Models';

@Component({
    selector: 'app-actors',
    templateUrl: './actors.component.html',
    styleUrls: ['./actors.component.css']
})
export class ActorsComponent implements OnInit {
    actors: Actor[] = [];
    relations: Relation[] = [];

    constructor(private requestsService: RequestsService) { }

    ngOnInit(): void {
        this.requestsService.getRelations().subscribe((relations) => {
            this.relations = relations;

            this.requestsService.getActors().subscribe((actors) => {
                this.actors = actors;
                for(let i=0; i<this.actors.length; i++){
                    this.actors[i].numMovies = this.relations.filter(relation => relation.actorId === this.actors[i].id).length;
                }
            });
        });
    }

}
