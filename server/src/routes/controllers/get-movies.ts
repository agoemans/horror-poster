import { Request, Response } from 'express';

import { repository } from '../../persistence';

export const getMovies = async (req: Request, res: Response) => {
    try {
        const getMoviesResult = await repository.getMovies();
        res.status(200);
        res.send(getMoviesResult);

    } catch (err) {
        console.log(err);
        res.status(500);
        res.send({ error: 'An unknown error occured' });
    }
};
