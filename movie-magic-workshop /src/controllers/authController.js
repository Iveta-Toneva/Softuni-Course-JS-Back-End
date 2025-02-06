import { Router } from "express";
import authService from "../services/authService.js";
import { getErrorMessage } from "../utils/error.js";


const router = Router();

router.get('/register', (req, res) => {
    res.render('register');
});

router.post('/register', async (req, res) => {

    const { email, password, rePassword } = req.body;
    if (password !== rePassword) {
        return res.render('register', { errorMessage: 'Passwords should match', email });
    }
    try {
        await authService.register(email, password);
    } catch (error) {
        const errorMessage = getErrorMessage(error);
        return res.render('register', { errorMessage, email });
    }
    res.redirect('/auth/login');

});

router.get('/login', (req, res) => {
    res.render('login');
});

router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        const token = await authService.login(email, password);
        res.cookie('auth', token, { httpOnly: true });
        res.redirect('/');
    } catch (error) {
        return res.render('login', { errorMessage: getErrorMessage(error), email });
    }

});

router.get('/logout', (req, res) => {
    res.clearCookie('auth');
    res.redirect('/');
});


export default router;