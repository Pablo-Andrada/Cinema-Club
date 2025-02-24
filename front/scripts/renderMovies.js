
const movieContainer = document.getElementById("movie-container");
// Función para renderizar las películas
export default function renderMovies(movies) {
    movieContainer.innerHTML = ""; // Limpiar el contenedor antes de agregar nuevas tarjetas

    movies.forEach(movie => {
        const movieCard = document.createElement("div");
        movieCard.classList.add("movie-card");

        movieCard.innerHTML = `
            <img src="${movie.poster}" alt="${movie.title}">
            <div class="movie-info">
                <h2>${movie.title}</h2>
                <p class="duration">${movie.duration}</p>
                <p class="year">${movie.year}</p>
                <p class="director">Director: ${movie.director}</p>
                <p class="rate">Rating: ${movie.rate}</p>
                <div class="genre">
                    ${movie.genre.map(g => `<span>${g}</span>`).join("")}
                </div>
            </div>
        `;

        movieContainer.appendChild(movieCard);
    });
}

