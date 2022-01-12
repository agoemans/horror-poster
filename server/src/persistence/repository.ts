import { MovieModel } from '../models';

export interface Repository {
    getMovies: () => Promise<MovieModel[]>;
}