const movieList = document.getElementById("movieList");
const movieInfoBox = document.querySelectorAll(".movieList");
const movieInfo = document.querySelector(".movieInfo");
const movieImage = document.querySelector("#movieImage");
let movieTitleItem = document.getElementById("title");
let movieYearItem = document.getElementById("year");
let movieDirectorItem = document.getElementById("director");

function buildMovieList() {
  movies.forEach(function (movie) {
    let newLi = document.createElement("li");
    let text = document.createTextNode(movie.title);
    let id = movie.id;
    newLi.appendChild(text);
    newLi.setAttribute("id", `${id}`);
    newLi.setAttribute("class", "movie");
    movieList.appendChild(newLi);
  });
}

buildMovieList();

function displayInfo() {
  console.log(this.id);
  let movie = movies.find((movie) => movie.id == this.id);
  let title = movie.title;
  let year = movie.year;
  let director = movie.director;
  let image = movie.image;
  movieTitleItem.innerHTML = `<h3>${title}</h3>`;
  movieYearItem.innerHTML = `${year}`;
  movieDirectorItem.innerHTML = `Dir: ${director}`;
  movieImage.src = `./img/${image}`;
}

let movieListItems = document.querySelectorAll(".movie");
console.log(movieListItems);
movieListItems.forEach(function (movieItem) {
  movieItem.addEventListener("click", displayInfo);
});
