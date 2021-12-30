import {getRandomNumber} from "./get-random-number";
import {movies} from "../data/movies";

export const getMovie = () => {
    return movies[getRandomNumber(0, movies.length)]
}