import {Request, Response} from "express";
import {repository} from "../../persistence";

export const getMovie = async (req: Request, res: Response) => {
    try {
        const getMovieResult = await repository.getMovie();
        res.status(200);
        res.send(getMovieResult);

    } catch (err) {
        console.log(err);
        res.status(500);
        res.send({ error: 'An unknown error occured' });
    }
};