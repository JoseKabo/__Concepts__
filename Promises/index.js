const fetch = require('node-fetch');

const getPosts = new Promise((resolve, reject) => {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then()

});

getPosts
    .then((data) => console.log(`data`, data))
    .catch((err) => console.log(`error`, err));