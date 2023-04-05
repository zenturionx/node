import express from 'express'
import { fileURLToPath } from 'url';
import hbs from 'hbs';
import path from 'path';
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express()
const port = 8080

// Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

// servir contenido estático
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'Zentu',
        titulo: 'Curso de Node'
    });
})

app.get('/generic', (req, res) => {
    res.render('generic', {
        nombre: 'Zentu',
        titulo: 'Curso de Node'
    });
})

app.get('/elements', (req, res) => {
    res.render('elements', {
        nombre: 'Zentu',
        titulo: 'Curso de Node'
    });
})

app.get('*', (req, res) => {
    res.sendFile(__dirname + '/public/404.html')
})

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`)
})