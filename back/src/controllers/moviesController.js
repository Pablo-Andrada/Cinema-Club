module.exports = {
    getAllMovies: async (req, res) => {
        try {
            // const movies = await moviesServices.getmovies();
            res.status(200).send("Proximamente estarán disponibles los datos de las películas")
        } catch (error) {
            res.status(500).json({
                error: "Error interno del servidor"
            })
        }
    }
};