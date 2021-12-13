require("dotenv").config();
const { connect } = require("mongoose");
const MovieModel = require("./schemas/movie");

connect(process.env.MONGO_URI)
    .then(() => console.log("Conectado a MongoDB"))
    .catch(() => console.log("Error al conectar a MongoDB"));

const movies = [{
        title: "DJango",
        director: "Quentin Tarantino",
        year: 2013,
        genre: "Action",
        actors: ["Leonardo DiCaprio", "Jamie Fox"],
        duration: 138,
    },
    {
        title: "The Amazing Spiderman",
        year: 2010,
        genre: "Action",
        director: "Marc webb",
        actors: ["Andrew Garfield", "Emma stone"],
        duration: 155,
    },
];

async function seed() {
    for (let movie of movies) {
        await new MovieModel(movie).save();
    }

    process.exit(0);
}

seed();