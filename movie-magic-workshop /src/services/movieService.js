import movieData from "../data/movieData.js";
import uniqid from 'uniqid';

async function getAll(query = {}) {

    let movies = await movieData.getMovies();

    if (query.title) {
        movies = movies.filter(movie => movie.title.includes(query.title));
    }

    if (query.genre) {
        movies = movies.filter(movie => movie.genre === query.genre);
    }

    if (query.year) {
        movies = movies.filter(movie => movie.year === query.year);
    }

    return movies;

}

async function save(movie) {
    movie.id = uniqid();
    movie.rating = Number(movie.rating);
    movieData.saveMovie(JSON.stringify(movie));
}

async function getOne(id) {
    const movies = await getAll();
    const movie = movies.find(movie => movie.id === id);
    return movie;
}


export default { getAll, save, getOne };