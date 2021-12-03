import fetch from "node-fetch";

const getPosts = new Promise((resolve, reject) => {
    fetch('https://jsonplaceholder.typicode.com/possts')
        .then(res => (res.ok) ?
            resolve(res.json()) :
            reject(res.status + " - getPostst")
        );
});

const getUsers = new Promise((resolve, reject) => {
    fetch('https://reqres.in/api/users?page=2')
        .then(res => (res.ok) ?
            resolve(res.json()) :
            reject(res.status() + " - getUsers")
        );
});

const getCapitalCity = new Promise((resolve, reject) => {
    fetch(`https://restcountries.com/v3.1/capital/Mexico`)
        .then(res => (res.ok) ?
            resolve(res.json()) :
            reject(res.status() + " - getCapital")
        );
});


// TODO: Promise.all()
const all = [getUsers, getPosts, getCapitalCity];
Promise.all(all)
    .then(res => console.log(`res - all`, res))
    .catch(err => console.log(`err - all`, err));

// TODO: Promise.race();
const race = [getPosts, getUsers, getCapitalCity];
Promise.race(race)
    .then(res => console.log(`res - race`, res))
    .catch(err => console.log(`err - race`, err))

// TODO: Promise.allSeattled()
const settled = [getUsers, getCapitalCity, getPosts];
Promise.allSettled(settled)
    .then(res => console.log(`res - settled`, res))
    .catch(err => console.log(`err - settled`, err));

// TODO: Promise.any()
const any = [getUsers, getCapitalCity, getPosts];
Promise.any(any)
    .then(res => console.log(`res - settled`, res))
    .catch(err => console.log(`err - settled`, err));