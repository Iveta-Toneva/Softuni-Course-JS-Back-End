import jwt from 'jsonwebtoken';
import { SECRET } from '../config/constants.js';

export const authMiddleware = (req, res, next) => {

    const token = req.cookies['auth'];

    if (!token) {
        return next();
    }

    try {

        const decodedToken = jwt.verify(token, SECRET);

        res.user = {
            _id: decodedToken._id,
            email: decodedToken.email
        };

        res.locals.isAuthenticated = true;
        res.locals.email = decodedToken.email;

        return next();

    } catch (error) {
        res.clearCookie('auth');
        res.redirect('/auth/login');
    }


};


