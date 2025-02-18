import renderMovies from "./renderMovies.js";
// import $ from "jquery";
const axios = require('axios');

//    // Función para obtener películas desde la API
// $.get("https://students-api.up.railway.app/movies", function (movies) {
//     renderMovies(movies);
// });
    
// Función para obtener películas desde la API

const fetchMovies = async () => {
    try {
        const response = await axios.get("http://localhost:3000/movies");
        renderMovies(response.data); // Renderiza las películas con los datos obtenidos
    } catch (error) {
        console.error("Error al obtener las películas:", error);
        document.getElementById("movie-container").innerHTML = "<p>Error al cargar las películas. Intenta nuevamente.</p>";
    }
};
  
  // Llamamos a la función directamente
  fetchMovies();

    

