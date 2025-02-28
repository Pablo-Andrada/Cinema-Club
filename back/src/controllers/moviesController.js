const moviesServices = require("../services/moviesServices");

module.exports = {
    getMoviesController: async (req, res) => {
        try {
            const movies = await moviesServices.getMovies();
            res.status(200).json(movies);
        } catch (error) {
            res.status(500).json({
                error: "Error interno del servidor"
            })
        }
    },
    crateMovieController: async (req, res) => {
        try {
            const { title, year, director, duration, genre, rate, poster } = req.body;
            const newMovie = await moviesServices.createMovie({ title, year, director, duration, genre, rate, poster });
            res.status(201).json({message: "Pelicula creada con éxito"})
        } catch (error) {
            console.error(error)
            res.status(500).json({
                error:"Error al crear la película"
            })
        }
    },
    deleteMovieController: async (req, res) => {
        try {
            const { title } = req.params;  // Usamos params para obtener el título de la URL
            const deletedMovie = await moviesServices.deleteMovieByName(title);
            res.status(200).json({ message: "Pelicula eliminada con éxito", movie: deletedMovie });
        } catch (error) {
            res.status(500).json({ error: "Error al eliminar la película" });
        }
    }
};