const express = require('express');

const app = express();

app.use(express.json());

const middleTranform = (req, res, next) => {
    if (typeof req.query.id !== 'undefined') {
        req.query.id = Number(req.query.id);
    }

    next();
}

app.get('/query', [middleTranform], (req, res) => {
    console.log(req.query);
    res.send('Querystring')
});

app.get('/params/:id', (req, res) => {
    console.log(req.params);
    res.send('Params')
});

app.get('/header', (req, res) => {
    console.log(req.get('Authorization'));
    console.log(req.headers)
    res.send('hola header');
});

app.get('/body', (req, res) => {
    console.log(req.body);
    res.send(req.body);
})

app.listen(8080, () => {
    console.log(`online`);
});