import { Schema, model } from 'mongoose';

const castSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name is required!'],
        minLength: [5, 'Name should be at least 5 characters!'],
        match: [/^[A-Za-z0-9 ]+$/, 'The name can contain only english letters digits and whitespaces!']
    },
    age: {
        type: Number,
        required: [true, 'Age is required!'],
        min: [1, 'The age can not be less than 1!'],
        max: [120, 'The age can not be more than 120!']
    },
    born: {
        type: String,
        required: [true, 'Born is required!'],
        minLength: [10, 'Born should be at least 10 characters!'],
        match: [/^[A-Za-z0-9 ]+$/, 'The born can contain only english letters digits and whitespaces!']
    },
    imageUrl: {
        type: String,
        required: [true, 'Image is required!'],
        match: [/^https?:\/\//, 'The image URL should be valid!']
    }
});


const Cast = model('Cast', castSchema);


export default Cast;