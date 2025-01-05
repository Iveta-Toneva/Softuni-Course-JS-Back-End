import fs from 'fs/promises';

async function getMovies() {
    const data = await fs.readFile('./database.json');
    const movies = JSON.parse(data);
    return movies.movies;
}

async function saveMovie(movie) {
    const data = await fs.readFile('./database.json');
    const movies = JSON.parse(data);
    movies.movies.push(JSON.parse(movie));

    fs.writeFile('./database.json', JSON.stringify(movies));
}


export default { getMovies, saveMovie };