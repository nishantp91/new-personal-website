/**
 * @author npatel
 */
var numberOfSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButton = document.querySelectorAll(".mode");

init();

function init(){
	
	for(var i = 0; i < modeButton.length; i++){
		modeButton[i].addEventListener("click", function(){
			modeButton[0].classList.remove("selected");
			modeButton[1].classList.remove("selected");
			this.classList.add("selected");
			if(this.textContent === "Easy"){
				numberOfSquares = 3;
			}
			else {
				numberOfSquares = 6;
			}
			reset();
		});
	}
	
	for(var i = 0; i < squares.length; i++){
	
	//add click listeners to sqaures
		squares[i].addEventListener("click", function(){
			
			var clickedColor = this.style.backgroundColor; //grab color of clicked square
			//compare color to pickedColor
			if(clickedColor === pickedColor){
				messageDisplay.textContent = "Correct!";
				changeColor(clickedColor);
				h1.style.background = clickedColor;
				resetButton.textContent = "Play Again?";
			}
			else {
				this.style.backgroundColor = "#232323";
				messageDisplay.textContent = "Try Again";
			}
		});
	}
	reset();
}


function reset(){
	colors = generateRandomColor(numberOfSquares);
	pickedColor = pickRandomColor();
	colorDisplay.textContent = pickedColor;
	for(var i = 0; i < squares.length; i++){
		if(colors[i]){
			squares[i].style.display = "block";
			squares[i].style.background = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	}
	h1.style.backgroundColor = "steelblue";
	resetButton.textContent = "New Colors";
	messageDisplay.textContent = "";
}

resetButton.addEventListener("click", function(){
	reset();
});

function changeColor(color){
	//loop through all squares
	for(var i = 0; i < squares.length; i++){
		squares[i].style.backgroundColor = color; //change each color to match given color
	}	
}

function pickRandomColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColor(num){
	var arr = [];
	for(var i = 0; i < num; i++){
		arr.push(randomColor());
	}
	return arr;
}

function randomColor(){
	var red = Math.floor(Math.random() * 256);
	var green = Math.floor(Math.random() * 256);
	var blue = Math.floor(Math.random() * 256);
	
	return "rgb(" + red + ", " + green + ", " + blue + ")";
}
