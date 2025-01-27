import { Router } from "express";
import authService from "../services/authService.js";
import cookieParser from "cookie-parser";

const router = Router();


router.get('/register', (req, res) => {
    res.render('register');
});

router.post('/register', async (req, res) => {
    const { email, password } = req.body;
    await authService.register(email, password);
    res.redirect('/auth/login');
});

router.get('/login', (req, res) => {
    res.render('login');
});

router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    const token = await authService.login(email, password);
    res.cookie('auth', token, { httpOnly: true });
    res.redirect('/');
});




export default router;