import express from 'express';
import router from '../routes.js';
import expressInit from './config/expressInit.js';
import handlelbarsInit from './config/handlebarsInit.js';
import mongooseInit from './config/mongooseInit.js';

const app = express();
expressInit(app);
handlelbarsInit(app);
mongooseInit();

app.listen(5000, console.log('Server is listening on port 5000...'));
app.use(router);

