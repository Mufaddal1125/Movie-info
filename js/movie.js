
function movie() {
    let movieId = sessionStorage.getItem('movieId')
    const api_key = '5b828e02'
    axios.get(`http://www.omdbapi.com/?apikey=${api_key}&i=${movieId}`)
        .then((response) => {
            console.log(response);
            let movie = response.data;
            let output = `
                    <div class="row">
                        <div class="col-md-4">
                            <img src="${movie.Poster}" class="thumbnail">
                        </div>
                        <div class="col-md-8">
                            <h2>${movie.Title}</h2>
                            <ul class="list-group">
                                <li class="list-group-item"><strong>Genre: </strong> ${movie.Genre}</li>
                                <li class="list-group-item"><strong>Release: </strong>${movie.Released}</li>
                                <li class="list-group-item"><strong>Runtime: </strong>${movie.Runtime}</li>
                                <li class="list-group-item"><strong>Writer: </strong>${movie.Writer}</li>
                                <li class="list-group-item"><strong>Director: </strong>${movie.Director}</li>
                                <li class="list-group-item"><strong>Actors: </strong>${movie.Actors}</li>
                                <li class="list-group-item"><strong>Plot: </strong>${movie.Plot}</li>
                                
                            </ul>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col mt-5">
                            <a class="btn btn-link" href="https://imdb.com/title/${movie.imdbID}" target="_blank">View Movie on IMDB</a>
                            <a class="btn btn-secondary" href="index.html">Go Back</a>
                        </div>
                    </div>
                `

            $(".movie").html(output)
        }).catch((err) => {
            console.log(err)
        })
}