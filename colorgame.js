var colors = generaterandomcolors(6);
var squares = document.querySelectorAll(".square");
var pickedcolor = pickcolor();
var colordisplay = document.getElementById("display");
var message = document.getElementById("message");
colordisplay.textContent = pickedcolor;
for(var i=0;i<squares.length;i++){
	squares[i].style.backgroundColor = colors[i];

	squares[i].addEventListener("click",function(){
		var clickedcolor = this.style.backgroundColor;
		if(clickedcolor === pickedcolor){
			message.textContent = "Correct";
			changecolors(clickedcolor);
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
