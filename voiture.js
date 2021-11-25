/*document.getElementById("pic1").addEventListener("click", function() {
    document.getElementById("pic4").src = "https://pbs.twimg.com/media/Eph01CXW8AIxbEd.jpg"
})
document.getElementById("pic2").addEventListener("click", function() {
    document.getElementById("pic4").src = "https://cdna.artstation.com/p/assets/images/images/030/809/116/large/dourfer-robin-1000tipla-0003-multi13-compo-name.jpg?1601719005"
})
document.getElementById("pic3").addEventListener("click", function() {
    document.getElementById("pic4").src = "https://i.ytimg.com/vi/sAXaDT2lrfA/maxresdefault.jpg"        =faire une galerie
})*/

/*let images = document.querySelectorAll("#left img")
for (let i = 0; i < images.length; i++) {
    images[i].style.border = "3px solid red"      = rend les bordures de toutes les images rouge
} */

let images = document.querySelectorAll("#left img")
let pic4 = document.querySelector("#pic4")
for (let i = 0; i < images.length; i++) {
    images[i].addEventListener("click", function(event) {
        pic4.src = event.target.src
    })
}

document.getElementById("button").addEventListener("click",function() {
  document.getElementById("popup").style.display = "flex"
})
  
document.getElementById("fermer").addEventListener("click",function() {
  document.getElementById("popup").style.display = "none"
})
  
document.getElementById("x").addEventListener("click",function() {
  document.getElementById("popup").style.display = "none"
})

window.addEventListener('keydown', function(event)  {
  if (event.key === 'Escape') {
    document.getElementById("popup").style.display = "none"
  }
})

