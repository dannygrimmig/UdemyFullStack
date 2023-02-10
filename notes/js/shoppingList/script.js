var input = document.getElementById("input");
var button = document.getElementById("button");
var list =  document.querySelector("ul");

button.addEventListener("click", function(){
    if(input.value.length > 0){
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(input.value));
        list.appendChild(li);
        input.value = "";
    }
}); 
