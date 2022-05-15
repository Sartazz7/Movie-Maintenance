import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Movie, Actor, Relation } from '../Models';

const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json'
    })
}

@Injectable({
    providedIn: 'root'
})
export class RequestsService {
    private baseUrl = "http://localhost:8000/";

    constructor(private http: HttpClient) { }

    getMovies(): Observable<Movie[]> {
        return this.http.get<Movie[]>(this.baseUrl+'movies/',httpOptions);
    }

    getActors(): Observable<Actor[]> {
        return this.http.get<Actor[]>(this.baseUrl+'actors/',httpOptions);
    }

    getRelations(): Observable<Relation[]> {
        return this.http.get<Relation[]>(this.baseUrl+'relations/',httpOptions);
    }

    updateVotes(movie: Movie): Observable<Movie> {
        const url = `${this.baseUrl}movies/${movie.id}/`;
        return this.http.put<Movie>(url,movie,httpOptions);
    }
}
