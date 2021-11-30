


/*document.getElementById("svg-menu").addEventListener("click",function() {
  
    if(document.getElementById("popnavbar").style.display == "none"){
      document.getElementById("popnavbar").style.display = "flex"
      document.getElementById("r1").style.fill = "#e76f51"
      document.getElementById("r2").style.fill = "#882a12"
      document.getElementById("r3").style.fill = "#4d8d6a"


    }
    else {
      document.getElementById("popnavbar").style.display = "none"
      document.getElementById("r1").style.fill = "black"
      document.getElementById("r2").style.fill = "black"
      document.getElementById("r3").style.fill = "black"

    }
})*/

window.addEventListener('keydown', function(event)  {
  if (event.key === 'Escape') {
    document.getElementById("popnavbar").style.display = "none"
  }
})


let clickNumbers = 0 ;
let svg = document.getElementById('svg-menu');
let r1 = document.getElementById('r1');
let r2 = document.getElementById('r2');
let r3 = document.getElementById('r3');
let popnavbar = document.getElementById("popnavbar")

svg.addEventListener('click', function(){
  clickNumbers++;
  if(clickNumbers % 2 == 1){
    r1.style.fill = '#2a9d8f', r2.style.fill = '#2a9d8f', r3.style.fill = '#2a9d8f', popnavbar.style.display = "flex"
  } else {
    r1.style.fill = 'black',r2.style.fill = 'black',r3.style.fill = 'black', popnavbar.style.display = "none"
  }

})
