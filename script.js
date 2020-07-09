console.log('hit');
let body = document.querySelector('body');
let container = document.querySelector('.container-movies');
let input = document.querySelector('.search');
let search = document.querySelector('button');

search.addEventListener('click', getData)

//let movie = 'notebook'
function getData (){
    let info = input.value;
    fetch(`https://www.omdbapi.com/?s=${info}&apikey=91089252`)
    .then(response =>{
        return response.json();
    })
    .then(response => {
       console.log(response);
        let movies = response.Search;
        let i = 0;
        createCards(movies);
        console.log(movies);

    })
}


function createCards(movies){
    
    for (let i = 0; i < movies.length; i++){
        console.log(movies);
        let title = document.createElement('h1'); 
        //title.setAttribute('movie', 'title');
        title.innerHTML = movies[i].Title;
        container.appendChild(title);

        let poster = document.createElement('img');
        poster.setAttribute('src', movies[i].Poster);
        container.appendChild(poster);

        // let actors = document.createElement('actors');
        // actors.innerHTML = movies[i].Actors;
        // console.log(movies[i]);
        // container.appendChild(actors);

        let year = document.createElement('year');
        container.appendChild(year);
        year.innerHTML = movies[i].Year;
    }
}


