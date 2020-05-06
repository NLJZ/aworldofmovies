import { data } from "./movies.js";
let parsedData = JSON.parse(data);

const movieList = document.getElementById("movieList");
const movieInfo = document.getElementById("movieInfo");

const buildMovieList = () => {
  parsedData.forEach(function (movie) {
    let { id, title } = movie;
    let newListItem = `
  <li id="${id}" class="movie">${title}</li>`;
    movieList.innerHTML += newListItem;
  });
};

const alphaList = () => {
  movieList.innerHTML = "";
  parsedData.sort(function (a, b) {
    var titleA = a.title,
      titleB = b.title;
    if (titleA < titleB) return -1;
    if (titleA > titleB) return 1;
    return 0;
  });
  buildMovieList();
  addListeners();
};

let alphaSortButton = document.getElementById("alpha");
alphaSortButton.addEventListener("click", alphaList);

const yearList = () => {
  movieList.innerHTML = "";
  parsedData.sort(function (a, b) {
    return a.year - b.year;
  });
  buildMovieList();
  addListeners();
};

let yearSortButton = document.getElementById("year");
yearSortButton.addEventListener("click", yearList);

function displayInfo() {
  let movie = parsedData.find((movie) => movie.id == this.id);
  let { title, year, director, image } = movie;
  movieInfo.innerHTML = `
  <img id="movieImage" src="./img/${image}" alt=${title} />
  <ul>
    <li><h3>${title}</h3></li>
    <li>${year}</li>
    <li>Dir: ${director}</li>
  </ul>
  `;
}

const addListeners = () => {
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
};
window.onload = alphaList();
window.onload = addListeners();
