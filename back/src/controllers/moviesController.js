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
    }
};