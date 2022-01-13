import { MovieModel } from '../models';

import {movieItems} from './test-data';
import {Repository} from "./repository";

export class InMemory implements Repository {

    movieItems: MovieModel[] = movieItems;

    getMovies = async () => this.movieItems;

    getMovie = async (): Promise<MovieModel> => {
        return new Promise( (resolve, reject) => {
            let rand: number  = Math.floor(Math.random() * ((this.movieItems.length) - 0) + 0);
            const movie: MovieModel = this.movieItems[rand];
            resolve(movie)
        })

    }
}