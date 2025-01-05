import movieData from "../data/movieData.js";
import uniqid from 'uniqid';

async function getAll() {
    const movies = await movieData.getMovies();
    return movies;
}

async function save(movie) {
    movie.id = uniqid();
    movieData.saveMovie(JSON.stringify(movie));
}

async function getOne(id) {
    const movies = await getAll();
    const movie = movies.find(movie => movie.id === id);
    return movie;
}



export default { getAll, save, getOne };