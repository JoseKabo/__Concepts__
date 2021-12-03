const async = require('async'); 
const lodash = require('lodash');

const number = 10;

// Series

function isLuckyNumber(callback)  {
    setTimeout( () => {
        if(number % 2 == 0)
            callback(null, {
                luckyNumer: number
            });
        else 
            callback("It isn't a lucky number");
    }, 1500);
}

function isBadNumber(callback)  {
    setTimeout( () => {
        if(number > 5 )
            callback(null, {
                badNumer: number
            });
        else 
            callback("It isn't a bad number");
    }, 1500);
}

async.series([ isLuckyNumber, isBadNumber ], function(err, result) {
    if(err)
        console.log('error :>> ', err);

    console.log('result :>> ', result);
});



// Waterfall

function isBadNumber(callback)  {
    setTimeout( () => {
        if(inNumber > 5 )
            callback(null, inNumber);
        else 
            callback("It isn't a bad number");
    }, 1500);
}

function isLuckyNumber(inNumber, callback)  {
    setTimeout( () => {
        if(inNumber % 2 == 0)
            callback(null, {
                luckyNumer: inNumber + Math.random()
            });
        else 
            callback("It isn't a lucky number");
    }, 1500);
}


async.waterfall([ isBadNumber, isLuckyNumber ], (err, result) => {
    if(err)
        console.log('error :>> ', err);

    console.log('waterfall :>> ', result);
});


// Parallel

function isBadNumber(callback)  {
    setTimeout( () => {
        if(inNumber > 5 )
            callback(null, inNumber);
        else 
            callback("It isn't a bad number");
    }, 1500);
}

function isLuckyNumber(inNumber, callback)  {
    setTimeout( () => {
        if(inNumber % 2 == 0)
            callback(null, {
                luckyNumer: inNumber + Math.random()
            });
        else 
            callback("It isn't a lucky number");
    }, 1500);
}


async.waterfall([ isBadNumber, isLuckyNumber ], (err, result) => {
    if(err)
        console.log('error :>> ', err);

    console.log('waterfall :>> ', result);
});


