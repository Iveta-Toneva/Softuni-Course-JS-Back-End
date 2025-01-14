import handlelbars from 'express-handlebars';

export default function handlelbarsInit(app) {
    app.engine('handlebars', handlelbars.engine());
    app.set('view engine', 'handlebars');
    app.set('views', './src/views');
}