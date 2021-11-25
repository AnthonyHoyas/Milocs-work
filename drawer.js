let croix = document.getElementById("croix")

croix.addEventListener('click', function() {
    document.getElementById("popup").style.display = "none"
})

document.getElementById("svg").addEventListener("click", function() {
    document.getElementById("popup").style.display = "flex"

})

document.getElementById("fermer").addEventListener("click", function() {
    document.getElementById("popup").style.display = "none"

})

window.addEventListener('keydown', function(event)  {
    if (event.key === 'Escape') {
      document.getElementById("popup").style.display = "none"
    }
})

window.addEventListener('scroll', function() {
    if (pageYOffset > 10) {
        document.getElementById("navbar").display.position = "fixed"
        document.getElementById("navbar").display.backgroundColor = "red"

    } else {
        document.getElementById("navbar").display.backgroundColor = "transparent"
    }
})

