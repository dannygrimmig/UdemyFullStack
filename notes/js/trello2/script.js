console.log("JavaScript");

var subjects = document.getElementById("subjects");
var subjectInput = document.getElementById("subjectInput");
var addSubjectBtn = document.getElementById("addSubject");

addSubjectBtn.addEventListener("click", function(){
    console.log("Add Subject: " + subjectInput.value);

    if(subjectInput.value.length > 0){
        // Variables
        var subjectContainer = document.createElement("li"); subjectContainer.className = "subject";
        var subjectTitle = document.createElement("h3");
        var subjectItemsContainer = document.createElement("ul"); subjectItemsContainer.className = "items";

        // Subject Title
        subjectTitle.appendChild(document.createTextNode(subjectInput.value));
        subjectContainer.appendChild(subjectTitle);

        // Add Empty Ul to Store Items
        subjectContainer.appendChild(subjectItemsContainer);

        // Add Subject Item Input & Button
        var subjectItem = document.createElement("div"); subjectItem.className = "itemInputContainer";
        var subjectItemInput = document.createElement("input"); subjectItemInput.className = "itemInput";
        var subjectItemBtn = document.createElement("button");subjectItemBtn.className = "itemBtn";

        subjectItem.appendChild(subjectItemInput);
        subjectItemBtn.appendChild(document.createTextNode("Add Item"));
        subjectItemBtn.addEventListener("click", function(){
            console.log(" -> Add " + subjectItemInput.value + " to " + subjectTitle.innerHTML);

            if(subjectItemInput.value.length > 0){
                // Item Variables
                var item = document.createElement("li");
                item.appendChild(document.createTextNode(subjectItemInput.value));
                subjectItemsContainer.appendChild(item);

                subjectItemInput.value = "";
            }
        })
        subjectItem.appendChild(subjectItemBtn);
        subjectContainer.appendChild(subjectItem);

        
        // Add Completed Subject to Subjects List
        subjects.appendChild(subjectContainer);

        subjectInput.value = "";

    }
});