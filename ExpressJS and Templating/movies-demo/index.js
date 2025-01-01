const express = require('express');
const handlelbars = require('express-handlebars');

const app = express();
app.engine('handlebars', handlelbars.engine());
app.set('view engine', 'handlebars');
app.use('/public', express.static('public'));
app.use(express.urlencoded({ extended: false }));

const movies = [

    {
        name: 'Interstellar', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSngBJ0B7UDrLUkDlp6DCQLsEYuWR-DiHwbnxFFCniB3HiP3f3NZmR1-lKSC34ge6YXu4LX', description: 'When Earth becomes uninhabitable in the future, a farmer and ex-NASA pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team of researchers, to find a new planet for humans.'
    },
    {
        name: 'The Night Agent', imageUrl: 'https://thecentraltrend.com/wp-content/uploads/2023/05/the-night-agent.jpg', description: 'Low-level FBI agent Peter Sutherland works in the basement of the White House manning a phone that never rings - until the night it does, propelling him into a conspiracy that leads all the way to the Oval Office.'
    },
    {
        name: 'The Departed', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcjbSNDHfMJ8I5Goen0FyUWVsNOeqyb1YmQQ&s', description: 'An undercover cop and a mole in the police attempt to identify each other while infiltrating an Irish gang in South Boston.'
    }

];

app.get('/', ((req, res) => {
    res.render('home');
}));

app.get('/movies', ((req, res) => {
    res.render('movies', { movies: movies });
}));

app.get('/addMovie', ((req, res) => {
    res.render('addMovie');
}));

app.post('/addMovie', ((req, res) => {
    const movie = req.body;
    movies.push(movie);
    res.redirect('/movies');
}));

app.get('/movies/:name', ((req, res) => {
    const movie = movies.find(movie => movie.name === req.params.name);
    res.render('movie', { movie: movie });
}))

app.all('*', (req, res) => {
    res.send('404 PAGE NOT FOUND :(');
})



app.listen(5000, () => console.log('Server is listening on http://localhost:5000'));