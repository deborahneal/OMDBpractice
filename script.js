console.log('hit');
let body = document.querySelector('body');
let container = document.querySelector('.container');
let search = 'notebook'

//let movie = 'notebook'
let getData = () => {
    
    fetch(`https://www.omdbapi.com/?s=${search}&apikey=91089252`)
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
        
        let title = document.createElement('h1'); 
        //title.setAttribute('movie', 'title');
        title.innerHTML = movies[i].Title;
        container.appendChild(title);

        let poster = document.createElement('img');
        poster.setAttribute('src', movies[i].Poster);
        container.appendChild(poster);
    }
}
getData();

