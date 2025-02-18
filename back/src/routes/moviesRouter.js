const { Router } = require("express");
const moviesController = require("../controllers/moviesController");

const moviesRouter = Router();
moviesRouter.get("/", moviesController.getMoviesController);

module.exports = moviesRouter;