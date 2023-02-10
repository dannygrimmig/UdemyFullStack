var item = document.getElementById("item");
var addItem = document.getElementById("addItem")
var ul = document.querySelectorAll("ul")[1];

addItem.addEventListener("click", function(){
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(item.value));
    ul.appendChild(li);

    item.value = "";
});