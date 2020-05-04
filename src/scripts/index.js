import { data } from "./movies.js";
let parsedData = JSON.parse(data);

const movieList = document.getElementById("movieList");
const movieInfo = document.getElementById("movieInfo");

parsedData.forEach(function (movie) {
  let { id, title } = movie;
  let newListItem = `
  <li id="${id}" class="movie">${title}</li>`;
  movieList.innerHTML += newListItem;
});

function displayInfo() {
  let movie = parsedData.find((movie) => movie.id == this.id);
  let { title, year, director, image } = movie;
  movieInfo.innerHTML = `
  <img id="movieImage" src="./img/${image}" />
  <ul>
    <li><h3>${title}</h3></li>
    <li>${year}</li>
    <li>Dir: ${director}</li>
  </ul>
  `;
}

let movieListItems = document.querySelectorAll(".movie");
function addActiveColor() {
  movieListItems.forEach(function (movieItem) {
    if (movieItem.classList.contains("active")) {
      movieItem.classList.remove("active");
    }
  });
  this.classList.remove("hover");
  this.classList.add("active");
}

movieListItems.forEach(function (movieItem) {
  movieItem.addEventListener("click", displayInfo);
  movieItem.addEventListener("click", addActiveColor);
  movieItem.addEventListener("mouseover", function () {
    if (movieItem.classList.contains("active") !== true)
      movieItem.classList.add("hover");
  });
  movieItem.addEventListener("mouseleave", function () {
    movieItem.classList.remove("hover");
  });
});
