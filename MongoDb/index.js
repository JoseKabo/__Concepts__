const { Schema, model, connect, assert } = require('mongoose');

connect('mongodb+srv://JoseKabo:mcKabo060699@nodeacademy.y21m8.mongodb.net/cryptoImages')
    .then(function () {
        console.log('connected :>>');
    })
    .catch( function () {
        console.log('Error');
    });

const UsersSchema =  new Schema({
    email: {
        type: String,
        required: true,
        match: /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/,
        minlength: 8
    },
    username: {
        type: String,
        required: true,
        match: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        minlength: 8,
    },
    images: {
        type: [String],
    },
    transactionsId: {
        type: [String],
    },
    balance: {
        type: Number,
        default: 0,
        min: 0
    }
});

const UsersModel = model('Users', UsersSchema);

const data = new UsersModel({
    email: 'jomese@test.com',
    username: 'Josekabo5*',
    images: [
        'OKLvBM1x2gSKk0Auux14druRBV1IdmVz',
        '3lvGusYJS58pf06VCAucPrN7HvI0ZmXY',
    ],
    transactionsId: [
        'AlzT83RVJl97WU6tCHpCCs1LhGxQcVcuWSKv7I3x5Uk=',
        'HKeH+sEBmz6ZxScKcP9QoATjrOJGGaqPKSb3ngsOWj0='
    ],
    balance: 20
});

// TODO: Add row
data.save()
    .then( (res) => console.log('This row has been registered') )
    .catch( (err) => console.log(err) );

// TODO: Delete row
UsersModel.deleteOne( { email: 'jose@test.com' })
    .then( res => console.log('Jose@test.com has been deleted') )
    .catch( err => console.log(err) );

// TODO: Update any row
UsersModel.findOneAndUpdate( { username: 'Josekabo5*' }, { username: 'JoKaMexd09.' } )
    .then( res => console.log('Josekabo5* has been updated') )
    .catch( err => console.log(err) );

// TODO: Find 
UsersModel.find( { email: 'jomese@test.com' } )
    .then( res => console.log(res) )
    .catch( err => console.log(err) );
