var body = document.getElementById("body");
var color = document.getElementById("color");

color.addEventListener("input", function(){
    body.style.backgroundColor = color.value;
})