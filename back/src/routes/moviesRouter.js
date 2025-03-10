const { Router } = require("express");
const moviesController = require("../controllers/moviesController");
const validateMovieDataMiddleware = require("../validateMovieDataMiddleware");


const moviesRouter = Router();

moviesRouter.get("/", moviesController.getMoviesController);
moviesRouter.post("/",validateMovieDataMiddleware ,moviesController.crateMovieController);
// Ruta para eliminar una película por su nombre
//moviesRouter.delete("/:title", moviesController.deleteMovieController);
moviesRouter.delete("/movies/:id", moviesController.deleteMovie);


module.exports = moviesRouter;