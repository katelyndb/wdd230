// Creates the variables
const list = document.querySelector("ul");
const input = document.querySelector("input");
const button = document.querySelector("button");
//Function on click of button
button.addEventListener("click", () => {
	const myItem = input.value;
	input.value = "";
	//Creates each element that makes up box
	const listItem = document.createElement("li");
	const listText = document.createElement("span");
	const listButton = document.createElement("button");
	//Adds the information to the box
	alert(myItem);
	if ((myItem != "") && (myItem != " ")){
		listItem.appendChild(listText);
		listText.textContent = myItem;
		listItem.appendChild(listButton);
		listButton.textContent = "❌";
		list.appendChild(listItem);
	} else {
		alert("Enter a value please!");
	}

	//If the X button is pressed, removes the entire thing
	listButton.addEventListener("click", () => {
		list.removeChild(listItem);
	});
	//Keeps cursor running in box
	input.focus();
});
