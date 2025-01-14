import { Router } from 'express';
import homecontroller from './src/controllers/homeController.js';
import movieController from './src/controllers/movieController.js';
import castController from './src/controllers/castController.js';

const router = Router();

router.use(homecontroller);
router.use('/movies', movieController);
router.use('/cast', castController);
router.all('*', (req, res) => {
    res.render('404');
});

export default router;