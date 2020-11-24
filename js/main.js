function movieSelected(id) {
    sessionStorage.setItem('movieId', id);
    window.location = 'movie.html';
    return false;
}

window.addEventListener("DOMContentLoaded", () => {
    $('#searchform').on('submit', (e) => {
        e.preventDefault();
        let searchText = $('#searchText').val();
        getMovies(searchText);
    })

    function getMovies(searchText) {
        const api_key = '5b828e02'
        axios.get(`http://www.omdbapi.com/?apikey=${api_key}&s=${searchText}`)
            .then((response) => {
                
                    let movies = response.data.Search;
                    let output = '';
                    
                    movies.forEach(movie => {
                        output += `
                        <div class="card col-md-3">
                            <div class="well text-center">
                            <img src="${movie.Poster}" class="card-img-top">
                                <div class="card-body">
                                    <h5 class="card-title">${movie.Title}</h5>
                                    <a onclick="movieSelected('${movie.imdbID}')" 
                                    class="btn btn-primary movieInfo" href="#"
                                    >Movie Details</a>
                                </div>
                            </div>
                        </div>
                        `;
                    });

                    $('#movies').html(output)
                

            }).catch((err) => {
                alert('Something Went Wrong with the Search Please Try a Different Search Query Or Try Again Later')
            })
    }

})