// // const { getAllMovies } = require("../controllers/moviesController");

// // const movies = [
// //     {
// //       "title": "Guardians of the Galaxy Vol. 2",
// //       "year": 2017,
// //       "director": "James Gunn",
// //       "duration": "2h 16min",
// //       "genre": [
// //         "Action",
// //         "Adventure",
// //         "Comedy"
// //       ],
// //       "rate": 7.7,
// //       "poster": "https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg"
// //     },
// //     {
// //       "title": "Star Wars: Episode IV - A New Hope",
// //       "year": 1977,
// //       "director": "George Lucas",
// //       "duration": "2h 1min",
// //       "genre": [
// //         "Action",
// //         "Adventure",
// //         "Fantasy",
// //         "Sci-Fi"
// //       ],
// //       "rate": 8.7,
// //       "poster": "https://m.media-amazon.com/images/M/MV5BOTA5NjhiOTAtZWM0ZC00MWNhLThiMzEtZDFkOTk2OTU1ZDJkXkEyXkFqcGdeQXVyMTA4NDI1NTQx._V1_SX300.jpg"
// //     },
// //     {
// //       "title": "The Lord of the Rings: The Fellowship of the Ring",
// //       "year": 2001,
// //       "director": "Peter Jackson",
// //       "duration": "2h 58min",
// //       "genre": [
// //         "Action",
// //         "Adventure",
// //         "Drama",
// //         "Fantasy"
// //       ],
// //       "rate": 8.8,
// //       "poster": "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg"
// //     }
// //   ]

// // module.exports = {
// //     getAllMovies: async () => {
// //         return movies
// //     }
// // };

// // Definimos la clase Movie para asegurar la integridad de los datos
// class Movie {
//     constructor({ title, poster, director, year, duration, rate, genre }) {
//         if (!title || !poster || !director) {
//             throw new Error("Los campos 'title', 'poster' y 'director' son obligatorios");
//         }
//         this.title = title;
//         this.poster = poster;
//         this.director = director;
//         this.year = year || "Desconocido";
//         this.duration = duration || "Desconocida";
//         this.rate = rate || "No disponible";
//         this.genre = genre || [];
//     }
// }

// // Array de películas en formato JSON
// const movies = [
//     {
//         "title": "Guardians of the Galaxy Vol. 2",
//         "year": 2017,
//         "director": "James Gunn",
//         "duration": "2h 16min",
//         "genre": ["Action", "Adventure", "Comedy"],
//         "rate": 7.7,
//         "poster": "https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg"
//     },
//     {
//         "title": "Star Wars: Episode IV - A New Hope",
//         "year": 1977,
//         "director": "George Lucas",
//         "duration": "2h 1min",
//         "genre": ["Action", "Adventure", "Fantasy", "Sci-Fi"],
//         "rate": 8.7,
//         "poster": "https://m.media-amazon.com/images/M/MV5BOTA5NjhiOTAtZWM0ZC00MWNhLThiMzEtZDFkOTk2OTU1ZDJkXkEyXkFqcGdeQXVyMTA4NDI1NTQx._V1_SX300.jpg"
//     },
//     {
//         "title": "The Lord of the Rings: The Fellowship of the Ring",
//         "year": 2001,
//         "director": "Peter Jackson",
//         "duration": "2h 58min",
//         "genre": ["Action", "Adventure", "Drama", "Fantasy"],
//         "rate": 8.8,
//         "poster": "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg"
//     }
// ];

// // Servicio para obtener todas las películas, asegurando que sean instancias de Movie
// const getAllMovies = async () => {
//     try {
//         return movies.map(movie => new Movie(movie));
//     } catch (error) {
//         throw new Error(`Error al obtener películas: ${error.message}`);
//     }
// };

// // Exportamos el servicio
// module.exports = { getAllMovies };

const Movie = require("../models/Movie");

module.exports = {
    getMovies : async() => {
        const movies = await Movie.find();
        return movies;
    },
    createMovie: async ({ title, year, director, duration, genre, rate, poster }) => {
        // Validación para asegurarse de que todos los campos están completos
        // if (!title || !year || !director || !duration || !genre || !rate || !poster) {
        //     throw new Error("All fields are required to create a movie.");
        // }

        // Crear la película si todos los campos están completos
        const newMovie = await Movie.create({ title, year, director, duration, genre, rate, poster });
        return newMovie;
    },
    deleteMovieByName: async (title) => {
        // Buscar y eliminar una película por su título
        const deletedMovie = await Movie.findOneAndDelete({ title });
        if (!deletedMovie) {
            throw new Error("Movie not found");
        }
        return deletedMovie;
    }

}