import { Router } from "express";
import movieService from "../services/movieService.js";
import castService from "../services/castService.js";
import { isAuth } from "../middlewares/auth.js";

const router = Router();


router.get('/create',isAuth,(req, res) => {
    res.render('create');
});

router.post('/create',isAuth,  async (req, res) => {
    const movie = req.body;
    const ownerId = res.user._id;
    await movieService.save(movie, ownerId);
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
    const isOwner = movie.owner && res.user?._id == movie.owner;
    const rating = '&#x2605'.repeat(movie.rating);
    res.render('details', { movie: movie, rating, isOwner });
});

router.get('/:id/attach', isAuth, async (req, res) => {
    const movie = await movieService.getOne(req.params.id).lean();
    const cast = await castService.getAllExcept(movie.casts).lean();
    res.render('attach', { movie, cast });
});


router.post('/:id/attach',isAuth,async (req, res) => {
    const movieId = req.params.id;
    const castId = req.body.cast;
    await movieService.attachCast(movieId, castId);
    res.redirect(`/movies/${movieId}`);
});

router.get('/:id/delete',isAuth,async (req, res) => {
    const movieId = req.params.id;
    await movieService.remove(movieId);
    res.redirect('/');
});

router.get('/:id/edit',isAuth,  async (req, res) => {
    const movieId = req.params.id;
    const movie = await movieService.getOne(movieId).lean();
    res.render('edit', { movie });
});


router.post('/:id/edit',isAuth, async (req, res) => {
    const movieId = req.params.id;
    const body = req.body;
    await movieService.edit(movieId, body);
    res.redirect(`/movies/${movieId}`);
});


export default router;