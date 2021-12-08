
// 1 requiere express

const express = require('express');

// 2 instanciar express

const app = express();

// 3 Settings del server

// 4 Rutas del backend
app.get('/', (request, response) => {
    response.send('Hello glober');
});

app.get('/vista', (req, res) => {
    res.set('Content-type', 'text/plain');
    res.sendFile(`${__dirname}/views/index.html`);
});

app.get('/json', (req, res) => {
    res.json({
        name: 'Node academy'
    });
});

// 5 Escuchar puerto
app.listen(8080, () => {
    console.log('Online');
});
