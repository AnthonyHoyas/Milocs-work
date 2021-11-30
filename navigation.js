


document.getElementById("svg-menu").addEventListener("click",function() {
  
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
}) 
window.addEventListener('keydown', function(event)  {
  if (event.key === 'Escape') {
    document.getElementById("popnavbar").style.display = "none"
  }
})
