let container = document.createElement("div");
container.className = "container"

let inputBox = document.createElement("input");
inputBox.type = "text";
inputBox.placeholder = "Welcome";
inputBox.id = "userName";
container.appendChild(inputBox);

document.body.appendChild(container)

//To check whether the attribute is available 
console.log(inputBox.attributes)

//getAttribute()- Shows that value that is returned in the attribute name
console.log(inputBox.getAttribute("type"))
//returns text

//setAttribute()
//Syntax:inputBox.setAttribute("Attribute Name", "Value")
inputBox.setAttribute("class","value")
console.log(inputBox)

//hasAttribute() -tells us whether the element has certain attributes or not
console.log(inputBox.hasAttribute("class"));
//returns true/false

//removeAttribute()
inputBox.removeAttribute("class","value");
console.log(inputBox);

