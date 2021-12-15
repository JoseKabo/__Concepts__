const { Schema, model } = require('mongoose');
const genres = require('../config/genres');

const MovieSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    genre: {
        type: String,
        required: true,
        enum: genres
    },
    duration: { type: Number, required: true },
    year: { type: Number, required: true, min: 1888 },
    director: { type: String, required: true },
    actors: { type: [String], required: true }
});

const MovieModel = model('movies', MovieSchema);

module.exports = MovieModel;