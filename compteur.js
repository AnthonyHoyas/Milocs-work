// Sélecteurs

let more = document.getElementById("more")
let less = document.getElementById("less")
let reset = document.getElementById("reset")
let compteur = document.getElementById("count")

//Variables

let count = 0

// Fonctions
// utilisée par les vieux
function increment() {
    count++;
    compteur.innerHTML = count;
    checkColor()
}

const decrement = function () {
    count--
    compteur.innerHTML = count;
    checkColor()
}
// => à la mode mais subtilité avec le THIS
const resetNumber = () => {
    count = 0
    compteur.innerHTML = count;
    checkColor()

}

function checkColor() {
    if (count >= 0) {
        compteur.style.color = "blue"
    } else {
        compteur.style.color = "red"
    }
}

// Evénements + je call la fonction après l'avoir initialisée

more.addEventListener('click', increment)

less.addEventListener('click', decrement)

reset.addEventListener('click', resetNumber)

