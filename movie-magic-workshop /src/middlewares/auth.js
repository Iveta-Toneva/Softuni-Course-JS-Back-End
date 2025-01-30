import jwt from 'jsonwebtoken';
import { SECRET } from '../config/constants.js';

export const authMiddleware = (req, res, next) => {

    const token = req.cookies['auth'];

    if (!token) {
        return next();
    }

    try {

        const decodedToken = jwt.verify(token, SECRET);

        req.user = {
            _id: decodedToken._id,
            email: decodedToken.email
        };

        res.locals.isAuthenticated = true;
        res.locals.email = decodedToken.email;
        req.isAuth = true;

        return next();

    } catch (error) {
        res.clearCookie('auth');
        res.redirect('/auth/login');
    }


};



export const isAuth = (req, res, next) => {
   
    if (!req.isAuth) {
        return res.redirect('/auth/login');
    }
    return next();
}

