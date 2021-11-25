//Selecteurs

let citation = document.getElementById("citation")
let citation_new = document.getElementById("citation_new")

//Variables


//Evenements

window.addEventListener('load', () => {
    fetch("https://api.kanye.rest/")
    .then(response => response.json())
    .then(data => {
        console.log(data)
        citation.innerText = `"${data.quote}"`
    })
}) 

citation_new.addEventListener('click', () => {
    fetch("https://api.kanye.rest/")
    .then(response => response.json())
    .then(data => {
        console.log(data)
        citation.innerText = `"${data.quote}"`
    })
})


//Fonctions