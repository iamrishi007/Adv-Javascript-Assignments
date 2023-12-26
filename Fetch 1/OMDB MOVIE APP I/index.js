let enter = document.getElementById('enter')

enter.addEventListener('click', () => {

     let movie = document.getElementById('movie').value
     if (movie == "") {
          alert("Please Enter Valid Movie Name !")
     }

     else {

          let apikey = "abd13736"

          const MovieUrl = `http://www.omdbapi.com/?apikey=${apikey}&t=${movie}`



          fetch(MovieUrl).then((res) =>
               res.json()).then((final) =>
                    movieData(final)
               ).catch((error) =>
                    console.log(error))


     }



})


function movieData(movie) {


     let box = document.getElementById('box')
     let poster = document.getElementById('poster')


     poster.innerHTML = `<img src="${movie.Poster}"  class="movieImg" alt="${movie.Title}">`

     box.innerHTML = `<h2 class="detail title">${movie.Title}</h2>
     <p class="detail year"><strong>Year :  </strong> ${movie.Year}</p>
     <p class="detail genre"><strong>Genre :  </strong> ${movie.Genre}</p>
     <p class="detail director"><strong>Director :  </strong> ${movie.Director}</p>
     <p class="detail actors"><strong>Actors :  </strong> ${movie.Actors}</p>
     <p class="detail rating"><strong>IMDb Rating :  </strong> ${movie.imdbRating}</p>
     <p class="detail rated"><strong> Rated :  </strong> ${movie.Rated}</p>
     <p class="detail boxoffice"><strong>Boxoffice :  </strong> ${movie.Boxoffice}</p>`



}