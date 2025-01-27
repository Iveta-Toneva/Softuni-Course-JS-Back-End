import { Router } from "express";
import castService from "../services/castService.js";
import { isAuth } from "../middlewares/auth.js";

const router = Router();

router.get('/create', isAuth, (req, res) => {
    res.render('cast-create');
});

router.post('/create', isAuth, async (req, res) => {
    const cast = req.body;
    await castService.create(cast);
    res.redirect('/');
});




export default router;