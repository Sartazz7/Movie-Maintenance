export interface Movie {
    id?: number;
    title: string;
    description: string;
    releaseDate: Date;
    votes: number;
    numActors?: number;
}

export interface Actor {
    id?: number;
    name: string;
    dob: Date;
    numMovies?: number;
}

export interface Relation {
    id?: number;
    movieId: number;
    actorId: number;
}