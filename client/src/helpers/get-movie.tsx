import {getRandomNumber} from "./get-random-number";
import {movies} from "../data/movies";
import {MovieModel} from "../../../server/src/models";

export const getMovie = (arr: MovieModel[]) => {
    return arr[getRandomNumber(0, arr.length)]
}