const makeFetch = (URL) => {
    fetch(URL)
      .then((response) => response.json())
      .then((movieData) => {
        // Only running loadRandomMovie when the page loads for the first time.
        load && loadRandomMovie(movieData);
        // Running 
        !load && getUserSearch(movieData);
      })
      .catch((error) => {
        console.log(error);
      });
  };