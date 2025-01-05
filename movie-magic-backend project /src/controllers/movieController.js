import { Router } from "express";
import movieService from "../services/movieService.js";

const router = Router();


router.get('/create', (req, res) => {
    res.render('create');
});

router.post('/create', async (req, res) => {
    const movie = req.body;
    movieService.save(movie);
    res.redirect('/');
});


router.get('/:id', async (req, res) => {
    const id = req.params.id;
    const movie = await movieService.getOne(id);
    res.render('details', { movie: movie });
})


export default router;