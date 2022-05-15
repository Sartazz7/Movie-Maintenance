import { Component, OnInit, Input } from '@angular/core';
import { Movie } from 'src/app/Models';
import { RequestsService } from 'src/app/services/requests.service';
import { faThumbsDown, faThumbsUp } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'app-movie-item',
    templateUrl: './movie-item.component.html',
    styleUrls: ['./movie-item.component.css']
})
export class MovieItemComponent implements OnInit {
    @Input() movie!: Movie;
    faThumbsUp = faThumbsUp;
    faThumbsDown = faThumbsDown;

    constructor(private requestsService: RequestsService) { }

    ngOnInit(): void {
    }

    upvote(){
        this.movie.votes += 1;
        this.requestsService.updateVotes(this.movie).subscribe();
    }

    downvote(){
        this.movie.votes -= 1;
        this.requestsService.updateVotes(this.movie).subscribe();
    }

}
