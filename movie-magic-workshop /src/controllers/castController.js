import { Router } from "express";
import castService from "../services/castService.js";
import { isAuth } from "../middlewares/auth.js";
import { getErrorMessage } from "../utils/error.js";

const router = Router();

router.get('/create', isAuth, (req, res) => {
    res.render('cast-create');
});

router.post('/create', isAuth, async (req, res) => {
    const cast = req.body;
    try {
        await castService.create(cast);
    } catch (error) {
        const errorMessage = getErrorMessage(error);
        return res.render('cast-create', { cast, errorMessage });
    }
    res.redirect('/');

});



export default router;