const express = require('express');
const handlelbars = require('express-handlebars');

const app = express();
app.engine('handlebars', handlelbars.engine());
app.set('view engine', 'handlebars');


app.get('/', ((req, res) => {
    res.send('home page');
}));

app.get('/books', ((req, res) => {
    res.send('books page');
}));

app.all('*', (req, res) => {
    res.send('404 PAGE NOT FOUND :(');
})



app.listen(5000, () => console.log('Server is listening on http://localhost:5000'));