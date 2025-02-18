import { Router } from 'express';
import homecontroller from './src/controllers/homeController.js';
import movieController from './src/controllers/movieController.js';
import castController from './src/controllers/castController.js';
import authController from './src/controllers/authController.js'

const router = Router();
router.use(homecontroller);
router.use('/movies', movieController);
router.use('/cast', castController);
router.use('/auth', authController);
router.all('*', (req, res) => {
    res.render('404');
});

export default router;