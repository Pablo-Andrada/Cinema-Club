

    // Función para obtener películas desde la API
    $.get("https://students-api.up.railway.app/movies", function (movies) {
        renderMovies(movies);
    }).fail(function (error) {
        console.error("Error al obtener las películas:", error);
        movieContainer.innerHTML = "<p>Error al cargar las películas. Intenta nuevamente.</p>";
    });

    

