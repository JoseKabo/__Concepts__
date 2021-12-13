const express = require('express');

const app = express();

app.use(express.json());

const middleTranform = (req, res, next) => {
    if (typeof req.query.id !== 'undefined') {
        req.query.id = Number(req.query.id);
        next();
    }
    res.send({
        msg: 'invalid id or id field doesnt exist'
    });

}

const keywordMiddleware = (req, res, next) => {
    if (req.get('Authorization')) {
        const keyword = req.get('Authorization');
        keyword.match(/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/) ? next() : res.send({
            msg: 'invalid keyword'
        });
    }
    res.send({
        msg: "Authorization field doesn't exist"
    });

}

app.get('/key', [middleTranform], (req, res) => {
    console.log(req.query);
    res.send('Querystring')
});

app.get('/params/:id', (req, res) => {
    const id = req.params.id;
    (id % 2 === 0) ? res.send({
        msg: true
    }): res.send({
        msg: false
    })

});

app.get('/header', [keywordMiddleware], (req, res) => {
    console.log(req.get('Authorization'));
    console.log(req.headers)
    res.send('Success Authorization');
});

app.get('/body', (req, res) => {
    console.log(req.body);
    res.send(req.body);
})

app.listen(8080, () => {
    console.log(`online`);
});