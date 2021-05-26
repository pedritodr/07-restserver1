const express = require('express')
const app = express();
require('dotenv').config();

const port = process.env.PORT;
const hbs = require('hbs');



app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials', function(err) {});

app.use(express.static('public'));

/* app.get('/', (req, res) => {
    res.render('home', {
        title: 'Curso node',
        name: 'Pedro Duran'
    });
})

app.get('/generic', (req, res) => {
    res.render('generic', {
        title: 'generic',
        name: 'Pedro Duran'
    });
})
app.get('/elements', (req, res) => {
    res.render('elements', {
        title: 'elements',
        name: 'Pedro Duran'
    });
}) */

app.get('*', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})