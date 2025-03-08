
// // const movieContainer = document.getElementById("movie-container");
// // // Función para renderizar las películas
// // const renderMovies = (movies) => {
// //     movieContainer.innerHTML = ""; // Limpiar el contenedor antes de agregar nuevas tarjetas

// //     movies.forEach(movie => {
// //         const movieCard = document.createElement("div");
// //         movieCard.classList.add("movie-card");

// //         movieCard.innerHTML = `
// //             <img src="${movie.poster}" alt="${movie.title}">
// //             <div class="movie-info">
// //                 <h2>${movie.title}</h2>
// //                 <p class="duration">${movie.duration}</p>
// //                 <p class="year">${movie.year}</p>
// //                 <p class="director">Director: ${movie.director}</p>
// //                 <p class="rate">Rating: ${movie.rate}</p>
// //                 <div class="genre">
// //                     ${movie.genre.map(g => `<span>${g}</span>`).join("")}
// //                 </div>
// //             </div>
// //         `;

// //         movieContainer.appendChild(movieCard);
// //     });
// // }
// // module.exports = renderMovies;
// const movieContainer = document.getElementById("movie-container");

// // Función para renderizar las películas
// const renderMovies = (movies) => {
//     movieContainer.innerHTML = ""; // Limpiar el contenedor antes de agregar nuevas tarjetas

//     movies.forEach(movie => {
//         const movieCard = document.createElement("div");
//         movieCard.classList.add("movie-card");

//         // Hacer que la tarjeta sea clickeable con un enlace a movieDetail.html
//         movieCard.innerHTML = `
//             <a href="./movieDetail.html?id=${movie.id}" class="movie-link">
//                 <img src="${movie.poster}" alt="${movie.title}">
//                 <div class="movie-info">
//                     <h2>${movie.title}</h2>
//                     <p class="duration">${movie.duration}</p>
//                     <p class="year">${movie.year}</p>
//                     <p class="director">Director: ${movie.director}</p>
//                     <p class="rate">Rating: ${movie.rate}</p>
//                     <div class="genre">
//                         ${movie.genre.map(g => `<span>${g}</span>`).join("")}
//                     </div>
//                 </div>
//             </a>
//         `;

//         movieContainer.appendChild(movieCard);
//     });
// }

// // module.exports = renderMovies;
// const movieContainer = document.getElementById("movie-container");

// // Función para renderizar las películas
// const renderMovies = (movies) => {
//     movieContainer.innerHTML = ""; // Limpiar el contenedor antes de agregar nuevas tarjetas

//     movies.forEach(movie => {
//         const movieCard = document.createElement("div");
//         movieCard.classList.add("movie-card");

//         movieCard.innerHTML = `
//             <img src="${movie.poster}" alt="${movie.title}">
//             <div class="movie-info">
//                 <h2>${movie.title}</h2>
//                 <p class="duration">${movie.duration}</p>
//                 <p class="year">${movie.year}</p>
//                 <p class="director">Director: ${movie.director}</p>
//                 <p class="rate">Rating: ${movie.rate}</p>
//                 <div class="genre">
//                     ${movie.genre.map(g => `<span>${g}</span>`).join("")}
//                 </div>
//             </div>
//         `;

//         // Agregar evento para redirigir al detalle de la película
//         movieCard.addEventListener("click", () => {
//             window.location.href = `./pages/movieDetail.html?id=${movie.id}`;
//         });

//         movieContainer.appendChild(movieCard);
//     });
// }

// module.exports = renderMovies;
const movieContainer = document.getElementById("movie-container");

const renderMovies = (movies) => {
    movieContainer.innerHTML = ""; // Limpiar el contenedor antes de agregar nuevas tarjetas

    movies.forEach(movie => {
        const movieCard = document.createElement("div");
        movieCard.classList.add("movie-card");

        movieCard.innerHTML = `
            <button class="delete-btn" data-id="${movie._id}">X</button>
            <a href="./pages/movieDetail.html?id=${movie._id}">
                <img src="${movie.poster}" alt="${movie.title}">
            </a>
            <div class="movie-info">
                <h2>
                    <a href="./pages/movieDetail.html?id=${movie._id}">${movie.title}</a>
                </h2>
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

    // Llamamos a la función que maneja los eventos de eliminación
    addDeleteEventListeners();
};

const addDeleteEventListeners = () => {
    document.querySelectorAll(".delete-btn").forEach(button => {
        button.addEventListener("click", async (event) => {
            const movieId = event.target.dataset.id;
            await deleteMovie(movieId);
        });
    });
};

const deleteMovie = async (id) => {
    try {
        const response = await fetch(`http://localhost:3000/movies/${id}`, {
            method: "DELETE",
        });

        if (!response.ok) throw new Error("Error al eliminar la película");

        // Si la eliminación fue exitosa, recargar la lista de películas
        fetchMovies();
    } catch (error) {
        console.error("Error al eliminar:", error);
    }
};

module.exports = renderMovies;
