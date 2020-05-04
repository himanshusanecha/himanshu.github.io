var number = 6;
var colors = generaterandomcolors(number);
var squares = document.querySelectorAll(".square");
var pickedcolor = pickcolor();
var colordisplay = document.getElementById("display");
var message = document.getElementById("message");
var reset = document.getElementById("reset");
var h1 = document.querySelector("h1");
var easybtn = document.querySelector("#easybtn");
var hardbtn = document.querySelector("#hardbtn");



easybtn.addEventListener("click",function() {
	easybtn.classList.add("selected");
	hardbtn.classList.remove("selected");
	number = 3;
	colors = generaterandomcolors(number);
	pickedcolor = pickcolor();
	colordisplay.textContent = pickedcolor;
	for(var i=0;i<squares.length;i++){
		if(colors[i]){
			squares[i].style.backgroundColor = colors[i];
		}
		else{
			squares[i].style.display = "none";
		}
	}
	reset.textContent = "new colors";
})
hardbtn.addEventListener("click",function() {
	easybtn.classList.remove("selected");
	hardbtn.classList.add("selected");
	number = 6;
	h1.style.backgroundColor = "#232323";
	reset.textContent = "new colors";
	colors = generaterandomcolors(number);
	pickedcolor = pickcolor();
	colordisplay.textContent = pickedcolor;
	for(var i=0;i<squares.length;i++){
		squares[i].style.backgroundColor = colors[i];
		squares[i].style.display = "block";
	}
	reset.textContent = "new colors"; 
})
colordisplay.textContent = pickedcolor;
for(var i=0;i<squares.length;i++){
	squares[i].style.backgroundColor = colors[i];

	squares[i].addEventListener("click",function(){
		var clickedcolor = this.style.backgroundColor;
		if(clickedcolor === pickedcolor){
			message.textContent = "Correct";
			changecolors(clickedcolor);
			reset.textContent = "play again?";
			h1.style.backgroundColor = pickedcolor;
		} else {
			this.style.backgroundColor = "#232323";
			message.textContent = "Try Again";
		}

	});
}
function changecolors(color){
	
		for(var i=0;i<colors.length;i++){
		squares[i].style.backgroundColor = color;
	}
}
function pickcolor() {
	var random = Math.floor(Math.random() * colors.length)
	return colors[random];
}
function generaterandomcolors(num){
	var arr = [];
	for(var i=0;i<num;i++){
		arr.push(randomcolor());
	}
	return arr;
}
function randomcolor(){
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b +")";

}
reset.addEventListener("click", function(){
	h1.style.backgroundColor = "#232323";
	reset.textContent = "new colors";
	colors = generaterandomcolors(number);
	pickedcolor = pickcolor();
	colordisplay.textContent = pickedcolor;
	for(var i=0;i<squares.length;i++){
		squares[i].style.backgroundColor = colors[i];
	} 
});
