var createBTN = document.getElementById("createBTN");
var deleteBTN = document.getElementById("deleteBTN");
var inputArea = document.getElementById("inputArea");
var enteredValue = "";
var JSCard = {};

// ***event listeners for the buttons and text area***

enteredValue = inputArea.addEventListener("keyup", function(){
			 console.log("inputArea value", inputArea.value);
			 return enteredValue;
});

createBTN.addEventListener("click", function() {	// console.log("click");
	checkValue(enteredValue);
});

deleteBTN.addEventListener("click", function() {
 // console.log("click");
});



function checkValue () {
	// console.log("inputArea:", inputArea.value);

	var text = enteredValue.length;
	if (text >= 1 ) {
		console.log("You've typed something", enteredValue);
	}
	else {
		console.log("Please enter some text");
	}
}

// pass the results into a function called makeCard #5
// makeCard will take the enteredValue and turn it into a JS object and sends the result to a variable called JSCard

function makeCard () {
	JSCard = enteredValue;
	return JSCard;
}


// pass the card back into the DOM #6
// the card held in JSCard is passed back into the JSCard html div as a card the user can see and click on
// when the user hovers over the card, make it slightly larger


// JSCard is erased when user clicks deleteBTN #8
// create a function that removes the card from the DOM and resets the JSCard to blank