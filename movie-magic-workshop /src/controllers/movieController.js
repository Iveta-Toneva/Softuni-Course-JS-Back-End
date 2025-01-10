import { query, Router } from "express";
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

router.get('/search', async (req, res) => {

    const filterMovies = req.query;
    const movies = await movieService.getAll(filterMovies);
    res.render('home', { isSearch: true, movies: movies, filterMovies });

})

router.get('/:id', async (req, res) => {
    const id = req.params.id;
    const movie = await movieService.getOne(id);
    const rating = '&#x2605'.repeat(movie.rating);
    res.render('details', { movie: movie, rating });
})


export default router;