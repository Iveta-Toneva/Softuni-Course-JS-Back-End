import { Router } from "express";
import movieService from "../services/movieService.js";
import castService from "../services/castService.js";

const router = Router();


router.get('/create', (req, res) => {
    res.render('create');
});

router.post('/create', async (req, res) => {
    const movie = req.body;
    movieService.save(movie);
    res.redirect('/');
});

router.get('/search', async (req, res) => {

    const filterMovies = req.query;
    const movies = await movieService.getAll(filterMovies).lean();
    res.render('home', { isSearch: true, movies: movies, filterMovies });

});

router.get('/:id', async (req, res) => {
    const id = req.params.id;
    const movie = await movieService.getOne(id).lean();
    const rating = '&#x2605'.repeat(movie.rating);
    res.render('details', { movie: movie, rating });
});

router.get('/:id/attach', async (req, res) => {
    const movie = await movieService.getOne(req.params.id).lean();
    const casts = await castService.getAll().lean();
    res.render('attach', { movie, casts });
});


router.post('/:id/attach', async (req, res) => {
    const movieId = req.params.id;
    const castId = req.body.cast;
    await movieService.attachCast(movieId, castId);
    res.redirect(`/movies/${movieId}`);
});


export default router;