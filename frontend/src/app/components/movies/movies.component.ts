import { Component, OnInit } from '@angular/core';
import { RequestsService } from 'src/app/services/requests.service';
import { Movie, Relation } from 'src/app/Models';

@Component({
    selector: 'app-movies',
    templateUrl: './movies.component.html',
    styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
    movies: Movie[] = [];
    relations: Relation[] = [];

    constructor(private requestsService: RequestsService) { }

    ngOnInit(): void {
        this.requestsService.getRelations().subscribe((relations) => {
            this.relations = relations;

            this.requestsService.getMovies().subscribe((movies) => {
                this.movies = movies;
                for(let i=0; i<this.movies.length; i++){
                    this.movies[i].numActors = this.relations.filter(relation => relation.movieId === this.movies[i].id).length;
                }
            });
        });
    }

    sortByTitle(){
        this.movies.sort((a,b) => {return a.title > b.title ? 1 : -1});
    }

    sortByReleaseDate(){
        this.movies.sort((a,b) => {return a.releaseDate > b.releaseDate ? 1 : -1});
    }

}
