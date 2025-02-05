import { Schema, model } from "mongoose";
import bcrypt from 'bcrypt';

const SALT_ROUNDS = 10;

const userSchema = new Schema({
    email: {
        type: String,
        unique: true,
        required: [true, 'Email is required'],
        minlength: [10, 'The email should be at least 10 characters long!'],
        match: [/\@[A-Za-z0-9]+.[A-Za-z0-9]+$/, 'The email should be valid!'],
    },
    password: {
        type: String,
        required: [true, 'Password is required'],
        match: [/^[A-Za-z0-9]+$/, 'The password can contain only english letters and digits'],
        minlength: [6, 'The password should be at least 6 characters long !']
    }
});

userSchema.pre('save', async function () {
    const hash = await bcrypt.hash(this.password, SALT_ROUNDS);
    this.password = hash;
});

const User = model('User', userSchema);

export default User;