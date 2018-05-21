var square = document.querySelectorAll(".square");
var newGame = document.querySelector("#newGame");
var rand = 1;
var colorDisplay= document.querySelector("#colordisplay ")
var chosenColor = "black";
var mesage = document.querySelector("#message");
var h1 = document.querySelector("h1");
var easyBtn = document.querySelector("#easybtn");
var hardBtn = document.querySelector("#hardbtn");
var difficulty = 1;
	
	easyBtn.addEventListener("click",function(){
		hardBtn.classList.remove("selected");
		easyBtn.classList.add("selected");
		for(var i = 0; i < 3; i++){
			square[i].style.backgroundColor = getRandColor();
		}
		for(var i = 3; i < 6; i++){
			square[i].style.display = "none";
		}
		pickColor(3);
		colorDisplay.textContent = chosenColor;
		difficulty = 0;
	});
	hardBtn.addEventListener("click",function(){
		hardBtn.classList.add("selected");
		easyBtn.classList.remove("selected");
		for(var i = 0; i < 6; i++){
			square[i].style.backgroundColor = getRandColor();
			square[i].style.display = "block";
		}
		pickColor(6);
		colorDisplay.textContent = chosenColor;
		difficulty = 1;
	});
	
	newGame.addEventListener("click",function(){
		for(var i = 0; i < square.length; i++){
			square[i].style.backgroundColor = getRandColor();
		}
		h1.style.backgroundColor= "steelblue";
		if(difficulty){
			pickColor(6);
		} else {
			pickColor(3);
		}
		colorDisplay.textContent = chosenColor;
		message.textContent="";
		newGame.textContent="NEW COLORS";

    });

	for(var i = 0; i <square.length; i++){
		//add click listeners to squares.
		square[i].addEventListener("click",function(){
			if(this.style.backgroundColor === chosenColor){
				changeColors(chosenColor);
				message.textContent = "Correct!";
				h1.style.backgroundColor = chosenColor;
				newGame.textContent= "Play again?";
			}

			else{
				this.style.backgroundColor = "#232323";
				message.textContent="Try Again";
				h1.style.backgroundColor = "#232323";
			}
		})
	}

	function changeColors(color){
		for(var j = 0; j < square.length; j++){
					square[j].style.backgroundColor = chosenColor;
				}
	}
	function pickColor(num){
		rand = Math.floor(Math.random()*num);
		chosenColor = square[rand].style.backgroundColor;
	}
	function getRandColor(){
	var r = Math.floor(Math.random()*256);
	var g = Math.floor(Math.random()*256);
	var b = Math.floor(Math.random()*256);
	return "rgb( "+r+", "+g+", "+b+")";
    }
