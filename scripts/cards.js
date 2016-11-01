var createBTN = document.getElementById("createBTN");
var inputArea = document.getElementById("inputArea");
var cardSpot = document.getElementById("cardSpot");
var JSCard = {};
// var cardArray = [];
var cardIdNum = 0;
var selectedCard = {};

// ***event listeners for the buttons and text area***

createBTN.addEventListener("click", function() {	// console.log("click");
	var enteredValue = inputArea.value;
	// console.log("enteredValue", enteredValue);
	checkValue(enteredValue);

	});


cardSpot.addEventListener("click", function(){
});



function checkValue(enteredValue) {
	var text = enteredValue.length;
	if (text >= 1 ) {
		makeCard(enteredValue);
	}
	else {
		alert("Please enter some text");
	}
}

// pass the results into a function called makeCard #5
// makeCard will take the enteredValue and turn it into a JS object and sends the result to a variable called JSCard

function makeCard (enteredValue) {
	cardIdNum++;//this will make it add 1 to each card number
	JSCard = `<div> ${enteredValue} <button id="deleteBTN--${cardIdNum}">Delete</button> </div>`;
	// cardArray.push(JSCard);
// pass the card back into the DOM #6
// the card held in JSCard is passed back into the JSCard html div as a card the user can see and click on
	let cardDiv = document.createElement("div");
	cardDiv.setAttribute("id", cardIdNum);
	cardDiv.innerHTML = JSCard;
	cardSpot.appendChild(cardDiv).classList.add("cardStyle");//adds the CSS class "cardStyle" and adds to the bottom of the array
	let dBTN = document.getElementById(`deleteBTN--${cardIdNum}`);

// JSCard is erased when user clicks deleteBTN #8
// create a function that removes the card from the DOM and resets the JSCard to blank
	dBTN.addEventListener("click", function(){
		var targetCard = event.target.id.split("--")[1];//pulls the id number out of "deleteBTN--"
		document.getElementById(targetCard).remove();

	});

}







