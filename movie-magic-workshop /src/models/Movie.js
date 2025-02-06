import { Schema, model, Types } from 'mongoose';

const movieSchema = new Schema({
    title: {
        type: String,
        required: [true, 'Title is required!'],
        minLength: [5, 'Title should be at least 5 characters!'],
        match: [/^[A-Za-z0-9 ]+$/, 'Title can contain only english letters digits and whitespaces!']
    },
    genre: {
        type: String,
        required: [true, 'Genre is required!'],
        minLength: [5, 'Genre should be at least 5 characters!'],
        match: [/^[A-Za-z0-9 ]+$/, 'Genre can contain only english letters digits and whitespaces!']
    },
    director: {
        type: String,
        required: [true, 'Director is required!'],
        minLength: [5, 'Director should be at least 5 characters!'],
        match: [/^[A-Za-z0-9 ]+$/, 'Director can contain only english letters digits and whitespaces!']
    },
    year: {
        type: Number,
        required: [true, 'Year is required!'],
        min: [1900, 'The year should be after 1900!'],
        max: [2024, 'The year can not be after 2024']
    },
    imageUrl: {
        type: String,
        required: [true, 'Image is required!'],
        match: [/^https?:\/\//, 'The image URL should be valid!']

    },
    rating: {
        type: Number,
        min: [1, 'The rating should be at least 1'],
        max: [5, 'The rating can not be more than 5'],
        required: [true, 'Rating is required!']
    },
    description: {
        type: String,
        required: [true, 'Description is required!'],
        minLength: [20,'Description should be at least 20 characters!'],
        match: [/^[A-Za-z0-9 ]+$/, 'Description can contain only english letters digits and whitespaces!']

    },
    casts: [{
        type: Types.ObjectId,
        ref: 'Cast'
    }],
    owner: {
        type: Types.ObjectId,
        ref: 'User'
    }
});

const Movie = model('Movie', movieSchema);

export default Movie;