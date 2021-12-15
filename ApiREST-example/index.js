require('dotenv').config();

const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const { connect } = require('mongoose');
const MovieModel = require('./schemas/movies');
const { body, validationResult } = require("express-validator");

const genres = require('./config/genres');

const app = express();

connect(process.env.MONGO_URI)
    .then(() => console.log('Connected to mongo'))
    .catch(() => console.log('Error trying to connect'));

app.use(express.json());
app.use(cors());
app.use(morgan('tiny'));

app.get('/', (req, res) => {
    res.send('hello');
});

app.get('/movies', async(req, res) => {
    try {
        const documents = await MovieModel.find().exec();
        res.json(documents);
    } catch (e) {
        res.status(500).json({
            msg: e.message
        });
    }
});

const validations = [
    body('title').notEmpty().withMessage('El titulo es obligatorio'),
    body('genre').notEmpty().isIn(genres).withMessage('Genero invalido' + genres.join(', ')),
    body('duration').notEmpty().isInt({ min: 1 }).withMessage('invalid duration')
];

app.post("/addMovie", validations, async function(request, response) {
    try {
        const result = validationResult(request);

        if (!result.isEmpty()) {
            return response.status(400).json(result.array());
        }

        const document = new MovieModel(request.body);
        await document.save();
        response.json(document);
    } catch (e) {
        response.status(500).json({
            message: e.message,
        });
    }
});


app.listen(8080, () => {
    console.log('online');
});