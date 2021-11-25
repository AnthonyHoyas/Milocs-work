//Selecteurs


//Variables

//Fonctions

//Evenements

window.addEventListener('load', function() {
    fetch("https://ghibliapi.herokuapp.com/films")
    .then(response => response.json())
    .then(films => {  
        for (let film of films) {
            document.body.innerHTML += `<p> "${film.title}" est un film de ${film.release_date}</p>`
        }
    })
})