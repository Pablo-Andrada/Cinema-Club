
// Asegurarse de que el DOM se haya cargado
window.onload = function() {
    const movieContainer = document.getElementById('movie-container');
    
    // Mapeamos el array tempData para crear las tarjetas de cada película
    tempData.forEach(movie => {
        // Creamos un div para cada tarjeta de película
        const movieCard = document.createElement('div');
        movieCard.classList.add('movie-card');
        
        // Insertamos el contenido HTML para cada tarjeta
        movieCard.innerHTML = `
            <img src="${movie.poster}" alt="${movie.title}">
            <div class="movie-info">
                <h2>${movie.title}</h2>
                <p class="duration">${movie.duration}</p>
                <p class="year">${movie.year}</p>
                <p class="director">Director: ${movie.director}</p>
                <p class="rate">Rating: ${movie.rate}</p>
                <div class="genre">
                    ${movie.genre.map(g => `<span>${g}</span>`).join('')}
                </div>
            </div>
        `;
        
        // Agregamos la tarjeta de película al contenedor
        movieContainer.appendChild(movieCard);
    });
};
