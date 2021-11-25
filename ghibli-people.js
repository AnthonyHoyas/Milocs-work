//Selecteurs


//Variables



//Fonctions

//Evenements

window.addEventListener('load', function() {
    fetch("https://ghibliapi.herokuapp.com/people")
    .then(response => response.json())
    .then(people => { 
        for (let person of people) {
            console.log(person.gender)
            let sexe 
            if (person.gender == "Male")  {
                sexe = " un garçon"
            } else {
                sexe = " une fille"
            }
            document.body.innerHTML += `<p> "${person.name}" est ${sexe}</p>`
        }
    })
})