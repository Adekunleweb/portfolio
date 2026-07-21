const apiKey = "f1cf7f06";

const movieInput = document.getElementById("movieInput");
const searchBtn = document.getElementById("searchBtn");
const movieCard = document.getElementById("movieCard");

searchBtn.addEventListener("click", () => {
    searchMovie(movieInput.value);
});

movieInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        searchMovie(movieInput.value);
    }
});

async function searchMovie(movieName) {

    if (movieName.trim() === "") {
        movieCard.innerHTML = "<p>Please enter a movie title.</p>";
        return;
    }

    const url = `https://www.omdbapi.com/?apikey=${apiKey}&t=${movieName}`;

    try {

        const response = await fetch(url);
        const data = await response.json();

        if (data.Response === "False") {
            movieCard.innerHTML = "<p>Movie not found.</p>";
            return;
        }

        movieCard.innerHTML = `
            <img src="${data.Poster}" alt="${data.Title}">

            <h2>${data.Title}</h2>

            <p><strong>Year:</strong> ${data.Year}</p>

            <p><strong>Genre:</strong> ${data.Genre}</p>

            <p><strong>IMDb Rating:</strong> ⭐ ${data.imdbRating}</p>

            <p><strong>Runtime:</strong> ${data.Runtime}</p>

            <p><strong>Plot:</strong></p>
            <p>🎭 Genre: ${data.Genre}</p>

<p>🎬 Director: ${data.Director}</p>

<p>🎭 Actors: ${data.Actors}</p>

<p>🌍 Country: ${data.Country}</p>

<p>⭐ IMDb Rating: ${data.imdbRating}</p>

<p>⏱ Runtime: ${data.Runtime}</p>

            <p>${data.Plot}</p>
        `;

    } catch (error) {
        movieCard.innerHTML = "<p>Something went wrong.</p>";
    }

}
const loginForm = document.getElementById("loginForm");

if (loginForm) {

    loginForm.addEventListener("submit", function(e){

        e.preventDefault();

        window.location.href = "dashboard.html";

    });

}