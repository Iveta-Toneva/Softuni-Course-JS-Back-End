import User from "../models/User.js"
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { SECRET } from "../config/constants.js";

const register = (email, password) => {

    const id = User.findOne({ email }, { _id: true });

    if (id) {
        throw new Error('User already exist!')
    }

    return User.create({ email, password });
}

const login = async (email, password) => {

    const user = await User.findOne({ email });

    if (!user) {
        throw new Error('User does not exist!');
    }

    const isValid = await bcrypt.compare(password, user.password);

    if (!isValid) {
        throw new Error('Wrong password!');
    }

    const payload = {
        _id: user._id,
        email,
    };

    const token = jwt.sign(payload, SECRET, { expiresIn: '1h' });

    return token;

};


export default {
    register,
    login,
}