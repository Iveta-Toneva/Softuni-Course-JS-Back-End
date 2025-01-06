import express from 'express';
import handlelbars from 'express-handlebars';
import router from '../routes.js';

const app = express();

app.listen(5000, console.log('Server is listening on port 5000...'));

app.engine('handlebars', handlelbars.engine());
app.set('view engine', 'handlebars');
app.set('views', './src/views');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));
app.use(router);

