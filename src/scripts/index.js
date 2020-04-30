const movieList = document.getElementById("movieList");

function buildMovieList() {
  movies.forEach(function (movie) {
    let newLi = document.createElement("li");
    let text = document.createTextNode(movie.title);
    let id = movie.id;
    newLi.appendChild(text);
    newLi.setAttribute("id", `${id}`);
    movieList.appendChild(newLi);
  });
}

buildMovieList();
