import Movie from "../models/Movie.js";

function getAll(query = {}) {

    const moviesQuery = Movie.find();

    if (query.title) {
        moviesQuery.find({ title: { $regex: query.title, $options: 'i' } });
    }

    if (query.genre) {
        moviesQuery.find({ genre: { $regex: query.genre, $options: 'i' } });
    }

    if (query.year) {
        moviesQuery.find({ year: query.year });
    }

    return moviesQuery;

}

const save = (movie) => Movie.create(movie);

const getOne = (id) => Movie.findById(id);

// const attachCast = async (movieId, castId) => {
//     const movie = Movie.findById(movieId);
//     movie.casts.push(castId);
//     await movie.save();
// }

export default { getAll, save, getOne, attachCast };