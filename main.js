// Creating an array of 25 movies that are all the first in a series of trilogies
const firstMovies = [
    "The Godfather",
    "The Lord of the Rings: The Fellowship of the Ring",
    "The Matrix",
    "Star Wars: Episode IV - A New Hope",
    "Back to the Future",
    "Toy Story",
    "Spider-Man",
    "Indiana Jones",
    "The Bourne Identity",
    "The Terminator",
    "Batman Begins",
    "Pirates of the Caribbean: The Curse of the Black Pearl",
    "Jurassic Park",
    "Shrek",
    "Rush Hour",
    "X-Men",
    "Meet the Parents",
    "Ice Age",
    "Transformers",
    "The Hunger Games",
    "Despicable Me",
    "The Hangover",
    "Spider-Man",
    "Iron Man",
    "Thor"
  ]
// Creating a function to get a random movie from the firstMovies array
function getRandomMovie() {
    var randomIndex = Math.floor(Math.random() * firstMovies.length);
    var randomMovieFromArray = firstMovies[randomIndex];
    randomMovieFromArray = randomMovieFromArray.replaceAll(" ","+");
    return randomMovieFromArray;
  }
//Creating a variable and initializing it to the value being returned by the getRandomMovie() function 
let randomMovie = getRandomMovie();

// Creating an element to store value of API key
const API_KEY = "3dfb80d7";
// Using a variable called load in order to know if my page was just loaded. Once the user interacts with the page load will become false and the function loadRandomMovie() will not run again.
let load = true;
// Creating a variable to store the value of the URL link being fetched upon loading the site 
let onLoadURL = `http://www.omdbapi.com/?apikey=${API_KEY}&t=${randomMovie}`;
//   
load && makeFetch(onLoadURL);
// 
const randomResultDiv = document.querySelector(".random_result");
// Creating function to load information about a random movie when loading the site
function loadRandomMovie(fetchData) {
  //Changing load variable to false now that the initial load was done
  load = false;
  // 
  randomResultDiv.innerHTML = `
  <h3 class="text-center mt-2" class="movie_title">${fetchData.Title}</h3>
  <img class="rounded mx-auto d-block mt-4" class="img-thumbnail" width="400" height"400" src="${fetchData.Poster}" alt="Movie poster"/>    
  <p class="text-center mt-2">${fetchData.Year}</p>
  <p class="text-center mt-3">${fetchData.Plot}</p>
  <p class="text-center">Rated: ${fetchData.Rated}</p>
  <p class="text-center">Directed by: ${fetchData.Director}</p>
  <p class="text-center">Genre: ${fetchData.Genre}</p>
  `
  
}

// 
const movieInputForm = document.querySelector("#movie_input_form");
// 
movieInputForm.addEventListener("submit", movieInputSubmit => {
    movieInputSubmit.preventDefault();
    // 
    var movieInput = document.querySelector("#movie_input").value
    // 
    const movieSearchURL = `http://www.omdbapi.com/?apikey=${API_KEY}&t=${movieInput}`  
    // 
    makeFetch(movieSearchURL)
    // 
    movie_input.value = "";
});

function getUserSearch(fetchData) {
  randomResultDiv.remove();
  const searchResultDiv = document.querySelector(".search_result");
  if (fetchData.Title === undefined) {
    searchResultDiv.innerHTML = `
    <h5 class="text-center mt-4"> Please enter a valid movie title.</h5>
    `

  } else {
  searchResultDiv.innerHTML = `
  <h3 class="text-center mt-2" class="movie_title">${fetchData.Title}</h3>
  <img class="rounded mx-auto d-block mt-4" class="img-thumbnail" width="400" height"400" src="${fetchData.Poster}"/> 
  <p class="text-center mt-2">${fetchData.Year}</p>
  <p class="text-center mt-3">${fetchData.Plot}</p>
  <p class="text-center">Rated: ${fetchData.Rated}</p>
  <p class="text-center">Directed by: ${fetchData.Director}</p>
  <p class="text-center">Genre: ${fetchData.Genre}</p>
  `
  }
};



