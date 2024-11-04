const APILINK = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=7c313d87673fa81d0ef7dff1a9ad58f4&page=1';
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280';
const SEARCHAPI = "https://api.themoviedb.org/3/search/movie?&api_key=7c313d87673fa81d0ef7dff1a9ad58f4&query=";


const main = document.getElementById("section");
const form = document.getElementById("form");
const search = document.getElementById("query");

function returnMovies(APILINK){
    fetch(url).then(res => res.json())
    .then(function(data){
        console.log(data.results);
        data.results.forEach(Element => {
            const div_card = document.createElement('div');
            div_card.SetAttribute('class', 'card');

            const div_row = document.createElement('div');
            div_row.SetAttribute('class', 'card');
            
            const div_column= document.createElement('div');
            div_column.SetAttribute('class', 'column');
            
            const image = document.createElement('img');
            image.SetAttribute('class', 'thumbmail');
            image.SetAttribute('class', 'image');
            
            const title = document.createElement('h3');
            title.SetAttribute('id', 'title');

            const center = document.createElement('center');

            title.innerHTML = `${Element.title}`;
            image.src = IMG_PATH + Element.poster_path;

            center.appendChild(image);
            div_card.appendChild(center);
            div_card.appendChild(title);
            div_column.appendChild(div_card);
            div_row.appendChild(div_column);

            main.appendChild(div_row); 
            
        });
    });
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    main.innerHTML = '';

    const searchItem = search.ariaValueMax;

    if(searchItem) {
        returnMovies(SEARCHAPI + searchItem);
        search.value = '';
    }
})