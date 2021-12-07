const { Schema, model, connect } = require('mongoose');

connect('mongodb://localhost:27017/Chuidraui')
    .then(function () {
        console.log('connected :>>');
    })
    .catch( function () {
        console.log('Error trying to connect');
    });

const ProductSchema =  new Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true,
        min: 0
    },
    stock: {
        type: Number,
        required: true,
        min: 0
    },
    brand: {
        type: String,
        required: true
    }
});

const ProductModel = model('Productos', ProductSchema);

const document = new ProductModel({
    name: 'Chachitos 200gr',
    price: 1,
    stock: 20,
    brand: 'Leo'
});

document.save();
