const axios = require('axios');

// Función para obtener los parámetros de la URL
const getMovieIdFromUrl = () => {
    const params = new URLSearchParams(window.location.search);
    return params.get("id");
};

// Función para obtener y mostrar los detalles de la película
const fetchMovieDetail = async () => {
    const movieId = getMovieIdFromUrl();
    if (!movieId) {
        document.getElementById("movie-detail").innerHTML = "<p>Película no encontrada.</p>";
        return;
    }

    try {
        const response = await axios.get(`http://localhost:3000/movies/${movieId}`);
        const movie = response.data;

        // Renderizar detalles
        document.getElementById("movie-detail").innerHTML = `
            <h2>${movie.title}</h2>
            <img src="${movie.poster}" alt="${movie.title}">
            <p><strong>Director:</strong> ${movie.director}</p>
            <p><strong>Año:</strong> ${movie.year}</p>
            <p><strong>Duración:</strong> ${movie.duration}</p>
            <p><strong>Rating:</strong> ${movie.rate}</p>
            <p><strong>Géneros:</strong> ${movie.genre.join(", ")}</p>
            <p><strong>Crítica:</strong> ${movie.critica || "No hay crítica disponible."}</p>
        `;
    } catch (error) {
        console.error("Error al obtener detalles de la película:", error);
        document.getElementById("movie-detail").innerHTML = "<p>Error al cargar los detalles de la película.</p>";
    }
};

// Ejecutar la función al cargar la página
fetchMovieDetail();
