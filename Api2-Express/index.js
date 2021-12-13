const express = require('express');

const app = express();

app.get('/get', (req, res) => {
    res.send('Get Method')
});

app.post('/post', (req, res) => {
    res.send('POST Method')
});

app.put('/put', (_, res) => {
    res.send('Put Method')
});

app.delete('/delete', (_, res) => {
    res.send('DELETE Method')
});

app.head('/head', (_, res) => {
    res.send('HEAD Method')
});

app.listen(8080, () => {
    console.log(`online`);
});