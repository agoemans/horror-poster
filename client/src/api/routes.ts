//todo toggle between production and dev
const url = "http://localhost:3000";

let requestOptions: RequestInit = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: '',
    mode: 'cors'
};

export const getMovies = async () => {
    const movies = await fetch(`${url}/api/movies`);

    return movies.text();
};

export const getMovie = async () => {
    const movie = await fetch(`${url}/api/movie`);

    return movie.text();
};