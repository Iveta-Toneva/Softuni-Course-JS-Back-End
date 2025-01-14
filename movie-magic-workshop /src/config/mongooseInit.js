import mongoose from 'mongoose';

export default async function mongooseInit() {
    try {
        await mongoose.connect('mongodb://localhost:27017/movie-magic');
        console.log('Successfully connected to DB!');
    } catch (error) {
        console.log(error.message);
    }
}