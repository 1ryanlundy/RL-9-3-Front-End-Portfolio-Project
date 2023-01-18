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
// Load variable is true and makeFetch() will run with onLoadURL as its argument   
load && makeFetch(onLoadURL);
// Creating variable and initiating its value to the DOM element with .random_result class
const randomResultDiv = document.querySelector(".random_result");
// 
const titleH1 = document.querySelector("#title_h1");

// Creating function to load information about a random movie when loading the site
function loadRandomMovie(fetchData) {
  // Using .innerHTML to create HTML elements that will display information about a random movie 
  randomResultDiv.innerHTML = `
  <h3 class="text-center mt-2" class="movie_title">${fetchData.Title}</h3>
  <img class="rounded mx-auto d-block mt-4" class="img-thumbnail" width="400" height"400" src="${fetchData.Poster}" alt="Movie poster"/>    
  <p class="text-center mt-2">${fetchData.Year}</p>
  <p class="text-center mt-3">${fetchData.Plot}</p>
  <p class="text-center">Rated: ${fetchData.Rated}</p>
  <p class="text-center">Directed by: ${fetchData.Director}</p>
  <p class="text-center">Genre: ${fetchData.Genre}</p>
  `
  //Changing load variable to false now that the initial load was done
  load = false;
}

// Creating variable and initiating its value to the  DOM element that has an id of #movie_input_form
const movieInputForm = document.querySelector("#movie_input_form");
// Adding an event listener to movieInputForm that listens for a submit event
movieInputForm.addEventListener("submit", movieInputSubmit => {
    movieInputSubmit.preventDefault();
    // Creating variable and initiating its value to the DOM element with #movie_input ID
    const movieInput = document.querySelector("#movie_input").value
    // Creating variable equals URL link  for makeFetch() function
    const movieSearchURL = `http://www.omdbapi.com/?apikey=${API_KEY}&t=${movieInput}`  
    // Calling makeFetch() function with movieSearchURL variable as argument 
    makeFetch(movieSearchURL)
    // Using .value to set DOM element with #movie_input ID to an empty string
    movie_input.value = "";
    // Using.textContent to change H1 text to "Search Results"
    titleH1.textContent = "Search Result:"
});

// Creating variable to get user search results
function getUserSearch(fetchData) {
  // Using .remove to remove randomResultDiv variable 
  randomResultDiv.remove();
  // Creating variable and initiating its value to the DOM element with .movie_input class
  const searchResultDiv = document.querySelector(".search_result");
  // Using if statement to determine if the value of the .title of fetchData object is undefined 
  if (fetchData.Title === undefined) {
    // Using .innerHTML to add H5 element with text message that asks user to enter a valid movie title
    searchResultDiv.innerHTML = `
    <h5 class="text-center mt-4"> Please enter a valid movie title.</h5>
    `
  } else {
    // Using .innerHTML to add HTML elements that display information about searched movie
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



