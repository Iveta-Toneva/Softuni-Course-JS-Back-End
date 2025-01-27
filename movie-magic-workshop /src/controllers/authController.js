import { Router } from "express";
import authService from "../services/authService.js";

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
})




export default router;