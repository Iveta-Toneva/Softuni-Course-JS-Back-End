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

const save = (movie, ownerId) => Movie.create({ ...movie, owner: ownerId });

const getOne = (id) => Movie.findById(id).populate('casts');

const attachCast = (movieId, castId) => {
    return Movie.findByIdAndUpdate(movieId, { $push: { casts: castId } });
}

export default { getAll, save, getOne, attachCast };