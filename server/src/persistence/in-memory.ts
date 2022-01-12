import { MovieModel } from '../models';

import {movieItems} from './test-data';
import {Repository} from "./repository";

export class InMemory implements Repository {

    movieItems: MovieModel[] = movieItems;

    getMovies = async () => this.movieItems;
}